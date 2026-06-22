/* =====================================================================
   PMP STUDY APP — QUESTION BANK  (window.PMP_QUESTIONS)
   ---------------------------------------------------------------------
   ~300 situational questions, weighted to the 2021 PMI ECO:
     People 42% | Process 50% | Business Environment 8%
   ~half are agile / hybrid. Every wording is original to this app, so
   answers must be reasoned out — not recalled from other question banks.
   The app shuffles answer-option order at render time, so positions
   are never stable either. Learn the WHY in each explanation.
   ===================================================================== */
window.PMP_QUESTIONS = [

  /* ============================================================
     PEOPLE  (42%)
     ============================================================ */

  { domain: "People", q: "Your team is debating which database to use and the back-and-forth has stalled two sprints of work. As the project manager, what is your BEST move?",
    options: ["Pick the database yourself and tell the team to move on","Get the people involved in the same room to work the problem out together toward a solution both can live with","Escalate the decision to the sponsor","Let each developer prototype their choice and decide later"],
    answer: 1, explain: "Collaborate / problem-solve is PMI's preferred conflict mode — it's win-win and resolves the underlying disagreement. A servant leader facilitates the resolution rather than dictating it." },

  { domain: "People", q: "A brand-new team is bickering over small things and tension is high in nearly every meeting. How should the project manager interpret and respond to this?",
    options: ["The team is broken; request replacements","Recognize this as the storming stage and coach them through it toward norming","Send the issue to HR right away","Stay out of it and hope it settles on its own"],
    answer: 1, explain: "Conflict during storming is a normal, expected part of Tuckman's model (forming, storming, norming, performing, adjourning). The servant leader coaches the team forward rather than punishing or avoiding." },

  { domain: "People", q: "You need a currently skeptical stakeholder to actively back the project. Which document captures the difference between where they are now and where you need them to be?",
    options: ["Risk register","Stakeholder engagement assessment matrix","Issue log","Project charter"],
    answer: 1, explain: "The stakeholder engagement assessment matrix records Current (C) versus Desired (D) engagement so you can plan actions to close that gap." },

  { domain: "People", q: "A project grows from 6 people to 9 people. How many MORE communication channels now exist?",
    options: ["21","36","15","9"],
    answer: 0, explain: "Channels = n(n−1)/2. With 9 people: 9×8/2 = 36. With 6 people: 6×5/2 = 15. The number of ADDED channels = 36 − 15 = 21." },

  { domain: "People", q: "A teammate who recently joined from an overseas office rarely speaks up in meetings and seems disengaged. What should the PM do FIRST?",
    options: ["Flag a performance concern to their manager","Talk with them privately and respectfully to understand their perspective","Stop inviting them to meetings that don't need them","Assume they're underperforming and start documenting it"],
    answer: 1, explain: "Lead with emotional intelligence and direct, respectful communication. Seek to understand — possibly a cultural communication-style difference — before judging or escalating." },

  { domain: "People", q: "In a daily standup, a developer says they're blocked waiting on another department. What is the Scrum Master's proper role here?",
    options: ["Solve the blocker right then so everyone hears the fix","Capture it and work to clear the impediment after the standup","Tell the developer it's their problem to chase","Convert it into a new backlog story on the spot"],
    answer: 1, explain: "The standup is a short sync, not a problem-solving session. The servant-leader Scrum Master removes the impediment outside the meeting." },

  { domain: "People", q: "Two team members keep colliding because each thinks the other owns a task. Which tool most directly prevents this?",
    options: ["Gantt chart","RACI / responsibility assignment matrix","Risk register","Velocity chart"],
    answer: 1, explain: "A RACI matrix assigns who is Responsible, Accountable, Consulted, and Informed for each activity, eliminating ambiguity about ownership." },

  { domain: "People", q: "A strong performer asks for tougher assignments and a path to grow. Which motivation idea best explains what they're seeking?",
    options: ["Herzberg's hygiene factors","Higher-order needs / Herzberg motivators (achievement, growth, recognition)","McGregor's Theory X","Halo effect"],
    answer: 1, explain: "Growth, achievement, and recognition are Herzberg's 'motivators' (and Maslow's higher needs) — true motivators, not hygiene factors, which only prevent dissatisfaction." },

  { domain: "People", q: "A normally reliable engineer has gone quiet and their output has dropped noticeably this week. What should the PM do FIRST?",
    options: ["Start a written record for HR","Have a private, supportive one-on-one to learn what's going on","Quietly shift their work to others","Raise it in the next team retrospective"],
    answer: 1, explain: "Emotional intelligence first: a private, caring conversation to understand the cause precedes any documentation, reassignment, or public discussion." },

  { domain: "People", q: "Your team is fully remote across several time zones and people say they feel disconnected. What's the BEST way to build cohesion?",
    options: ["Force everyone onto identical working hours","Set team agreements, use collaboration tools, and schedule deliberate synchronous touchpoints","Move all communication to email only","Name one site as headquarters and route everything through it"],
    answer: 1, explain: "Virtual teams need a team charter/ground rules, good collaboration technology, and intentional real-time check-ins to build trust across distance." },

  { domain: "People", q: "A functional manager keeps reassigning your team members to other work without telling you. What should you do?",
    options: ["Escalate straight to the sponsor","Talk directly with the functional manager and confirm resource commitments per the resource plan","File an HR complaint","Quietly find replacements on your own"],
    answer: 1, explain: "In a matrix organization the PM negotiates with functional managers and confirms commitments through direct communication before escalating." },

  { domain: "People", q: "Two sub-teams are arguing loudly during a planning session. As a servant leader, what is your role?",
    options: ["Decide for them so the meeting can move on","Facilitate the discussion so they reach a collaborative resolution","Split them up and have them work separately","Table the topic indefinitely to cool things down"],
    answer: 1, explain: "Servant leaders facilitate rather than dictate, guiding the parties to resolve the conflict themselves." },

  { domain: "People", q: "A team member doesn't yet have a skill an upcoming task requires. What's the BEST response?",
    options: ["Take them off the project","Arrange training or mentoring to build the skill","Do the task yourself to be safe","Wait and see whether they pick it up"],
    answer: 1, explain: "Developing the team — training, mentoring, coaching — is a core PM responsibility and an investment in people." },

  { domain: "People", q: "You're negotiating a sticking point with a long-term vendor. Which approach reflects the PMI mindset?",
    options: ["Win at any cost to protect the project","Look for a win-win that meets project needs and preserves the relationship","Give in on everything to keep them happy","Skip negotiating and hand it to legal"],
    answer: 1, explain: "PMI favors principled, win-win negotiation that protects the longer-term relationship while still meeting project needs." },

  { domain: "People", q: "A just-formed team is unsure of roles and how to work together. What should the PM do?",
    options: ["Expect top productivity immediately","Provide clear direction and create a team charter defining roles and ground rules","Leave them to sort it out with no guidance","Jump straight into individual performance reviews"],
    answer: 1, explain: "In the forming stage the team needs structure and direction; a team charter establishes roles, values, and ground rules." },

  { domain: "People", q: "An influential stakeholder is openly badmouthing the project to others. What's the BEST first step?",
    options: ["Ignore it and keep delivering","Meet with them to understand their concerns and work to raise their engagement","Ask the sponsor to remove them","Cut them out of project communications"],
    answer: 1, explain: "Engage resistant stakeholders directly — understand their concerns and move them toward support rather than ignoring or excluding them." },

  { domain: "People", q: "Who should set a team's ground rules, and who enforces them?",
    options: ["The PM writes them and the PM enforces them","The team sets them collaboratively and everyone, including the PM, enforces them","Agile teams don't need ground rules","HR defines and polices them"],
    answer: 1, explain: "Ground rules (often part of the team charter) are created by the team, and the whole team — PM included — shares responsibility for upholding them." },

  { domain: "People", q: "A stakeholder demands detailed reports every single day, eating up large amounts of your time. What should you do?",
    options: ["Comply fully no matter the cost","Discuss their real information needs and agree on appropriate content and frequency in the communications plan","Refuse the request outright","Send the reports and let other work slip"],
    answer: 1, explain: "Manage communications to actual needs — clarify what they truly need and align reporting with the communications management plan instead of over- or under-communicating." },

  { domain: "People", q: "Two senior engineers are in conflict, and one simply gives in to the other to end the tension without resolving anything. Which conflict mode is this?",
    options: ["Collaborate / problem-solve","Smooth / accommodate","Force / direct","Compromise / reconcile"],
    answer: 1, explain: "Smoothing/accommodating emphasizes points of agreement and yields to keep harmony, but it does not address the root issue — it's a temporary, lose-lose-ish fix." },

  { domain: "People", q: "During a heated dispute, a manager says 'We'll do it my way because I'm in charge.' Which conflict-resolution mode is being used?",
    options: ["Withdraw / avoid","Force / direct","Compromise","Collaborate"],
    answer: 1, explain: "Forcing/directing imposes one party's view at the expense of the other (win-lose). It's fast but breeds resentment and is generally the least desirable PMI mode." },

  { domain: "People", q: "Two parties each give up something to reach a quick, mutually acceptable resolution. Which conflict mode is this?",
    options: ["Collaborate / problem-solve","Compromise / reconcile","Force","Smooth"],
    answer: 1, explain: "Compromise has both sides concede something for a workable middle ground (lose-lose). It's useful under time pressure but is not the optimal win-win that collaboration provides." },

  { domain: "People", q: "A team member walks out of a tense meeting and refuses to engage with the disagreement at all. Which conflict-handling style is this?",
    options: ["Withdraw / avoid","Compromise","Collaborate","Force"],
    answer: 0, explain: "Withdrawing/avoiding retreats from the conflict and postpones it. It rarely resolves anything and is generally the worst long-term option." },

  { domain: "People", q: "A PM relies on the formal authority that comes with the title 'project manager' to direct the team. Which type of power is this?",
    options: ["Expert","Referent","Formal (legitimate/positional)","Reward"],
    answer: 2, explain: "Formal (legitimate/positional) power comes from the role itself. PMI generally prefers expert and referent power, which are earned and more durable." },

  { domain: "People", q: "Team members follow a PM mainly because they deeply respect her judgment and want to be like her. Which power type is this?",
    options: ["Coercive","Referent","Reward","Legitimate"],
    answer: 1, explain: "Referent power stems from respect, admiration, or personal charisma. It and expert power are the most effective and PMI-favored forms." },

  { domain: "People", q: "A PM is followed because the team trusts his deep technical knowledge and experience. Which power type is this?",
    options: ["Expert","Coercive","Formal","Reward"],
    answer: 0, explain: "Expert power comes from knowledge and skill the team values. Along with referent power, it's the most effective and is earned, not assigned." },

  { domain: "People", q: "A manager motivates compliance mainly by threatening penalties for poor performance. Which power type is this?",
    options: ["Reward","Coercive (penalty)","Referent","Expert"],
    answer: 1, explain: "Coercive (penalty) power relies on punishment or threats. It's the least desirable form and tends to damage trust and morale." },

  { domain: "People", q: "A leader sets a compelling vision and inspires the team to exceed their own expectations and embrace change. Which leadership style is this?",
    options: ["Transactional","Transformational","Laissez-faire","Autocratic"],
    answer: 1, explain: "Transformational leaders inspire and motivate through vision, growth, and empowerment — well suited to knowledge work and agile environments." },

  { domain: "People", q: "A manager motivates purely through rewards and corrections tied to meeting specific targets. Which leadership style is this?",
    options: ["Transformational","Transactional","Servant","Charismatic"],
    answer: 1, explain: "Transactional leadership exchanges rewards/penalties for performance against defined goals — a contingent, results-for-reward approach." },

  { domain: "People", q: "A leader stays largely hands-off, letting a capable, self-directed team make its own decisions. Which style is this, and when does it fit?",
    options: ["Autocratic — best for crises","Laissez-faire — fits mature, self-organizing teams","Directing — fits brand-new teams","Coercive — fits low performers"],
    answer: 1, explain: "Laissez-faire ('hands-off') delegates decisions to the team. It works well with experienced, self-organizing teams but poorly when a team needs direction." },

  { domain: "People", q: "Following situational leadership, a brand-new team that lacks confidence and competence most needs which leadership behavior?",
    options: ["Delegating","Directing (telling)","Hands-off oversight","Minimal involvement"],
    answer: 1, explain: "In situational leadership, low-readiness teams need a directing/telling style; as competence and confidence grow, the leader shifts toward coaching, supporting, then delegating." },

  { domain: "People", q: "Which leadership philosophy puts the team's needs first — removing obstacles, coaching, and serving so the team can perform?",
    options: ["Command-and-control","Servant leadership","Theory X management","Transactional leadership"],
    answer: 1, explain: "Servant leadership inverts the pyramid: the leader serves the team, removing impediments and enabling success. It's the core PMP-era leadership stance." },

  { domain: "People", q: "A manager believes employees inherently dislike work and must be closely controlled and pushed. Which assumption set is this?",
    options: ["Theory Y","Theory X","Theory Z","Maslow's esteem level"],
    answer: 1, explain: "McGregor's Theory X assumes people avoid work and need control. Theory Y assumes people are self-motivated and seek responsibility — PMI favors a Theory Y stance." },

  { domain: "People", q: "According to Maslow, before people can pursue esteem and self-actualization at work, which needs must generally be met first?",
    options: ["Only self-actualization matters","Lower needs — physiological, safety, and belonging","Esteem before safety","None; the order doesn't matter"],
    answer: 1, explain: "Maslow's hierarchy is satisfied from the bottom up: physiological, safety, belonging, esteem, then self-actualization. Lower needs generally must be met before higher ones drive behavior." },

  { domain: "People", q: "In Herzberg's two-factor theory, a fair salary and good working conditions are examples of what — and what do they do?",
    options: ["Motivators that drive high performance","Hygiene factors that prevent dissatisfaction but don't by themselves motivate","Self-actualization needs","Expectancy multipliers"],
    answer: 1, explain: "Hygiene factors (pay, conditions, policies, security) prevent dissatisfaction when adequate but don't create motivation. True motivation comes from motivators like achievement and growth." },

  { domain: "People", q: "A PM wants people to believe that effort will lead to good performance and that good performance will be rewarded with something they value. Which theory frames this?",
    options: ["McClelland's needs theory","Vroom's expectancy theory","Maslow's hierarchy","Theory X"],
    answer: 1, explain: "Vroom's expectancy theory: motivation depends on expectancy (effort→performance), instrumentality (performance→reward), and valence (value of the reward)." },

  { domain: "People", q: "A team member is driven mainly by a desire to influence others and lead. Per McClelland, which need is dominant?",
    options: ["Need for achievement","Need for affiliation","Need for power","Need for safety"],
    answer: 2, explain: "McClelland's acquired-needs theory identifies achievement, affiliation, and power. A drive to influence and lead reflects the need for power; matching tasks to dominant needs boosts motivation." },

  { domain: "People", q: "A team consistently delivers great results, so the PM gives public recognition and meaningful rewards. What is the main purpose of this?",
    options: ["To satisfy a hygiene factor","To reinforce desired behavior and sustain motivation","To comply with HR policy","To avoid having to coach the team"],
    answer: 1, explain: "Recognition and rewards reinforce the behaviors you want repeated and sustain motivation — a key team-development action for the PM." },

  { domain: "People", q: "What is the FIRST thing a PM should do when a genuine conflict surfaces between two team members?",
    options: ["Escalate to the sponsor","Address it openly and promptly, in private, focusing on the issue not the people","Ignore it so the team can self-resolve","Reassign one of them immediately"],
    answer: 1, explain: "PMI says confront conflict early and directly, in private, addressing the problem rather than personalities. Avoidance and escalation are last resorts." },

  { domain: "People", q: "A stakeholder who must merely be 'kept satisfied' has high power but low interest in your project. Per the power/interest grid, how should you engage them?",
    options: ["Manage closely","Keep satisfied","Keep informed","Monitor with minimal effort"],
    answer: 1, explain: "On the power/interest grid: high power + low interest = keep satisfied; high power + high interest = manage closely; low power + high interest = keep informed; low/low = monitor." },

  { domain: "People", q: "Active listening during a difficult conversation primarily means the PM should:",
    options: ["Plan the rebuttal while the other person talks","Fully focus, reflect back what's said, and confirm understanding before responding","Multitask to save time","Interrupt to correct errors immediately"],
    answer: 1, explain: "Active listening means giving full attention, paraphrasing/confirming understanding, and withholding judgment — central to emotional intelligence and conflict handling." },

  { domain: "People", q: "Which of these best describes 'psychological safety' on a team?",
    options: ["Guaranteed job security","An environment where people feel safe to speak up, admit mistakes, and take interpersonal risks","A documented safety plan","Freedom from all conflict"],
    answer: 1, explain: "Psychological safety is the shared belief that one can raise ideas, concerns, or mistakes without fear of punishment or humiliation — a foundation of high-performing teams." },

  { domain: "People", q: "A self-organizing agile team is repeatedly told exactly how to do their work by a manager. What's the likely impact, and what should change?",
    options: ["Productivity will rise; keep directing","Autonomy and motivation drop; the manager should shift to enabling and trust the team to self-organize","Nothing changes","The team should be disbanded"],
    answer: 1, explain: "Micromanaging undermines a self-organizing team's autonomy and motivation. Servant leaders set the goal, remove blockers, and let the team decide how to do the work." },

  { domain: "People", q: "A PM wants to confirm that team members and stakeholders correctly received and understood a message. Which communication concept is this?",
    options: ["Push communication","Feedback / confirming the message was understood","Communication blocker","Interactive broadcast"],
    answer: 1, explain: "Effective communication closes the loop with feedback to confirm the receiver decoded the message as intended; noise and filters can otherwise distort meaning." },

  { domain: "People", q: "Which is an example of INTERACTIVE communication?",
    options: ["A posted status report on a wiki","A real-time meeting or video call with back-and-forth","A mass email to all stakeholders","A recorded training video"],
    answer: 1, explain: "Interactive communication is real-time, multidirectional exchange (meetings, calls). Push (email, memos) is sent out; pull (portals, wikis) is accessed at will." },

  { domain: "People", q: "Two team members from different cultures keep misreading each other's directness. What is the BEST PM action?",
    options: ["Tell one to act like the other","Build cultural awareness and team agreements on communication norms, and facilitate mutual understanding","Separate them permanently","Ignore it as a personal matter"],
    answer: 1, explain: "Embrace diversity: raise cultural awareness, set shared communication norms, and facilitate understanding rather than forcing conformity or avoiding the issue." },

  { domain: "People", q: "A stakeholder has high power and high interest in the project. How should the PM engage them?",
    options: ["Monitor with minimal effort","Manage closely with frequent, proactive engagement","Keep barely informed","Avoid them to prevent interference"],
    answer: 1, explain: "High power + high interest stakeholders should be managed closely — engaged proactively and frequently because they can strongly help or hurt the project." },

  { domain: "People", q: "What is the primary purpose of a team charter?",
    options: ["To authorize the project","To define team values, agreements, ground rules, and how the team will operate","To list project deliverables","To track risks"],
    answer: 1, explain: "The team charter captures the team's values, agreements, decision-making, meeting and communication norms, and ground rules — created collaboratively by the team." },

  { domain: "People", q: "A team member proposes a better way to do the work than the PM had planned. The servant-leader PM should:",
    options: ["Dismiss it to stay on plan","Encourage and seriously consider the idea, empowering the team's input","Take credit for the idea","Require a formal change request before listening"],
    answer: 1, explain: "Servant leaders empower the team and welcome their input. Listening to and acting on good ideas builds engagement, ownership, and better outcomes." },

  { domain: "People", q: "Colocating a team in a shared workspace (or a virtual 'war room') primarily aims to:",
    options: ["Reduce facility costs","Improve communication, collaboration, and team cohesion","Make supervision easier","Satisfy an HR requirement"],
    answer: 1, explain: "Colocation (tight matrix) puts the team together to boost communication, spontaneous collaboration, and a sense of community — strengthening performance." },

  { domain: "People", q: "During the Adjourning stage of team development, the BEST PM action is to:",
    options: ["Push hard for more output","Recognize contributions, capture lessons learned, and release the team smoothly","Start storming again","Cut all communication"],
    answer: 1, explain: "Adjourning is when the team disbands after the work is done. The PM recognizes contributions, documents lessons learned, and handles releases respectfully." },

  { domain: "People", q: "A team is performing well but the PM notices one member consistently dominating discussions and others going quiet. What should the PM do?",
    options: ["Let it continue since output is fine","Facilitate balanced participation and reinforce ground rules so all voices are heard","Remove the dominant member","Stop holding discussions"],
    answer: 1, explain: "The PM/facilitator ensures balanced participation, drawing out quieter members and managing dominant ones, so the team gets the benefit of all perspectives." },

  { domain: "People", q: "A new conflict arises because expectations were never written down. Which proactive practice would have most likely prevented it?",
    options: ["A bigger budget","Clear ground rules and a RACI established early","More status meetings","A larger team"],
    answer: 1, explain: "Many interpersonal conflicts trace back to unclear roles and expectations; establishing ground rules and a RACI early prevents them." },

  { domain: "People", q: "A team member is technically excellent but frequently dismissive of others' ideas, hurting morale. What should the PM do FIRST?",
    options: ["Ignore it because they're productive","Have a private conversation about the behavior's impact and coach toward more collaborative conduct","Publicly call them out in standup","Remove them from the team"],
    answer: 1, explain: "Address behavior privately first, give specific feedback on its impact, and coach. Skill doesn't excuse conduct that damages the team, but punitive steps aren't the first move." },

  { domain: "People", q: "The sponsor asks the PM to motivate a demoralized team. Which action best addresses the ROOT of low motivation per Herzberg?",
    options: ["Give a one-time bonus and move on","Identify and improve the underlying motivators — meaningful work, recognition, growth, achievement","Add more rules and oversight","Increase reporting frequency"],
    answer: 1, explain: "Sustained motivation comes from Herzberg's motivators (achievement, recognition, the work itself, responsibility, growth) — not one-off hygiene tweaks like a single bonus." },

  { domain: "People", q: "An agile team wants to decide together how to tackle the sprint's work. The leader's BEST stance is to:",
    options: ["Assign each task personally","Set the goal and constraints, then let the team self-organize on the 'how'","Require approval for each task choice","Decide everything to ensure quality"],
    answer: 1, explain: "Self-organizing teams decide how to accomplish the work. The leader provides the goal, context, and support, then trusts the team — central to agile and servant leadership." },

  { domain: "People", q: "A key stakeholder repeatedly misunderstands status updates. The PM suspects a communication 'blocker.' Which is an example of a communication barrier?",
    options: ["Using clear, jargon-free language","Noise, distance, hostility, or technical jargon the receiver doesn't share","Confirming understanding with feedback","Choosing the right medium"],
    answer: 1, explain: "Communication blockers include noise, physical distance, hostility, cultural/language gaps, and unfamiliar jargon — anything that distorts the message between sender and receiver." },

  { domain: "People", q: "A PM is coaching versus mentoring a team member. Which best distinguishes coaching?",
    options: ["Coaching is giving long-term career guidance","Coaching focuses on developing specific skills/performance, often shorter-term and task-focused","Coaching means doing the work for them","Coaching is identical to managing"],
    answer: 1, explain: "Coaching develops specific skills and performance, often task- and shorter-term focused; mentoring is a broader, longer-term developmental relationship." },

  { domain: "People", q: "A team's emotional intelligence is low and small frictions keep escalating. Which EI competency most directly helps members manage their OWN reactions?",
    options: ["Social awareness","Self-management (self-regulation)","Relationship management","Organizational awareness"],
    answer: 1, explain: "EI has self-awareness, self-management, social awareness, and relationship management. Self-management is regulating one's own emotions and impulses, which curbs escalation." },

  { domain: "People", q: "An agile coach notices the team is dependent on them for every decision. What's the BEST long-term action?",
    options: ["Keep making the decisions to stay efficient","Gradually coach the team to make decisions themselves, building self-sufficiency","Document every decision in detail","Add an approval gate"],
    answer: 1, explain: "A good coach works to make themselves unnecessary, building the team's capability to self-organize and decide — not fostering dependence." },

  { domain: "People", q: "A stakeholder with low power but high interest keeps asking for updates. How should the PM engage them?",
    options: ["Manage closely","Keep adequately informed","Ignore them","Escalate them off the project"],
    answer: 1, explain: "Low power + high interest stakeholders should be kept informed — they care and can be helpful advocates, even though they don't control major decisions." },

  { domain: "People", q: "A PM wants to assess each stakeholder's attitude as unaware, resistant, neutral, supportive, or leading. This classification supports:",
    options: ["Risk analysis","Planning targeted engagement to move stakeholders toward needed levels","Cost estimating","Quality control"],
    answer: 1, explain: "Classifying engagement levels (unaware → resistant → neutral → supportive → leading) lets the PM plan actions to move each stakeholder to the level the project needs." },

  { domain: "People", q: "Tensions flare because two leads have overlapping authority over the same workstream. What is the BEST structural fix going forward?",
    options: ["Let them keep competing","Clarify and separate decision rights and accountabilities (update the RACI)","Have both report everything to the sponsor","Rotate authority weekly"],
    answer: 1, explain: "Overlapping authority causes recurring conflict; clarifying decision rights and accountabilities (e.g., a single 'A' per activity in RACI) resolves the structural cause." },

  { domain: "People", q: "A remote team member feels left out of decisions made by the colocated majority. What should the PM do?",
    options: ["Tell them to relocate","Adjust practices so remote members have equal voice and visibility into decisions","Make all decisions without the remote member","Reduce the remote member's responsibilities"],
    answer: 1, explain: "Inclusion matters: the PM adapts meeting times, tools, and norms so distributed members participate equally — protecting trust and engagement." },

  { domain: "People", q: "Which action best demonstrates a servant leader 'shielding the team'?",
    options: ["Forwarding every stakeholder request straight to developers","Filtering interruptions and buffering the team from churn so they can focus","Assigning extra reporting to the team","Cancelling the team's breaks to hit a date"],
    answer: 1, explain: "Servant leaders protect the team's focus by managing interruptions and absorbing organizational churn, freeing the team to deliver." },

  { domain: "People", q: "A team member privately tells the PM about a serious interpersonal issue with a peer and asks for help. The PM should:",
    options: ["Announce it in the next team meeting","Listen, keep appropriate confidence, and help facilitate a resolution between the parties","Take sides immediately","Tell them to deal with it alone"],
    answer: 1, explain: "Handle interpersonal issues with discretion and emotional intelligence: listen, maintain appropriate confidentiality, and facilitate a fair resolution between the people involved." },

  { domain: "People", q: "Which is the BEST indicator that a team has reached the 'performing' stage?",
    options: ["Frequent unresolved arguments","The team works smoothly and largely self-manages toward goals with minimal friction","No one talks to each other","The PM makes every decision"],
    answer: 1, explain: "In performing, the team is cohesive, trusts one another, and self-manages effectively toward goals — the most productive Tuckman stage." },

  { domain: "People", q: "A PM notices a team member is overloaded while another is underused. What is the BEST action?",
    options: ["Leave it; people should manage themselves","Rebalance the workload and discuss it openly with the team","Add more work to the busy person to keep momentum","Hire a new person immediately"],
    answer: 1, explain: "The PM monitors team performance and workload, rebalancing assignments transparently to sustain morale, quality, and throughput." },

  { domain: "People", q: "An agile team holds a retrospective and surfaces an interpersonal problem. Whose responsibility is it to act on improving how the team works together?",
    options: ["Only the Scrum Master","The whole team, with the Scrum Master facilitating improvements","Only the Product Owner","Only HR"],
    answer: 1, explain: "Retrospective improvements are owned by the team; the Scrum Master facilitates and helps remove impediments, but the team commits to the changes." },

  { domain: "People", q: "A stakeholder repeatedly bypasses the PM and gives direct instructions to team members. What's the BEST first response?",
    options: ["Let it continue to avoid conflict","Speak with the stakeholder to realign on proper channels and protect the team's focus","Report them to the sponsor immediately","Instruct the team to ignore them silently"],
    answer: 1, explain: "Address it directly and respectfully first: clarify communication channels and protect the team, escalating only if the behavior continues." },

  { domain: "People", q: "What is the MAIN value of building trust on a project team?",
    options: ["It removes the need for any process","It enables open communication, faster decisions, healthy conflict, and stronger collaboration","It guarantees no risks occur","It eliminates the need for a sponsor"],
    answer: 1, explain: "Trust is the foundation of high performance: it enables candor, constructive conflict, faster decisions, and genuine collaboration." },

  { domain: "People", q: "A PM must give difficult feedback to a team member. The BEST approach is to:",
    options: ["Send it by email to avoid awkwardness","Deliver it privately, specifically, and constructively, focused on behavior and impact","Mention it offhand in a group setting","Wait for the annual review"],
    answer: 1, explain: "Effective feedback is timely, private, specific, and behavior-focused (not personal), aimed at improvement — consistent with emotional intelligence." },

  { domain: "People", q: "A team is enthusiastic but inexperienced and keeps making avoidable mistakes. Which leadership emphasis fits best now?",
    options: ["Pure delegation","Coaching and directing — provide guidance and skill-building while supporting motivation","Hands-off","Coercion"],
    answer: 1, explain: "High willingness but low competence calls for directing/coaching: provide structure and develop skills while preserving their motivation, per situational leadership." },

  { domain: "People", q: "Which best reflects 'managing stakeholder expectations'?",
    options: ["Promising whatever keeps them quiet","Proactively communicating realistic information and addressing concerns to keep expectations aligned with reality","Sharing only good news","Avoiding contact until delivery"],
    answer: 1, explain: "Managing expectations means honest, proactive communication and addressing concerns so stakeholders' expectations stay aligned with what the project can actually deliver." },

  { domain: "People", q: "A conflict is genuinely minor and likely to resolve itself, and time is extremely tight. Which conflict mode might be acceptable here?",
    options: ["Forcing","Withdraw/avoid temporarily","Always collaborate regardless","Coerce"],
    answer: 1, explain: "While collaboration is usually best, withdrawing can be appropriate for trivial issues or to buy time to cool down — context matters in choosing a conflict mode." },

  { domain: "People", q: "What is the BEST way for a PM to encourage knowledge sharing across the team?",
    options: ["Keep information siloed for control","Foster an open environment with pairing, shared docs, and regular knowledge-transfer opportunities","Reward people for hoarding expertise","Limit meetings entirely"],
    answer: 1, explain: "Knowledge sharing thrives in an open, collaborative culture with pairing, retrospectives, accessible documentation, and deliberate knowledge transfer." },

  { domain: "People", q: "A motivated team is being slowed by an external dependency outside their control. The servant-leader PM's priority is to:",
    options: ["Pressure the team to work faster","Escalate and work the external blocker so the team can keep flowing","Reassign blame to the other group","Reduce the team's scope quietly"],
    answer: 1, explain: "Removing impediments — including chasing external dependencies — is core servant-leader work, freeing the capable team to keep delivering." },

  { domain: "People", q: "Which BEST describes the difference between a manager and a leader in the PMP mindset?",
    options: ["They are identical","Managers focus on processes and control; leaders inspire, set direction, and develop people — a PM needs both","Leaders ignore process entirely","Managers never communicate"],
    answer: 1, explain: "Management deals with processes, plans, and control; leadership inspires, aligns, and develops people. Effective PMs blend both, leaning into leadership for people work." },

  { domain: "People", q: "A team member raises a concern that the project's approach may harm end users. The PM should:",
    options: ["Dismiss it as outside scope","Take it seriously, evaluate the concern, and raise it appropriately — acting ethically","Tell them to stay focused on tasks","Hide it from stakeholders"],
    answer: 1, explain: "Ethical responsibility and stewardship require the PM to take genuine concerns seriously, evaluate them, and surface them — protecting stakeholders and the public interest." },

  { domain: "People", q: "An agile team's members are afraid to admit when a story is behind. What should the leader cultivate to fix this?",
    options: ["Stricter individual deadlines","Psychological safety and transparency, so problems surface early without blame","More detailed status reports","Individual performance rankings"],
    answer: 1, explain: "Fear hides problems. Building psychological safety and a blameless, transparent culture lets issues surface early when they're cheapest to fix." },

  { domain: "People", q: "What is the PRIMARY reason to involve the team in estimating their own work?",
    options: ["It's faster than the PM doing it alone","Those doing the work give more accurate estimates and gain commitment/ownership","It removes accountability from the PM","It eliminates the need for a schedule"],
    answer: 1, explain: "People who do the work estimate more accurately and, by participating, commit to the result — improving both realism and buy-in." },

  { domain: "People", q: "A PM is leading a hybrid team where some members resist agile ceremonies as 'extra meetings.' The BEST response is to:",
    options: ["Cancel the ceremonies","Explain the purpose and value of each ceremony and adapt them to the team's real needs","Make attendance mandatory with penalties","Ignore the resistance"],
    answer: 1, explain: "Address resistance by educating on the 'why' and tailoring practices to deliver real value — forcing or abandoning them both miss the point." },

  /* ============================================================
     PROCESS  (50%)
     ============================================================ */

  { domain: "Process", q: "Partway through execution, a stakeholder asks for a significant new capability. What should the PM do FIRST?",
    options: ["Add it right away to keep them happy","Reject it because the scope is baselined","Analyze the impact and submit a change request through integrated change control","Have the team quietly fit it into current work"],
    answer: 2, explain: "All changes flow through integrated change control: assess impact, raise a change request, and let the change control board decide. Never implement unapproved changes." },

  { domain: "Process", q: "The customer is about to formally sign off on completed deliverables. Which process is occurring?",
    options: ["Control Quality","Validate Scope","Close Project or Phase","Manage Quality"],
    answer: 1, explain: "Validate Scope is the formal customer acceptance of deliverables. Control Quality (the internal correctness check) happens before it." },

  { domain: "Process", q: "A project reports CPI = 0.9 and SPI = 1.2. What does this mean?",
    options: ["Over budget and behind schedule","Under budget and ahead of schedule","Over budget but ahead of schedule","Under budget but behind schedule"],
    answer: 2, explain: "CPI < 1 means over budget; SPI > 1 means ahead of schedule. So the project is over budget but ahead of schedule." },

  { domain: "Process", q: "BAC = $200,000, EV = $90,000, AC = $100,000. Assuming current cost performance continues, what is the EAC?",
    options: ["$210,000","$222,222","$190,000","$200,000"],
    answer: 1, explain: "CPI = EV/AC = 90,000/100,000 = 0.9. EAC = BAC/CPI = 200,000/0.9 ≈ $222,222." },

  { domain: "Process", q: "An activity can slip 4 days without pushing out the project's finish date. What is this 4 days called?",
    options: ["Lead","Lag","Total float (slack)","Free float"],
    answer: 2, explain: "Total float is how long an activity can be delayed without delaying the project finish. Free float is delay without affecting the next activity's early start." },

  { domain: "Process", q: "The project is running late, and the sponsor wants the original date held and is willing to accept added risk but NOT extra cost. Which technique fits?",
    options: ["Crashing","Fast-tracking","Resource leveling","Reserve analysis"],
    answer: 1, explain: "Fast-tracking overlaps activities that were sequential — it preserves the date without added cost but raises risk/rework. Crashing would add cost." },

  { domain: "Process", q: "The project is late and the sponsor approves spending more to recover the date. Which schedule-compression technique adds cost to save time?",
    options: ["Fast-tracking","Crashing","Resource smoothing","Lead and lag"],
    answer: 1, explain: "Crashing adds resources (and cost) to critical-path activities to shorten duration. Fast-tracking adds risk instead of cost." },

  { domain: "Process", q: "Optimistic = 8, Most Likely = 14, Pessimistic = 26 days. What is the PERT (beta/three-point) estimate?",
    options: ["16 days","15 days","14 days","18 days"],
    answer: 1, explain: "Beta PERT = (O + 4M + P)/6 = (8 + 56 + 26)/6 = 90/6 = 15 days." },

  { domain: "Process", q: "Optimistic = 10, Most Likely = 16, Pessimistic = 28. What is the standard deviation of this PERT estimate?",
    options: ["3","6","18","2"],
    answer: 0, explain: "PERT standard deviation = (P − O)/6 = (28 − 10)/6 = 18/6 = 3." },

  { domain: "Process", q: "A risk that was identified earlier has now actually occurred. Where is it primarily managed now?",
    options: ["Risk register only","Issue log","Change log","Assumption log"],
    answer: 1, explain: "Once a risk occurs it becomes an issue and is tracked and managed in the issue log (while it remains noted in the risk register)." },

  { domain: "Process", q: "You purchase insurance to cover the financial impact of a possible major threat. Which risk response is this?",
    options: ["Mitigate","Avoid","Transfer","Accept"],
    answer: 2, explain: "Transfer shifts the impact and ownership of a threat to a third party — insurance, warranties, bonds, or contracts." },

  { domain: "Process", q: "An opportunity could let you finish early, and you assign your best people to make sure it definitely happens. Which positive-risk response is this?",
    options: ["Enhance","Exploit","Share","Accept"],
    answer: 1, explain: "Exploit makes an opportunity certain to occur. Enhance only increases its probability or impact; exploit removes the uncertainty entirely." },

  { domain: "Process", q: "You partner with a specialist firm to jointly pursue an opportunity neither of you could capture alone. Which positive-risk response is this?",
    options: ["Exploit","Enhance","Share","Escalate"],
    answer: 2, explain: "Share allocates ownership of an opportunity to a third party best able to capture it for the project's benefit (e.g., a joint venture or partnership)." },

  { domain: "Process", q: "Which reserve covers identified ('known-unknown') risks and is controlled directly by the project manager?",
    options: ["Management reserve","Contingency reserve","Profit margin","Cost overrun buffer"],
    answer: 1, explain: "Contingency reserve covers known risks, sits inside the cost baseline, and is managed by the PM. Management reserve covers unknown-unknowns and needs management approval." },

  { domain: "Process", q: "On a control chart, seven points in a row sit on one side of the mean, all within the control limits. What does this signal?",
    options: ["The process is perfectly fine","The rule of seven — a non-random trend worth investigating","Recalculate the control limits","Halt the process at once"],
    answer: 1, explain: "The rule of seven: seven consecutive points on one side of the mean indicate a non-random pattern that should be investigated, even within limits." },

  { domain: "Process", q: "Which contract type places the MOST cost risk on the SELLER?",
    options: ["Cost Plus Fixed Fee (CPFF)","Time and Materials (T&M)","Firm Fixed Price (FFP)","Cost Plus Incentive Fee (CPIF)"],
    answer: 2, explain: "Under firm fixed price the seller absorbs any cost overrun, so the seller carries the most cost risk. Cost-reimbursable contracts shift cost risk to the buyer." },

  { domain: "Process", q: "Scope is poorly defined and likely to evolve as work proceeds. Which contract type is MOST appropriate?",
    options: ["Firm Fixed Price","Cost-reimbursable (e.g., CPFF/CPIF)","Fixed Price with Economic Price Adjustment","Purchase order"],
    answer: 1, explain: "When scope is uncertain, cost-reimbursable contracts fit because the buyer absorbs cost risk while the scope is refined; FFP needs well-defined scope." },

  { domain: "Process", q: "What is the PRIMARY purpose of the lessons learned register?",
    options: ["To assign blame for failures","To capture knowledge during the project to improve current and future work","To replace the closure report","To satisfy auditors only"],
    answer: 1, explain: "Lessons learned are captured continuously to improve the current project and benefit future ones — and they are never about blame." },

  { domain: "Process", q: "Raw status measurements are analyzed and compared against the baseline. What is this analyzed output called?",
    options: ["Work performance data","Work performance information","Work performance reports","Change requests"],
    answer: 1, explain: "Raw data becomes work performance information once analyzed in Monitoring & Controlling; work performance reports are the packaged communications of that information." },

  { domain: "Process", q: "Per the PMI mindset, quality should be achieved primarily through:",
    options: ["Heavy inspection at the end","Prevention — building quality in throughout the work","Rework after delivery","Adding extra features customers didn't ask for"],
    answer: 1, explain: "PMI favors prevention over inspection: build quality in. Prevention is cheaper than the cost of failure (internal and external)." },

  { domain: "Process", q: "A deliverable just failed internal inspection. What must happen before it goes to the customer for acceptance?",
    options: ["Send it anyway to save time","Run Control Quality, fix the defects, then proceed to Validate Scope","Skip directly to Validate Scope","Close the project"],
    answer: 1, explain: "Control Quality (internal correctness) precedes Validate Scope (customer acceptance). Defects must be corrected before the customer is asked to accept." },

  { domain: "Process", q: "BAC = $120,000, the work is 40% complete, and AC = $60,000. What is the cost variance (CV)?",
    options: ["−$12,000","+$12,000","−$36,000","$0"],
    answer: 0, explain: "EV = 40% × 120,000 = 48,000. CV = EV − AC = 48,000 − 60,000 = −$12,000 (over budget)." },

  { domain: "Process", q: "BAC = $120,000, EV = $48,000, PV = $60,000. What is the schedule variance (SV) and what does it indicate?",
    options: ["+$12,000, ahead of schedule","−$12,000, behind schedule","−$12,000, ahead of schedule","$0, on schedule"],
    answer: 1, explain: "SV = EV − PV = 48,000 − 60,000 = −$12,000. A negative SV means the project is behind schedule." },

  { domain: "Process", q: "EV = $50,000 and PV = $40,000. What is the SPI, and what does it tell you?",
    options: ["1.25 — ahead of schedule","0.8 — behind schedule","1.25 — behind schedule","0.8 — ahead of schedule"],
    answer: 0, explain: "SPI = EV/PV = 50,000/40,000 = 1.25. SPI > 1 means ahead of schedule." },

  { domain: "Process", q: "Which document formally authorizes the project and grants the PM authority to apply organizational resources?",
    options: ["Project management plan","Project charter","Business case","Scope statement"],
    answer: 1, explain: "The project charter authorizes the project and empowers the PM. It's issued by the sponsor/initiator, not the PM." },

  { domain: "Process", q: "A team member implemented a change directly without approval. What should the PM do?",
    options: ["Accept it since the work is already done","Assess the impact, document it, and run it through integrated change control","Reprimand them publicly in standup","Reverse it instantly without any analysis"],
    answer: 1, explain: "Even after the fact, evaluate impact and process the change formally to preserve baseline/configuration integrity. Knee-jerk acceptance or reversal both skip due diligence." },

  { domain: "Process", q: "An activity on the critical path (zero float) is delayed by 3 days. What happens to the project?",
    options: ["Nothing — there's slack","The project finish slips 3 days unless you compress the schedule","Only the next activity is delayed","The budget rises automatically"],
    answer: 1, explain: "Critical-path activities have zero float, so any delay there delays the whole project unless you crash or fast-track to recover." },

  { domain: "Process", q: "Which tool best helps a team systematically explore the root causes of recurring defects?",
    options: ["Pareto chart","Cause-and-effect (Ishikawa / fishbone) diagram","Gantt chart","RACI matrix"],
    answer: 1, explain: "The fishbone (Ishikawa) diagram organizes potential root causes into categories so the team can drill into the true source of a problem." },

  { domain: "Process", q: "A Pareto chart shows that 80% of complaints stem from 20% of the causes. How should you act on this?",
    options: ["Fix every cause equally","Prioritize the 'vital few' causes driving most of the problems","Disregard the chart","Increase inspection everywhere"],
    answer: 1, explain: "Pareto's 80/20 principle directs effort to the vital few causes responsible for the majority of issues — the highest-leverage fixes first." },

  { domain: "Process", q: "A risk has a 25% probability and a $40,000 negative impact. What is its expected monetary value (EMV)?",
    options: ["−$10,000","−$40,000","−$1,000","+$10,000"],
    answer: 0, explain: "EMV = probability × impact = 0.25 × (−$40,000) = −$10,000." },

  { domain: "Process", q: "Implementing a risk response creates a NEW risk as a direct result. What is this new risk called?",
    options: ["Residual risk","Secondary risk","Inherent risk","Trigger"],
    answer: 1, explain: "A secondary risk arises from implementing a risk response. Residual risk is what remains after the response is applied." },

  { domain: "Process", q: "Which estimating technique applies a statistical relationship from historical data, such as cost per square foot times area?",
    options: ["Analogous","Parametric","Expert judgment","Bottom-up"],
    answer: 1, explain: "Parametric estimating multiplies a unit rate by a quantity using a statistical relationship — generally more accurate than analogous when good data exists." },

  { domain: "Process", q: "A PM estimates a new project's cost based on the actual cost of a similar past project, adjusted by judgment. Which technique is this?",
    options: ["Parametric","Analogous (top-down)","Bottom-up","Three-point"],
    answer: 1, explain: "Analogous (top-down) estimating uses data from a similar past project plus expert judgment. It's fast and cheap but less accurate than parametric or bottom-up." },

  { domain: "Process", q: "The most accurate but most time-consuming way to estimate total cost is to estimate each work package and roll them up. Which technique is this?",
    options: ["Analogous","Parametric","Bottom-up","Rough order of magnitude"],
    answer: 2, explain: "Bottom-up estimating sums detailed estimates of each lower-level component. It's the most accurate but the most effort- and time-intensive." },

  { domain: "Process", q: "A risk has been actively accepted. What is the appropriate proactive measure if it occurs?",
    options: ["Do nothing at all, ever","Set up a contingency reserve/plan to use if the risk materializes","Transfer it to a vendor instead","Delete it from the register"],
    answer: 1, explain: "Active acceptance establishes a contingency reserve or fallback plan to deal with the risk if it happens, even though no action is taken now to change it." },

  { domain: "Process", q: "When should lessons learned be captured on a project?",
    options: ["Only at project closure","Throughout the project, then rolled into the repository at closure","Only when something fails","Only by the sponsor"],
    answer: 1, explain: "Lessons learned are recorded continuously in the lessons learned register and consolidated into the organizational repository at close." },

  { domain: "Process", q: "Which sequence correctly orders the project from start to finish at a high level?",
    options: ["Planning → Initiating → Executing → Closing","Initiating → Planning → Executing → Monitoring & Controlling → Closing","Executing → Planning → Closing","Initiating → Executing → Planning → Closing"],
    answer: 1, explain: "The process groups flow Initiating → Planning → Executing → Monitoring & Controlling → Closing, with M&C overlapping throughout." },

  { domain: "Process", q: "What is decomposed to create the work breakdown structure (WBS), and what is its lowest level called?",
    options: ["Activities; milestones","Project scope/deliverables; work packages","Costs; control accounts","Risks; triggers"],
    answer: 1, explain: "The WBS decomposes the total project scope/deliverables into progressively smaller pieces; the lowest level is the work package." },

  { domain: "Process", q: "What does the 100% rule of the WBS state?",
    options: ["The project must be 100% complete before planning","The WBS must include 100% of the work defined by the scope — no more, no less","Every package must take 100 hours","100% of the team must approve it"],
    answer: 1, explain: "The 100% rule: the WBS captures all the work in scope (and only that work). Work not in the WBS is outside the project." },

  { domain: "Process", q: "A stakeholder keeps requesting small, informal scope additions during execution. What is the BEST way to handle this?",
    options: ["Accept all small changes to keep goodwill","Evaluate each through change control and protect the scope baseline","Refuse every change flatly","Let the team decide informally"],
    answer: 1, explain: "Prevent scope creep by routing every change — large or small — through integrated change control rather than absorbing them informally." },

  { domain: "Process", q: "The sponsor asks the PM to forecast the total cost at completion given a persistent cost overrun (CPI 0.85). Which value should the PM report?",
    options: ["BAC","EAC","PV","SV"],
    answer: 1, explain: "EAC (estimate at completion) forecasts the total expected cost. With a steady variance, EAC = BAC/CPI." },

  { domain: "Process", q: "BAC = $100,000, EAC = $125,000. What is the variance at completion (VAC), and what does it indicate?",
    options: ["+$25,000, under budget","−$25,000, over budget","−$25,000, under budget","$0, on budget"],
    answer: 1, explain: "VAC = BAC − EAC = 100,000 − 125,000 = −$25,000. A negative VAC means the project is forecast to finish over budget." },

  { domain: "Process", q: "The remaining work must be done within the remaining budget to hit the original BAC. Which index tells you the efficiency required from here on?",
    options: ["CPI","SPI","TCPI (to-complete performance index)","EMV"],
    answer: 2, explain: "TCPI = (BAC − EV)/(BAC − AC) gives the cost efficiency needed on remaining work to meet the BAC. A TCPI above 1 means you must do better than planned." },

  { domain: "Process", q: "Which document defines acceptance criteria, deliverables, exclusions, assumptions, and constraints for the project?",
    options: ["Project charter","Project scope statement","Risk register","Stakeholder register"],
    answer: 1, explain: "The project scope statement details the deliverables, acceptance criteria, exclusions, assumptions, and constraints — the basis for what's in and out of scope." },

  { domain: "Process", q: "What is the difference between the project scope and the product scope?",
    options: ["They are the same thing","Product scope = features/functions of the result; project scope = the work to deliver it","Project scope is always larger","Product scope includes the schedule"],
    answer: 1, explain: "Product scope is the features and functions of the product/service; project scope is the work required to deliver that product, measured against the scope baseline." },

  { domain: "Process", q: "What three components make up the scope baseline?",
    options: ["Charter, business case, and plan","Scope statement, WBS, and WBS dictionary","Schedule, cost, and quality","Risk, issue, and change logs"],
    answer: 1, explain: "The scope baseline = the approved scope statement, the WBS, and the WBS dictionary — used to measure and control scope." },

  { domain: "Process", q: "What is a milestone in a project schedule?",
    options: ["A task with a long duration","A significant point or event with zero duration","The critical path","A type of buffer"],
    answer: 1, explain: "A milestone marks a significant event or point in time and has zero duration — e.g., 'phase complete' or 'approval received.'" },

  { domain: "Process", q: "Two activities have a finish-to-start relationship, and you intentionally add a 3-day wait between them. What is this delay called?",
    options: ["Lead","Lag","Float","Crash"],
    answer: 1, explain: "Lag is an intentional delay between dependent activities (e.g., waiting for concrete to cure). Lead is an acceleration that lets a successor start early." },

  { domain: "Process", q: "A successor activity is allowed to start before its predecessor fully finishes. What is this acceleration called?",
    options: ["Lag","Lead","Total float","Resource leveling"],
    answer: 1, explain: "Lead lets a successor begin before the predecessor is complete (overlap), often used to fast-track. Lag is a deliberate delay." },

  { domain: "Process", q: "A dependency is legally or physically required — you literally cannot build the walls before the foundation. What kind of dependency is this?",
    options: ["Discretionary","Mandatory (hard logic)","External","Internal"],
    answer: 1, explain: "Mandatory (hard logic) dependencies are inherent in the nature of the work or required by contract/law. Discretionary (soft logic) dependencies are preferred but not required." },

  { domain: "Process", q: "Resource leveling is applied to a schedule. What is its typical effect?",
    options: ["It always shortens the project","It can change (often extend) the critical path to resolve resource over-allocation","It removes all float","It increases resource conflicts"],
    answer: 1, explain: "Resource leveling adjusts start/finish dates to address resource constraints/over-allocation and can lengthen the project and alter the critical path. Smoothing keeps the end date and uses float." },

  { domain: "Process", q: "Cost of conformance includes which of the following?",
    options: ["Rework and scrap","Warranty claims and lost business","Training, quality processes, and inspection/testing","Liabilities and recalls"],
    answer: 2, explain: "Cost of conformance (prevention + appraisal) includes training, quality planning, inspection, and testing. Nonconformance costs (rework, scrap, warranty, recalls) are failure costs." },

  { domain: "Process", q: "Which quality tool plots two variables to reveal whether a relationship/correlation exists between them?",
    options: ["Histogram","Scatter diagram","Control chart","Flowchart"],
    answer: 1, explain: "A scatter diagram plots an independent against a dependent variable to show correlation. Histograms show distribution; control charts show stability over time." },

  { domain: "Process", q: "A risk register entry needs a quick prioritization using probability and impact only. Which analysis is this?",
    options: ["Quantitative risk analysis","Qualitative risk analysis","Monte Carlo simulation","Sensitivity analysis"],
    answer: 1, explain: "Qualitative risk analysis prioritizes risks subjectively by probability and impact (often via a P-I matrix). Quantitative analysis assigns numeric values, e.g., Monte Carlo or EMV." },

  { domain: "Process", q: "A PM runs a Monte Carlo simulation on the schedule. What is the PURPOSE of this?",
    options: ["To assign blame for delays","To model the probability of various outcomes given uncertainty in inputs","To replace the WBS","To set the contract type"],
    answer: 1, explain: "Monte Carlo is a quantitative technique that runs many simulations across input ranges to produce a probability distribution of cost or schedule outcomes." },

  { domain: "Process", q: "A decision tree shows two options with different probabilities and payoffs. What does it help you choose?",
    options: ["The cheapest option always","The option with the best expected monetary value (EMV)","The option the sponsor prefers","The fastest option"],
    answer: 1, explain: "Decision tree analysis computes the EMV of each path (probability × payoff, net of cost) to identify the choice with the best expected value under uncertainty." },

  { domain: "Process", q: "Which risk strategy ELIMINATES a threat entirely, for example by changing the plan to remove the cause?",
    options: ["Mitigate","Avoid","Transfer","Accept"],
    answer: 1, explain: "Avoid removes the threat completely — e.g., changing scope, extending the schedule, or dropping a risky approach so the risk can no longer occur." },

  { domain: "Process", q: "Which risk strategy reduces the probability or impact of a threat to an acceptable level (but doesn't eliminate it)?",
    options: ["Avoid","Mitigate","Transfer","Exploit"],
    answer: 1, explain: "Mitigate lowers a threat's probability and/or impact (e.g., adding redundancy, more testing) without removing the risk entirely." },

  { domain: "Process", q: "A threat is so significant and outside the team's authority that it must be raised to a higher level (e.g., the program or portfolio). Which response is this?",
    options: ["Accept","Escalate","Mitigate","Transfer"],
    answer: 1, explain: "Escalate moves a threat or opportunity outside the project's scope/authority to the appropriate higher level; once escalated, it's owned there, not by the project team." },

  { domain: "Process", q: "What is configuration management primarily concerned with?",
    options: ["Approving change requests","Controlling the product's features/specifications and versions of deliverables and documents","Setting the budget","Hiring the team"],
    answer: 1, explain: "Configuration management controls the product's specifications/features and the versions of deliverables and documents. Change control governs approving/rejecting changes to baselines." },

  { domain: "Process", q: "Who typically approves or rejects change requests on a project?",
    options: ["Any team member","The change control board (CCB) per the change management plan","The customer alone","The vendor"],
    answer: 1, explain: "The change control board reviews and approves/rejects changes according to the change management plan; the PM may have limited delegated authority for minor changes." },

  { domain: "Process", q: "A procurement is best for a clearly defined, standard commodity where price is the main differentiator. Which contract type fits best?",
    options: ["Cost-reimbursable","Firm Fixed Price (FFP)","Time and Materials","Cost Plus Award Fee"],
    answer: 1, explain: "Firm fixed price suits well-defined scope/commodities: the buyer's cost is fixed and the seller bears overrun risk, with price as the key driver." },

  { domain: "Process", q: "A staff-augmentation arrangement pays an hourly rate for resources with an unknown total quantity. Which contract type is this?",
    options: ["Firm Fixed Price","Time and Materials (T&M)","CPFF","FP-EPA"],
    answer: 1, explain: "Time and materials is a hybrid: a set rate per hour/unit but open quantity, useful for staff augmentation or when full scope isn't known. Risk is shared and it should be capped." },

  { domain: "Process", q: "During Close Procurements, the buyer and seller settle final payments and formally accept the work. What is essential to capture for the organization?",
    options: ["Nothing, just pay the invoice","Procurement records, lessons learned, and formal acceptance/closure documentation","Only the seller's marketing materials","A new charter"],
    answer: 1, explain: "Closing procurements requires verifying deliverables, settling claims, documenting lessons learned, and archiving complete procurement records and formal acceptance." },

  { domain: "Process", q: "The PM discovers the project will likely miss a regulatory deadline. What should the PM do FIRST?",
    options: ["Hide it and hope to catch up","Analyze options and communicate honestly to stakeholders, then replan through proper channels","Blame the team","Quietly reduce quality to save time"],
    answer: 1, explain: "Be transparent and proactive: assess impact and options, communicate honestly, and replan via change control. Hiding problems violates the PMI mindset and ethics." },

  { domain: "Process", q: "Which document captures high-level risks, assumptions, constraints, and the initial stakeholder list very early — even before detailed planning?",
    options: ["Project management plan","Project charter (and assumption log)","WBS dictionary","Quality management plan"],
    answer: 1, explain: "The charter captures high-level risks, objectives, and a summary milestone/budget; the assumption log (started in initiating) records assumptions and constraints from the outset." },

  { domain: "Process", q: "The project management plan is best described as:",
    options: ["A single schedule document","An integrated set of subsidiary plans and baselines describing how the project is executed, monitored, and controlled","The charter with a new name","Only the cost baseline"],
    answer: 1, explain: "The PM plan integrates the subsidiary management plans (scope, schedule, cost, quality, etc.) and the baselines (scope, schedule, cost) into one comprehensive plan." },

  { domain: "Process", q: "A predictive project just finished a phase and must decide whether to continue. What is this go/no-go decision point called?",
    options: ["A milestone party","A phase gate (stage gate / kill point)","A retrospective","A baseline"],
    answer: 1, explain: "A phase gate (stage gate/kill point) is a review at a phase end to decide whether to continue, change, or terminate based on performance and continued business justification." },

  { domain: "Process", q: "What is the MAIN purpose of integrated change control?",
    options: ["To prevent all changes","To review, assess impact across all areas, and coordinate approved changes consistently","To let the PM change anything freely","To bypass the change board"],
    answer: 1, explain: "Integrated change control ensures changes are evaluated for impact across scope, schedule, cost, quality, and risk, then approved and coordinated coherently — not piecemeal." },

  { domain: "Process", q: "A PM needs to determine the order in which activities must be performed. Which process produces the network diagram?",
    options: ["Define Activities","Sequence Activities","Estimate Durations","Develop Schedule"],
    answer: 1, explain: "Sequence Activities establishes logical relationships among activities (using the precedence diagramming method) to produce the project schedule network diagram." },

  { domain: "Process", q: "A risk's 'trigger' is best described as:",
    options: ["The risk owner","A warning sign or condition indicating the risk is about to occur or has occurred","The risk response cost","The residual risk"],
    answer: 1, explain: "A trigger (warning sign) is an indicator that a risk is about to happen or is happening, prompting the team to enact the planned response." },

  { domain: "Process", q: "What is the primary output of the Direct and Manage Project Work process?",
    options: ["The project charter","Deliverables and work performance data","Validated deliverables","The project plan"],
    answer: 1, explain: "Direct and Manage Project Work (executing) produces deliverables and the raw work performance data, plus issue log updates and change requests." },

  { domain: "Process", q: "Validated deliverables (from Control Quality) differ from accepted deliverables (from Validate Scope) in that:",
    options: ["They are the same","Validated = checked internally for correctness; accepted = formally signed off by the customer","Accepted comes first","Validated means the project is closed"],
    answer: 1, explain: "Control Quality produces validated (correct) deliverables; Validate Scope produces accepted deliverables via formal customer sign-off. Validation precedes acceptance." },

  { domain: "Process", q: "Which analysis identifies which individual project risks have the most potential impact on overall project outcomes?",
    options: ["Pareto analysis","Sensitivity analysis (e.g., tornado diagram)","Make-or-buy analysis","Trend analysis"],
    answer: 1, explain: "Sensitivity analysis, often shown as a tornado diagram, ranks which risks/variables most influence the project outcome, focusing attention on the biggest drivers." },

  { domain: "Process", q: "A PM must decide whether to produce a component in-house or purchase it. Which analysis supports this?",
    options: ["Make-or-buy analysis","Earned value analysis","Variance analysis","Root cause analysis"],
    answer: 0, explain: "Make-or-buy analysis weighs the costs and benefits of producing internally versus procuring externally, informing procurement strategy." },

  { domain: "Process", q: "What is the purpose of a bidder conference (pre-bid conference) in procurement?",
    options: ["To award the contract","To ensure all prospective sellers get the same information and a fair chance to ask questions","To negotiate the final price","To close the contract"],
    answer: 1, explain: "Bidder/pre-bid conferences give all prospective sellers the same information and clarifications, ensuring a fair, transparent procurement before proposals are submitted." },

  { domain: "Process", q: "The cost performance baseline (cost baseline) is best described as:",
    options: ["The total of all costs including management reserve","The time-phased, approved budget excluding management reserve, used to measure cost performance","Just the contingency reserve","The funding limit"],
    answer: 1, explain: "The cost baseline is the approved, time-phased budget (including contingency reserve) against which performance is measured; management reserve sits outside it." },

  { domain: "Process", q: "A quality audit on a project is primarily intended to:",
    options: ["Inspect each deliverable for defects","Confirm that processes comply with policies/standards and identify improvements and good practices","Accept deliverables formally","Calculate earned value"],
    answer: 1, explain: "Quality audits (in Manage Quality) check whether project activities follow organizational/quality policies, and they surface gaps, best practices, and improvements." },

  { domain: "Process", q: "Which document records identified issues, owners, status, and resolution actions during execution?",
    options: ["Risk register","Issue log","Change log","Assumption log"],
    answer: 1, explain: "The issue log tracks current issues — owner, priority, status, target resolution — so they're actively managed and resolved." },

  { domain: "Process", q: "A risk audit (as opposed to a risk review) primarily evaluates:",
    options: ["Whether risks have occurred","The effectiveness of risk responses and the risk management process itself","The project's earned value","The procurement strategy"],
    answer: 1, explain: "A risk audit examines the effectiveness of risk responses and the overall risk management process; a risk review reassesses current risks and identifies new ones." },

  { domain: "Process", q: "What does a RACI chart's single 'A' per row signify, and why does it matter?",
    options: ["Multiple approvers for speed","Exactly one Accountable person per activity, ensuring clear ownership","Anyone can approve","The activity is automated"],
    answer: 1, explain: "Best practice is exactly one Accountable per activity so ownership is unambiguous; multiple 'A's create confusion over who is ultimately answerable." },

  { domain: "Process", q: "Which approach to control monitors the project against baselines and forecasts future performance to enable proactive corrective action?",
    options: ["Reactive firefighting","Earned value management and variance/trend analysis","Waiting for the closeout report","Ad hoc status meetings only"],
    answer: 1, explain: "EVM with variance and trend analysis compares performance to baselines and forecasts outcomes (EAC, ETC, TCPI), enabling proactive corrective and preventive action." },

  { domain: "Process", q: "The customer disputes whether a deliverable meets the contract. Where are the agreed acceptance criteria primarily defined to resolve this?",
    options: ["The risk register","The scope statement / requirements documentation (and contract for procured work)","The issue log","The team charter"],
    answer: 1, explain: "Acceptance criteria live in the scope statement and requirements documentation (and the contract/SOW for procured work) — the objective basis for accepting deliverables." },

  { domain: "Process", q: "The schedule baseline has changed because an approved change added scope. What must the PM do?",
    options: ["Keep using the old baseline","Update the baseline and related plan documents to reflect the approved change","Ignore the change in reporting","Delete the original schedule"],
    answer: 1, explain: "Approved changes drive baseline updates: the schedule (and any affected cost/scope baselines and plan documents) must be revised so performance is measured against current reality." },

  { domain: "Process", q: "What is 'progressive elaboration' in project management?",
    options: ["Adding scope without approval","Continuously refining plans and estimates in greater detail as more information becomes known","Finishing all planning before any work","Skipping detailed planning"],
    answer: 1, explain: "Progressive elaboration iteratively refines plans, estimates, and details as the project advances and information improves — not to be confused with uncontrolled scope creep." },

  { domain: "Process", q: "A PM wants to prevent a defect-prone process from producing more defects in the future. Which is a PREVENTION cost?",
    options: ["Reworking defective units","Inspecting finished products","Training staff and improving the process","Handling warranty claims"],
    answer: 2, explain: "Prevention costs (training, process improvement, quality planning) are spent to keep defects from occurring. Inspection is appraisal; rework and warranties are failure costs." },

  { domain: "Process", q: "Define Activities decomposes work packages into:",
    options: ["Deliverables","Schedule activities (the actions needed to produce the deliverables)","Risks","Milestones only"],
    answer: 1, explain: "Define Activities breaks work packages from the WBS into the specific schedule activities required to produce each deliverable." },

  { domain: "Process", q: "Which is the correct order of the schedule processes?",
    options: ["Develop Schedule → Define Activities → Sequence Activities","Define Activities → Sequence Activities → Estimate Durations → Develop Schedule","Estimate Durations → Define Activities → Develop Schedule","Sequence Activities → Define Activities → Develop Schedule"],
    answer: 1, explain: "Schedule planning flows Define Activities → Sequence Activities → Estimate Activity Durations → Develop Schedule (with Plan Schedule Management first)." },

  { domain: "Process", q: "A PM notices actual costs are tracking fine but the project is falling behind on deliverables. Which metric will reveal the schedule problem?",
    options: ["CPI","SPI / SV","ROI","NPV"],
    answer: 1, explain: "Schedule performance shows in SPI (EV/PV) and SV (EV−PV). Cost metrics (CPI/CV) can look fine even while the schedule slips." },

  { domain: "Process", q: "What is the FIRST thing a PM should do when a significant unexpected problem arises during execution?",
    options: ["Immediately escalate to the sponsor","Understand the problem and assess its impact before deciding on a response","Implement the first solution that comes to mind","Add it silently to the risk register"],
    answer: 1, explain: "PMI mindset: gather information and assess impact first, then choose an informed response (often via change control) rather than reacting hastily or escalating prematurely." },

  /* ============================================================
     AGILE / HYBRID  (~half the exam)
     ============================================================ */

  { domain: "Agile/Hybrid", q: "Midway through a sprint, a stakeholder insists a new high-priority feature be added immediately. What should the team do?",
    options: ["Add it to the current sprint right away","Add it to the product backlog for the Product Owner to prioritize for a future sprint","Cancel the sprint and replan","Have the team work overtime to fit it in"],
    answer: 1, explain: "The sprint scope is protected. New requests go to the product backlog, where the Product Owner prioritizes them for a future sprint." },

  { domain: "Agile/Hybrid", q: "Who is accountable for maximizing the product's value and ordering the product backlog?",
    options: ["Scrum Master","Product Owner","Developers","Project sponsor"],
    answer: 1, explain: "The Product Owner owns and orders the product backlog to maximize value — they decide the 'what' and 'why.'" },

  { domain: "Agile/Hybrid", q: "What is the primary purpose of the sprint retrospective?",
    options: ["Demo the increment to stakeholders","Plan the next sprint's work","Inspect and improve how the team works (process, people, tools)","Reorder the product backlog"],
    answer: 2, explain: "The retrospective is the team's opportunity to inspect and adapt its own process and relationships. The sprint review (different event) demos the increment." },

  { domain: "Agile/Hybrid", q: "A team completes roughly 32 story points each sprint. What is this measure called, and how should it be used?",
    options: ["Cycle time; to bill clients","Velocity; to forecast the team's own future capacity","Lead time; to rank individuals","Throughput; to compare teams"],
    answer: 1, explain: "Velocity is points completed per sprint, used to forecast that team's capacity. It must never be used to compare or rank different teams." },

  { domain: "Agile/Hybrid", q: "In Kanban, what is the primary mechanism for improving flow and exposing bottlenecks?",
    options: ["Fixed-length sprints","Limiting work in progress (WIP)","Story-point estimation","Daily standups"],
    answer: 1, explain: "Kanban limits WIP to smooth flow and surface bottlenecks, using continuous flow rather than timeboxed iterations." },

  { domain: "Agile/Hybrid", q: "Which statement best reflects a value from the Agile Manifesto?",
    options: ["Comprehensive documentation over working software","Following a plan over responding to change","Customer collaboration over contract negotiation","Processes and tools over individuals and interactions"],
    answer: 2, explain: "The manifesto values customer collaboration over contract negotiation — and individuals/interactions, working software, and responding to change over the right-hand items." },

  { domain: "Agile/Hybrid", q: "A stakeholder demands a firm, fixed full scope and delivery date for a year out on an agile project. What is the BEST response?",
    options: ["Commit to the entire scope and date","Explain incremental delivery and collaborate on a prioritized, evolving roadmap","Refuse to provide any timeline","Switch the project to predictive on the spot"],
    answer: 1, explain: "Agile embraces change and delivers value incrementally. Educate the stakeholder and collaborate on a prioritized roadmap rather than locking full scope a year ahead." },

  { domain: "Agile/Hybrid", q: "What is the timebox for the Daily Scrum?",
    options: ["5 minutes","15 minutes","30 minutes","1 hour"],
    answer: 1, explain: "The Daily Scrum is timeboxed to 15 minutes for the developers to inspect progress toward the sprint goal and surface impediments." },

  { domain: "Agile/Hybrid", q: "Which acronym describes the qualities of a well-formed user story?",
    options: ["SMART","INVEST","MoSCoW","SWOT"],
    answer: 1, explain: "INVEST = Independent, Negotiable, Valuable, Estimable, Small, Testable — the marks of a good user story." },

  { domain: "Agile/Hybrid", q: "Which chart makes scope changes visible alongside completed work over time?",
    options: ["Burn-down chart","Burn-up chart","Control chart","Pareto chart"],
    answer: 1, explain: "A burn-up chart plots completed work against a total-scope line, so scope changes show up. A burn-down only shows remaining work." },

  { domain: "Agile/Hybrid", q: "During a sprint, the team realizes a committed story is far bigger than estimated and won't fit. What should they do?",
    options: ["Work unpaid overtime to force it through","Talk with the Product Owner, then re-negotiate sprint scope — split or move the story","Hide it until the review","Cancel the sprint"],
    answer: 1, explain: "Agile values transparency: collaborate with the PO to adjust scope. Protect the sprint goal through honest re-planning, not hidden problems or forced overtime." },

  { domain: "Agile/Hybrid", q: "A stakeholder asks the Scrum Master to slip in a 'quick' feature this sprint. What should the Scrum Master do?",
    options: ["Add it to keep the stakeholder satisfied","Redirect the request to the Product Owner for backlog prioritization","Tell developers to squeeze it in","Refuse curtly and end the conversation"],
    answer: 1, explain: "The Product Owner owns the backlog and priorities. The Scrum Master protects the team and routes requests to the right person rather than disrupting the sprint." },

  { domain: "Agile/Hybrid", q: "The team's velocity has fallen for three straight sprints. What is the BEST first step?",
    options: ["Pile on more work to push them","Raise it in the retrospective to find and address the root cause","Replace team members","Stop tracking velocity"],
    answer: 1, explain: "The retrospective is where the team inspects and adapts. Investigate the root cause collaboratively before any drastic action." },

  { domain: "Agile/Hybrid", q: "What is the correct purpose of the Sprint Review?",
    options: ["Improve the team's internal process","Demonstrate the increment to stakeholders and gather feedback to adapt the backlog","Plan the next sprint's tasks","Conduct individual performance reviews"],
    answer: 1, explain: "The Sprint Review inspects the increment with stakeholders and adapts the product backlog based on feedback. (The retrospective improves the process.)" },

  { domain: "Agile/Hybrid", q: "A predictive project has a few highly uncertain components. What is often the BEST approach?",
    options: ["Force the entire project to be predictive","Use a hybrid life cycle — predictive for stable parts, iterative/agile for the uncertain parts","Cancel the uncertain components","Wait until all uncertainty disappears"],
    answer: 1, explain: "Hybrid tailoring runs stable work predictively while delivering uncertain work iteratively to manage risk and incorporate learning." },

  { domain: "Agile/Hybrid", q: "Who manages the Sprint Backlog during the sprint?",
    options: ["The Scrum Master","The Product Owner","The Developers (development team)","The sponsor"],
    answer: 2, explain: "The developers own and manage the Sprint Backlog — what they pulled in and how they'll deliver it — self-organizing to meet the sprint goal." },

  { domain: "Agile/Hybrid", q: "The Product Owner is frequently unavailable, leaving the team unsure of priorities. The Scrum Master should:",
    options: ["Make the prioritization calls instead","Coach the organization on the PO's importance and work to secure their availability","Cancel sprints until the PO shows up","Let developers guess at priorities"],
    answer: 1, explain: "The Scrum Master removes organizational impediments and coaches stakeholders. An absent PO is an impediment to resolve, not a reason to override the role." },

  { domain: "Agile/Hybrid", q: "A burndown chart trending ABOVE the ideal line means what?",
    options: ["The team is ahead of schedule","The team is behind — remaining work isn't dropping fast enough","Scope was reduced","The sprint is complete"],
    answer: 1, explain: "If actual remaining work sits above the ideal line, the team is behind the pace needed to complete the sprint's planned work." },

  { domain: "Agile/Hybrid", q: "In Kanban, too many items are in progress and delivery has slowed. What is the BEST action?",
    options: ["Add more people","Set or lower WIP limits to improve flow","Start even more items in parallel","Remove the board"],
    answer: 1, explain: "Lowering WIP limits reduces multitasking and bottlenecks, improving flow and cycle time — the heart of Kanban." },

  { domain: "Agile/Hybrid", q: "How should requirements be handled on an agile project?",
    options: ["Fully defined and frozen up front","Captured as a prioritized, evolving product backlog and refined progressively","Ignored until the end","Defined only by the PM"],
    answer: 1, explain: "Agile uses a living, prioritized backlog with progressive elaboration — embracing change rather than freezing scope early." },

  { domain: "Agile/Hybrid", q: "What is the primary measure of progress on an agile project?",
    options: ["Hours worked","Working, valuable product (potentially shippable increments)","Number of meetings held","Pages of documentation produced"],
    answer: 1, explain: "Per the Agile Manifesto, working software/product is the primary measure of progress — value delivered, not activity." },

  { domain: "Agile/Hybrid", q: "What is the purpose of sprint planning?",
    options: ["Demo the increment","Define the sprint goal and select/plan the work the team will do this sprint","Improve the process","Release to production"],
    answer: 1, explain: "Sprint planning sets the sprint goal and selects backlog items the team forecasts it can complete, creating the sprint backlog and an initial plan." },

  { domain: "Agile/Hybrid", q: "What does 'Definition of Done' (DoD) establish for a Scrum team?",
    options: ["The PO's personal preferences","A shared, consistent standard for when work is truly complete (quality bar)","The sprint length","The team's salary structure"],
    answer: 1, explain: "The Definition of Done is the team's shared quality checklist that an increment must meet to be considered complete — ensuring consistent, releasable quality." },

  { domain: "Agile/Hybrid", q: "How does 'acceptance criteria' for a user story differ from the 'Definition of Done'?",
    options: ["They are identical","Acceptance criteria are story-specific conditions; DoD is a team-wide standard applying to all work","DoD is per story; acceptance criteria are team-wide","Neither is used in agile"],
    answer: 1, explain: "Acceptance criteria are conditions specific to a particular story; the Definition of Done is a uniform completeness standard applied to every increment." },

  { domain: "Agile/Hybrid", q: "What is backlog refinement (grooming)?",
    options: ["A formal change board meeting","Ongoing work to clarify, estimate, split, and re-order backlog items so they're ready for future sprints","The same as the retrospective","A way to skip planning"],
    answer: 1, explain: "Backlog refinement is the continuous activity of detailing, estimating, splitting, and ordering backlog items so they're 'ready' when a sprint pulls them in." },

  { domain: "Agile/Hybrid", q: "An agile team uses story points instead of hours. What do story points primarily measure?",
    options: ["Exact hours of effort","Relative size/effort/complexity of work","Calendar days","Individual productivity"],
    answer: 1, explain: "Story points express relative size — a blend of effort, complexity, and uncertainty — rather than absolute time, which improves estimating consistency over time." },

  { domain: "Agile/Hybrid", q: "What is a spike in agile?",
    options: ["A sudden velocity increase","A time-boxed research/experiment task to reduce uncertainty before committing to work","A defect","A type of release"],
    answer: 1, explain: "A spike is a time-boxed investigation (research, prototype, proof of concept) used to gain enough knowledge to estimate or design risky/uncertain work." },

  { domain: "Agile/Hybrid", q: "A team wants to estimate backlog items collaboratively and avoid anchoring. Which technique fits?",
    options: ["Top-down estimating by the PM","Planning poker","Parametric estimating","The PO assigns all points"],
    answer: 1, explain: "Planning poker has team members reveal estimates simultaneously, discuss differences, and converge — leveraging collective knowledge and reducing anchoring bias." },

  { domain: "Agile/Hybrid", q: "What is the role of a servant leader / Scrum Master regarding team impediments?",
    options: ["Assign blame for them","Actively remove or facilitate removal of impediments so the team can deliver","Ignore them as the team's problem","Log them and wait"],
    answer: 1, explain: "Removing impediments is a core servant-leader responsibility — clearing blockers (including organizational ones) so the team can maintain flow." },

  { domain: "Agile/Hybrid", q: "An organization wants frequent feedback and the ability to change direction often. Why does agile support this better than predictive?",
    options: ["Agile has no planning","Agile delivers in short iterations with regular feedback, enabling course corrections","Agile ignores the customer","Agile fixes all scope up front"],
    answer: 1, explain: "Agile's short iterations and frequent feedback loops let stakeholders inspect working product often and adapt direction — ideal for high-change, high-uncertainty work." },

  { domain: "Agile/Hybrid", q: "What is the typical length of a sprint (iteration)?",
    options: ["1 day","1 to 4 weeks","6 months","1 year"],
    answer: 1, explain: "Sprints are short, fixed timeboxes — usually one to four weeks — kept consistent to establish a sustainable, predictable cadence." },

  { domain: "Agile/Hybrid", q: "Why should a sprint's length stay consistent over time?",
    options: ["To make the PO's job easier only","To establish a steady cadence that makes velocity and forecasting meaningful","Because the tool requires it","To avoid retrospectives"],
    answer: 1, explain: "A consistent timebox creates a reliable rhythm so velocity is comparable sprint to sprint and forecasting/planning become meaningful." },

  { domain: "Agile/Hybrid", q: "A team consistently pulls in more than it can finish each sprint. What is the BEST corrective action?",
    options: ["Add more hours indefinitely","Use empirical velocity to forecast realistically and commit to less","Stop doing sprint planning","Remove the Definition of Done"],
    answer: 1, explain: "Over-commitment is fixed by using actual velocity to right-size commitments — sustainable pace produces more reliable delivery than chronic overload." },

  { domain: "Agile/Hybrid", q: "What does 'sustainable pace' mean in agile?",
    options: ["Working maximum overtime to deliver","Maintaining a constant, healthy work rate the team can sustain indefinitely","Working only when motivated","Skipping ceremonies to save time"],
    answer: 1, explain: "Sustainable pace means a steady, healthy work rate the team can maintain long term — protecting quality, morale, and throughput against burnout." },

  { domain: "Agile/Hybrid", q: "An agile team delivers a small, working increment each iteration. What is the main benefit of this incremental delivery?",
    options: ["It delays value to the end","It provides early, frequent value and feedback while reducing risk","It avoids all testing","It eliminates the need for a backlog"],
    answer: 1, explain: "Incremental delivery yields value and feedback early and often, surfaces risks sooner, and lets priorities adapt as learning accrues." },

  { domain: "Agile/Hybrid", q: "Who should attend the Daily Scrum and primarily speak?",
    options: ["All stakeholders and managers","The developers, to coordinate and surface impediments","Only the Scrum Master","Only the Product Owner"],
    answer: 1, explain: "The Daily Scrum is by and for the developers to inspect progress toward the sprint goal and plan the day. Others may observe but it's the developers' event." },

  { domain: "Agile/Hybrid", q: "A traditional manager keeps assigning tasks to individual agile team members. Why is this a problem?",
    options: ["It speeds the team up","It undermines self-organization and team ownership of the work","It's required by Scrum","It improves the Definition of Done"],
    answer: 1, explain: "Self-organizing teams decide who does what. External task assignment erodes ownership, motivation, and the team's ability to optimize its own work." },

  { domain: "Agile/Hybrid", q: "In a hybrid project, which work is typically best suited to a predictive (plan-driven) approach?",
    options: ["Highly uncertain, fast-changing requirements","Stable, well-understood work with clear requirements and low change","Experimental research","Anything the team prefers"],
    answer: 1, explain: "Predictive suits stable, well-defined work with low expected change; agile/iterative suits uncertain, evolving work. Hybrid applies each where it fits." },

  { domain: "Agile/Hybrid", q: "What is the purpose of a product roadmap in agile?",
    options: ["A detailed Gantt chart of every task","A high-level, evolving view of product direction and priorities over time","A fixed contract of scope and dates","A defect tracker"],
    answer: 1, explain: "A product roadmap communicates direction, themes, and priorities at a high level and evolves as learning occurs — not a fixed, task-level commitment." },

  { domain: "Agile/Hybrid", q: "A team finishes its committed work early in the sprint. What should they do?",
    options: ["Stop and wait for the next sprint","Pull the next-highest-priority item from the backlog (with the PO) or improve quality/tech debt","Add unrelated personal projects","Extend the sprint"],
    answer: 1, explain: "Finishing early, the team collaborates with the PO to pull the next prioritized item or invests in quality/refactoring — maintaining flow and value." },

  { domain: "Agile/Hybrid", q: "What does 'fail fast' mean in an agile context?",
    options: ["Encouraging careless work","Surfacing problems and invalid assumptions quickly through small experiments so you can adapt cheaply","Giving up at the first obstacle","Skipping testing"],
    answer: 1, explain: "Fail fast means using small, quick experiments to learn what doesn't work early, when changing course is cheap — turning failure into fast learning." },

  { domain: "Agile/Hybrid", q: "Stakeholders complain they don't know what the agile team is doing. What is the BEST agile-aligned response?",
    options: ["Produce heavy weekly status reports","Increase transparency with information radiators and invite them to sprint reviews","Limit their access to reduce noise","Switch to predictive reporting"],
    answer: 1, explain: "Agile favors transparency through information radiators (boards, burn charts) and direct engagement at sprint reviews over heavy push reporting." },

  { domain: "Agile/Hybrid", q: "What is an 'information radiator'?",
    options: ["A confidential status report","A highly visible display (e.g., task board, burn chart) that broadcasts progress and metrics to anyone","A type of meeting","A risk register"],
    answer: 1, explain: "An information radiator is a big, visible display (physical or digital) that continuously communicates team progress and metrics, promoting transparency." },

  { domain: "Agile/Hybrid", q: "Why does agile emphasize face-to-face (or video) conversation as the most effective communication?",
    options: ["It avoids documentation entirely","It conveys information richly and quickly with immediate feedback","It's cheaper than email","It's required by contract"],
    answer: 1, explain: "The Agile Manifesto holds that direct conversation is the most efficient, effective way to convey information — rich, fast, and with instant feedback." },

  { domain: "Agile/Hybrid", q: "A team's Definition of Done is routinely ignored to 'hit the date.' What is the likely consequence and BEST response?",
    options: ["Faster sustainable delivery; keep doing it","Accumulating technical debt and hidden incompleteness; restore and uphold the DoD","No consequence","Remove the DoD permanently"],
    answer: 1, explain: "Skipping the DoD creates undone work and technical debt that resurfaces later. The team should uphold the DoD and adjust scope/forecast honestly instead." },

  { domain: "Agile/Hybrid", q: "Which best describes the Product Owner's authority over the backlog?",
    options: ["The team overrules the PO on priorities","The PO has final say on ordering and content of the product backlog","The Scrum Master sets priorities","The sponsor edits the backlog directly"],
    answer: 1, explain: "The Product Owner is the single accountable person for the backlog's content and order; for the PO to succeed, the organization must respect their decisions." },

  { domain: "Agile/Hybrid", q: "An organization adopting agile keeps its old command-and-control culture. What is the most likely outcome?",
    options: ["Seamless transformation","Agile practices struggle because the culture conflicts with self-organization and trust","Immediate doubling of velocity","No effect on outcomes"],
    answer: 1, explain: "Agile depends on trust, empowerment, and self-organization. A command-and-control culture undermines these, so practices stall without a cultural mindset shift." },

  { domain: "Agile/Hybrid", q: "What is the main reason agile teams keep iterations short?",
    options: ["To reduce planning","To shorten feedback loops and limit the cost of changing direction","To avoid retrospectives","To increase documentation"],
    answer: 1, explain: "Short iterations tighten feedback loops, so the team validates assumptions frequently and the cost of changing course stays small." },

  { domain: "Agile/Hybrid", q: "A hybrid project uses agile delivery but the governance body requires phase-gate funding reviews. How should the PM reconcile this?",
    options: ["Abandon agile","Tailor the approach — deliver iteratively while providing the governance metrics needed at each gate","Ignore governance","Stop reporting"],
    answer: 1, explain: "Tailoring blends both: the team works iteratively while the PM supplies the value/progress metrics governance needs at each gate — satisfying both worlds." },

  { domain: "Agile/Hybrid", q: "Which metric helps an agile team understand how long it takes a work item to go from start to finish?",
    options: ["Velocity","Cycle time","Story points","Burnup"],
    answer: 1, explain: "Cycle time measures the elapsed time from when work starts to when it's done — a flow metric (with lead time and throughput) central to Kanban improvement." },

  { domain: "Agile/Hybrid", q: "A stakeholder wants to add scope but the team is at capacity. In agile, what is the trade-off conversation?",
    options: ["Always extend the deadline","Reprioritize the backlog — adding higher-value work means lower-value work drops or waits","Add the work for free","Reduce quality"],
    answer: 1, explain: "Agile fixes time/cost and flexes scope: new high-value items can be added by re-prioritizing, pushing lower-value items out — a value trade, not a quality cut." },

  { domain: "Agile/Hybrid", q: "What is the BEST way for an agile team to handle technical debt?",
    options: ["Ignore it until the project ends","Make it visible and address it continuously as part of the backlog","Hide it from the PO","Stop all feature work until it's gone"],
    answer: 1, explain: "Technical debt should be transparent and managed incrementally alongside features (e.g., backlog items, refactoring) so it doesn't silently erode delivery." },

  { domain: "Agile/Hybrid", q: "An agile coach is helping a team adopt agile. What is the coach's PRIMARY goal?",
    options: ["To manage the team's tasks","To build the team's capability and mindset so they can succeed independently","To write all the code","To act as the Product Owner"],
    answer: 1, explain: "An agile coach develops the team's skills, practices, and mindset, aiming to make the team self-sufficient — not to manage or do the work for them." },

  { domain: "Agile/Hybrid", q: "What does 'minimum viable product' (MVP) mean?",
    options: ["A low-quality prototype","The smallest releasable version that delivers value and enables validated learning","The full product with all features","A document of requirements"],
    answer: 1, explain: "An MVP is the smallest product increment that delivers real value and lets the team learn from real users, validating direction before building more." },

  { domain: "Agile/Hybrid", q: "The team and PO disagree on whether a story is 'done.' How should this be resolved going forward?",
    options: ["The PM decides unilaterally","Rely on a clear, agreed Definition of Done and acceptance criteria set in advance","Let the loudest person win","Skip the discussion"],
    answer: 1, explain: "A shared, agreed Definition of Done plus story acceptance criteria provide an objective basis for 'done,' preventing recurring disputes." },

  { domain: "Agile/Hybrid", q: "Which is a key responsibility of the Product Owner toward stakeholders?",
    options: ["Shielding the team from all stakeholders","Engaging stakeholders to understand needs and represent them in backlog priorities","Writing all the code","Running the retrospective"],
    answer: 1, explain: "The PO is the bridge to stakeholders: gathering needs, communicating direction, and reflecting value priorities in the ordered backlog." },

  { domain: "Agile/Hybrid", q: "A team wants to visualize workflow stages and limit work at each stage. Which method is this?",
    options: ["Scrum","Kanban","Waterfall","PRINCE2"],
    answer: 1, explain: "Kanban visualizes the workflow on a board with columns/stages and applies WIP limits per stage to optimize flow — a pull-based, continuous-flow method." },

  { domain: "Agile/Hybrid", q: "In Scrum, can the Scrum Master also act as the Product Owner for the same team?",
    options: ["Yes, it's recommended","No — the roles have conflicting focuses (process/team vs. value/backlog) and should be separate","Yes, on small teams it's required","Only the sponsor decides"],
    answer: 1, explain: "Combining the roles creates a conflict of interest: the SM serves the team/process and the PO maximizes value/owns the backlog. Keeping them separate preserves balance." },

  { domain: "Agile/Hybrid", q: "An agile team is pressured to commit to a fixed scope AND fixed date AND fixed cost. What is the BEST PM guidance?",
    options: ["Agree to all three","Explain that flexing scope (with fixed time/cost) is how agile manages the 'iron triangle,' and prioritize ruthlessly","Drop quality","Refuse to deliver anything"],
    answer: 1, explain: "Agile typically fixes time and cost and flexes scope, delivering the highest-value items first. Locking all three constraints invites failure or quality erosion." },

  { domain: "Agile/Hybrid", q: "What is the main purpose of a sprint goal?",
    options: ["To list every task","To provide a single, coherent objective that gives the sprint focus and flexibility in how it's met","To measure individuals","To replace the backlog"],
    answer: 1, explain: "The sprint goal is a concise objective for the sprint, giving the team a shared purpose and the flexibility to adapt the work while still achieving it." },

  { domain: "Agile/Hybrid", q: "A team repeatedly skips the retrospective because they're 'too busy.' What is the BEST response?",
    options: ["Agree and drop retrospectives","Protect the retrospective — it's how the team continuously improves and removes the very pressures making them busy","Make it optional","Replace it with a status report"],
    answer: 1, explain: "Skipping retrospectives kills continuous improvement. The retrospective is where teams fix the inefficiencies causing their overload — it should be protected, not cut." },

  { domain: "Agile/Hybrid", q: "Which best describes 'inspect and adapt' in Scrum?",
    options: ["A one-time planning event","A recurring empirical cycle of examining results and adjusting work/process accordingly","A documentation standard","A contract type"],
    answer: 1, explain: "Inspect and adapt is the empirical heart of Scrum: regularly examine the product and process (via the events) and adjust to improve outcomes." },

  { domain: "Agile/Hybrid", q: "An agile team is distributed across continents. What practice most helps maintain agility?",
    options: ["Eliminate all synchronous meetings","Use strong collaboration tools, overlapping hours for key ceremonies, and clear team agreements","Switch fully to email","Have one site make all decisions"],
    answer: 1, explain: "Distributed agile teams sustain agility with good collaboration tooling, deliberate overlap for ceremonies, transparency, and explicit working agreements." },

  { domain: "Agile/Hybrid", q: "What does a cumulative flow diagram (CFD) primarily reveal to a Kanban team?",
    options: ["Individual performance","Work distribution across stages over time, exposing bottlenecks and growing WIP","The budget","The team's salaries"],
    answer: 1, explain: "A CFD shows the amount of work in each workflow state over time; widening bands reveal bottlenecks and rising WIP that hurt flow." },

  { domain: "Agile/Hybrid", q: "A Product Owner keeps changing sprint scope mid-sprint. What is the BEST way the Scrum Master should respond?",
    options: ["Allow it for flexibility","Coach the PO that the sprint scope is protected; changes belong in the backlog for future sprints","Cancel every sprint","Ignore the behavior"],
    answer: 1, explain: "Even the PO doesn't change committed sprint scope mid-sprint; new needs go to the backlog. The Scrum Master coaches the PO to protect the sprint goal and team focus." },

  { domain: "Agile/Hybrid", q: "Why does agile prefer small, cross-functional teams?",
    options: ["To reduce payroll","Because they can deliver end-to-end value with less hand-off, faster communication, and shared ownership","Because Scrum forbids specialists","To avoid collaboration"],
    answer: 1, explain: "Small, cross-functional teams hold all the skills to deliver value end-to-end, minimizing hand-offs and dependencies and speeding communication and ownership." },

  { domain: "Agile/Hybrid", q: "A stakeholder asks for a detailed 12-month plan on an agile project. The BEST response is to:",
    options: ["Provide a fixed task-level Gantt for a year","Offer a high-level roadmap and release plan, with detailed planning only for the near term","Refuse to plan","Switch to predictive"],
    answer: 1, explain: "Agile plans at multiple horizons: a high-level roadmap/release plan long term, detailed planning just-in-time for the near term — honoring progressive elaboration." },

  /* ============================================================
     BUSINESS ENVIRONMENT  (8%)
     ============================================================ */

  { domain: "Business Environment", q: "A regulation affecting your project changes mid-execution. What should the PM do FIRST?",
    options: ["Ignore it until the next phase","Assess the compliance impact and incorporate the requirement through change control","Cancel the project","Continue as planned to avoid delay"],
    answer: 1, explain: "Compliance is mandatory. Assess the impact and bring the requirement in via integrated change control — never knowingly ignore compliance." },

  { domain: "Business Environment", q: "Which document justifies the project and is used to measure its success against the business need?",
    options: ["Project charter","Business case","Project management plan","Scope statement"],
    answer: 1, explain: "The business case justifies the investment and links the project to business value/benefits; success is measured against it (and the benefits management plan)." },

  { domain: "Business Environment", q: "A PMO that provides templates, training, and best practices but exercises little control is which type?",
    options: ["Directive","Controlling","Supportive","Projectized"],
    answer: 2, explain: "A supportive PMO is advisory (templates, training, lessons) with low control. Controlling = moderate (compliance); directive = high (manages the projects)." },

  { domain: "Business Environment", q: "In a strong matrix organization, who generally holds more authority over the project?",
    options: ["The functional manager","The project manager","They share equal authority","The PMO director"],
    answer: 1, explain: "Authority rises from functional → weak → balanced → strong matrix → projectized. In a strong matrix, the PM has more authority than the functional manager." },

  { domain: "Business Environment", q: "Stakeholders are resisting a new system the project will deliver. What's the BEST approach?",
    options: ["Mandate adoption through executives","Apply organizational change management — communicate, involve, train, and build readiness","Delay the rollout indefinitely","Cut scope to dodge the resistance"],
    answer: 1, explain: "Use structured change management (e.g., ADKAR, Kotter): build awareness and desire, enable ability, and reinforce adoption — not force alone." },

  { domain: "Business Environment", q: "Benefits from the product are expected six months after launch. Where is this tracked?",
    options: ["Project charter","Benefits management plan","Risk register","Stakeholder register"],
    answer: 1, explain: "The benefits management plan defines expected benefits and when/how they'll be measured and realized — often extending beyond project closure." },

  { domain: "Business Environment", q: "Mid-project, market conditions shift and the business case no longer holds. What should the PM do?",
    options: ["Continue because it was already approved","Raise it with the sponsor/governance — the project may need re-evaluation or termination","Hide it to protect the team","Cut quality to finish faster"],
    answer: 1, explain: "Projects must keep delivering value. If the business case is no longer valid, escalate to governance for a decision — even termination is acceptable." },

  { domain: "Business Environment", q: "Which metric represents the present value of future benefits, accounting for the time value of money?",
    options: ["ROI","Net Present Value (NPV)","Payback period","BAC"],
    answer: 1, explain: "NPV discounts future cash flows to today's value; a higher positive NPV is better. It accounts for the time value of money, unlike simple ROI or payback." },

  { domain: "Business Environment", q: "Choosing between two projects, you compare their NPVs. Which should you generally select?",
    options: ["The one with the lower NPV","The one with the higher (more positive) NPV","The one with the longer payback","NPV is irrelevant"],
    answer: 1, explain: "All else equal, select the project with the higher NPV — it creates more value in present-value terms." },

  { domain: "Business Environment", q: "Two projects: Project A has a payback period of 18 months, Project B of 30 months. On payback alone, which is preferable?",
    options: ["Project B","Project A","They're equal","Cannot tell"],
    answer: 1, explain: "Shorter payback recovers the investment faster, so on payback alone Project A is preferable. (Payback ignores time value and later cash flows, so it's a limited measure.)" },

  { domain: "Business Environment", q: "A directive PMO is involved in your project. What does that mean?",
    options: ["It only provides templates and advice","It takes control and directly manages the projects","It audits compliance but doesn't manage","It has no authority"],
    answer: 1, explain: "A directive PMO has high control and directly manages projects; supportive = advisory; controlling = compliance/moderate control." },

  { domain: "Business Environment", q: "Your deliverable could create an environmental or sustainability concern. As PM, you should:",
    options: ["Ignore it — out of scope","Identify the impact, inform stakeholders, and incorporate responsible measures into the plan","Hide it from the sponsor","Stop the project immediately without analysis"],
    answer: 1, explain: "PMs consider broader value and societal/environmental impact (stewardship), surfacing concerns and addressing them responsibly within governance." },

  { domain: "Business Environment", q: "What is the difference between a project, a program, and a portfolio?",
    options: ["They're synonyms","A project delivers a specific output; a program coordinates related projects for shared benefits; a portfolio aligns all work to strategy","A portfolio is smaller than a project","A program is one task"],
    answer: 1, explain: "A project produces a unique result; a program manages related projects to achieve benefits not available separately; a portfolio groups programs/projects to meet strategic objectives." },

  { domain: "Business Environment", q: "Organizational process assets (OPAs) include which of the following?",
    options: ["Market conditions and regulations","Templates, historical information, lessons learned, and processes/procedures","Government standards","Industry interest rates"],
    answer: 1, explain: "OPAs are the organization's internal assets — processes, procedures, templates, and the knowledge base (historical info, lessons learned). External factors are EEFs." },

  { domain: "Business Environment", q: "Enterprise environmental factors (EEFs) include which of the following?",
    options: ["The company's lessons-learned repository","Market conditions, regulations, organizational culture, and infrastructure","Project templates","The risk register"],
    answer: 1, explain: "EEFs are conditions, internal or external, that influence the project but aren't under the team's control — culture, market, regulations, standards, infrastructure." },

  { domain: "Business Environment", q: "A new industry compliance standard will affect future deliverables. What is the PM's responsibility?",
    options: ["Wait until an auditor forces compliance","Proactively understand the requirement, assess impact, and plan to meet it","Assume it doesn't apply","Delegate it entirely and forget it"],
    answer: 1, explain: "PMs must stay aware of the regulatory/compliance environment, assess impacts proactively, and plan to meet requirements — compliance is non-negotiable." },

  { domain: "Business Environment", q: "A project's benefits won't be realized until well after the project closes. Who typically owns ongoing benefits realization?",
    options: ["The project team forever","The business/operations (often a benefits owner or sponsor), per the benefits management plan","No one","The vendor"],
    answer: 1, explain: "Benefits often accrue after closure, so the business/operations side (a benefits owner/sponsor) tracks realization per the benefits management plan, beyond the project team's tenure." },

  { domain: "Business Environment", q: "Which best describes 'organizational governance' as it relates to projects?",
    options: ["Daily task management","The framework of rules, policies, and oversight that guides decisions and keeps projects aligned to strategy","The project schedule","The team charter"],
    answer: 1, explain: "Governance is the structure of policies, decision rights, and oversight ensuring projects are authorized, monitored, and aligned with organizational strategy and value." },

  { domain: "Business Environment", q: "A PM must choose among projects with limited funding. Which consideration most reflects portfolio thinking?",
    options: ["Which project the loudest stakeholder wants","Which projects best align with strategy and maximize overall value within constraints","Which is easiest","Which started first"],
    answer: 1, explain: "Portfolio management selects and prioritizes work that best aligns with strategy and maximizes value across the portfolio under resource/funding constraints." },

  { domain: "Business Environment", q: "Internal rate of return (IRR) is used to evaluate projects. Generally, a higher IRR means:",
    options: ["A worse investment","A more financially attractive project (all else equal)","A longer payback","Higher risk only"],
    answer: 1, explain: "IRR is the discount rate at which NPV equals zero; a higher IRR generally indicates a more attractive investment, all else being equal." },

  { domain: "Business Environment", q: "An economic-cost concept says that choosing one project means forgoing the benefit of the next-best alternative. This is:",
    options: ["Sunk cost","Opportunity cost","Fixed cost","Variable cost"],
    answer: 1, explain: "Opportunity cost is the value of the best alternative given up. When selecting projects, the opportunity cost is the benefit of the option not chosen." },

  { domain: "Business Environment", q: "Money already spent and unrecoverable should be treated how when deciding whether to continue a project?",
    options: ["It should drive the decision","It is a sunk cost and should NOT influence the go-forward decision","It guarantees the project continues","It increases NPV"],
    answer: 1, explain: "Sunk costs are unrecoverable and should be ignored in forward-looking decisions; continue only if the remaining investment is justified by future value." },

  { domain: "Business Environment", q: "A multinational project must respect different countries' laws and customs. What should the PM do?",
    options: ["Apply only the home country's rules","Understand and comply with relevant local laws, regulations, and cultural norms in each location","Ignore local customs","Let each team do whatever it wants"],
    answer: 1, explain: "Operating across jurisdictions requires understanding and complying with each location's legal and cultural environment — a core business-environment responsibility." },

  { domain: "Business Environment", q: "A project will deliver an output, but lasting value depends on adoption and process change in operations. What should the PM ensure?",
    options: ["Hand off and walk away at go-live","Plan for organizational change management and a smooth transition to operations so benefits are realized","Assume operations will figure it out","Stop tracking after delivery"],
    answer: 1, explain: "Value comes from adoption, not just delivery. The PM plans change management and operational transition/readiness so the organization actually realizes the benefits." },

  { domain: "Business Environment", q: "Which of these is the BEST example of a project delivering 'value' in the PMI sense?",
    options: ["Producing the most documentation","Achieving the intended business outcomes and benefits for stakeholders","Using the entire budget","Holding the most meetings"],
    answer: 1, explain: "Value is realized business outcomes/benefits for stakeholders — the purpose of the work — not activity, spend, or output volume for its own sake." },

  { domain: "Business Environment", q: "A controlling PMO requires projects to follow specific frameworks and provide compliance evidence. This reflects which level of PMO control?",
    options: ["Low (supportive)","Moderate (controlling)","High (directive)","None"],
    answer: 1, explain: "A controlling PMO exerts moderate control: it requires compliance with frameworks, methodologies, or governance and checks adherence — between supportive and directive." },

  { domain: "Business Environment", q: "A change in the political/economic environment threatens the project's funding. What should the PM do?",
    options: ["Ignore it as outside the project","Monitor the environment, assess the risk, and communicate with the sponsor/governance about contingencies","Immediately cancel the project","Spend the budget faster"],
    answer: 1, explain: "EEFs like political/economic shifts can materially affect projects. The PM monitors them, treats them as risks, and works with governance on contingencies." },

  { domain: "Business Environment", q: "What is the PRIMARY reason a project should maintain alignment with organizational strategy throughout its life?",
    options: ["To please the PMO","Because a project's justification rests on contributing to strategic objectives and value; if alignment is lost, it may no longer be worth doing","Strategy never changes","To increase documentation"],
    answer: 1, explain: "Projects exist to deliver strategic value. Continual alignment keeps the project justified; if it drifts from strategy or value, governance may rescope or terminate it." },

  { domain: "Business Environment", q: "A stakeholder asks the PM to deliver a result that would violate a regulation but 'just this once.' What should the PM do?",
    options: ["Comply to keep the stakeholder happy","Refuse and uphold compliance/ethics, explaining the legal and organizational risk","Do it quietly without records","Ask the team to take the blame"],
    answer: 1, explain: "Compliance and the PMI Code of Ethics are non-negotiable. The PM must refuse to violate regulations, regardless of stakeholder pressure, and explain the risk." },

  { domain: "Business Environment", q: "How should a PM treat the relationship between project deliverables and the realization of business benefits?",
    options: ["They are the same thing","Deliverables enable benefits, but benefits are realized through use/adoption and tracked over time per the benefits plan","Benefits come before deliverables","Benefits are irrelevant to the PM"],
    answer: 1, explain: "Deliverables (outputs) enable outcomes/benefits, which are realized through adoption and measured over time. The PM keeps the line of sight from deliverables to benefits and value." },

  /* ============================================================
     SUPPLEMENTAL BATCH — balances toward ECO weights (~300 total)
     ============================================================ */

  { domain: "People", q: "A team member consistently delivers late but always has a different excuse. What should the PM do?",
    options: ["Immediately escalate to their functional manager","Have a direct, private conversation to understand root causes and agree on a path forward","Publicly set a strict deadline in standup","Reassign all their work permanently"],
    answer: 1, explain: "Address performance issues directly and privately first: understand the underlying cause and collaborate on improvement before escalation or reassignment." },

  { domain: "People", q: "Which is the BEST way to build trust quickly on a newly formed team?",
    options: ["Demand results immediately","Model transparency, follow through on commitments, and create space for the team to know one another","Avoid all conflict","Keep communication strictly formal"],
    answer: 1, explain: "Trust grows from consistent, transparent behavior, kept commitments, and genuine human connection — the foundation a new team needs before high performance." },

  { domain: "People", q: "A stakeholder is 'unaware' of the project but will be significantly affected. What is the PM's FIRST priority with them?",
    options: ["Wait until they ask questions","Proactively inform and educate them to build awareness and appropriate engagement","Exclude them to avoid complexity","Send only the final report"],
    answer: 1, explain: "Move unaware stakeholders toward at least neutral/supportive by proactively informing them; ignoring affected stakeholders invites resistance later." },

  { domain: "People", q: "Two team members propose competing solutions and both are technically valid. As facilitator, the BEST approach is to:",
    options: ["Pick one yourself to save time","Facilitate the team in evaluating both against agreed criteria and deciding together","Flip a coin","Let them keep debating indefinitely"],
    answer: 1, explain: "When options are valid, facilitate a structured, criteria-based decision so the team owns the outcome — collaboration over command." },

  { domain: "People", q: "A team is highly skilled and motivated but the PM keeps holding long status meetings. What should the PM reconsider?",
    options: ["Add more meetings for control","Reduce overhead and trust the team — use lightweight, purposeful communication","Stop communicating entirely","Require written daily reports"],
    answer: 1, explain: "Mature teams need enabling, not heavy oversight. Trim low-value overhead and use lean, purposeful communication that respects the team's autonomy." },

  { domain: "People", q: "What is the MAIN benefit of a kickoff meeting with the team and key stakeholders?",
    options: ["To assign blame early","To align everyone on goals, roles, approach, and expectations from the start","To finalize the budget","To skip planning"],
    answer: 1, explain: "A kickoff aligns the team and stakeholders on objectives, scope, roles, and ways of working — setting shared understanding and momentum at the outset." },

  { domain: "People", q: "A PM observes early signs of burnout across the team. What is the BEST response?",
    options: ["Push harder to hit the date","Address workload and pace, protect sustainable working conditions, and remove unnecessary pressure","Ignore it until after delivery","Add more people immediately"],
    answer: 1, explain: "Protecting a sustainable pace and the team's well-being preserves quality and throughput; ignoring burnout damages people and the project." },

  { domain: "Process", q: "A procurement document used to request price quotes for a well-defined, standard item is a(n):",
    options: ["RFP (Request for Proposal)","RFQ (Request for Quotation)","RFI (Request for Information)","SOW"],
    answer: 1, explain: "An RFQ requests pricing for clearly defined goods/services. An RFP seeks proposals/solutions for complex needs; an RFI gathers general information from the market." },

  { domain: "Process", q: "Which procurement document describes the work to be performed in enough detail for sellers to determine if they can provide it?",
    options: ["Statement of work (SOW)","Risk register","Project charter","Quality checklist"],
    answer: 0, explain: "The procurement statement of work (SOW) details the goods/services to be provided so prospective sellers can assess capability and price the work." },

  { domain: "Process", q: "A quality tool gathers data on defect frequency by category using tally marks during inspection. This is a:",
    options: ["Control chart","Check sheet (tally sheet)","Scatter diagram","Flowchart"],
    answer: 1, explain: "A check sheet collects data (often defect counts by category) in real time during inspection, feeding tools like Pareto charts and histograms." },

  { domain: "Process", q: "A histogram of inspection results is used primarily to show:",
    options: ["The sequence of process steps","The distribution/frequency of values to reveal patterns","Correlation between two variables","Stability over time"],
    answer: 1, explain: "A histogram is a bar chart showing the frequency distribution of data, revealing central tendency, spread, and shape — useful for spotting patterns." },

  { domain: "Process", q: "A flowchart (process map) in quality management is mainly used to:",
    options: ["Track earned value","Visualize process steps to find where defects or inefficiencies may arise","Prioritize causes","Set the budget"],
    answer: 1, explain: "Flowcharts map the sequence of steps in a process, helping the team identify where quality problems, rework, or bottlenecks can occur." },

  { domain: "Process", q: "The Point of Total Assumption (PTA) applies to which contract type?",
    options: ["Cost Plus Fixed Fee","Fixed Price Incentive Fee (FPIF)","Time and Materials","Cost Plus Award Fee"],
    answer: 1, explain: "PTA applies to fixed-price incentive contracts: it's the cost above which the seller bears all additional cost, shifting full overrun risk to the seller." },

  { domain: "Process", q: "A project's requirements must be traced from origin through deliverables to ensure each is built and tested. Which tool supports this?",
    options: ["Requirements traceability matrix","Risk register","Stakeholder register","Burndown chart"],
    answer: 0, explain: "The requirements traceability matrix links each requirement to its source, design, build, and test, ensuring nothing is lost and scope stays controlled." },

  { domain: "Process", q: "An approved change requires updating the schedule, cost, and scope baselines. This activity is part of:",
    options: ["Direct and Manage Project Work","Perform Integrated Change Control","Develop Project Charter","Validate Scope"],
    answer: 1, explain: "Perform Integrated Change Control reviews changes and, once approved, drives coordinated updates to the affected baselines and plan components." },

  { domain: "Process", q: "Which is the BEST description of 'rolling wave planning'?",
    options: ["Planning the entire project in full detail up front","Detailing near-term work now and elaborating later work as it approaches","Never planning at all","Planning only at the end"],
    answer: 1, explain: "Rolling wave planning elaborates imminent work in detail while leaving future work at a higher level, refining it progressively as it nears — a form of progressive elaboration." },

  { domain: "Process", q: "A PM wants to know the latest an activity can start without delaying the project. Which value provides this?",
    options: ["Early start","Late start (from the backward pass)","Duration","Lag"],
    answer: 1, explain: "The late start (and late finish), found via the backward pass through the network, is the latest an activity can start/finish without delaying the project end." },

  { domain: "Process", q: "What primarily distinguishes 'preventive action' from 'corrective action'?",
    options: ["They are the same","Preventive action addresses a potential future problem; corrective action realigns performance after a deviation","Corrective action is always cheaper","Preventive action only happens at closure"],
    answer: 1, explain: "Corrective action brings performance back in line after a variance; preventive action proactively reduces the probability of a future negative deviation." },

  { domain: "Agile/Hybrid", q: "A team uses MoSCoW to prioritize requirements. What does it stand for?",
    options: ["Must, Should, Could, Won't (this time)","Money, Scope, Cost, Work","Minimum, Standard, Complete, Wide","Manage, Sort, Combine, Wrap"],
    answer: 0, explain: "MoSCoW prioritizes into Must have, Should have, Could have, and Won't have (for now) — a simple way to align on what's essential versus optional." },

  { domain: "Agile/Hybrid", q: "What is a 'Definition of Ready' used for?",
    options: ["Marking work complete","Ensuring a backlog item is sufficiently clear and detailed before the team commits to it in a sprint","Replacing acceptance criteria","Closing the project"],
    answer: 1, explain: "The Definition of Ready sets entry criteria so a story is well-understood, estimated, and actionable before a sprint pulls it in — reducing mid-sprint surprises." },

  { domain: "Agile/Hybrid", q: "A large user story (epic) is too big for one sprint. What is the BEST practice?",
    options: ["Force it into one sprint with overtime","Split it into smaller, independently valuable stories","Drop it entirely","Wait until the team is bigger"],
    answer: 1, explain: "Split large stories/epics into smaller slices that each deliver value and fit a sprint, improving flow, feedback, and predictability." },

  { domain: "Agile/Hybrid", q: "What is the purpose of release planning in agile?",
    options: ["To fix every task date for a year","To map which features/increments will be delivered across upcoming iterations toward a release goal","To replace sprint planning","To avoid the backlog"],
    answer: 1, explain: "Release planning aligns the team and stakeholders on what value will be delivered over several iterations toward a release — a mid-horizon, adaptable plan." },

  { domain: "Agile/Hybrid", q: "An agile team creates 'personas' during product work. What are personas used for?",
    options: ["Tracking team velocity","Representing typical users to guide design and prioritization around real user needs","Assigning blame","Measuring cost"],
    answer: 1, explain: "Personas are fictional but research-based user archetypes that keep the team focused on real user needs when shaping and prioritizing the product." },

  { domain: "Agile/Hybrid", q: "A retrospective keeps surfacing the same unresolved issue sprint after sprint. What should the team do?",
    options: ["Stop discussing it","Commit to a concrete improvement action with an owner and follow up next retrospective","Ignore retrospectives","Blame an individual"],
    answer: 1, explain: "Effective retrospectives produce specific, owned action items that are tracked to closure — otherwise the same problems recur. Inspect AND adapt." },

  { domain: "Agile/Hybrid", q: "In scaled agile with multiple teams on one product, what coordination practice helps manage cross-team dependencies?",
    options: ["Each team works in isolation","Regular cross-team sync (e.g., a scrum of scrums) to surface and resolve dependencies","Eliminate all planning","One team makes all decisions"],
    answer: 1, explain: "Cross-team coordination (such as a scrum of scrums) surfaces and resolves dependencies and impediments that span teams working on the same product." },

  { domain: "Agile/Hybrid", q: "A stakeholder insists every requirement is a 'Must have.' How should the team respond?",
    options: ["Accept that everything is top priority","Facilitate genuine prioritization — if everything is a priority, nothing is, so force trade-off decisions","Build randomly","Double the team size"],
    answer: 1, explain: "True prioritization requires trade-offs. The team facilitates honest ranking (e.g., MoSCoW, value vs. effort) because not everything can be first." },

  { domain: "Agile/Hybrid", q: "What is the BEST way to handle a defect found during a sprint on work the team is building?",
    options: ["Ignore it until release","Address it as part of meeting the Definition of Done for that increment","Create a separate project","Hide it from the PO"],
    answer: 1, explain: "Quality is built in: defects in current work are fixed so the increment meets the Definition of Done, rather than deferring them as accumulating debt." },

  { domain: "Agile/Hybrid", q: "An organization measures agile success purely by velocity. Why is this a poor sole measure?",
    options: ["Velocity is always accurate","Velocity is a team-specific capacity gauge, not a measure of delivered value or quality","Velocity equals profit","Velocity replaces the backlog"],
    answer: 1, explain: "Velocity helps a team forecast its own capacity but says nothing about value, quality, or outcomes — and it's easily gamed. Measure value delivered, not just points." },

  { domain: "Agile/Hybrid", q: "A team wants fast feedback that working software functions correctly after each change. Which technical practice most supports this?",
    options: ["Manual testing only at the end","Continuous integration with automated testing","Quarterly releases","Skipping tests to go faster"],
    answer: 1, explain: "Continuous integration with automated tests gives rapid feedback that the build still works after each change, enabling sustainable, high-quality incremental delivery." },

  { domain: "Agile/Hybrid", q: "What is the primary reason to keep the Product Owner role filled by one empowered person?",
    options: ["To reduce headcount","To provide a single, clear voice for priorities and decisions, avoiding conflicting direction","To eliminate stakeholders","To replace the team"],
    answer: 1, explain: "A single, empowered PO gives the team one clear, authoritative source for priorities and decisions, preventing the confusion of conflicting stakeholder direction." },

  { domain: "Business Environment", q: "What is the difference between a stakeholder and a shareholder on a project?",
    options: ["They are identical","A stakeholder is anyone affected by or able to affect the project; a shareholder specifically holds an ownership stake","A shareholder is never a stakeholder","Stakeholders only exist in agile"],
    answer: 1, explain: "Stakeholders include anyone who affects or is affected by the project (broad); shareholders are a subset who hold financial ownership. All shareholders are stakeholders, not vice versa." },

  { domain: "Business Environment", q: "Why does a PM 'tailor' the project approach rather than apply every process by default?",
    options: ["To create more documentation","To fit the methodology, processes, and rigor to the specific project's needs, size, and context","To skip governance","Because tailoring is forbidden"],
    answer: 1, explain: "Tailoring adapts the approach to the project's context (size, complexity, risk, culture) so effort goes where it adds value — a core PMI principle, not one-size-fits-all." },

  { domain: "Business Environment", q: "A project must comply with both an internal policy and a stricter external regulation that conflict. Which generally governs?",
    options: ["Always the internal policy","The more stringent applicable legal/regulatory requirement","Whichever is cheaper","Neither — ignore both"],
    answer: 1, explain: "Legal/regulatory compliance is mandatory; where requirements conflict, the project must meet the stricter applicable legal requirement and reconcile policy accordingly." },

  { domain: "Business Environment", q: "An organization is shifting strategy, making your in-flight project less aligned. What should the PM do?",
    options: ["Continue unchanged to finish","Raise the misalignment to governance/sponsor so the project can be reprioritized, rescoped, or stopped","Hide it","Speed up to finish before anyone notices"],
    answer: 1, explain: "Projects must stay aligned to strategy to remain justified. When strategy shifts, the PM surfaces the misalignment so governance can decide on continued investment." }

];
