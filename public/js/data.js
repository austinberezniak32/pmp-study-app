/* =====================================================================
   PMP STUDY APP — CONTENT DATABASE
   Aligned to the PMI Exam Content Outline (ECO):
     People 42% | Process 50% | Business Environment 8%
   ~50% of the exam is agile / hybrid. Predictive is the rest.
   ===================================================================== */
window.PMP_DATA = {

  /* ---------------------------------------------------------------
     6-DAY STUDY PLAN (Mon -> Sat exam)
     --------------------------------------------------------------- */
  studyPlan: [
    { day: "Monday", focus: "PMI Mindset + People Domain (42%)",
      tasks: [
        "Read the Mindset tab end to end. This wins ~30% of questions on its own.",
        "Learn tab: People domain (servant leadership, teams, conflict, stakeholders).",
        "Flashcards: filter to People. Do 2 passes.",
        "Quiz: 20 questions, People domain. Review every explanation."
      ] },
    { day: "Tuesday", focus: "Process Domain (50%) — Part 1",
      tasks: [
        "Learn tab: Integration, Scope, Schedule.",
        "Memorize the EVM formulas (Formulas tab). Use the calculator.",
        "Flashcards: Process. 2 passes.",
        "Quiz: 25 questions, Process domain."
      ] },
    { day: "Wednesday", focus: "Process Domain (50%) — Part 2",
      tasks: [
        "Learn tab: Cost, Quality, Resources, Communications.",
        "Learn tab: Risk, Procurement, Stakeholder engagement.",
        "Flashcards: any starred / unknown cards.",
        "Quiz: 25 questions, mixed Process."
      ] },
    { day: "Thursday", focus: "Agile & Hybrid (this is ~half the exam)",
      tasks: [
        "Learn tab: Agile/Hybrid section twice. Scrum events, roles, artifacts.",
        "Understand servant leadership, backlog, velocity, retrospectives.",
        "Flashcards: Agile.",
        "Quiz: 25 questions, Agile/Hybrid."
      ] },
    { day: "Friday", focus: "Business Environment + full mixed exam",
      tasks: [
        "Learn tab: Business Environment (compliance, value, org change, benefits).",
        "Take a 60-question mixed timed quiz. Aim 75%+.",
        "Re-read Mindset tab. Re-do every question you missed.",
        "Light review only at night. Sleep early."
      ] },
    { day: "Saturday — EXAM DAY", focus: "You've got this.",
      tasks: [
        "Morning: skim Formulas + Mindset one time. Do NOT cram new material.",
        "Brain-dump EVM formulas onto scratch paper the moment the exam starts.",
        "Read each question's LAST sentence first. Pick the proactive, servant-leader answer.",
        "Eat, hydrate, breathe. Trust your prep."
      ] }
  ],

  /* ---------------------------------------------------------------
     STUDY GUIDE (Learn tab). Each section = a topic.
     --------------------------------------------------------------- */
  guide: [
    {
      domain: "Foundations",
      title: "Exam structure & how to think",
      body: [
        "The PMP exam is 180 questions in 230 minutes, with two 10-minute breaks. Question types: multiple choice, multiple response (pick X), matching, hotspot, and fill-in-the-blank.",
        "Domains and weight: People 42%, Process 50%, Business Environment 8%. Roughly HALF of all questions are agile or hybrid — do not treat this as a waterfall-only exam.",
        "Questions are situational ('You are the PM and X happens — what do you do FIRST/NEXT/BEST?'). They test judgment, not memorization. The PMI Mindset tab is how you choose between four 'correct-looking' answers.",
        "There is no penalty for wrong answers — never leave a blank. Flag-and-review is available."
      ]
    },
    {
      domain: "People",
      title: "Servant leadership & leading teams",
      body: [
        "A PMP-era project manager is a SERVANT LEADER: you remove impediments, coach, facilitate, and shield the team — you do not command and control.",
        "Servant leader duties: remove blockers, protect the team from interruptions, foster collaboration, build a safe environment, support growth, and let the team self-organize.",
        "Tuckman's ladder of team development: Forming → Storming → Norming → Performing → Adjourning. Conflict (storming) is normal and expected.",
        "Emotional intelligence (self-awareness, self-management, social awareness, relationship management) is the PM's core skill for leading people.",
        "Motivation theories: Maslow (hierarchy of needs), Herzberg (hygiene factors vs motivators), McGregor (Theory X = distrust/control, Theory Y = trust/empower — be Y), McClelland (need for achievement/affiliation/power), Vroom (expectancy)."
      ]
    },
    {
      domain: "People",
      title: "Conflict management",
      body: [
        "Conflict is inevitable and not inherently bad. The PM addresses conflict openly and early, in private, focusing on the issue, not the person.",
        "Five conflict-resolution techniques (Thomas-Kilmann): \n• Collaborate / Problem-solve — WIN-WIN, best long-term, incorporates multiple views. PREFERRED PMI answer.\n• Compromise / Reconcile — lose-lose; both give something up.\n• Smooth / Accommodate — emphasize agreement, downplay differences; temporary.\n• Force / Direct — win-lose; use only in emergencies or safety.\n• Withdraw / Avoid — retreat; only when emotions are too high or info is needed.",
        "When asked the BEST way to resolve conflict, the answer is almost always COLLABORATE / PROBLEM-SOLVE. The team should try to resolve conflict themselves first; the PM facilitates."
      ]
    },
    {
      domain: "People",
      title: "Stakeholders & communication",
      body: [
        "Identify stakeholders early and continuously. Analyze power/interest, influence, and engagement. Capture in the stakeholder register and stakeholder engagement plan.",
        "Stakeholder engagement levels: Unaware → Resistant → Neutral → Supportive → Leading. The engagement assessment matrix marks Current (C) vs Desired (D) levels.",
        "Communication is ~90% of a PM's job. Communication channels = n(n-1)/2 where n = number of people.",
        "Communication methods: Interactive (meetings/calls — best for resolving issues), Push (email/reports — sent, no confirmation of understanding), Pull (intranet/portals — recipient retrieves).",
        "Always communicate face-to-face for sensitive/conflict topics. Co-location and a war room boost interactive communication; for virtual teams use collaboration tools."
      ]
    },
    {
      domain: "Process",
      title: "Integration management",
      body: [
        "Integration is the PM's unique job: tying all parts together. Key documents: Project Charter (authorizes the project, names the PM, by the sponsor) and Project Management Plan (how the project is executed/monitored/closed).",
        "Perform Integrated Change Control: ALL changes go through a formal process. Evaluate impact → submit change request → Change Control Board (CCB) decides → update plan/baselines → communicate. Never gold-plate or make unapproved changes.",
        "Direct and Manage Project Work produces deliverables and work performance DATA. Monitor and Control turns data into work performance INFORMATION; reports are work performance REPORTS.",
        "Close Project/Phase: finalize all activities, get formal acceptance, release resources, archive records, and capture LESSONS LEARNED (done throughout, finalized at close)."
      ]
    },
    {
      domain: "Process",
      title: "Scope management",
      body: [
        "Plan Scope → Collect Requirements → Define Scope → Create WBS → Validate Scope → Control Scope.",
        "Scope baseline = Scope Statement + WBS + WBS Dictionary.",
        "The WBS decomposes deliverables into work packages (the lowest level). The 100% rule: the WBS includes 100% of the work and nothing more.",
        "Validate Scope = the CUSTOMER formally ACCEPTS deliverables (done with the customer). Control Quality (checking correctness, done internally) comes BEFORE Validate Scope.",
        "Scope creep = uncontrolled change. Gold plating = giving extras the customer didn't ask for. Both are bad; route everything through change control.",
        "Agile uses a product backlog and progressive elaboration instead of a fixed scope baseline."
      ]
    },
    {
      domain: "Process",
      title: "Schedule management",
      body: [
        "Define Activities → Sequence Activities → Estimate Durations → Develop Schedule → Control Schedule.",
        "Critical Path = the longest path through the network = the SHORTEST possible project duration. Activities on it have zero float/slack.",
        "Float (slack): Total float = how long an activity can slip without delaying the project end. Free float = without delaying the next activity.",
        "Schedule compression: CRASHING adds resources (adds cost). FAST-TRACKING runs activities in parallel (adds risk/rework). Crash for cost-tolerant, fast-track for risk-tolerant.",
        "Estimating: Analogous (top-down, fast, less accurate), Parametric (rate × quantity), Three-point/PERT = (O + 4M + P) / 6, Bottom-up (most accurate, most effort).",
        "Agile schedules use velocity, story points, iterations/sprints, and release planning."
      ]
    },
    {
      domain: "Process",
      title: "Cost management & Earned Value (EVM)",
      body: [
        "Plan Cost → Estimate Costs → Determine Budget → Control Costs. Cost baseline = the time-phased budget (excludes management reserve).",
        "Reserves: CONTINGENCY reserve covers KNOWN risks (identified), is in the cost baseline, controlled by the PM. MANAGEMENT reserve covers UNKNOWN risks, is outside the baseline, needs management approval to use.",
        "EVM core values: PV (Planned Value), EV (Earned Value = % complete × BAC), AC (Actual Cost), BAC (Budget at Completion).",
        "Variances: CV = EV − AC (negative = over budget). SV = EV − PV (negative = behind schedule).",
        "Indices: CPI = EV/AC (<1 over budget). SPI = EV/PV (<1 behind schedule). Memory aid: index uses division (EV on top), variance uses subtraction (EV first).",
        "Forecasts: EAC = BAC/CPI (typical). ETC = EAC − AC. VAC = BAC − EAC. TCPI = (BAC−EV)/(BAC−AC). See the Formulas tab for all of them with a calculator."
      ]
    },
    {
      domain: "Process",
      title: "Quality management",
      body: [
        "Quality = conformance to requirements & fitness for use. PREVENTION over inspection — build quality in, don't inspect it in. Quality is planned in, not added later.",
        "Cost of Quality (CoQ): Cost of Conformance (prevention + appraisal) vs Cost of Non-Conformance (internal + external failure). Prevention is cheaper than failure.",
        "Plan Quality → Manage Quality (audits, doing it right, process focus) → Control Quality (inspection, measuring outputs, correctness).",
        "Tools: cause-and-effect (Ishikawa/fishbone) for root cause; Pareto (80/20); control charts (rule of seven = 7 points one side of the mean = out of control even if within limits); histograms; scatter diagrams.",
        "Grade (features) is not quality. Low grade can be acceptable; low quality is not. Continuous improvement: Kaizen, PDCA (Plan-Do-Check-Act)."
      ]
    },
    {
      domain: "Process",
      title: "Resource & procurement management",
      body: [
        "Resources = team (people) + physical (materials/equipment). Acquire, develop, and manage the team; develop a team charter for ground rules.",
        "RACI chart (Responsible, Accountable, Consulted, Informed) — exactly ONE Accountable per activity. Resource histogram shows resource usage over time.",
        "Procurement contract types & risk: \n• Fixed Price (FP/FFP) — SELLER bears most risk; buyer's preferred for well-defined scope.\n• Cost Reimbursable (CPFF, CPIF, CPAF) — BUYER bears more risk; for uncertain scope.\n• Time & Materials (T&M) — hybrid, for staff augmentation / small jobs.",
        "Point of Total Assumption (PTA) applies to FPIF contracts — above it the seller bears all overrun.",
        "Make-or-buy analysis decides in-house vs outsource. The procurement SOW describes the work to the seller. Close procurements before closing the project."
      ]
    },
    {
      domain: "Process",
      title: "Risk management",
      body: [
        "Plan Risk Mgmt → Identify Risks → Qualitative Analysis (probability × impact, subjective, prioritize) → Quantitative Analysis (numeric, e.g. Monte Carlo, EMV) → Plan Responses → Implement Responses → Monitor Risks.",
        "Risk = uncertain event with positive (OPPORTUNITY) or negative (THREAT) impact. Risks are logged in the risk register; overall project risk in the risk report.",
        "THREAT responses: Escalate, Avoid, Transfer (insurance/contract), Mitigate (reduce probability/impact), Accept.",
        "OPPORTUNITY responses: Escalate, Exploit (make it happen), Share (partner), Enhance (increase probability/impact), Accept.",
        "EMV (Expected Monetary Value) = Probability × Impact; used in decision trees. Secondary risk = a new risk created by a response. Residual risk = leftover after response. Risk appetite/tolerance/threshold define how much risk is acceptable.",
        "Be PROACTIVE: identify risks continuously, keep the register current, and respond before issues occur. A realized risk becomes an issue (issue log)."
      ]
    },
    {
      domain: "Agile/Hybrid",
      title: "Agile mindset & frameworks",
      body: [
        "Agile Manifesto values: Individuals & interactions over processes/tools; Working software over comprehensive documentation; Customer collaboration over contract negotiation; Responding to change over following a plan. (Value the items on the LEFT more.)",
        "Use agile/hybrid when requirements are uncertain and change is frequent; use predictive when scope is well-defined and stable. Hybrid blends both.",
        "Frameworks: SCRUM (most common — iterations/sprints), KANBAN (flow, WIP limits, continuous), XP (engineering practices: pairing, TDD, refactoring), Lean (eliminate waste), SAFe/LeSS (scaling).",
        "Empirical process: transparency, inspection, adaptation. Deliver value early and often; fail fast; embrace change."
      ]
    },
    {
      domain: "Agile/Hybrid",
      title: "Scrum: roles, events, artifacts",
      body: [
        "ROLES: Product Owner (owns & prioritizes the backlog, maximizes value, the 'what'), Scrum Master (servant leader, removes impediments, coaches, facilitates — NOT a boss), Development Team (self-organizing, cross-functional, 3–9 people, the 'how').",
        "EVENTS: Sprint (1–4 weeks, fixed length/timebox), Sprint Planning (what & how), Daily Scrum/Standup (15 min: what I did, will do, blockers — for the team, not a status report to the PM), Sprint Review (demo to stakeholders, inspect the increment), Sprint Retrospective (improve the PROCESS — team only).",
        "ARTIFACTS: Product Backlog (ordered list of everything, owned by PO), Sprint Backlog (work for this sprint, owned by team), Increment (potentially shippable product). Definition of Done (DoD) sets quality criteria.",
        "Scope is NOT added mid-sprint. New requests go to the product backlog and are prioritized for a future sprint. Protect the team's sprint commitment."
      ]
    },
    {
      domain: "Agile/Hybrid",
      title: "Agile planning, metrics & ceremonies",
      body: [
        "Estimation: story points (relative sizing), planning poker, t-shirt sizing, affinity estimating. Velocity = story points completed per sprint (used to forecast, not to compare teams).",
        "User stories: 'As a <role>, I want <goal>, so that <benefit>.' INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable). Acceptance criteria define done for a story.",
        "Backlog refinement (grooming): ongoing prioritization and breaking down of backlog items. The PO prioritizes by value/MoSCoW (Must/Should/Could/Won't).",
        "Charts: burn-DOWN (work remaining trending to zero), burn-UP (work completed vs scope), cumulative flow diagram (WIP/bottlenecks in Kanban).",
        "Lead time = idea to delivery; cycle time = work start to finish. Limit WIP to improve flow. Retrospectives drive continuous improvement every sprint."
      ]
    },
    {
      domain: "Business Environment",
      title: "Value, compliance & organizational change",
      body: [
        "Projects exist to deliver business VALUE and benefits. The business case justifies the project; the benefits management plan tracks when/how benefits are realized.",
        "Compliance: identify legal/regulatory/organizational requirements, assess consequences of non-compliance, and build compliance into the plan. Compliance is non-negotiable — never knowingly violate it.",
        "Organizational change management: prepare people for change (ADKAR: Awareness, Desire, Knowledge, Ability, Reinforcement; Kotter's 8 steps). Address resistance with communication and involvement.",
        "Project Management Office (PMO) types: Supportive (advisory, low control), Controlling (compliance, moderate control), Directive (manages projects directly, high control).",
        "Organizational structures & PM authority: Functional (low/none) → Matrix Weak → Balanced → Strong → Projectized (high/total). OPM ties portfolios, programs, and projects to strategy. EEFs (enterprise environmental factors) and OPAs (organizational process assets) are constant inputs."
      ]
    }
  ],

  /* ---------------------------------------------------------------
     FLASHCARDS  {front, back, topic}
     --------------------------------------------------------------- */
  flashcards: [
    { topic: "People", front: "What leadership style does the PMP exam expect?", back: "Servant leadership — remove impediments, coach, facilitate, empower the team to self-organize. Not command-and-control." },
    { topic: "People", front: "Tuckman's ladder stages (in order)", back: "Forming → Storming → Norming → Performing → Adjourning." },
    { topic: "People", front: "BEST conflict resolution technique per PMI", back: "Collaborate / Problem-solve (win-win, addresses root cause, incorporates multiple viewpoints)." },
    { topic: "People", front: "Five conflict techniques (Thomas-Kilmann)", back: "Collaborate/Problem-solve, Compromise/Reconcile, Smooth/Accommodate, Force/Direct, Withdraw/Avoid." },
    { topic: "People", front: "Communication channels formula", back: "n(n-1)/2, where n = number of people." },
    { topic: "People", front: "Three communication methods", back: "Interactive (best — two-way), Push (sent: email/reports), Pull (recipient retrieves: portal/intranet)." },
    { topic: "People", front: "Stakeholder engagement levels", back: "Unaware → Resistant → Neutral → Supportive → Leading." },
    { topic: "People", front: "McGregor Theory X vs Theory Y", back: "X = workers dislike work, need control. Y = workers are motivated and self-directed. Be a Theory Y manager." },
    { topic: "People", front: "Herzberg's two-factor theory", back: "Hygiene factors (salary, conditions) prevent dissatisfaction but don't motivate; Motivators (recognition, growth) drive satisfaction." },
    { topic: "People", front: "Emotional intelligence components", back: "Self-awareness, self-management, social awareness, relationship management." },
    { topic: "People", front: "What is a RACI chart?", back: "Responsibility assignment matrix: Responsible, Accountable, Consulted, Informed. Exactly ONE Accountable per task." },
    { topic: "Process", front: "What does the project charter do?", back: "Formally authorizes the project and names/empowers the PM. Issued by the sponsor." },
    { topic: "Process", front: "Scope baseline = ?", back: "Scope Statement + WBS + WBS Dictionary." },
    { topic: "Process", front: "Validate Scope vs Control Quality", back: "Control Quality = internal check for correctness (FIRST). Validate Scope = customer formally accepts deliverables (AFTER)." },
    { topic: "Process", front: "100% rule of the WBS", back: "The WBS captures 100% of the project work — and nothing more (no extra work)." },
    { topic: "Process", front: "Scope creep vs gold plating", back: "Scope creep = uncontrolled changes added. Gold plating = giving the customer unrequested extras. Both bad — use change control." },
    { topic: "Process", front: "Critical path definition", back: "Longest path through the network = shortest possible duration. Activities on it have zero float." },
    { topic: "Process", front: "Crashing vs fast-tracking", back: "Crashing = add resources (adds cost). Fast-tracking = parallelize activities (adds risk/rework)." },
    { topic: "Process", front: "PERT / three-point estimate", back: "(Optimistic + 4×Most Likely + Pessimistic) / 6." },
    { topic: "Process", front: "Most accurate estimating technique", back: "Bottom-up estimating (most effort, most accurate). Analogous is fastest/least accurate." },
    { topic: "Process", front: "Contingency vs management reserve", back: "Contingency = known risks, IN the cost baseline, PM controls. Management = unknown risks, OUTSIDE baseline, needs mgmt approval." },
    { topic: "Process", front: "Cost variance (CV) formula & meaning", back: "CV = EV − AC. Negative = over budget." },
    { topic: "Process", front: "Schedule variance (SV) formula & meaning", back: "SV = EV − PV. Negative = behind schedule." },
    { topic: "Process", front: "CPI formula & meaning", back: "CPI = EV / AC. Below 1 = over budget." },
    { topic: "Process", front: "SPI formula & meaning", back: "SPI = EV / PV. Below 1 = behind schedule." },
    { topic: "Process", front: "EAC (typical) formula", back: "EAC = BAC / CPI (when current variances will continue)." },
    { topic: "Process", front: "ETC and VAC", back: "ETC = EAC − AC (estimate to complete). VAC = BAC − EAC (variance at completion)." },
    { topic: "Process", front: "TCPI formula", back: "TCPI = (BAC − EV) / (BAC − AC). >1 means the remaining work must be more efficient than planned." },
    { topic: "Process", front: "Earned Value (EV) formula", back: "EV = % of work actually complete × BAC." },
    { topic: "Process", front: "Cost of Quality categories", back: "Conformance (prevention + appraisal) vs Non-conformance (internal + external failure). Prevention is cheapest." },
    { topic: "Process", front: "Rule of seven (control charts)", back: "7 consecutive points on one side of the mean = process out of control, even if within control limits." },
    { topic: "Process", front: "Quality philosophy: prevention vs inspection", back: "Prevention over inspection — build quality in. Quality is planned, not inspected in." },
    { topic: "Process", front: "Grade vs quality", back: "Grade = category of features (can be low and OK). Quality = meeting requirements (low quality is never OK)." },
    { topic: "Process", front: "Threat response strategies", back: "Escalate, Avoid, Transfer, Mitigate, Accept." },
    { topic: "Process", front: "Opportunity response strategies", back: "Escalate, Exploit, Share, Enhance, Accept." },
    { topic: "Process", front: "EMV formula", back: "Expected Monetary Value = Probability × Impact (used in decision trees)." },
    { topic: "Process", front: "Secondary vs residual risk", back: "Secondary = new risk created BY a response. Residual = leftover risk remaining AFTER the response." },
    { topic: "Process", front: "Qualitative vs quantitative risk analysis", back: "Qualitative = subjective P×I prioritization (always done). Quantitative = numerical (Monte Carlo, EMV); not always done." },
    { topic: "Process", front: "Fixed price vs cost reimbursable risk", back: "Fixed price → SELLER carries the risk. Cost reimbursable → BUYER carries the risk." },
    { topic: "Process", front: "When is T&M contract used?", back: "Hybrid: small efforts, staff augmentation, or when scope isn't fully defined yet." },
    { topic: "Process", front: "Integrated Change Control flow", back: "Assess impact → submit change request → CCB approves/rejects → update baselines/plan → communicate." },
    { topic: "Process", front: "Work performance data vs information vs reports", back: "Data (raw, from executing) → Information (analyzed in M&C) → Reports (packaged for stakeholders)." },
    { topic: "Agile/Hybrid", front: "Four Agile Manifesto values", back: "Individuals/interactions, working software, customer collaboration, responding to change — over the right-hand items." },
    { topic: "Agile/Hybrid", front: "Scrum roles (3)", back: "Product Owner (prioritizes backlog/value), Scrum Master (servant leader/removes impediments), Development Team (self-organizing)." },
    { topic: "Agile/Hybrid", front: "Scrum events (5)", back: "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective." },
    { topic: "Agile/Hybrid", front: "Scrum artifacts (3)", back: "Product Backlog, Sprint Backlog, Increment." },
    { topic: "Agile/Hybrid", front: "Purpose of the retrospective", back: "Inspect & improve the PROCESS/team. Held at sprint end, team only. (Review = demo product to stakeholders.)" },
    { topic: "Agile/Hybrid", front: "What is the Daily Scrum?", back: "15-min timeboxed sync for the team (did/will do/blockers). Not a status report to the PM/SM." },
    { topic: "Agile/Hybrid", front: "What is velocity?", back: "Story points a team completes per sprint. Used to forecast — never to compare teams." },
    { topic: "Agile/Hybrid", front: "User story format", back: "As a <role>, I want <goal>, so that <benefit>." },
    { topic: "Agile/Hybrid", front: "INVEST criteria", back: "Independent, Negotiable, Valuable, Estimable, Small, Testable (good user stories)." },
    { topic: "Agile/Hybrid", front: "Definition of Done (DoD)", back: "Shared, explicit quality checklist an increment must meet to be 'done'." },
    { topic: "Agile/Hybrid", front: "Burn-down vs burn-up chart", back: "Burn-down = work remaining toward zero. Burn-up = work completed vs total scope (shows scope changes)." },
    { topic: "Agile/Hybrid", front: "Lead time vs cycle time", back: "Lead time = idea → delivery. Cycle time = work started → finished." },
    { topic: "Agile/Hybrid", front: "MoSCoW prioritization", back: "Must have, Should have, Could have, Won't have (this time)." },
    { topic: "Agile/Hybrid", front: "What happens to new scope mid-sprint?", back: "It goes to the product backlog for future prioritization — the current sprint is protected." },
    { topic: "Agile/Hybrid", front: "Kanban core idea", back: "Visualize the flow, limit WIP, manage flow continuously (no fixed iterations)." },
    { topic: "Agile/Hybrid", front: "Three pillars of empiricism", back: "Transparency, Inspection, Adaptation." },
    { topic: "Business Environment", front: "What justifies a project?", back: "The business case (and it's tied to the benefits management plan / business value)." },
    { topic: "Business Environment", front: "Three PMO types", back: "Supportive (advisory), Controlling (compliance/moderate), Directive (manages projects/high control)." },
    { topic: "Business Environment", front: "PM authority by org structure", back: "Functional (low) → Weak Matrix → Balanced Matrix → Strong Matrix → Projectized (high)." },
    { topic: "Business Environment", front: "EEF vs OPA", back: "EEF = enterprise environmental factors (conditions outside your control). OPA = organizational process assets (templates, lessons, processes)." },
    { topic: "Business Environment", front: "ADKAR change model", back: "Awareness, Desire, Knowledge, Ability, Reinforcement." },
    { topic: "Business Environment", front: "How to handle a compliance requirement", back: "Identify it, assess consequences of non-compliance, build it into the plan. Never knowingly violate compliance." }
  ],

  /* ---------------------------------------------------------------
     QUESTION BANK  {q, options[4], answer(index), explain, domain}
     --------------------------------------------------------------- */
  questions: [
    { domain: "People", q: "Two senior developers strongly disagree on the technical architecture and the dispute is slowing the team. What is the BEST approach for the project manager?",
      options: ["Make the architecture decision yourself to save time","Bring them together to openly discuss and collaborate on a solution that addresses both concerns","Ask the sponsor to decide","Have each work on their own version and pick the better one later"],
      answer: 1, explain: "Collaborate / problem-solve is the preferred PMI technique — it's win-win and resolves the root cause. The PM facilitates rather than dictates (servant leadership)." },
    { domain: "People", q: "A new project team is in the storming stage and experiencing frequent conflict. What should the project manager do?",
      options: ["Replace the disruptive members","Recognize this is a normal stage and coach the team through it","Escalate to HR immediately","Avoid the conflict until it resolves itself"],
      answer: 1, explain: "Storming is a normal Tuckman stage. The servant-leader PM coaches and facilitates the team through it toward norming/performing." },
    { domain: "People", q: "A key stakeholder is currently resistant but you need them to be supportive. Where do you document this gap?",
      options: ["Risk register","Stakeholder engagement assessment matrix (Current vs Desired)","Issue log","Project charter"],
      answer: 1, explain: "The stakeholder engagement assessment matrix marks Current (C) and Desired (D) engagement levels to plan how to close the gap." },
    { domain: "People", q: "A project has 8 team members and 2 more join. How many additional communication channels are created?",
      options: ["17","19","45","28"],
      answer: 0, explain: "Channels = n(n-1)/2. With 10: 10×9/2 = 45. With 8: 8×7/2 = 28. Additional = 45 − 28 = 17." },
    { domain: "People", q: "A team member from another culture seems disengaged in meetings. What should the PM do FIRST?",
      options: ["Report them to their functional manager","Privately and respectfully talk with them to understand their perspective","Remove them from key meetings","Assume it's a performance issue and document it"],
      answer: 1, explain: "Lead with emotional intelligence and direct, respectful communication to understand before judging. Never start with punitive escalation." },
    { domain: "People", q: "During a daily standup a developer raises a blocker dependent on another department. What is the Scrum Master's role?",
      options: ["Solve it during the standup so everyone hears","Note it and work to remove the impediment after the standup","Tell the developer to handle it themselves","Add it to the sprint backlog as a new story"],
      answer: 1, explain: "Standups are short (15 min) and not for problem-solving. The servant-leader Scrum Master removes the impediment outside the meeting." },
    { domain: "People", q: "Two team members keep clashing over responsibilities. What tool best prevents this?",
      options: ["Gantt chart","RACI / responsibility assignment matrix","Risk register","Burndown chart"],
      answer: 1, explain: "A RACI chart clarifies who is Responsible/Accountable/Consulted/Informed for each activity, removing ambiguity over roles." },
    { domain: "People", q: "A motivated team member asks for more challenging work and growth opportunities. Which theory best explains this need?",
      options: ["Herzberg's hygiene factors","Maslow's self-actualization / Herzberg's motivators","McGregor Theory X","Expectancy theory"],
      answer: 1, explain: "Growth, achievement and recognition are Herzberg motivators / Maslow's higher needs (self-actualization), not hygiene factors." },
    { domain: "Process", q: "Midway through execution, a stakeholder requests a significant new feature. What should the PM do FIRST?",
      options: ["Add it immediately to keep the stakeholder happy","Reject it because the scope is baselined","Assess the impact and submit a change request through integrated change control","Ask the team to squeeze it into the current work"],
      answer: 2, explain: "All changes go through integrated change control: evaluate impact, submit a change request, let the CCB decide. Never make unapproved changes." },
    { domain: "Process", q: "The customer is about to formally accept completed deliverables. Which process is this?",
      options: ["Control Quality","Validate Scope","Close Project","Manage Quality"],
      answer: 1, explain: "Validate Scope = formal customer acceptance of deliverables. Control Quality (internal correctness check) happens before it." },
    { domain: "Process", q: "A project has CPI = 0.8 and SPI = 1.1. What does this tell you?",
      options: ["Over budget and behind schedule","Under budget and ahead of schedule","Over budget but ahead of schedule","Under budget but behind schedule"],
      answer: 2, explain: "CPI < 1 = over budget. SPI > 1 = ahead of schedule. So the project is over budget but ahead of schedule." },
    { domain: "Process", q: "BAC = $100,000, EV = $40,000, AC = $50,000. What is the EAC assuming current performance continues?",
      options: ["$110,000","$125,000","$90,000","$100,000"],
      answer: 1, explain: "CPI = EV/AC = 40,000/50,000 = 0.8. EAC = BAC/CPI = 100,000/0.8 = $125,000." },
    { domain: "Process", q: "An activity can be delayed 5 days without delaying the project end date. This 5 days is called:",
      options: ["Lead","Lag","Total float","Free float"],
      answer: 2, explain: "Total float = time an activity can slip without delaying the project finish. Free float is without delaying the next activity." },
    { domain: "Process", q: "The project is behind schedule and the sponsor wants the original end date kept, accepting added risk. Which technique fits?",
      options: ["Crashing","Fast-tracking","Resource leveling","Reserve analysis"],
      answer: 1, explain: "Fast-tracking runs activities in parallel — keeps the date but adds risk/rework. Crashing would add cost; the sponsor accepted risk, not cost." },
    { domain: "Process", q: "Optimistic = 6, Most Likely = 12, Pessimistic = 24 days. What is the PERT (beta) estimate?",
      options: ["14 days","13 days","12 days","15 days"],
      answer: 1, explain: "(O + 4M + P)/6 = (6 + 48 + 24)/6 = 78/6 = 13 days." },
    { domain: "Process", q: "A risk that was identified earlier has now occurred and is affecting the project. Where is it now tracked?",
      options: ["Risk register only","Issue log","Change log","Lessons learned register"],
      answer: 1, explain: "A risk that occurs becomes an issue and is managed in the issue log (while remaining noted in the risk register)." },
    { domain: "Process", q: "You buy insurance to handle the financial impact of a possible major risk. This is which response strategy?",
      options: ["Mitigate","Avoid","Transfer","Accept"],
      answer: 2, explain: "Transfer shifts the impact/ownership of a threat to a third party (e.g., insurance, warranties, contracts)." },
    { domain: "Process", q: "A potential event could let the project finish early if you assign extra resources to make it certain. This is:",
      options: ["Enhance","Exploit","Share","Accept"],
      answer: 1, explain: "Exploit = take action to make sure an opportunity definitely happens. Enhance only increases probability/impact; exploit makes it certain." },
    { domain: "Process", q: "Which reserve covers identified ('known-unknown') risks and is controlled by the project manager?",
      options: ["Management reserve","Contingency reserve","Cost baseline buffer","Profit margin"],
      answer: 1, explain: "Contingency reserve covers known risks, sits inside the cost baseline, and is managed by the PM. Management reserve covers unknown risks and needs management approval." },
    { domain: "Process", q: "On a control chart, seven consecutive data points fall above the mean though all are within control limits. What does this indicate?",
      options: ["The process is fine","The rule of seven — investigate, the process may be out of control","Recalculate the limits","Stop production immediately"],
      answer: 1, explain: "The rule of seven: 7 points on one side of the mean signals a non-random trend worth investigating, even within limits." },
    { domain: "Process", q: "Which contract type places the MOST cost risk on the seller?",
      options: ["Cost Plus Fixed Fee (CPFF)","Time and Materials (T&M)","Firm Fixed Price (FFP)","Cost Plus Incentive Fee (CPIF)"],
      answer: 2, explain: "In a firm fixed price contract the seller absorbs cost overruns, so the seller carries the most risk. Cost-reimbursable shifts risk to the buyer." },
    { domain: "Process", q: "What is the PRIMARY purpose of a lessons learned register?",
      options: ["To assign blame for failures","To capture knowledge throughout the project to improve current and future work","To replace the project closure report","To satisfy auditors only"],
      answer: 1, explain: "Lessons learned are captured continuously (not only at the end) to improve the current project and benefit future ones — never to assign blame." },
    { domain: "Process", q: "The project manager turns raw status measurements into analyzed performance comparisons against the baseline. This produces:",
      options: ["Work performance data","Work performance information","Work performance reports","Change requests"],
      answer: 1, explain: "Data (raw) becomes work performance information when analyzed in Monitoring & Controlling; reports are the packaged communication of that information." },
    { domain: "Process", q: "Quality should primarily be achieved through:",
      options: ["Heavy inspection at the end","Prevention — building quality in throughout","Rework after delivery","Adding extra features"],
      answer: 1, explain: "PMI favors prevention over inspection: build quality in. Prevention costs less than failure costs." },
    { domain: "Agile/Hybrid", q: "Halfway through a sprint, a stakeholder demands a new high-priority feature be added now. What should the team do?",
      options: ["Add it to the current sprint immediately","Add it to the product backlog for the Product Owner to prioritize for a future sprint","Cancel the sprint and replan","Have the team work overtime to fit it in"],
      answer: 1, explain: "The current sprint is protected. New requests go to the product backlog; the Product Owner prioritizes them for a future sprint." },
    { domain: "Agile/Hybrid", q: "Who is responsible for maximizing the value of the product and prioritizing the backlog?",
      options: ["Scrum Master","Product Owner","Development Team","Project sponsor"],
      answer: 1, explain: "The Product Owner owns and orders the product backlog to maximize value — the 'what' and 'why'." },
    { domain: "Agile/Hybrid", q: "The purpose of the sprint retrospective is to:",
      options: ["Demo the product increment to stakeholders","Plan the next sprint's work","Inspect and improve the team's process","Update the product backlog"],
      answer: 2, explain: "The retrospective improves the team's process (people/relationships/tools). The sprint review demos the increment to stakeholders." },
    { domain: "Agile/Hybrid", q: "A team consistently completes about 30 story points per sprint. This metric is called:",
      options: ["Cycle time","Velocity","Lead time","Throughput limit"],
      answer: 1, explain: "Velocity = story points completed per sprint, used to forecast capacity. It should never be used to compare different teams." },
    { domain: "Agile/Hybrid", q: "In Kanban, what is the main mechanism to improve flow and expose bottlenecks?",
      options: ["Fixed-length sprints","Limiting work in progress (WIP)","Story point estimation","Daily standups"],
      answer: 1, explain: "Kanban limits WIP to smooth flow and reveal bottlenecks; it uses continuous flow rather than fixed iterations." },
    { domain: "Agile/Hybrid", q: "Which best reflects the Agile Manifesto?",
      options: ["Comprehensive documentation over working software","Following a plan over responding to change","Customer collaboration over contract negotiation","Processes and tools over individuals"],
      answer: 2, explain: "The manifesto values customer collaboration over contract negotiation (and the other left-hand items over the right)." },
    { domain: "Agile/Hybrid", q: "A stakeholder asks the agile team for a firm, fixed delivery date and full scope a year out. The BEST response is to:",
      options: ["Commit to the full scope and date","Explain agile delivers incrementally and collaborate on a prioritized, evolving roadmap","Refuse to give any timeline","Switch the project to predictive immediately"],
      answer: 1, explain: "Agile embraces change and delivers value incrementally. Educate the stakeholder and collaborate on a prioritized roadmap rather than locking full scope a year out." },
    { domain: "Agile/Hybrid", q: "What is the timebox for the Daily Scrum?",
      options: ["5 minutes","15 minutes","30 minutes","1 hour"],
      answer: 1, explain: "The Daily Scrum is timeboxed to 15 minutes for the development team to sync and surface blockers." },
    { domain: "Agile/Hybrid", q: "A good user story should follow which set of criteria?",
      options: ["SMART","INVEST","MoSCoW","SWOT"],
      answer: 1, explain: "INVEST = Independent, Negotiable, Valuable, Estimable, Small, Testable — the qualities of a well-formed user story." },
    { domain: "Agile/Hybrid", q: "Which chart best shows whether scope has changed over the project alongside completed work?",
      options: ["Burn-down chart","Burn-up chart","Control chart","Pareto chart"],
      answer: 1, explain: "A burn-up chart plots completed work against the total scope line, so scope changes are visible. Burn-down only shows remaining work." },
    { domain: "Business Environment", q: "A regulation that affects your project changes mid-execution. What should the PM do FIRST?",
      options: ["Ignore it until the next phase","Assess the compliance impact and incorporate the requirement through change control","Cancel the project","Continue as planned to avoid delay"],
      answer: 1, explain: "Compliance is mandatory. Assess the impact and bring the new requirement in via integrated change control. Never knowingly ignore compliance." },
    { domain: "Business Environment", q: "What document justifies undertaking the project and is used to measure success against business need?",
      options: ["Project charter","Business case","Project management plan","Scope statement"],
      answer: 1, explain: "The business case justifies the investment and ties the project to business value/benefits; benefits are tracked via the benefits management plan." },
    { domain: "Business Environment", q: "A PMO that provides templates and best practices but exercises little control is which type?",
      options: ["Directive","Controlling","Supportive","Projectized"],
      answer: 2, explain: "A supportive PMO acts as an advisory resource (templates, training, lessons) with low control. Controlling = moderate; directive = high (manages projects)." },
    { domain: "Business Environment", q: "In a strong matrix organization, who typically has more authority over the project?",
      options: ["The functional manager","The project manager","They share equal authority","The PMO director"],
      answer: 1, explain: "Authority rises from functional → weak → balanced → strong matrix → projectized. In a strong matrix the PM has more authority than the functional manager." },
    { domain: "Business Environment", q: "Stakeholders are resisting a new system the project will deliver. The BEST approach is to:",
      options: ["Mandate adoption through executives","Apply organizational change management — communicate, involve, and build readiness","Delay the rollout indefinitely","Reduce the project scope to avoid resistance"],
      answer: 1, explain: "Use organizational change management (e.g., ADKAR/Kotter): build awareness and desire, involve people, and address resistance — not force alone." },
    { domain: "Business Environment", q: "Project benefits are expected to be realized 6 months after the product launches. Where is this tracked?",
      options: ["Project charter","Benefits management plan","Risk register","Stakeholder register"],
      answer: 1, explain: "The benefits management plan defines what benefits are expected and when/how they'll be measured and realized — often beyond project closure." },

    /* ---- People (42%) — expanded ---- */
    { domain: "People", q: "A high-performing team member suddenly becomes withdrawn and their output drops. What should the project manager do FIRST?",
      options: ["Document the performance drop for HR","Have a private one-on-one conversation to understand what's going on","Reassign their tasks to others","Bring it up in the next team meeting"],
      answer: 1, explain: "Lead with emotional intelligence: a private, supportive conversation to understand the cause comes before documentation or reassignment." },
    { domain: "People", q: "Your team is virtual and spread across time zones, and members feel disconnected. What is the BEST action?",
      options: ["Require everyone to work the same hours","Establish team agreements and use collaboration tools, with periodic synchronous check-ins","Reduce communication to email only","Appoint one location as the lead office"],
      answer: 1, explain: "For virtual teams, build a team charter/ground rules, use collaboration technology, and create deliberate touchpoints to build trust and cohesion." },
    { domain: "People", q: "A functional manager keeps pulling your team members onto other work. What should you do?",
      options: ["Escalate immediately to the sponsor","Negotiate with the functional manager and confirm resource commitments, using the resource management plan","Report the manager to HR","Find replacement resources yourself without telling anyone"],
      answer: 1, explain: "In a matrix org, the PM negotiates with functional managers. Communicate directly and confirm commitments before escalating." },
    { domain: "People", q: "During planning, two teams disagree and the discussion becomes heated. As servant leader, your role is to:",
      options: ["Make the decision for them to move on","Facilitate the discussion so the teams reach a collaborative solution","Separate the teams and assign work independently","Postpone the decision indefinitely"],
      answer: 1, explain: "The servant leader facilitates rather than dictates, guiding the teams to resolve conflict collaboratively." },
    { domain: "People", q: "A team member lacks a skill needed for an upcoming task. What is the BEST response?",
      options: ["Remove them from the project","Provide training or mentoring to develop the skill","Do the task yourself","Wait and see if they figure it out"],
      answer: 1, explain: "Developing the team (training, mentoring, coaching) is a core PM responsibility and reflects investing in people." },
    { domain: "People", q: "Which negotiation approach best reflects the PMI mindset when resolving a disagreement with a vendor?",
      options: ["Win at all costs to protect the project","Seek a mutually beneficial (win-win) outcome that preserves the relationship","Always concede to keep the vendor happy","Avoid negotiation and escalate to legal"],
      answer: 1, explain: "PMI favors principled, win-win negotiation that protects the long-term relationship while meeting project needs." },
    { domain: "People", q: "A team has just formed and members are unsure of roles and how to work together. What should the PM do?",
      options: ["Expect peak productivity immediately","Provide clear direction and establish a team charter with roles and ground rules","Let them figure it out with no guidance","Move straight to performance reviews"],
      answer: 1, explain: "In the forming stage the team needs direction and structure; a team charter sets roles, values, and ground rules." },
    { domain: "People", q: "An influential stakeholder spreads negative opinions about the project. What is the BEST first step?",
      options: ["Ignore them and focus on delivery","Meet with them to understand their concerns and increase their engagement","Ask the sponsor to remove them","Exclude them from communications"],
      answer: 1, explain: "Engage resistant stakeholders directly: understand concerns and work to move them toward support — don't ignore or exclude them." },
    { domain: "People", q: "What is the PM's role regarding team ground rules?",
      options: ["The PM dictates all rules","The team establishes ground rules collaboratively, and everyone (including the PM) enforces them","Ground rules are unnecessary on agile teams","HR sets the ground rules"],
      answer: 1, explain: "Ground rules (often in the team charter) are set by the team; the whole team shares responsibility for enforcing them." },
    { domain: "People", q: "A stakeholder demands daily detailed reports that consume significant PM time. What should you do?",
      options: ["Comply fully regardless of cost","Discuss their information needs and agree on appropriate content and frequency per the communications plan","Refuse the request","Send the reports but stop other work"],
      answer: 1, explain: "Manage communications to actual needs: clarify requirements and align reporting with the communications management plan rather than over- or under-communicating." },

    /* ---- Process (50%) — expanded ---- */
    { domain: "Process", q: "A deliverable failed internal inspection. What should happen before it goes to the customer for acceptance?",
      options: ["Send it anyway to save time","Perform Control Quality, correct the defects, then proceed to Validate Scope","Skip straight to Validate Scope","Close the project"],
      answer: 1, explain: "Control Quality (internal correctness) precedes Validate Scope (customer acceptance). Defects must be corrected first." },
    { domain: "Process", q: "BAC = $80,000, work is 50% complete, AC = $50,000. What is the cost variance?",
      options: ["−$10,000","+$10,000","−$30,000","$0"],
      answer: 0, explain: "EV = 50% × 80,000 = 40,000. CV = EV − AC = 40,000 − 50,000 = −$10,000 (over budget)." },
    { domain: "Process", q: "Which document formally authorizes the project and gives the PM authority to apply resources?",
      options: ["Project management plan","Project charter","Business case","Scope statement"],
      answer: 1, explain: "The project charter authorizes the project and empowers the PM; it's issued by the sponsor/initiator." },
    { domain: "Process", q: "An unapproved change was implemented by a team member directly. What should the PM do?",
      options: ["Accept it since the work is done","Assess the impact, document it, and run it through integrated change control","Reprimand the team member publicly","Reverse it without analysis"],
      answer: 1, explain: "Even after the fact, evaluate impact and process the change formally. Maintain configuration/baseline integrity through change control." },
    { domain: "Process", q: "The critical path has zero float. An activity on it is delayed by 3 days. What happens?",
      options: ["Nothing, there is slack","The project end date slips by 3 days unless action is taken","Only the next activity is delayed","The budget increases automatically"],
      answer: 1, explain: "Critical path activities have zero float, so a delay there delays the whole project unless you crash or fast-track." },
    { domain: "Process", q: "You want to identify the root cause of recurring defects. Which tool is MOST appropriate?",
      options: ["Pareto chart","Cause-and-effect (Ishikawa/fishbone) diagram","Gantt chart","RACI matrix"],
      answer: 1, explain: "The fishbone (Ishikawa) diagram systematically explores potential root causes of a problem." },
    { domain: "Process", q: "A Pareto chart shows 80% of defects come from 20% of causes. How should you use this?",
      options: ["Fix every cause equally","Prioritize the vital few causes that drive most defects","Ignore the chart","Increase inspection on all items"],
      answer: 1, explain: "Pareto (80/20) focuses effort on the 'vital few' causes producing the majority of problems." },
    { domain: "Process", q: "A seller's costs are uncertain and the scope is not fully defined. Which contract type is MOST appropriate?",
      options: ["Firm Fixed Price (FFP)","Cost-reimbursable (e.g., CPFF/CPIF)","Fixed Price with Economic Price Adjustment","Purchase order"],
      answer: 1, explain: "When scope is uncertain, cost-reimbursable contracts fit because the buyer absorbs cost risk while scope is refined." },
    { domain: "Process", q: "Probability is 30% and impact is a $50,000 loss. What is the EMV of this risk?",
      options: ["−$15,000","−$50,000","−$1,500","+$15,000"],
      answer: 0, explain: "EMV = probability × impact = 0.30 × (−$50,000) = −$15,000." },
    { domain: "Process", q: "After implementing a risk response, a NEW risk arises as a direct result. This is called:",
      options: ["Residual risk","Secondary risk","Inherent risk","Trigger"],
      answer: 1, explain: "A secondary risk is created by implementing a response. Residual risk is what remains after the response." },
    { domain: "Process", q: "Stakeholders keep requesting small scope additions during execution. What is the BEST way to handle this?",
      options: ["Accept all small changes to keep goodwill","Evaluate each through the change control process and protect the scope baseline","Refuse all changes outright","Let the team decide informally"],
      answer: 1, explain: "Prevent scope creep by routing all changes—large or small—through integrated change control." },
    { domain: "Process", q: "Which estimating technique uses historical data and a mathematical relationship (e.g., cost per unit)?",
      options: ["Analogous","Parametric","Expert judgment","Bottom-up"],
      answer: 1, explain: "Parametric estimating multiplies a rate by a quantity (e.g., $/sq ft × area) using a statistical relationship." },
    { domain: "Process", q: "The project is over budget (CPI 0.85) and the sponsor asks how much the total project will likely cost. You should report:",
      options: ["BAC","EAC","PV","SV"],
      answer: 1, explain: "EAC (Estimate at Completion) forecasts the total expected cost; with a persistent variance, EAC = BAC/CPI." },
    { domain: "Process", q: "A risk has been accepted. What is the appropriate proactive measure if it occurs?",
      options: ["Do nothing ever","Establish a contingency reserve/plan to use if the risk materializes","Transfer it to a vendor","Remove it from the register"],
      answer: 1, explain: "Active acceptance sets up a contingency reserve/plan to handle the risk if it occurs, even though no action is taken to change it now." },
    { domain: "Process", q: "Lessons learned should be captured:",
      options: ["Only at project closure","Throughout the project and finalized at closure into the lessons learned repository","Only when something goes wrong","Only by the sponsor"],
      answer: 1, explain: "Lessons learned are recorded continuously in the lessons learned register and rolled into the organizational repository at close." },

    /* ---- Agile / Hybrid (~half the exam) — expanded ---- */
    { domain: "Agile/Hybrid", q: "During a sprint the team realizes a committed story is far larger than estimated and won't fit. What should they do?",
      options: ["Work unpaid overtime to finish it","Discuss with the Product Owner and renegotiate the sprint scope; move or split the story as needed","Hide it until the review","Cancel the sprint"],
      answer: 1, explain: "Agile embraces transparency: collaborate with the PO to adjust scope. The sprint goal is protected by re-planning, not by hiding problems or forced overtime." },
    { domain: "Agile/Hybrid", q: "A stakeholder asks the Scrum Master to add a 'quick' feature directly to the current sprint. The Scrum Master should:",
      options: ["Add it to keep the stakeholder happy","Direct the request to the Product Owner to prioritize in the backlog","Tell the developers to squeeze it in","Reject the request and end the conversation"],
      answer: 1, explain: "The Product Owner owns the backlog and prioritization. The Scrum Master protects the team and redirects requests appropriately." },
    { domain: "Agile/Hybrid", q: "The team's velocity has dropped for three sprints. What is the BEST first step?",
      options: ["Assign more work to push the team","Raise it in the retrospective to find and address the root cause","Replace team members","Stop tracking velocity"],
      answer: 1, explain: "The retrospective is where the team inspects and adapts its process. Investigate root causes collaboratively before taking drastic action." },
    { domain: "Agile/Hybrid", q: "Which is the correct purpose of the Sprint Review?",
      options: ["Improve the team's internal process","Demonstrate the increment to stakeholders and gather feedback","Plan the next sprint's tasks","Conduct individual performance reviews"],
      answer: 1, explain: "The Sprint Review inspects the product increment with stakeholders and adapts the backlog. (Retrospective improves the process.)" },
    { domain: "Agile/Hybrid", q: "A predictive project has a few highly uncertain components. The BEST approach is often to:",
      options: ["Force the whole project to be predictive","Use a hybrid approach—predictive for stable parts, iterative/agile for the uncertain parts","Cancel the uncertain components","Wait until everything is certain"],
      answer: 1, explain: "Hybrid tailors the life cycle: stable work runs predictively while uncertain work is delivered iteratively to manage risk and incorporate learning." },
    { domain: "Agile/Hybrid", q: "Who is responsible for managing the Sprint Backlog during the sprint?",
      options: ["The Scrum Master","The Product Owner","The Development Team","The project sponsor"],
      answer: 2, explain: "The Development Team owns and manages the Sprint Backlog—what they pulled in and how they'll do it—self-organizing to meet the sprint goal." },
    { domain: "Agile/Hybrid", q: "The Product Owner is frequently unavailable, blocking the team on priorities. The Scrum Master should:",
      options: ["Make prioritization decisions instead","Coach the organization on the PO's importance and work to secure their availability","Cancel sprints until the PO appears","Let developers guess priorities"],
      answer: 1, explain: "The Scrum Master removes organizational impediments and coaches stakeholders; an absent PO is an impediment to address, not to work around by overriding the role." },
    { domain: "Agile/Hybrid", q: "What does a burndown chart trending ABOVE the ideal line indicate?",
      options: ["The team is ahead of schedule","The team is behind—remaining work isn't decreasing fast enough","Scope was reduced","The sprint is complete"],
      answer: 1, explain: "If actual remaining work is above the ideal line, the team is behind the pace needed to finish the sprint's work." },
    { domain: "Agile/Hybrid", q: "In Kanban, the team consistently has too many items in progress and delivery is slow. The BEST action is to:",
      options: ["Add more team members","Set or lower WIP (work-in-progress) limits to improve flow","Start more items in parallel","Remove the board"],
      answer: 1, explain: "Limiting WIP reduces multitasking and bottlenecks, improving flow and cycle time—core to Kanban." },
    { domain: "Agile/Hybrid", q: "How should requirements be handled on an agile project?",
      options: ["Fully defined and frozen up front","Captured as a prioritized, evolving product backlog refined progressively","Ignored until the end","Defined only by the PM"],
      answer: 1, explain: "Agile uses a living, prioritized backlog with progressive elaboration—embracing change rather than freezing scope early." },
    { domain: "Agile/Hybrid", q: "What is the primary measure of progress on an agile project?",
      options: ["Hours worked","Working, valuable product delivered (potentially shippable increments)","Number of meetings held","Lines of documentation"],
      answer: 1, explain: "Per the Agile Manifesto, working software/product is the primary measure of progress—value delivered, not activity." },

    /* ---- Business Environment (8%) — expanded ---- */
    { domain: "Business Environment", q: "A new law will affect your product's design mid-project. What should the PM do FIRST?",
      options: ["Finish the current design to avoid delay","Assess the compliance impact and process the required change through change control","Ignore it until the next project","Ask the team to keep it quiet"],
      answer: 1, explain: "Compliance is mandatory. Assess impact and incorporate the requirement via change control—never knowingly deliver non-compliant work." },
    { domain: "Business Environment", q: "Midway through the project, market conditions change and the business case no longer holds. What should the PM do?",
      options: ["Continue because the project was approved","Raise it with the sponsor/governance—the project may need to be re-evaluated or terminated","Hide the information to protect the team","Reduce quality to finish faster"],
      answer: 1, explain: "Projects must keep delivering value. If the business case is no longer valid, escalate to governance for a decision—even termination is acceptable." },
    { domain: "Business Environment", q: "Which metric represents the value today of future project benefits, accounting for the time value of money?",
      options: ["ROI","Net Present Value (NPV)","Payback period","BAC"],
      answer: 1, explain: "NPV discounts future cash flows to present value; a higher (positive) NPV is better. (Note: deeper financials weigh heavier on the 2026 exam.)" },
    { domain: "Business Environment", q: "Employees resist a new system the project delivers. The BEST approach is to:",
      options: ["Mandate use via executive order only","Apply organizational change management—communicate, involve users, train, and reinforce","Delay indefinitely","Cut features users dislike without analysis"],
      answer: 1, explain: "Use structured change management (e.g., ADKAR/Kotter): build awareness and desire, enable ability, and reinforce adoption." },
    { domain: "Business Environment", q: "A directive PMO is involved in your project. What does this mean?",
      options: ["It only provides templates and advice","It takes control and directly manages the projects","It audits compliance but doesn't manage","It has no authority"],
      answer: 1, explain: "A directive PMO has high control and directly manages projects; supportive = advisory, controlling = compliance/moderate control." },
    { domain: "Business Environment", q: "Your project's deliverable could create an environmental/sustainability concern. As PM you should:",
      options: ["Ignore it—out of scope","Identify the impact, inform stakeholders, and incorporate responsible measures into the plan","Hide it from the sponsor","Stop the project immediately without analysis"],
      answer: 1, explain: "PMs consider broader value and societal/environmental impact, surfacing concerns and addressing them responsibly within governance." }
  ],

  /* ---------------------------------------------------------------
     FORMULAS (Formulas tab)
     --------------------------------------------------------------- */
  formulas: [
    { name: "Earned Value (EV)", formula: "EV = % complete × BAC", note: "Value of work actually done." },
    { name: "Cost Variance (CV)", formula: "CV = EV − AC", note: "Negative = over budget." },
    { name: "Schedule Variance (SV)", formula: "SV = EV − PV", note: "Negative = behind schedule." },
    { name: "Cost Performance Index (CPI)", formula: "CPI = EV / AC", note: "< 1 = over budget." },
    { name: "Schedule Performance Index (SPI)", formula: "SPI = EV / PV", note: "< 1 = behind schedule." },
    { name: "Estimate at Completion (EAC) — typical", formula: "EAC = BAC / CPI", note: "Current variances continue." },
    { name: "EAC — atypical", formula: "EAC = AC + (BAC − EV)", note: "Past variance was a one-off." },
    { name: "EAC — using CPI & SPI", formula: "EAC = AC + [(BAC − EV) / (CPI × SPI)]", note: "Both cost & schedule continue." },
    { name: "Estimate to Complete (ETC)", formula: "ETC = EAC − AC", note: "Remaining cost to finish." },
    { name: "Variance at Completion (VAC)", formula: "VAC = BAC − EAC", note: "Negative = projected over budget." },
    { name: "To-Complete Performance Index (TCPI)", formula: "TCPI = (BAC − EV) / (BAC − AC)", note: ">1 = remaining work must be more efficient." },
    { name: "PERT / Three-point (Beta)", formula: "(O + 4M + P) / 6", note: "Weighted; M counts 4×." },
    { name: "Three-point (Triangular)", formula: "(O + M + P) / 3", note: "Simple average." },
    { name: "PERT Standard Deviation", formula: "(P − O) / 6", note: "Activity-level spread." },
    { name: "Communication Channels", formula: "n(n − 1) / 2", note: "n = number of people." },
    { name: "Expected Monetary Value (EMV)", formula: "EMV = Probability × Impact", note: "Used in decision trees." },
    { name: "Point of Total Assumption (PTA)", formula: "PTA = ((Ceiling − Target Price)/Buyer share) + Target Cost", note: "FPIF contracts." },
    { name: "Return on Investment (ROI)", formula: "ROI = (Benefit − Cost) / Cost", note: "Higher is better." }
  ],

  /* ---------------------------------------------------------------
     PMI MINDSET (Mindset tab)
     --------------------------------------------------------------- */
  mindset: [
    { title: "You are a SERVANT LEADER", text: "Remove impediments, coach, and empower the team. Avoid answers where the PM commands, dictates, or solves everything personally. The team self-organizes; you facilitate." },
    { title: "Be PROACTIVE, not reactive", text: "Prevent problems before they occur. Favor planning, risk identification, and early communication over firefighting. The right 'first' action is usually to understand/assess, not to escalate or act blindly." },
    { title: "Never skip change control", text: "Any change to scope/schedule/cost/baselines goes through integrated change control. Never make unapproved changes, never gold-plate, never just 'squeeze it in.'" },
    { title: "Talk to people directly first", text: "Before escalating to the sponsor, functional manager, or HR, the PM gathers information and communicates directly with those involved — usually face-to-face, in private for sensitive topics." },
    { title: "Address conflict; prefer collaboration", text: "Don't avoid conflict. The best technique is almost always collaborate/problem-solve (win-win). Force and withdraw are last resorts." },
    { title: "Protect the team and the sprint", text: "In agile, shield the team from mid-sprint scope changes and outside interruptions. New work goes to the backlog for the Product Owner to prioritize." },
    { title: "Follow the plan, but embrace change", text: "In predictive, work the plan and baselines. In agile/hybrid, respond to change and deliver value incrementally. Match your answer to the project life cycle in the question." },
    { title: "Read the LAST sentence first", text: "Many questions bury the actual ask at the end ('what should you do FIRST/NEXT/BEST?'). Read the call to action first, then read the scenario for relevance." },
    { title: "Compliance and ethics are non-negotiable", text: "Never violate laws, regulations, safety, or the PMI Code of Ethics — even under schedule/cost pressure or sponsor pressure." },
    { title: "Eliminate the obvious wrong answers", text: "Discard options that are reactive, blame-driven, command-and-control, skip process, or harm stakeholders. Often two answers look right — pick the more proactive, people-first, value-driven one." }
  ]
};
