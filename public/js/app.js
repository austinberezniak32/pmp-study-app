/* PMP Study App — UI logic (vanilla JS, no dependencies) */
(function () {
  const D = window.PMP_DATA;
  const EXAM_DATE = new Date("2026-06-27T08:00:00"); // Saturday
  const store = {
    get(k, def) { try { return JSON.parse(localStorage.getItem("pmp_" + k)) ?? def; } catch { return def; } },
    set(k, v) { localStorage.setItem("pmp_" + k, JSON.stringify(v)); }
  };

  /* ---------- Tab navigation ---------- */
  function showView(id) {
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
    document.querySelectorAll("nav button").forEach(b => b.classList.toggle("active", b.dataset.view === id));
    window.scrollTo(0, 0);
    if (id === "dashboard") renderDashboard();
  }
  window.showView = showView;

  /* ---------- Countdown ---------- */
  function renderCountdown() {
    const now = new Date();
    const days = Math.ceil((EXAM_DATE - now) / 86400000);
    const el = document.getElementById("countdown");
    if (!el) return;
    if (days > 1) el.innerHTML = `Exam in <strong>${days} days</strong> (Sat Jun 27)`;
    else if (days === 1) el.innerHTML = `Exam is <strong>TOMORROW</strong> — you're ready!`;
    else if (days === 0) el.innerHTML = `<strong>EXAM DAY</strong> — go get it!`;
    else el.innerHTML = `Good luck on your PMP journey!`;
  }

  /* ---------- Dashboard ---------- */
  const DOMAINS = ["People", "Process", "Agile/Hybrid", "Business Environment"];
  function renderDashboard() {
    const stats = store.get("stats", { quizzes: 0, answered: 0, correct: 0 });
    const known = store.get("known", []);
    const acc = stats.answered ? Math.round(100 * stats.correct / stats.answered) : 0;
    document.getElementById("stat-acc").textContent = acc + "%";
    document.getElementById("stat-answered").textContent = stats.answered;
    document.getElementById("stat-quizzes").textContent = stats.quizzes;
    document.getElementById("stat-cards").textContent = known.length + "/" + D.flashcards.length;
    renderMastery();
  }

  // Per-domain mastery from quiz history + flashcards known. This is how you
  // see, at a glance, what to focus on next.
  function renderMastery() {
    const dom = store.get("domainStats", {});
    const known = store.get("known", []);
    const host = document.getElementById("mastery-list");
    if (!host) return;
    const rows = DOMAINS.map(name => {
      const d = dom[name] || { answered: 0, correct: 0 };
      const quizPct = d.answered ? Math.round(100 * d.correct / d.answered) : null;
      const totalCards = D.flashcards.filter(f => f.topic === name).length;
      const knownCards = D.flashcards.filter(f => f.topic === name && known.includes(f.front)).length;
      const cardPct = totalCards ? Math.round(100 * knownCards / totalCards) : 0;
      // combined confidence: lean on quiz accuracy if we have it, else cards
      const score = quizPct === null ? cardPct : Math.round(quizPct * 0.7 + cardPct * 0.3);
      let color = "var(--red)", label = "Needs focus";
      if (score >= 75) { color = "var(--green)"; label = "Strong"; }
      else if (score >= 55) { color = "var(--amber)"; label = "Getting there"; }
      return { name, score, color, label, quizPct, answered: d.answered, knownCards, totalCards };
    }).sort((a, b) => a.score - b.score);

    host.innerHTML = rows.map(r => `
      <div class="card" style="padding:14px 18px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <strong>${r.name}</strong>
          <span style="color:${r.color};font-weight:700;font-size:.85rem">${r.label} · ${r.score}%</span>
        </div>
        <div class="progress-bar" style="margin:6px 0"><div style="width:${r.score}%;background:${r.color}"></div></div>
        <div style="font-size:.78rem;color:var(--muted)">
          ${r.quizPct === null ? "No quiz data yet" : `Quiz accuracy ${r.quizPct}% over ${r.answered} Q`} ·
          Flashcards ${r.knownCards}/${r.totalCards} known
          &nbsp;<button class="btn small secondary" onclick="PMP_focus('${r.name}')">Study this</button>
        </div>
      </div>`).join("");

    const weakest = rows[0];
    const tip = document.getElementById("focus-tip");
    if (tip) tip.innerHTML = weakest && weakest.score < 75
      ? `🎯 <strong>Focus next on ${weakest.name}</strong> — it's your weakest area right now.`
      : `🎉 All domains looking solid. Keep doing mixed quizzes to stay sharp.`;
  }
  // Jump to a quiz pre-filtered to a domain.
  window.PMP_focus = function (domain) {
    showView("quiz");
    const sel = document.getElementById("quiz-domain");
    if ([...sel.options].some(o => o.value === domain)) sel.value = domain;
  };

  /* ---------- Study Plan ---------- */
  function renderPlan() {
    const c = document.getElementById("plan-list");
    c.innerHTML = D.studyPlan.map(d => `
      <div class="card">
        <div class="domain-tag">${d.day}</div>
        <h3>${d.focus}</h3>
        <ul>${d.tasks.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>`).join("");
  }

  /* ---------- Learn ---------- */
  function renderLearn(filter) {
    const c = document.getElementById("learn-list");
    const items = filter && filter !== "All" ? D.guide.filter(g => g.domain === filter) : D.guide;
    c.innerHTML = items.map(g => `
      <div class="card">
        <div class="domain-tag">${g.domain}</div>
        <h3>${esc(g.title)}</h3>
        ${g.body.map(p => `<p>${esc(p)}</p>`).join("")}
      </div>`).join("");
  }

  /* ---------- Flashcards ---------- */
  let fcDeck = [], fcIdx = 0;
  function buildDeck() {
    const topic = document.getElementById("fc-topic").value;
    fcDeck = (topic === "All" ? D.flashcards : D.flashcards.filter(f => f.topic === topic)).slice();
    if (document.getElementById("fc-shuffle").checked) shuffle(fcDeck);
    fcIdx = 0;
    renderFlash();
  }
  function renderFlash() {
    const wrap = document.getElementById("flash-area");
    if (!fcDeck.length) { wrap.innerHTML = "<p class='view-sub'>No cards for this filter.</p>"; return; }
    const card = fcDeck[fcIdx];
    const known = store.get("known", []);
    const isKnown = known.includes(card.front);
    document.getElementById("fc-progress").textContent =
      `Card ${fcIdx + 1} of ${fcDeck.length}` + (isKnown ? " · ✓ marked known" : "");
    wrap.innerHTML = `
      <div class="flashcard" id="thecard">
        <div class="flash-inner">
          <div class="flash-face flash-front"><span class="tag">${card.topic}</span><div class="q">${esc(card.front)}</div><span class="hint">click to flip</span></div>
          <div class="flash-face flash-back"><span class="tag">Answer</span><div class="a">${esc(card.back)}</div><span class="hint">click to flip</span></div>
        </div>
      </div>`;
    document.getElementById("thecard").onclick = function () { this.classList.toggle("flipped"); };
    document.getElementById("fc-known").textContent = isKnown ? "Unmark known" : "Mark known ✓";
  }
  function nextCard(step) {
    if (!fcDeck.length) return;
    fcIdx = (fcIdx + step + fcDeck.length) % fcDeck.length;
    renderFlash();
  }
  function toggleKnown() {
    const card = fcDeck[fcIdx]; if (!card) return;
    let known = store.get("known", []);
    if (known.includes(card.front)) known = known.filter(x => x !== card.front);
    else known.push(card.front);
    store.set("known", known);
    renderFlash();
  }

  /* ---------- Quiz ---------- */
  let quiz = null, timerInt = null;
  function startQuiz() {
    const domain = document.getElementById("quiz-domain").value;
    const count = parseInt(document.getElementById("quiz-count").value, 10);
    const timed = document.getElementById("quiz-timed").checked;
    let pool = (domain === "All" ? D.questions : D.questions.filter(q => q.domain === domain)).slice();
    shuffle(pool);
    pool = pool.slice(0, Math.min(count, pool.length));
    quiz = { pool, i: 0, correct: 0, answers: [], timed, secs: pool.length * 70 };
    document.getElementById("quiz-setup-area").style.display = "none";
    document.getElementById("quiz-results").style.display = "none";
    document.getElementById("quiz-run").style.display = "block";
    if (timed) startTimer(); else document.getElementById("quiz-timer").textContent = "";
    renderQuestion();
  }
  function startTimer() {
    clearInterval(timerInt);
    timerInt = setInterval(() => {
      quiz.secs--;
      const m = Math.floor(quiz.secs / 60), s = quiz.secs % 60;
      document.getElementById("quiz-timer").innerHTML = `<span class="timer">⏱ ${m}:${String(s).padStart(2,"0")}</span>`;
      if (quiz.secs <= 0) { clearInterval(timerInt); finishQuiz(); }
    }, 1000);
  }
  function renderQuestion() {
    const q = quiz.pool[quiz.i];
    const c = document.getElementById("quiz-run");
    c.querySelector("#q-host").innerHTML = `
      <div class="q-card">
        <div class="q-meta"><span>Question ${quiz.i + 1} of ${quiz.pool.length}</span><span>${q.domain}</span></div>
        <div class="q-text">${esc(q.q)}</div>
        <div id="opts">${q.options.map((o, idx) => `<button class="option" data-idx="${idx}">${esc(o)}</button>`).join("")}</div>
        <div class="explain hidden" id="explain"></div>
        <div class="btn-row" id="next-row" style="display:none;">
          <button class="btn" id="next-btn">${quiz.i === quiz.pool.length - 1 ? "See results" : "Next question"}</button>
        </div>
      </div>`;
    c.querySelectorAll(".option").forEach(b => b.onclick = () => answer(parseInt(b.dataset.idx, 10)));
    document.getElementById("quiz-bar").style.width = (100 * quiz.i / quiz.pool.length) + "%";
  }
  function answer(idx) {
    const q = quiz.pool[quiz.i];
    const correct = idx === q.answer;
    if (correct) quiz.correct++;
    quiz.answers.push({ q, chosen: idx, correct });
    document.querySelectorAll("#opts .option").forEach((b, i) => {
      b.disabled = true;
      if (i === q.answer) b.classList.add("correct");
      else if (i === idx) b.classList.add("wrong");
    });
    const ex = document.getElementById("explain");
    ex.classList.remove("hidden");
    ex.innerHTML = `<strong>${correct ? "✓ Correct" : "✗ Not quite"}.</strong> ${esc(q.explain)}`;
    document.getElementById("next-row").style.display = "flex";
    document.getElementById("next-btn").onclick = () => {
      if (quiz.i === quiz.pool.length - 1) finishQuiz();
      else { quiz.i++; renderQuestion(); }
    };
  }
  function finishQuiz() {
    clearInterval(timerInt);
    document.getElementById("quiz-run").style.display = "none";
    const r = document.getElementById("quiz-results");
    r.style.display = "block";
    const total = quiz.answers.length || quiz.pool.length;
    const pct = total ? Math.round(100 * quiz.correct / total) : 0;
    const pass = pct >= 75;
    // persist stats
    const stats = store.get("stats", { quizzes: 0, answered: 0, correct: 0 });
    stats.quizzes++; stats.answered += total; stats.correct += quiz.correct;
    store.set("stats", stats);
    // per-domain mastery tracking
    const dom = store.get("domainStats", {});
    quiz.answers.forEach(a => {
      const d = dom[a.q.domain] || { answered: 0, correct: 0 };
      d.answered++; if (a.correct) d.correct++;
      dom[a.q.domain] = d;
    });
    store.set("domainStats", dom);
    const missed = quiz.answers.filter(a => !a.correct);
    r.innerHTML = `
      <div class="result-score">
        <div class="big ${pass ? "pass" : "fail"}">${pct}%</div>
        <div class="result-detail">${quiz.correct} / ${total} correct · ${pass ? "Above the ~75% target 🎉" : "Keep going — target is 75%+"}</div>
      </div>
      ${missed.length ? `<h3 style="margin:10px 0">Review your ${missed.length} miss${missed.length>1?"es":""}:</h3>` +
        missed.map(a => `<div class="card"><div class="domain-tag">${a.q.domain}</div><p><strong>${esc(a.q.q)}</strong></p>
          <p style="color:var(--green)">Correct: ${esc(a.q.options[a.q.answer])}</p>
          <div class="explain">${esc(a.q.explain)}</div></div>`).join("")
        : `<p class="view-sub" style="text-align:center">Perfect — no misses!</p>`}
      <div class="btn-row" style="justify-content:center">
        <button class="btn" onclick="PMP_restartQuiz()">New quiz</button>
      </div>`;
  }
  function restartQuiz() {
    document.getElementById("quiz-run").style.display = "none";
    document.getElementById("quiz-results").style.display = "none";
    document.getElementById("quiz-setup-area").style.display = "block";
  }
  window.PMP_restartQuiz = restartQuiz;

  /* ---------- Formulas + calculator ---------- */
  function renderFormulas() {
    document.getElementById("formula-list").innerHTML = D.formulas.map(f => `
      <div class="formula-card">
        <div class="fname">${esc(f.name)}</div>
        <div class="fform">${esc(f.formula)}</div>
        <div class="fnote">${esc(f.note)}</div>
      </div>`).join("");
  }
  function calcEVM() {
    const num = id => parseFloat(document.getElementById(id).value);
    const BAC = num("c-bac"), pct = num("c-pct"), PV = num("c-pv"), AC = num("c-ac");
    const out = document.getElementById("calc-out");
    if ([BAC, pct, PV, AC].some(v => isNaN(v))) { out.innerHTML = "<div class='line'>Fill in all four fields.</div>"; return; }
    const EV = (pct / 100) * BAC;
    const CV = EV - AC, SV = EV - PV;
    const CPI = AC ? EV / AC : 0, SPI = PV ? EV / PV : 0;
    const EAC = CPI ? BAC / CPI : 0, ETC = EAC - AC, VAC = BAC - EAC;
    const TCPI = (BAC - AC) ? (BAC - EV) / (BAC - AC) : 0;
    const m = n => "$" + n.toLocaleString(undefined, { maximumFractionDigits: 0 });
    const f = n => n.toFixed(2);
    out.innerHTML = [
      `EV  = ${m(EV)}   (${pct}% of BAC)`,
      `CV  = ${m(CV)}   ${CV < 0 ? "→ over budget" : "→ under/on budget"}`,
      `SV  = ${m(SV)}   ${SV < 0 ? "→ behind schedule" : "→ ahead/on schedule"}`,
      `CPI = ${f(CPI)}   ${CPI < 1 ? "→ over budget" : "→ efficient"}`,
      `SPI = ${f(SPI)}   ${SPI < 1 ? "→ behind schedule" : "→ on/ahead"}`,
      `EAC = ${m(EAC)}   (BAC / CPI)`,
      `ETC = ${m(ETC)}   (EAC − AC)`,
      `VAC = ${m(VAC)}   ${VAC < 0 ? "→ projected over budget" : "→ projected under budget"}`,
      `TCPI = ${f(TCPI)}  ${TCPI > 1 ? "→ remaining work must be more efficient" : "→ achievable"}`
    ].map(l => `<div class="line">${l}</div>`).join("");
  }

  /* ---------- Mindset ---------- */
  function renderMindset() {
    document.getElementById("mindset-list").innerHTML = D.mindset.map((m, i) => `
      <div class="card"><div class="domain-tag">Principle ${i + 1}</div><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></div>`).join("");
  }

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }

  /* ---------- Wire up ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav button").forEach(b => b.onclick = () => showView(b.dataset.view));
    renderCountdown();
    renderDashboard();
    renderPlan();
    renderLearn("All");
    renderFormulas();
    renderMindset();

    document.getElementById("learn-filter").onchange = e => renderLearn(e.target.value);

    document.getElementById("fc-topic").onchange = buildDeck;
    document.getElementById("fc-shuffle").onchange = buildDeck;
    document.getElementById("fc-prev").onclick = () => nextCard(-1);
    document.getElementById("fc-next").onclick = () => nextCard(1);
    document.getElementById("fc-known").onclick = toggleKnown;
    buildDeck();

    document.getElementById("quiz-start").onclick = startQuiz;
    document.getElementById("calc-btn").onclick = calcEVM;

    // keyboard for flashcards
    document.addEventListener("keydown", e => {
      if (!document.getElementById("flashcards").classList.contains("active")) return;
      if (e.key === "ArrowRight") nextCard(1);
      else if (e.key === "ArrowLeft") nextCard(-1);
      else if (e.key === " ") { e.preventDefault(); const c = document.getElementById("thecard"); if (c) c.classList.toggle("flipped"); }
    });
  });
})();
