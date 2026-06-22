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
    { topic: "Business Environment", front: "How to handle a compliance requirement", back: "Identify it, assess consequences of non-compliance, build it into the plan. Never knowingly violate compliance." },

    /* ---- Expanded flashcards ---- */

    /* People */
    { topic: "People", front: "Maslow's hierarchy of needs (bottom → top)", back: "Physiological → Safety → Belonging → Esteem → Self-actualization. Lower needs must be met before higher ones motivate." },
    { topic: "People", front: "McClelland's three needs", back: "Achievement, Affiliation, Power. Match assignments to a person's dominant need to motivate them." },
    { topic: "People", front: "Vroom's expectancy theory", back: "Motivation = Expectancy (effort→performance) × Instrumentality (performance→reward) × Valence (value of reward)." },
    { topic: "People", front: "Intrinsic vs extrinsic motivation", back: "Intrinsic = internal drive (purpose, mastery, autonomy). Extrinsic = external rewards (pay, bonuses). Knowledge work thrives on intrinsic." },
    { topic: "People", front: "Five types of power", back: "Formal/Legitimate, Reward, Coercive/Penalty, Expert, Referent. PMI prefers EXPERT and REFERENT (earned)." },
    { topic: "People", front: "Leadership styles to know", back: "Servant, Transformational (inspire/vision), Transactional (reward for performance), Laissez-faire (hands-off), Autocratic (directive)." },
    { topic: "People", front: "Situational leadership", back: "Adapt style to team readiness: Directing → Coaching → Supporting → Delegating as competence/confidence grow." },
    { topic: "People", front: "What is psychological safety?", back: "A climate where people feel safe to speak up, admit mistakes, and take risks without fear. Foundation of high-performing teams." },
    { topic: "People", front: "Power/Interest grid actions", back: "High power+interest = Manage closely; High power/low interest = Keep satisfied; Low power/high interest = Keep informed; Low/low = Monitor." },
    { topic: "People", front: "Most conflicts on projects come from…", back: "Competing for resources, schedules, and priorities — not personality. Confront the issue early and directly." },
    { topic: "People", front: "Coaching vs mentoring", back: "Coaching = develop a specific skill/performance (often shorter-term). Mentoring = broader, longer-term career/development relationship." },
    { topic: "People", front: "What is a team charter?", back: "Team-created agreement of values, ground rules, decision-making, meeting/communication norms. The team owns and enforces it." },
    { topic: "People", front: "Active listening", back: "Fully focus, withhold judgment, reflect/paraphrase, and confirm understanding before responding." },
    { topic: "People", front: "Colocation vs virtual teams", back: "Colocation (war room) boosts communication/cohesion. Virtual teams need team agreements, collaboration tools, and deliberate touchpoints." },
    { topic: "People", front: "Who should estimate the work, and why?", back: "The people doing the work — more accurate estimates and stronger commitment/ownership." },
    { topic: "People", front: "First step when conflict arises", back: "Address it early, privately, focused on the issue not the person. Avoidance and escalation are last resorts." },
    { topic: "People", front: "Self-organizing team — leader's role", back: "Set the goal and constraints, remove impediments, then trust the team to decide HOW. Don't assign individual tasks." },
    { topic: "People", front: "Recognition & rewards purpose", back: "Reinforce desired behaviors and sustain motivation. Tie to things the person values; make it timely and genuine." },
    { topic: "People", front: "Halo effect (bias to avoid)", back: "Assuming someone good at one thing is good at everything (e.g., great coder → great manager). A judgment trap for PMs." },
    { topic: "People", front: "Servant leader core duties", back: "Remove impediments, shield the team, coach, foster collaboration, build a safe environment, enable self-organization." },

    /* Process */
    { topic: "Process", front: "Five process groups", back: "Initiating, Planning, Executing, Monitoring & Controlling, Closing. (M&C overlaps all others.)" },
    { topic: "Process", front: "Project vs operations", back: "Project = temporary, unique result, has an end. Operations = ongoing, repetitive work that sustains the business." },
    { topic: "Process", front: "Progressive elaboration", back: "Continuously refining plans/estimates in more detail as more is known. NOT the same as uncontrolled scope creep." },
    { topic: "Process", front: "Rolling wave planning", back: "Plan near-term work in detail now; elaborate later work as it approaches. A form of progressive elaboration." },
    { topic: "Process", front: "What is a milestone?", back: "A significant point/event with ZERO duration (e.g., 'phase complete', 'approval received')." },
    { topic: "Process", front: "Lead vs lag", back: "Lead = a successor starts early (overlap, speeds up). Lag = a deliberate delay between activities (e.g., curing time)." },
    { topic: "Process", front: "Mandatory vs discretionary dependency", back: "Mandatory (hard logic) = physically/contractually required. Discretionary (soft logic) = preferred best practice, but optional." },
    { topic: "Process", front: "Total float vs free float", back: "Total float = delay without delaying the project finish. Free float = delay without delaying the next activity's early start." },
    { topic: "Process", front: "Forward vs backward pass", back: "Forward pass → early start/finish (and project duration). Backward pass → late start/finish (and float)." },
    { topic: "Process", front: "Three-point estimate (Triangular)", back: "(Optimistic + Most Likely + Pessimistic) / 3. (PERT/Beta weights ML by 4.)" },
    { topic: "Process", front: "PERT standard deviation & range", back: "SD = (P − O) / 6. Use ±1σ (68%), ±2σ (95%), ±3σ (99.7%) for ranges." },
    { topic: "Process", front: "Parametric vs analogous estimating", back: "Parametric = rate × quantity from a statistical relationship (accurate). Analogous = scale from a similar past project (fast, rough)." },
    { topic: "Process", front: "WBS terms: package vs control account", back: "Work package = lowest WBS level (work is estimated/scheduled here). Control account = management point where scope/cost/schedule are integrated." },
    { topic: "Process", front: "Decision tree analysis", back: "Compute EMV of each path (probability × payoff, net of cost); choose the best expected value under uncertainty." },
    { topic: "Process", front: "Monte Carlo simulation", back: "Quantitative technique: runs many simulations across input ranges to produce a probability distribution of cost/schedule outcomes." },
    { topic: "Process", front: "Sensitivity analysis (tornado diagram)", back: "Ranks which risks/variables most affect the outcome, focusing attention on the biggest drivers." },
    { topic: "Process", front: "Risk trigger", back: "A warning sign/condition that a risk is about to occur or has occurred — cue to enact the response." },
    { topic: "Process", front: "Risk register vs issue log", back: "Risk = a FUTURE uncertain event (risk register). Once it occurs, it's an ISSUE (issue log)." },
    { topic: "Process", front: "Seven basic quality tools", back: "Cause-effect (fishbone), Flowchart, Check sheet, Pareto, Histogram, Control chart, Scatter diagram." },
    { topic: "Process", front: "Pareto principle (80/20)", back: "~80% of problems come from ~20% of causes. Fix the 'vital few' causes first." },
    { topic: "Process", front: "Fishbone (Ishikawa) diagram", back: "Cause-and-effect diagram to find ROOT causes of a problem, grouped by category." },
    { topic: "Process", front: "Histogram vs scatter diagram", back: "Histogram = frequency distribution of one variable. Scatter = relationship/correlation between two variables." },
    { topic: "Process", front: "Cost baseline vs management reserve", back: "Cost baseline = time-phased budget incl. contingency (measure performance against it). Management reserve sits OUTSIDE, needs approval." },
    { topic: "Process", front: "Make-or-buy analysis", back: "Decide whether to produce in-house or procure externally, weighing cost, capacity, risk, and capability." },
    { topic: "Process", front: "RFP vs RFQ vs RFI", back: "RFP = proposal/solution for complex needs. RFQ = price quote for defined goods. RFI = gather market information." },
    { topic: "Process", front: "Procurement SOW", back: "Statement of work — describes the goods/services in enough detail for sellers to assess and price the work." },
    { topic: "Process", front: "Point of Total Assumption (PTA)", back: "In FPIF contracts, the cost above which the SELLER bears all additional cost (full overrun risk shifts to seller)." },
    { topic: "Process", front: "Bidder (pre-bid) conference", back: "Meeting giving all prospective sellers the same information/clarifications — ensures a fair, transparent procurement." },
    { topic: "Process", front: "Configuration mgmt vs change control", back: "Config mgmt controls the product's specs/versions. Change control governs approving/rejecting changes to baselines." },
    { topic: "Process", front: "Requirements traceability matrix", back: "Links each requirement from origin → design → build → test, ensuring nothing is lost and scope stays controlled." },
    { topic: "Process", front: "Validated vs accepted deliverables", back: "Validated = checked internally for correctness (Control Quality). Accepted = formally signed off by the customer (Validate Scope)." },
    { topic: "Process", front: "Preventive vs corrective action", back: "Preventive = reduce probability of a FUTURE problem. Corrective = realign performance AFTER a deviation. (Defect repair = fix a defect.)" },
    { topic: "Process", front: "Phase gate (stage gate / kill point)", back: "Review at a phase end to decide go/continue/change/terminate based on performance and business justification." },
    { topic: "Process", front: "Assumption log", back: "Started in initiating; records assumptions and constraints throughout the project." },
    { topic: "Process", front: "Lessons learned: register vs repository", back: "Register = captured DURING the project. Repository = organizational store rolled up at closure for future projects." },
    { topic: "Process", front: "EAC formulas — which when?", back: "BAC/CPI (variance continues), AC+(BAC−EV) (atypical, variance won't continue), AC+[(BAC−EV)/(CPI×SPI)] (both cost & schedule continue)." },

    /* Agile / Hybrid */
    { topic: "Agile/Hybrid", front: "Typical sprint length", back: "1–4 weeks, kept CONSISTENT to create a reliable, sustainable cadence." },
    { topic: "Agile/Hybrid", front: "Sprint goal", back: "A single coherent objective giving the sprint focus, while allowing flexibility in how it's achieved." },
    { topic: "Agile/Hybrid", front: "Backlog refinement (grooming)", back: "Ongoing work to clarify, estimate, split, and re-order backlog items so they're 'ready' for future sprints." },
    { topic: "Agile/Hybrid", front: "Definition of Ready vs Definition of Done", back: "Ready = entry criteria (clear/estimated) BEFORE a sprint pulls it in. Done = exit criteria (quality) before it's complete." },
    { topic: "Agile/Hybrid", front: "Acceptance criteria vs DoD", back: "Acceptance criteria = conditions for ONE specific story. DoD = team-wide standard applied to ALL work." },
    { topic: "Agile/Hybrid", front: "What are story points?", back: "Relative measure of size/effort/complexity — not hours. Improves estimating consistency over time." },
    { topic: "Agile/Hybrid", front: "Planning poker", back: "Team estimates simultaneously (cards), discusses differences, converges — reduces anchoring, leverages team knowledge." },
    { topic: "Agile/Hybrid", front: "What is a spike?", back: "A time-boxed research/experiment task to reduce uncertainty before committing to risky/unclear work." },
    { topic: "Agile/Hybrid", front: "Epic → Feature → Story → Task", back: "Hierarchy of work: Epic (large) → Feature → User Story (sprint-sized) → Task. Split big items down to fit a sprint." },
    { topic: "Agile/Hybrid", front: "What is a persona?", back: "A research-based fictional user archetype that keeps the team focused on real user needs in design/prioritization." },
    { topic: "Agile/Hybrid", front: "Minimum Viable Product (MVP)", back: "Smallest releasable version delivering value and enabling validated learning from real users." },
    { topic: "Agile/Hybrid", front: "Release planning vs roadmap", back: "Roadmap = high-level evolving direction/themes. Release plan = which features/increments deliver over upcoming iterations." },
    { topic: "Agile/Hybrid", front: "Information radiator", back: "Big, visible display (task board, burn charts) that broadcasts progress/metrics — promotes transparency." },
    { topic: "Agile/Hybrid", front: "WIP limits — why?", back: "Limit work in progress to reduce multitasking, expose bottlenecks, and improve flow/cycle time (core to Kanban)." },
    { topic: "Agile/Hybrid", front: "Cumulative flow diagram (CFD)", back: "Shows work in each workflow state over time; widening bands reveal bottlenecks and growing WIP." },
    { topic: "Agile/Hybrid", front: "Throughput vs cycle time", back: "Throughput = items completed per period. Cycle time = elapsed time for one item from start to finish." },
    { topic: "Agile/Hybrid", front: "Sustainable pace", back: "A steady, healthy work rate the team can maintain indefinitely — protects quality, morale, throughput (no chronic overtime)." },
    { topic: "Agile/Hybrid", front: "Technical debt — how to handle", back: "Make it visible and address it continuously (backlog items, refactoring) so it doesn't silently erode delivery." },
    { topic: "Agile/Hybrid", front: "Continuous integration (CI)", back: "Integrate and auto-test changes frequently for fast feedback that the build still works — enables quality incremental delivery." },
    { topic: "Agile/Hybrid", front: "Scrum of scrums", back: "Cross-team sync where representatives surface and resolve dependencies/impediments spanning multiple teams." },
    { topic: "Agile/Hybrid", front: "When agile vs predictive (hybrid)", back: "Agile/iterative for uncertain, fast-changing work. Predictive for stable, well-defined, low-change work. Hybrid mixes both." },
    { topic: "Agile/Hybrid", front: "Fail fast", back: "Use small, quick experiments to learn what doesn't work early, when change is cheap. Turns failure into fast learning." },
    { topic: "Agile/Hybrid", front: "Agile measure of progress", back: "Working, valuable product (potentially shippable increments) — value delivered, not hours or documentation." },
    { topic: "Agile/Hybrid", front: "Can one person be SM and PO?", back: "No — conflicting focuses (process/team vs value/backlog). Keep them separate to preserve balance." },
    { topic: "Agile/Hybrid", front: "Agile iron-triangle trade-off", back: "Time and cost are usually fixed; SCOPE flexes. Deliver highest-value items first; reprioritize rather than cut quality." },

    /* Business Environment */
    { topic: "Business Environment", front: "Project vs program vs portfolio", back: "Project = one unique result. Program = related projects for shared benefits. Portfolio = all work aligned to strategy." },
    { topic: "Business Environment", front: "Organizational governance", back: "Framework of policies, decision rights, and oversight that keeps projects authorized, monitored, and aligned to strategy." },
    { topic: "Business Environment", front: "Net Present Value (NPV)", back: "Present value of future cash flows (discounted). Higher/positive is better. Pick the higher NPV project." },
    { topic: "Business Environment", front: "Internal Rate of Return (IRR)", back: "Discount rate where NPV = 0. Higher IRR = more attractive investment (all else equal)." },
    { topic: "Business Environment", front: "ROI and Benefit-Cost Ratio (BCR)", back: "ROI = gain relative to cost (higher better). BCR = benefits ÷ costs; >1 is favorable." },
    { topic: "Business Environment", front: "Payback period", back: "Time to recover the investment. Shorter is better — but it ignores time value of money and later cash flows." },
    { topic: "Business Environment", front: "Opportunity cost", back: "Value of the next-best alternative given up by choosing a project. Used when selecting among options." },
    { topic: "Business Environment", front: "Sunk cost", back: "Money already spent and unrecoverable. IGNORE it in go-forward decisions — decide on future value only." },
    { topic: "Business Environment", front: "Benefits realization owner", back: "Benefits often accrue AFTER closure; the business/operations (benefits owner/sponsor) tracks them per the benefits management plan." },
    { topic: "Business Environment", front: "Tailoring", back: "Adapt methodology, processes, and rigor to the project's context (size, risk, complexity, culture). Not one-size-fits-all." },
    { topic: "Business Environment", front: "Stakeholder vs shareholder", back: "Stakeholder = anyone who affects/is affected by the project (broad). Shareholder = holds ownership stake (a subset)." },
    { topic: "Business Environment", front: "Kotter's 8-step change model", back: "Urgency → Coalition → Vision → Communicate → Empower → Short-term wins → Consolidate → Anchor in culture." },
    { topic: "Business Environment", front: "Value (PMI sense)", back: "Realized business outcomes/benefits for stakeholders — the purpose of the work, not activity or spend." },
    { topic: "Business Environment", front: "What if the business case becomes invalid?", back: "Escalate to sponsor/governance; the project may be rescoped or terminated. Projects must keep delivering value." }
  ],

  /* ---------------------------------------------------------------
     QUESTION BANK  {q, options[4], answer(index), explain, domain}
     --------------------------------------------------------------- */
  // Question bank lives in questions.js (window.PMP_QUESTIONS), loaded before this file.
  questions: (typeof window!=="undefined" && window.PMP_QUESTIONS) ? window.PMP_QUESTIONS : [],

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
