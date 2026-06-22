/* =====================================================================
   PMP STUDY APP — QUESTION BANK  (window.PMP_QUESTIONS)
   ---------------------------------------------------------------------
   Rebuilt to mirror real PMP exam construction:
     • All four options are parallel in grammar and SIMILAR IN LENGTH —
       the correct answer is never the giveaway "longest, most-qualified"
       option. (The old bank had the answer as the longest 81% of the time.)
     • Distractors are PLAUSIBLE PMI traps (escalate too early, use PM
       authority alone, please the powerful stakeholder, skip impact
       analysis / change control, treat the baseline as fixed, fix a
       symptom not the root cause) — not obviously-wrong throwaways.
     • The reasoning lives in `explain`, never padded into the option.
     • Situational stems carry realistic detail (roles, % complete, some
       noise) and end with the precise ask: FIRST / NEXT / BEST / MOST.
   The app also shuffles option ORDER at render time, so position is
   never stable either. Learn the WHY in each explanation.
   ===================================================================== */
window.PMP_QUESTIONS = [

  /* ============================================================
     PEOPLE  (42%)
     ============================================================ */

  { domain: "People", q: "During a design review, two senior engineers get into a heated argument over the system architecture. Both are influential, the debate has stalled two iterations of work, and the rest of the team has gone quiet. What should the project manager do FIRST?",
    options: ["Decide the architecture yourself and direct the team to proceed","Bring the two engineers together to surface their concerns and work toward a shared solution","Escalate the disagreement to the project sponsor for a ruling","Ask each engineer to build out their own version so the team can compare both approaches side by side later"],
    answer: 1, explain: "Collaborate/problem-solve is PMI's preferred conflict mode — it addresses the root cause and yields a win-win. Deciding for them (forcing) or escalating skips the team's ability to resolve it; parallel builds waste effort." },

  { domain: "People", q: "A team that formed three weeks ago is bickering over small process details, and tension is high in nearly every meeting. Velocity has dropped and one member privately complains the team is 'dysfunctional.' What is the BEST interpretation and action?",
    options: ["The team is incompatible; ask resource managers for replacements","The team is in storming; coach them through it and reinforce norms","The conflict is an HR matter; refer it to human resources","The team needs space; step back until the friction settles"],
    answer: 1, explain: "Conflict at this stage is normal storming (Tuckman). A servant leader coaches the team toward norming rather than swapping people, escalating to HR, or avoiding the issue." },

  { domain: "People", q: "You need a currently skeptical regulatory stakeholder to become an active supporter. Where do you record the difference between their present attitude and the level of support the project requires?",
    options: ["In the risk register as a threat to engagement","In the stakeholder engagement assessment matrix","In the issue log under unresolved items","In the project charter's stakeholder summary"],
    answer: 1, explain: "The stakeholder engagement assessment matrix maps Current (C) vs. Desired (D) engagement levels so you can plan actions to close the gap. The other documents serve different purposes." },

  { domain: "People", q: "Your project team grows from 6 members to 9 members. How many additional communication channels now exist?",
    options: ["15","21","36","45"],
    answer: 1, explain: "Channels = n(n−1)/2. Nine people: 9×8/2 = 36. Six people: 6×5/2 = 15. Additional channels = 36 − 15 = 21." },

  { domain: "People", q: "A team member who recently transferred from an overseas office rarely speaks in meetings and gives only brief answers when asked directly. Their deliverables are on time and correct. What should the project manager do FIRST?",
    options: ["Raise a performance concern with their functional manager","Speak with them privately to understand their perspective and preferences","Reassign them to tasks that need less collaboration","Begin documenting the behavior carefully in case it later becomes a formal performance issue"],
    answer: 1, explain: "Lead with emotional intelligence: seek to understand first — this may simply be a cultural communication-style difference, and the work is fine. Escalation, reassignment, or documentation are premature and punitive." },

  { domain: "People", q: "In the daily standup, a developer reports they are blocked waiting on a deliverable from another department. The blocker needs cross-team coordination to resolve. What is the Scrum Master's appropriate response?",
    options: ["Facilitate a solution during the standup so the whole team hears it","Note the impediment and work to remove it after the standup","Tell the developer to follow up with the other department themselves","Add the blocked work to the sprint backlog as a new item"],
    answer: 1, explain: "The standup is a short sync, not a problem-solving session. The servant-leader Scrum Master captures the impediment and removes it outside the meeting, protecting the team's time." },

  { domain: "People", q: "Two team members repeatedly clash because each assumes the other is responsible for the same integration task, and the work keeps slipping. Which tool most directly prevents this recurring problem?",
    options: ["A Gantt chart showing task dependencies","A responsibility assignment matrix (RACI)","A risk register entry for the integration","A burndown chart for the iteration"],
    answer: 1, explain: "A RACI matrix clarifies who is Responsible, Accountable, Consulted, and Informed for each activity, removing the ownership ambiguity causing the conflict. The other tools track time, risk, or progress, not responsibility." },

  { domain: "People", q: "A strong performer tells you they feel stagnant and want more challenging assignments and a path to grow. Which motivation theory best explains what they are seeking?",
    options: ["Herzberg's hygiene factors","Herzberg's motivators / higher-order needs","McGregor's Theory X control assumptions about workers","Maslow's safety needs"],
    answer: 1, explain: "Achievement, growth, and recognition are Herzberg's motivators (and Maslow's higher needs). Hygiene factors and safety needs only prevent dissatisfaction; Theory X is a management assumption, not a need." },

  { domain: "People", q: "A normally reliable engineer has become withdrawn and their output has dropped sharply over the past week. You are unsure why. What should the project manager do FIRST?",
    options: ["Start carefully documenting the performance drop for the official record","Have a private, supportive conversation to understand the cause","Quietly redistribute their workload to other members","Raise the concern at the next team retrospective"],
    answer: 1, explain: "Emotional intelligence first: a private, caring conversation to understand the root cause precedes documentation, reassignment, or any public discussion of an individual's performance." },

  { domain: "People", q: "Your team is fully remote across four time zones, and several members say they feel disconnected and out of the loop on decisions. What is the BEST way to address this?",
    options: ["Require everyone to shift to a single shared working schedule","Establish team agreements and deliberate synchronous touchpoints","Move all project communication to email to keep a record","Designate the largest site as the lead and route decisions there"],
    answer: 1, explain: "Distributed teams need a team charter/ground rules plus intentional real-time check-ins to build trust and shared context. Forcing identical hours, email-only, or a 'lead site' damages inclusion and engagement." },

  { domain: "People", q: "A functional manager keeps reassigning your team members to other work without telling you, and your iteration commitments are now at risk. What should you do?",
    options: ["Escalate immediately to the project sponsor for intervention","Meet with the functional manager to confirm the agreed resource commitments","Submit a formal complaint to the human resources department about the repeated reassignments","Quietly secure replacement resources to cover the gap"],
    answer: 1, explain: "In a matrix organization the PM negotiates directly with functional managers and confirms commitments before escalating. Going to the sponsor or HR first, or working around the issue, skips the direct conversation PMI expects." },

  { domain: "People", q: "Two sub-teams disagree sharply during a planning workshop and the discussion turns tense. As a servant leader, what is your primary role in this moment?",
    options: ["Make the call yourself so the workshop can continue","Facilitate the groups toward a collaborative resolution","Separate the groups and assign their work independently","Defer the decision to a later meeting once tempers cool"],
    answer: 1, explain: "Servant leaders facilitate rather than dictate, guiding the parties to resolve the conflict together. Deciding for them, separating them, or indefinitely deferring all avoid genuine resolution." },

  { domain: "People", q: "A team member lacks a technical skill that an upcoming critical task requires, and no one else is available for it. What is the BEST response?",
    options: ["Reassign the task to yourself to ensure it is done right","Arrange training or mentoring to build the needed skill","Remove the member from the project to reduce risk","Wait to see whether they can learn it on their own"],
    answer: 1, explain: "Developing the team through training, coaching, and mentoring is a core PM responsibility and an investment in capability. Doing the work yourself, removing them, or hoping they figure it out all fail the team." },

  { domain: "People", q: "You are negotiating a sticking point with a long-term vendor whose relationship matters for future work. Which approach best reflects the PMI mindset?",
    options: ["Press hard for every possible concession to fully protect the project's interests","Pursue a mutually beneficial outcome that preserves the relationship","Concede on the open points to keep the vendor satisfied","Stop negotiating and turn the matter over to the legal team"],
    answer: 1, explain: "PMI favors principled, win-win negotiation that meets project needs while protecting the long-term relationship. Winning at all costs, capitulating, or jumping to legal all undermine that balance." },

  { domain: "People", q: "A newly formed team is unsure of their roles and how they will work together. What should the project manager do to set them up for success?",
    options: ["Expect strong output right away and monitor results","Provide direction and create a team charter with roles and ground rules","Leave them to self-organize without early guidance","Begin holding individual performance check-ins right away to set clear expectations"],
    answer: 1, explain: "In the forming stage the team needs direction and structure; a collaboratively built team charter establishes roles, norms, and ground rules. Expecting instant performance or withholding guidance ignores where the team actually is." },

  { domain: "People", q: "An influential stakeholder is openly criticizing the project to peers, and the negativity is starting to affect team morale. What is the BEST first step?",
    options: ["Continue delivering and let results speak for themselves","Meet with the stakeholder to understand and address their concerns","Ask the sponsor to have the stakeholder removed from the project","Limit the stakeholder's access to project communications"],
    answer: 1, explain: "Engage resistant stakeholders directly to understand concerns and move them toward support. Ignoring, removing, or excluding them does not address the root of the resistance and can deepen it." },

  { domain: "People", q: "On an agile team, who should establish the team's ground rules, and who is responsible for upholding them?",
    options: ["The project manager defines and enforces them","The team defines them and everyone, including the PM, upholds them","The organization sets them and the Scrum Master enforces them","Human resources defines them and managers enforce them"],
    answer: 1, explain: "Ground rules (often part of the team charter) are created collaboratively by the team, and the whole team — PM included — shares responsibility for upholding them. Imposed rules lack ownership." },

  { domain: "People", q: "A stakeholder demands a detailed status report every single day, which is consuming a large share of your time. What should you do?",
    options: ["Produce the daily reports regardless of the time cost","Discuss their actual information needs and agree on appropriate frequency","Decline the request, explaining that daily reporting is an unreasonable use of project resources","Send the daily reports and let other project work slip"],
    answer: 1, explain: "Manage communications to real needs: clarify what the stakeholder actually requires and align reporting with the communications plan. Blind compliance, refusal, or letting work slip are all poor responses." },

  { domain: "People", q: "Two engineers are in conflict over a decision. To end the tension, one simply yields to the other without the underlying disagreement being resolved. Which conflict-resolution technique is this?",
    options: ["Collaborate / problem-solve","Smooth / accommodate","Force / direct","Compromise / reconcile"],
    answer: 1, explain: "Smoothing/accommodating emphasizes harmony and concedes to keep the peace, but it leaves the root issue unresolved. It is a temporary fix, not the win-win of collaboration." },

  { domain: "People", q: "During a dispute, a manager ends the discussion by saying, 'We are doing it my way because I am in charge here.' Which conflict-resolution technique is being used?",
    options: ["Withdraw / avoid","Force / direct","Compromise / reconcile","Collaborate / problem-solve"],
    answer: 1, explain: "Forcing/directing imposes one party's position at the other's expense (win-lose). It is fast but breeds resentment and is generally PMI's least desirable mode." },

  { domain: "People", q: "To resolve a deadlock quickly, two parties each give up something and settle on a middle position that neither fully prefers. Which conflict-resolution technique is this?",
    options: ["Collaborate / problem-solve","Compromise / reconcile","Force / direct","Smooth / accommodate"],
    answer: 1, explain: "Compromise has both sides concede for a workable middle ground (lose-lose). It is useful under time pressure but is not the optimal win-win that collaboration produces." },

  { domain: "People", q: "When a real conflict surfaces between two team members, what is generally the FIRST thing a project manager should do?",
    options: ["Escalate the matter to the project sponsor","Address it directly and privately, focused on the issue","Allow the team the space to resolve it themselves without your involvement","Reassign one of the members to reduce friction"],
    answer: 1, explain: "PMI says confront conflict early and directly, in private, focusing on the problem rather than personalities. Escalation, avoidance, and reassignment are last resorts, not first moves." },

  { domain: "People", q: "Your team members follow your lead primarily because they respect your judgment and want your good opinion, not because of your title. Which type of power is this?",
    options: ["Formal (positional) power","Referent power","Reward power","Coercive power"],
    answer: 1, explain: "Referent power stems from respect, trust, and admiration. Along with expert power it is the most effective and PMI-favored form, because it is earned rather than assigned by the role." },

  { domain: "People", q: "A project manager directs the team mainly by relying on the authority that comes with the title and position. Which type of power is this?",
    options: ["Expert power, based on knowledge","Formal (legitimate) power","Referent power","Reward power, based on incentives"],
    answer: 1, explain: "Formal/legitimate power derives from the position itself. PMI generally prefers expert and referent power, which are earned and more durable than positional authority." },

  { domain: "People", q: "A leader articulates a compelling vision, inspires the team to exceed their own expectations, and encourages them to embrace change. Which leadership style is this?",
    options: ["Transactional leadership","Transformational leadership","Laissez-faire leadership","Autocratic leadership"],
    answer: 1, explain: "Transformational leaders inspire through vision, growth, and empowerment — well suited to knowledge work and agile teams. Transactional trades rewards for performance; laissez-faire is hands-off; autocratic is directive." },

  { domain: "People", q: "Following situational leadership, a brand-new team with low competence and low confidence most needs which leadership behavior?",
    options: ["Delegating responsibility to the team","Directing with clear, specific guidance","Standing back with minimal involvement","Coaching only when the team asks"],
    answer: 1, explain: "Low-readiness teams need a directing/telling style. As competence and confidence grow, the leader shifts toward coaching, supporting, then delegating." },

  { domain: "People", q: "A manager assumes employees inherently dislike work and must be closely supervised and pushed to perform. Which set of assumptions is this?",
    options: ["McGregor's Theory Y","McGregor's Theory X","Ouchi's Theory Z","Maslow's esteem level"],
    answer: 1, explain: "Theory X assumes people avoid work and need control. Theory Y assumes they are self-motivated and seek responsibility — and PMI favors a Theory Y stance." },

  { domain: "People", q: "According to Maslow's hierarchy, which needs must generally be satisfied before esteem and self-actualization will motivate a person at work?",
    options: ["Only the self-actualization need actually drives workplace behavior","Lower needs: physiological, safety, and belonging","Esteem needs must be met before safety","The order of needs does not matter"],
    answer: 1, explain: "Maslow's hierarchy is satisfied bottom-up: physiological, safety, belonging, esteem, then self-actualization. Lower needs generally must be met before higher ones drive behavior." },

  { domain: "People", q: "In Herzberg's two-factor theory, competitive salary and good working conditions are best classified as what?",
    options: ["Motivators that drive high performance","Hygiene factors that prevent dissatisfaction","Self-actualization needs","Expectancy multipliers"],
    answer: 1, explain: "Hygiene factors (pay, conditions, policies, security) prevent dissatisfaction when adequate but do not by themselves motivate. True motivation comes from motivators like achievement and growth." },

  { domain: "People", q: "A team member is driven mainly by a desire to influence others and take the lead. According to McClelland's theory, which need is dominant for them?",
    options: ["Need for achievement","Need for power","Need for affiliation","Need for security"],
    answer: 1, explain: "McClelland's acquired-needs theory identifies achievement, affiliation, and power. A drive to influence and lead reflects the need for power; matching work to a person's dominant need improves motivation." },

  { domain: "People", q: "A stakeholder has high power over your project but low interest in its details. According to the power/interest grid, how should you engage them?",
    options: ["Manage them closely with frequent contact","Keep them satisfied with the right level of attention","Keep them informed and engaged through frequent regular updates","Monitor them with minimal effort"],
    answer: 1, explain: "Power/interest grid: high power + low interest = keep satisfied. High power + high interest = manage closely; low power + high interest = keep informed; low/low = monitor." },

  { domain: "People", q: "What does practicing active listening during a difficult conversation primarily require of the project manager?",
    options: ["Preparing your counterpoints carefully while the other person is still speaking","Focusing fully and confirming understanding before responding","Multitasking to use the meeting time efficiently","Correcting inaccuracies the moment they are said"],
    answer: 1, explain: "Active listening means giving full attention, withholding judgment, and paraphrasing to confirm understanding before responding — a core element of emotional intelligence and conflict handling." },

  { domain: "People", q: "Which statement best describes psychological safety on a team?",
    options: ["A formal guarantee of continued employment","A climate where people can speak up and admit mistakes without fear","A documented workplace safety procedure","A team state in which members never experience any disagreement or conflict"],
    answer: 1, explain: "Psychological safety is the shared belief that one can raise ideas, concerns, or mistakes without fear of punishment or humiliation — a foundation of high-performing teams. It is not job security or the absence of conflict." },

  { domain: "People", q: "A self-organizing agile team is repeatedly told exactly how to perform each task by a manager. What is the likely effect, and what should change?",
    options: ["Output rises, so the manager should keep directing","Autonomy and motivation fall, so the manager should enable and trust the team","Nothing meaningful changes either way","The team should be reorganized and placed under noticeably tighter management control"],
    answer: 1, explain: "Micromanaging undermines a self-organizing team's autonomy and motivation. The leader should set the goal, remove blockers, and let the team decide how to do the work." },

  { domain: "People", q: "Which of the following is an example of interactive communication?",
    options: ["A status report posted to a shared portal","A live video call with real-time discussion","A mass email sent to all stakeholders","A recorded training video for the team"],
    answer: 1, explain: "Interactive communication is real-time, multidirectional exchange such as meetings and calls. Push (email, reports) is sent out; pull (portals, wikis) is retrieved by the recipient." },

  { domain: "People", q: "Two team members from different cultures keep misreading each other's level of directness, creating friction. What is the BEST project manager response?",
    options: ["Ask the more direct member to soften their communication style going forward","Build cultural awareness and agree on shared communication norms","Keep the two members on separate workstreams","Treat it as a personal matter outside your role"],
    answer: 1, explain: "Embrace diversity: raise cultural awareness and establish shared communication norms so both members understand each other. Forcing one to change, separating them, or ignoring it fail to resolve the root cause." },

  { domain: "People", q: "What is the primary purpose of a team charter?",
    options: ["To formally authorize the project and the PM","To capture the team's values, agreements, and ground rules","To list out the project's key deliverables and major milestones","To track the team's risks and issues"],
    answer: 1, explain: "The team charter records the team's shared values, working agreements, decision-making, and communication norms, created collaboratively by the team. The charter that authorizes the project is the project charter." },

  { domain: "People", q: "A team member proposes a better approach than the one you had planned for the work. As a servant leader, what should you do?",
    options: ["Hold to your plan to avoid disruption","Seriously consider the idea and empower the team's input","Take the idea forward as your own","Require a formal change request before discussing it"],
    answer: 1, explain: "Servant leaders empower the team and welcome their input; genuinely considering good ideas builds engagement and better outcomes. Dismissing it, taking credit, or adding bureaucracy all discourage contribution." },

  { domain: "People", q: "Colocating a project team in a shared workspace (or a virtual 'war room') is primarily intended to achieve what?",
    options: ["A reduction in facility and travel costs","Stronger communication, collaboration, and cohesion","Easier day-to-day supervision of the team","Compliance with a human resources requirement"],
    answer: 1, explain: "Colocation puts the team together to boost spontaneous communication, collaboration, and a sense of community. Cost or supervision benefits are incidental, not the purpose." },

  { domain: "People", q: "A project's work is complete and the team is about to be released. The team has reached the adjourning stage. What is the BEST project manager action now?",
    options: ["Push for additional output before release","Recognize contributions, capture lessons learned, and release the team well","Begin a fresh round of structured team-building activities to keep the momentum going","Reduce communication as the team winds down"],
    answer: 1, explain: "In adjourning, the PM recognizes the team's contributions, documents lessons learned, and handles releases respectfully. Squeezing more work or starting team-building both ignore where the team is." },

  { domain: "People", q: "During discussions, one team member consistently dominates while quieter members stop contributing. The work is still getting done. What should the project manager do?",
    options: ["Leave it alone since output is acceptable","Facilitate balanced participation and reinforce ground rules","Privately ask the dominant member to hold back and stop speaking up so much","Reduce the number of team discussions held"],
    answer: 1, explain: "The PM/facilitator ensures all voices are heard by drawing out quieter members and managing dominant ones, so the team benefits from every perspective. Ignoring it loses input; silencing or cutting discussions overcorrects." },

  { domain: "People", q: "A team member is technically excellent but frequently dismisses others' ideas, and morale is suffering. What should the project manager do FIRST?",
    options: ["Overlook the behavior because the person is productive","Privately give specific feedback on the behavior's impact","Call out the behavior in the next team meeting","Begin the process of removing them from the team"],
    answer: 1, explain: "Address behavior privately first with specific, impact-focused feedback and coaching. Talent does not excuse conduct that harms the team, but public callouts or removal are not the first step." },

  { domain: "People", q: "A motivated, capable team is being held up by an external dependency they cannot control. As a servant leader, what is your priority?",
    options: ["Push the team to find a way to work faster","Escalate and work the external blocker so the team can keep moving","Reassign responsibility and accountability for the delay to the other group","Quietly reduce the team's committed scope"],
    answer: 1, explain: "Removing impediments — including chasing external dependencies — is core servant-leader work. Pressuring the team, assigning blame, or silently cutting scope all avoid the actual blocker." },

  { domain: "People", q: "A team member privately tells you about a serious interpersonal problem with a peer and asks for your help. What is the BEST response?",
    options: ["Raise it openly in the next team meeting","Listen, keep appropriate confidence, and help facilitate a resolution","Decide who is right based on what you have heard","Tell them they should work it out directly with the peer on their own time"],
    answer: 1, explain: "Handle interpersonal issues with discretion and emotional intelligence: listen, maintain appropriate confidentiality, and facilitate a fair resolution. Publicizing it, taking sides, or dismissing it all fail the person who confided." },

  { domain: "People", q: "Which is the strongest indicator that a team has reached Tuckman's performing stage?",
    options: ["Members frequently argue without resolution","The team largely self-manages toward goals with little friction","Members rarely interact with one another","The project manager continues to make most of the team's decisions"],
    answer: 1, explain: "In performing, the team is cohesive, trusts one another, and self-manages effectively toward goals — the most productive stage. Frequent conflict suggests storming; little interaction or PM-driven decisions suggest immaturity." },

  { domain: "People", q: "You notice one team member is overloaded while another is underutilized. What is the BEST action?",
    options: ["Leave it, since people should manage their own workload","Rebalance the assignments and discuss it openly with the team","Add more work to the busy member to keep momentum","Bring on an additional resource to absorb the excess"],
    answer: 1, explain: "The PM monitors workload and rebalances assignments transparently to sustain morale, quality, and throughput. Ignoring it, piling on, or adding headcount before rebalancing are poorer responses." },

  { domain: "People", q: "A stakeholder repeatedly bypasses you and gives instructions directly to your team members, disrupting their focus. What is the BEST first response?",
    options: ["Allow it to continue to avoid friction","Speak with the stakeholder to realign on communication channels","Report the behavior to the project sponsor","Instruct the team to quietly ignore the stakeholder's direct requests"],
    answer: 1, explain: "Address it directly and respectfully first: clarify the proper channels and protect the team's focus. Allowing it, escalating immediately, or telling the team to ignore them all skip the direct conversation." },

  { domain: "People", q: "You must deliver difficult feedback to a team member about a recurring issue. What is the BEST approach?",
    options: ["Send the feedback by email to avoid awkwardness","Deliver it privately and constructively, focused on the behavior","Mention it briefly in front of the rest of the team to save everyone time","Hold the feedback until the next formal review cycle"],
    answer: 1, explain: "Effective feedback is timely, private, specific, and focused on behavior and impact rather than the person. Email, public delivery, or waiting for a review cycle all reduce its effectiveness and respect." },

  { domain: "People", q: "An agile team's members are reluctant to admit when a story is falling behind, so problems surface late. What should the leader cultivate to fix this?",
    options: ["Tighter individual deadlines and tracking","Psychological safety and transparency so issues surface early","More detailed written status reporting","Individual performance rankings to drive accountability"],
    answer: 1, explain: "Fear hides problems. Building psychological safety and a blameless, transparent culture lets issues surface early when they are cheapest to fix. Pressure, paperwork, and rankings increase fear and concealment." },

  { domain: "People", q: "Why is it important to have the people who will do the work participate in estimating it?",
    options: ["It is faster than the PM estimating alone","It produces more accurate estimates and stronger commitment","It removes estimating accountability from the project manager entirely","It eliminates the need for a detailed schedule"],
    answer: 1, explain: "Those who do the work estimate more accurately and, by participating, commit to the result — improving both realism and buy-in. Speed and accountability-shifting are not the real reasons." },

  { domain: "People", q: "On a hybrid team, some members resist the agile ceremonies, calling them 'extra meetings that waste time.' What is the BEST response?",
    options: ["Drop the ceremonies the team dislikes","Explain each ceremony's purpose and tailor it to the team's needs","Make attendance mandatory and attach consequences for anyone who is absent","Let the resistance pass without addressing it"],
    answer: 1, explain: "Address resistance by clarifying the value of each ceremony and adapting it to deliver real benefit. Abandoning them, forcing attendance, or ignoring the concern all miss the point of tailoring." },

  { domain: "People", q: "A stakeholder is currently 'unaware' of your project but will be significantly affected by it. What is your FIRST priority regarding them?",
    options: ["Wait until they raise their own questions about the project","Proactively inform and educate them to build awareness","Leave them out for now to limit complexity","Send them only the final project report"],
    answer: 1, explain: "Move unaware-but-affected stakeholders toward at least neutral or supportive through proactive engagement. Waiting, excluding, or minimal communication invites avoidable resistance later." },

  { domain: "People", q: "What primarily distinguishes coaching from mentoring?",
    options: ["Coaching provides long-term career guidance","Coaching focuses on developing specific skills or performance","Coaching means actually completing the work on behalf of the person","Coaching is simply another word for managing"],
    answer: 1, explain: "Coaching develops specific skills and performance, often shorter-term and task-focused; mentoring is a broader, longer-term developmental relationship. Coaching is neither doing the work nor plain management." },

  { domain: "People", q: "Small frictions on a team keep escalating because members react impulsively to one another. Which emotional-intelligence competency most directly helps an individual manage their own reactions?",
    options: ["Social awareness","Self-management","Relationship management","Organizational awareness"],
    answer: 1, explain: "EI comprises self-awareness, self-management, social awareness, and relationship management. Self-management is regulating one's own emotions and impulses, which directly curbs reactive escalation." },

  { domain: "People", q: "An agile coach realizes the team has come to depend on them for nearly every decision. What is the BEST long-term action?",
    options: ["Keep deciding to maintain efficiency","Gradually coach the team to decide for themselves","Document each decision in detail for consistency","Introduce an approval step for key decisions"],
    answer: 1, explain: "A good coach works to make themselves unnecessary, building the team's capacity to self-organize and decide. Continuing to decide, heavy documentation, or approval gates all reinforce dependence." },

  { domain: "People", q: "Overlapping authority between two team leads over the same workstream is causing recurring conflict. What is the BEST structural fix?",
    options: ["Let the two leads continue to work it out","Clarify and separate decision rights, updating the RACI","Route all of their joint decisions up through the project sponsor","Rotate authority between them on a schedule"],
    answer: 1, explain: "Overlapping authority causes repeated conflict; clarifying decision rights (a single Accountable per activity in the RACI) resolves the structural cause. Leaving it, escalating everything, or rotating authority do not." },

  { domain: "People", q: "A remote team member feels excluded from decisions that the colocated majority makes informally. What should the project manager do?",
    options: ["Ask the remote member to relocate if possible","Adjust practices so remote members have equal voice and visibility","Make the key decisions centrally without involving the remote member","Scale back the remote member's responsibilities"],
    answer: 1, explain: "Inclusion matters: adapt meeting times, tools, and norms so distributed members participate equally, protecting trust and engagement. Relocation demands, exclusion, or reduced responsibility all worsen the problem." },

  { domain: "People", q: "Which action best demonstrates a servant leader 'shielding the team'?",
    options: ["Passing every stakeholder request straight to the developers","Buffering interruptions and churn so the team can stay focused","Adding extra status reporting for visibility","Tightening individual deadlines to keep pace"],
    answer: 1, explain: "Servant leaders protect the team's focus by managing interruptions and absorbing organizational churn. Forwarding every request, adding reporting, or tightening deadlines increase the load rather than shield the team." },

  { domain: "People", q: "A team consistently delivers excellent results. The project manager wants to sustain this. According to Herzberg, which action best sustains their motivation over time?",
    options: ["Provide a one-time cash bonus and move on","Offer recognition, growth, and meaningful, challenging work","Add closer day-to-day oversight to protect the strong results","Increase the frequency of status reporting"],
    answer: 1, explain: "Sustained motivation comes from Herzberg's motivators — achievement, recognition, the work itself, and growth — not one-off hygiene tweaks like a single bonus, and certainly not added oversight or reporting." },

  { domain: "People", q: "A team member raises a concern that the project's current approach could harm end users. What should the project manager do?",
    options: ["Treat it as outside the project's defined scope","Take the concern seriously, evaluate it, and raise it appropriately","Tell the member to stay focused on assigned tasks","Keep the concern internal for now so as not to alarm the project's stakeholders"],
    answer: 1, explain: "Ethical responsibility and stewardship require the PM to take genuine concerns seriously, evaluate them, and surface them through proper channels — protecting stakeholders and the public. Dismissing or hiding it is unethical." },

  /* ============================================================
     PROCESS  (50%)
     ============================================================ */

  { domain: "Process", q: "The project is in execution at about 60% complete when a key stakeholder requests a significant new capability they say is now essential. What should the project manager do FIRST?",
    options: ["Add the capability quickly to keep the stakeholder satisfied","Assess the impact and submit a change request to integrated change control","Decline the request, explaining that the scope baseline has already been set and approved","Have the team absorb the work into the current iteration"],
    answer: 1, explain: "All changes flow through integrated change control: assess impact, raise a change request, let the change control board decide. Accepting it outright, refusing reflexively, or quietly absorbing it all bypass the process." },

  { domain: "Process", q: "The customer is about to formally sign off on a set of completed deliverables. Which process is taking place?",
    options: ["Control Quality","Validate Scope","Close Project or Phase","Manage Quality"],
    answer: 1, explain: "Validate Scope is the formal customer acceptance of deliverables. Control Quality is the internal correctness check that happens before it; closing and Manage Quality are different processes." },

  { domain: "Process", q: "A project reports CPI = 0.9 and SPI = 1.2. What does this indicate about its performance?",
    options: ["Over budget and behind schedule","Over budget but ahead of schedule","Under budget and ahead of schedule","Under budget but behind schedule"],
    answer: 1, explain: "CPI below 1 means over budget; SPI above 1 means ahead of schedule. So the project is over budget but ahead of schedule." },

  { domain: "Process", q: "BAC = $200,000, EV = $90,000, AC = $100,000. Assuming current cost performance continues, what is the estimate at completion (EAC)?",
    options: ["$190,000","$210,000","$222,222","$240,000"],
    answer: 2, explain: "CPI = EV/AC = 90,000/100,000 = 0.9. EAC = BAC/CPI = 200,000/0.9 ≈ $222,222." },

  { domain: "Process", q: "An activity can be delayed up to four days without pushing out the project's finish date. What is this four days called?",
    options: ["Lead time","Lag time","Total float","Free float"],
    answer: 2, explain: "Total float is how long an activity can slip without delaying the project finish. Free float is delay without affecting the next activity; lead and lag are scheduling adjustments." },

  { domain: "Process", q: "The project is behind schedule. The sponsor wants to keep the original finish date and will accept added risk but no additional cost. Which technique fits BEST?",
    options: ["Crashing the schedule","Fast-tracking the schedule","Resource leveling","Reserve analysis"],
    answer: 1, explain: "Fast-tracking overlaps activities that were sequential — it preserves the date without added cost but raises risk and potential rework. Crashing would add cost; the sponsor ruled that out." },

  { domain: "Process", q: "The project is behind schedule and the sponsor approves spending more money to recover the original finish date. Which schedule-compression technique fits?",
    options: ["Fast-tracking the schedule","Crashing the schedule","Resource smoothing","Applying leads and lags"],
    answer: 1, explain: "Crashing adds resources (and cost) to critical-path activities to shorten duration. Fast-tracking adds risk instead of cost, which is not what the sponsor authorized here." },

  { domain: "Process", q: "Optimistic = 8, Most Likely = 14, Pessimistic = 26 days. What is the PERT (beta) three-point estimate?",
    options: ["14 days","15 days","16 days","18 days"],
    answer: 1, explain: "Beta PERT = (O + 4M + P)/6 = (8 + 56 + 26)/6 = 90/6 = 15 days." },

  { domain: "Process", q: "A risk that the team identified earlier has now actually occurred and is affecting the project. Where is it primarily managed now?",
    options: ["The risk register only","The issue log","The change log","The assumption log"],
    answer: 1, explain: "Once a risk occurs it becomes an issue and is tracked and managed in the issue log, while remaining noted in the risk register. The change and assumption logs serve other purposes." },

  { domain: "Process", q: "To handle the financial impact of a possible major threat, the project buys an insurance policy. Which risk response strategy is this?",
    options: ["Mitigate","Transfer","Avoid","Accept"],
    answer: 1, explain: "Transfer shifts the impact and ownership of a threat to a third party — insurance, warranties, bonds, or contracts. Mitigate reduces it, avoid eliminates it, accept takes no action." },

  { domain: "Process", q: "An opportunity could let the project finish early. The team assigns its best people to ensure the opportunity definitely happens. Which positive-risk response is this?",
    options: ["Enhance","Exploit","Share","Accept"],
    answer: 1, explain: "Exploit takes action to make an opportunity certain to occur. Enhance only increases its probability or impact; share gives ownership to a partner; accept takes no proactive action." },

  { domain: "Process", q: "Which reserve covers identified ('known-unknown') risks, sits inside the cost baseline, and is controlled by the project manager?",
    options: ["Management reserve","Contingency reserve","Profit margin","Cost buffer"],
    answer: 1, explain: "Contingency reserve covers known risks, is part of the cost baseline, and the PM controls it. Management reserve covers unknown-unknowns, sits outside the baseline, and needs management approval." },

  { domain: "Process", q: "On a control chart, seven consecutive data points fall on one side of the mean, although all points are within the control limits. What does this indicate?",
    options: ["The process is performing normally","A non-random trend worth investigating","A need to recalculate the control limits","A reason to halt the process immediately"],
    answer: 1, explain: "The rule of seven: seven points in a row on one side of the mean signal a non-random pattern that should be investigated, even though no point breaches a control limit." },

  { domain: "Process", q: "Which contract type places the MOST cost risk on the seller?",
    options: ["Cost Plus Fixed Fee (CPFF)","Firm Fixed Price (FFP)","Time and Materials (T&M)","Cost Plus Incentive Fee (CPIF)"],
    answer: 1, explain: "Under firm fixed price the seller absorbs any cost overrun, so the seller carries the most cost risk. Cost-reimbursable contracts shift cost risk to the buyer; T&M is shared." },

  { domain: "Process", q: "The scope of work is not yet well defined and is expected to evolve as the project proceeds. Which contract type is MOST appropriate?",
    options: ["Firm Fixed Price (FFP)","Cost-reimbursable (e.g., CPFF or CPIF)","Fixed Price with Economic Price Adjustment","A simple purchase order"],
    answer: 1, explain: "When scope is uncertain, cost-reimbursable contracts fit because the buyer absorbs cost risk while the scope is refined. Fixed-price arrangements require well-defined scope to be fair." },

  { domain: "Process", q: "What is the primary purpose of maintaining a lessons learned register?",
    options: ["To formally assign accountability whenever project failures occur","To capture knowledge that improves current and future work","To replace the final project closure report","To satisfy external auditors' requirements"],
    answer: 1, explain: "Lessons learned are captured continuously to improve the current project and benefit future ones — never to assign blame, replace closure documents, or merely satisfy auditors." },

  { domain: "Process", q: "Raw status measurements from execution are analyzed and compared against the baseline. What is this analyzed output called?",
    options: ["Work performance data","Work performance information","Work performance reports","Approved change requests"],
    answer: 1, explain: "Raw data becomes work performance information once it is analyzed in Monitoring & Controlling. Work performance reports are the packaged communication of that information to stakeholders." },

  { domain: "Process", q: "According to the PMI mindset, how should quality primarily be achieved on a project?",
    options: ["Through thorough inspection at the end","Through prevention — building quality in throughout","Through rework after the customer reports defects","Through adding extra features beyond requirements"],
    answer: 1, explain: "PMI favors prevention over inspection: build quality in. Prevention costs less than the cost of failure. Inspection catches defects late, and extra features are gold plating, not quality." },

  { domain: "Process", q: "A deliverable has just failed internal inspection. What must happen before it can be presented to the customer for acceptance?",
    options: ["Send it to the customer to avoid further delay","Perform Control Quality, correct the defects, then Validate Scope","Proceed directly to Validate Scope to obtain the customer's formal sign-off","Begin closing the project or phase"],
    answer: 1, explain: "Control Quality (internal correctness) precedes Validate Scope (customer acceptance). The defects must be corrected before the customer is asked to accept the deliverable." },

  { domain: "Process", q: "BAC = $120,000, the work is 40% complete, and AC = $60,000. What is the cost variance (CV)?",
    options: ["−$36,000","−$12,000","+$12,000","$0"],
    answer: 1, explain: "EV = 40% × 120,000 = 48,000. CV = EV − AC = 48,000 − 60,000 = −$12,000, meaning the project is over budget." },

  { domain: "Process", q: "EV = $50,000 and PV = $40,000 on a project. What is the SPI, and what does it indicate?",
    options: ["0.80 — behind schedule","1.25 — ahead of schedule","1.25 — behind schedule","0.80 — ahead of schedule"],
    answer: 1, explain: "SPI = EV/PV = 50,000/40,000 = 1.25. An SPI above 1 means the project is ahead of schedule." },

  { domain: "Process", q: "Which document formally authorizes the project to begin and grants the project manager authority to apply organizational resources?",
    options: ["The project management plan","The project charter","The business case","The project scope statement"],
    answer: 1, explain: "The project charter authorizes the project and empowers the PM; it is issued by the sponsor or initiator. The business case justifies the project, and the plan and scope statement come later." },

  { domain: "Process", q: "A team member implemented a change to a deliverable directly, without it being approved. What should the project manager do?",
    options: ["Accept it because the work is already finished","Assess the impact, document it, and process it through change control","Reverse the change immediately, without performing any impact analysis first","Reprimand the team member in front of the team"],
    answer: 1, explain: "Even after the fact, evaluate the impact and process the change formally to preserve baseline and configuration integrity. Accepting it blindly, reversing it without analysis, or public reprimand are all wrong." },

  { domain: "Process", q: "An activity on the critical path, which has zero float, is delayed by three days. What is the effect on the project?",
    options: ["No effect, because there is slack available","The project finish date slips by three days unless action is taken","Only the immediately following activity in the network is delayed by it","The project budget increases automatically"],
    answer: 1, explain: "Critical-path activities have zero float, so any delay there delays the whole project unless you crash or fast-track to recover the time." },

  { domain: "Process", q: "A team needs to systematically explore the underlying causes of a recurring defect. Which tool is MOST appropriate?",
    options: ["A Pareto chart","A cause-and-effect (Ishikawa) diagram","A Gantt chart","A responsibility assignment matrix"],
    answer: 1, explain: "The fishbone (Ishikawa) diagram organizes potential causes into categories so the team can drill into the true root cause. Pareto ranks causes by frequency but does not explore them." },

  { domain: "Process", q: "A Pareto chart shows that about 80% of customer complaints come from roughly 20% of the causes. How should the team act on this?",
    options: ["Address every cause with equal effort","Prioritize the vital few causes that drive most complaints","Disregard the chart as not actionable","Increase inspection effort across all areas of the process equally"],
    answer: 1, explain: "Pareto's 80/20 principle directs effort to the vital few causes responsible for most of the problems — the highest-leverage fixes first." },

  { domain: "Process", q: "A risk has a 25% probability of occurring and would cause a $40,000 loss. What is its expected monetary value (EMV)?",
    options: ["−$1,000","−$10,000","−$40,000","+$10,000"],
    answer: 1, explain: "EMV = probability × impact = 0.25 × (−$40,000) = −$10,000." },

  { domain: "Process", q: "Implementing a risk response creates a new risk as a direct result of that response. What is the new risk called?",
    options: ["Residual risk","Secondary risk","Inherent risk","A risk trigger"],
    answer: 1, explain: "A secondary risk arises from implementing a response. Residual risk is what remains after the response; a trigger is a warning sign that a risk is occurring." },

  { domain: "Process", q: "Which estimating technique applies a statistical relationship from historical data, such as cost per square foot multiplied by area?",
    options: ["Analogous estimating","Parametric estimating","Bottom-up estimating","Expert judgment"],
    answer: 1, explain: "Parametric estimating multiplies a unit rate by a quantity using a statistical relationship. Analogous scales from a similar project; bottom-up sums detailed components; expert judgment is opinion-based." },

  { domain: "Process", q: "A project manager estimates total cost by estimating each work package in detail and rolling the figures up. Which technique is this, and what is its trade-off?",
    options: ["Analogous estimating — fast but rough","Bottom-up estimating — most accurate but most effort","Parametric estimating — statistical and quick","Rough order of magnitude — early and approximate"],
    answer: 1, explain: "Bottom-up estimating sums detailed estimates of each component. It is the most accurate approach but also the most time- and effort-intensive." },

  { domain: "Process", q: "A risk has been actively accepted by the team. What is the appropriate proactive measure to take in case it occurs?",
    options: ["Take no action whatsoever, either now or if it later occurs","Establish a contingency reserve or fallback plan","Transfer the risk to a vendor instead","Remove the risk from the risk register"],
    answer: 1, explain: "Active acceptance sets up a contingency reserve or fallback plan to deal with the risk if it materializes, even though no action is taken now to change it. Passive acceptance does nothing; transfer is a different strategy." },

  { domain: "Process", q: "Which sequence correctly orders the project management process groups?",
    options: ["Planning, Initiating, Executing, Closing","Initiating, Planning, Executing, Monitoring & Controlling, Closing","Executing, Planning, Monitoring & Controlling, then Closing the project","Initiating, Executing, Planning, Closing"],
    answer: 1, explain: "The process groups flow Initiating, Planning, Executing, Monitoring & Controlling, and Closing, with Monitoring & Controlling overlapping the others throughout." },

  { domain: "Process", q: "What is decomposed to create the work breakdown structure (WBS), and what is its lowest level called?",
    options: ["Activities, decomposed into milestones","Project scope and deliverables, into work packages","Project costs, decomposed down into control accounts","Risks, decomposed into triggers"],
    answer: 1, explain: "The WBS decomposes the total project scope and deliverables into progressively smaller pieces; the lowest level is the work package, where work is later defined and estimated." },

  { domain: "Process", q: "A project's persistent cost overrun (CPI 0.85) prompts the sponsor to ask how much the whole project will likely cost. Which value should the project manager report?",
    options: ["BAC","EAC","PV","SV"],
    answer: 1, explain: "EAC (estimate at completion) forecasts the total expected cost. With a steady variance, EAC = BAC/CPI. BAC is the original budget; PV and SV are not total-cost forecasts." },

  { domain: "Process", q: "BAC = $100,000 and EAC = $125,000. What is the variance at completion (VAC), and what does it mean?",
    options: ["+$25,000 — under budget","−$25,000 — over budget","−$25,000 — under budget","$0 — on budget"],
    answer: 1, explain: "VAC = BAC − EAC = 100,000 − 125,000 = −$25,000. A negative VAC means the project is forecast to finish over budget." },

  { domain: "Process", q: "The team must complete the remaining work within the remaining budget to still meet the original BAC. Which index expresses the cost efficiency now required?",
    options: ["CPI","SPI","TCPI","EMV"],
    answer: 2, explain: "TCPI = (BAC − EV)/(BAC − AC) gives the cost efficiency needed on the remaining work to meet the BAC. A TCPI above 1 means the team must perform better than planned." },

  { domain: "Process", q: "Which document defines the project's deliverables, acceptance criteria, exclusions, assumptions, and constraints?",
    options: ["The project charter","The project scope statement","The risk register","The stakeholder register"],
    answer: 1, explain: "The project scope statement details deliverables, acceptance criteria, exclusions, assumptions, and constraints — the basis for what is in and out of scope. The charter is higher-level and earlier." },

  { domain: "Process", q: "What three components together form the scope baseline?",
    options: ["Charter, business case, and management plan","Scope statement, WBS, and WBS dictionary","Schedule, cost, and quality baselines","Risk, issue, and change logs"],
    answer: 1, explain: "The scope baseline is the approved scope statement, the WBS, and the WBS dictionary, used to measure and control scope." },

  { domain: "Process", q: "Two activities have a finish-to-start relationship, and the team deliberately inserts a three-day wait between them (for example, to let material cure). What is this delay called?",
    options: ["Lead","Lag","Float","Crash"],
    answer: 1, explain: "Lag is an intentional delay between dependent activities. Lead is an acceleration that lets a successor start early; float is schedule flexibility; crashing is compression by adding resources." },

  { domain: "Process", q: "A dependency is required by the physical nature of the work — the walls cannot be built before the foundation. What kind of dependency is this?",
    options: ["Discretionary dependency","Mandatory (hard logic) dependency","External dependency","Internal resource dependency"],
    answer: 1, explain: "Mandatory (hard logic) dependencies are inherent in the nature of the work or required by contract or law. Discretionary (soft logic) dependencies are preferred practice but not strictly required." },

  { domain: "Process", q: "Resource leveling is applied to a schedule that has over-allocated resources. What is the typical effect?",
    options: ["The project duration is always shortened","The critical path may change and the project may lengthen","All float is removed from the schedule","Resource conflicts tend to increase across the entire schedule"],
    answer: 1, explain: "Resource leveling adjusts start and finish dates to resolve over-allocation and can lengthen the project and change the critical path. Smoothing, by contrast, keeps the end date and uses available float." },

  { domain: "Process", q: "Which of these is a cost of conformance in the cost of quality model?",
    options: ["Rework and scrap from defects","Warranty claims and lost business","Training and inspection/testing","Product recalls and liabilities"],
    answer: 2, explain: "Cost of conformance (prevention plus appraisal) includes training, quality processes, inspection, and testing. Rework, scrap, warranties, and recalls are costs of nonconformance (failure)." },

  { domain: "Process", q: "Which quality tool plots two variables against each other to show whether a relationship or correlation exists?",
    options: ["A histogram","A scatter diagram","A control chart","A flowchart"],
    answer: 1, explain: "A scatter diagram plots an independent against a dependent variable to reveal correlation. Histograms show distribution, control charts show stability over time, and flowcharts map process steps." },

  { domain: "Process", q: "A project manager runs a Monte Carlo simulation on the schedule. What is the purpose of doing this?",
    options: ["To assign responsibility for the project's past delays and overruns","To model the probability of different outcomes under uncertainty","To replace the work breakdown structure","To select the project's contract type"],
    answer: 1, explain: "Monte Carlo is a quantitative technique that runs many simulations across input ranges to produce a probability distribution of cost or schedule outcomes — useful for setting realistic reserves and confidence levels." },

  { domain: "Process", q: "A decision tree shows two options with different probabilities and payoffs. What does the analysis help the project manager choose?",
    options: ["The least expensive option overall","The option with the best expected monetary value","The option the sponsor personally prefers","The option that finishes the project work the fastest"],
    answer: 1, explain: "Decision tree analysis computes the EMV of each path (probability × payoff, net of cost) to identify the choice with the best expected value under uncertainty." },

  { domain: "Process", q: "Which risk strategy eliminates a threat entirely, for example by changing the plan so the cause can no longer occur?",
    options: ["Mitigate","Avoid","Transfer","Accept"],
    answer: 1, explain: "Avoid removes the threat completely — by changing scope, the schedule, or the approach so the risk can no longer happen. Mitigate only reduces it; transfer and accept leave it in place." },

  { domain: "Process", q: "A threat is significant and lies outside the project team's authority to address, so it must be raised to the program or portfolio level. Which risk response is this?",
    options: ["Mitigate","Escalate","Transfer","Accept"],
    answer: 1, explain: "Escalate moves a threat or opportunity outside the project's scope or authority to the appropriate higher level. Once escalated, ownership sits there, not with the project team." },

  { domain: "Process", q: "What is configuration management primarily concerned with?",
    options: ["Approving or rejecting change requests","Controlling the product's features, specifications, and document versions","Setting the project's overall budget","Selecting, onboarding, and developing all of the members of the project team"],
    answer: 1, explain: "Configuration management controls the product's specifications and the versions of deliverables and documents. Change control, by contrast, governs the approval or rejection of changes to baselines." },

  { domain: "Process", q: "Who typically approves or rejects change requests on a project?",
    options: ["Whichever team member happens to first identify the needed change","The change control board, per the change management plan","The customer, acting unilaterally","The selected vendor or seller"],
    answer: 1, explain: "The change control board reviews and approves or rejects changes according to the change management plan. The PM may have limited delegated authority for minor changes, but not arbitrary team members or the customer alone." },

  { domain: "Process", q: "A procurement is for a clearly defined, standard commodity where price is the main differentiator. Which contract type fits BEST?",
    options: ["Cost-reimbursable","Firm Fixed Price (FFP)","Time and Materials","Cost Plus Award Fee"],
    answer: 1, explain: "Firm fixed price suits well-defined scope and commodities: the buyer's cost is fixed and the seller bears overrun risk, with price as the key decision factor." },

  { domain: "Process", q: "During Close Procurements, the buyer and seller settle final payments and formally accept the work. What is essential to capture for the organization?",
    options: ["Only the final invoice for payment","Procurement records, lessons learned, and formal acceptance","The seller's original marketing brochures and proposal materials","A new project charter for follow-on work"],
    answer: 1, explain: "Closing procurements requires verifying deliverables, settling claims, documenting lessons learned, and archiving complete procurement records and formal acceptance — feeding the organization's knowledge base." },

  { domain: "Process", q: "The project manager discovers the project will likely miss a regulatory deadline. What should they do FIRST?",
    options: ["Continue working and try to catch up quietly","Analyze the options and communicate honestly to stakeholders","Shift responsibility for the looming delay onto the project team","Reduce quality on remaining work to save time"],
    answer: 1, explain: "Be transparent and proactive: assess impact and options, communicate honestly, then replan through proper channels. Hiding the problem, blaming the team, or cutting quality all violate the PMI mindset and ethics." },

  { domain: "Process", q: "Which best describes progressive elaboration in project management?",
    options: ["Adding scope to the project without approval","Refining plans and estimates in more detail as more is known","Completing all detailed planning before any project work begins","Skipping detailed planning to start sooner"],
    answer: 1, explain: "Progressive elaboration iteratively refines plans, estimates, and details as the project advances and information improves. It is deliberate refinement, not uncontrolled scope creep." },

  { domain: "Process", q: "Which procurement document is used to request detailed solutions and proposals from sellers for a complex need?",
    options: ["Request for Quotation (RFQ)","Request for Proposal (RFP)","Request for Information (RFI)","Purchase order (PO)"],
    answer: 1, explain: "An RFP seeks proposals and solutions for complex requirements. An RFQ requests pricing for well-defined goods; an RFI gathers general market information; a PO is a simple purchase commitment." },

  { domain: "Process", q: "The Point of Total Assumption (PTA) is a concept associated with which contract type?",
    options: ["Cost Plus Fixed Fee (CPFF)","Fixed Price Incentive Fee (FPIF)","Time and Materials (T&M)","Cost Plus Award Fee (CPAF)"],
    answer: 1, explain: "PTA applies to fixed-price incentive contracts: it is the cost above which the seller bears all additional cost, shifting full overrun risk to the seller beyond that point." },

  { domain: "Process", q: "A quality audit is performed on a project. What is its primary purpose?",
    options: ["To inspect each individual project deliverable closely for defects","To confirm processes follow policies and to find improvements","To formally accept the deliverables","To calculate the project's earned value"],
    answer: 1, explain: "Quality audits (part of Manage Quality) check whether activities comply with organizational and quality policies and surface gaps, good practices, and improvements. Inspecting deliverables is Control Quality." },

  { domain: "Process", q: "A risk audit, as distinct from a risk review, primarily evaluates what?",
    options: ["Whether any of the identified project risks have occurred yet","The effectiveness of risk responses and the risk process","The project's current earned value status","The chosen procurement strategy"],
    answer: 1, explain: "A risk audit examines the effectiveness of risk responses and the overall risk management process. A risk review, by contrast, reassesses current risks and identifies new ones." },

  { domain: "Process", q: "Best practice for a RACI chart is to have exactly one 'A' per activity. Why does this matter?",
    options: ["It allows more people to approve quickly","It ensures unambiguous, single-point accountability","It means the activity can be automated","It reduces the number of people who must be consulted"],
    answer: 1, explain: "Exactly one Accountable per activity ensures ownership is unambiguous. Multiple 'A's create confusion over who is ultimately answerable for the outcome." },

  { domain: "Process", q: "A predictive project has just finished a phase and must decide whether to continue. What is this go/no-go decision point called?",
    options: ["A milestone review","A phase gate (stage gate)","A sprint retrospective","A baseline checkpoint"],
    answer: 1, explain: "A phase gate (stage gate, or kill point) is a review at a phase end to decide whether to continue, change, or terminate based on performance and continued business justification." },

  { domain: "Process", q: "What is the main purpose of perform integrated change control?",
    options: ["To prevent changes from being made at all","To assess change impact across all areas and coordinate approvals","To let the project manager change any baseline at will, without review","To bypass the change control board for speed"],
    answer: 1, explain: "Integrated change control ensures changes are evaluated for impact across scope, schedule, cost, quality, and risk, then approved and coordinated coherently rather than piecemeal — not to block all change." },

  { domain: "Process", q: "A project manager needs to establish the logical order in which activities must be performed, producing the network diagram. Which process is this?",
    options: ["Define Activities","Sequence Activities","Estimate Activity Durations","Develop Schedule"],
    answer: 1, explain: "Sequence Activities establishes the logical relationships among activities (using the precedence diagramming method) to produce the project schedule network diagram." },

  { domain: "Process", q: "What does a risk trigger represent?",
    options: ["The person who is assigned to own the risk response","A warning sign that a risk is about to occur","The cost of implementing the response","The risk remaining after a response"],
    answer: 1, explain: "A trigger is an indicator or condition signaling that a risk is about to happen or is happening, prompting the team to enact the planned response. It is not the owner, cost, or residual risk." },

  { domain: "Process", q: "Validated deliverables and accepted deliverables differ in an important way. Which statement is correct?",
    options: ["They are two names for the same thing","Validated means internally correct; accepted means customer-signed-off","Accepted always comes before validated","Validated simply means that the project has now been formally closed out"],
    answer: 1, explain: "Control Quality produces validated (internally correct) deliverables; Validate Scope produces accepted (formally customer-signed-off) deliverables. Validation precedes acceptance." },

  { domain: "Process", q: "Which analysis identifies which individual risks or variables have the greatest potential impact on project outcomes, often shown as a tornado diagram?",
    options: ["Pareto analysis","Sensitivity analysis","Make-or-buy analysis","Trend analysis"],
    answer: 1, explain: "Sensitivity analysis, frequently displayed as a tornado diagram, ranks which risks or variables most influence the outcome, focusing attention on the biggest drivers." },

  { domain: "Process", q: "A project manager must decide whether to produce a component in-house or purchase it externally. Which analysis supports this decision?",
    options: ["Make-or-buy analysis","Earned value analysis","Variance analysis","Root cause analysis"],
    answer: 0, explain: "Make-or-buy analysis weighs the costs, benefits, capacity, and risks of producing internally versus procuring externally, informing the procurement strategy." },

  { domain: "Process", q: "What is the purpose of a bidder (pre-bid) conference during procurement?",
    options: ["To award the contract to a seller","To give all prospective sellers the same information fairly","To negotiate the final contract price with the chosen seller","To formally close out the procurement"],
    answer: 1, explain: "Bidder/pre-bid conferences ensure all prospective sellers receive the same information and clarifications, supporting a fair and transparent procurement before proposals are submitted." },

  { domain: "Process", q: "The cost baseline is best described as which of the following?",
    options: ["The sum of all costs including management reserve","The time-phased budget excluding management reserve","The contingency reserve held by the PM","The organization's overall funding limit"],
    answer: 1, explain: "The cost baseline is the approved, time-phased budget (it includes contingency reserve) against which cost performance is measured. Management reserve sits outside the cost baseline." },

  { domain: "Process", q: "What is the difference between preventive action and corrective action?",
    options: ["They are essentially the same response","Preventive addresses a potential future problem; corrective realigns after a deviation","Corrective action is generally always cheaper to perform than preventive action would have been","Preventive action is only taken at project closure"],
    answer: 1, explain: "Corrective action brings performance back in line after a variance has occurred; preventive action proactively reduces the probability of a future negative deviation." },

  { domain: "Process", q: "What is rolling wave planning?",
    options: ["Planning out the entire project in complete detail right at the very start","Detailing near-term work now and elaborating later work as it nears","Planning only at the very end of the project","Avoiding planning to keep the project flexible"],
    answer: 1, explain: "Rolling wave planning details imminent work while leaving future work at a higher level, refining it progressively as it approaches — a form of progressive elaboration." },

  { domain: "Process", q: "The schedule baseline must be revised because an approved change added scope. What should the project manager do?",
    options: ["Keep measuring against the original baseline","Update the baseline and related plan documents","Leave the change out of performance reporting","Discard the original schedule entirely"],
    answer: 1, explain: "Approved changes drive baseline updates: the schedule (and any affected cost or scope baselines and plan documents) must be revised so performance is measured against current, approved reality." },

  /* ============================================================
     AGILE / HYBRID  (~half the exam)
     ============================================================ */

  { domain: "Agile/Hybrid", q: "Midway through a sprint, an influential stakeholder insists that a new high-priority feature be added to the current sprint right away. What should the team do?",
    options: ["Add the new feature to the current sprint right away to satisfy them","Add it to the product backlog for the Product Owner to prioritize","Cancel the current sprint and replan from scratch","Have the team work extra hours to fit the feature in"],
    answer: 1, explain: "The current sprint is protected. New requests go to the product backlog, where the Product Owner prioritizes them for a future sprint — not jammed into the active sprint or forced through overtime." },

  { domain: "Agile/Hybrid", q: "Who is accountable for maximizing the value of the product and ordering the product backlog?",
    options: ["The Scrum Master","The Product Owner","The development team","The project sponsor"],
    answer: 1, explain: "The Product Owner owns and orders the product backlog to maximize value — deciding the 'what' and the 'why.' The Scrum Master serves the process; the team builds the product." },

  { domain: "Agile/Hybrid", q: "What is the primary purpose of the sprint retrospective?",
    options: ["To demonstrate the increment to stakeholders","To inspect and improve how the team works together","To plan the work for the next sprint","To reorder and refine the product backlog"],
    answer: 1, explain: "The retrospective is the team's chance to inspect and adapt its own process, tools, and relationships. The sprint review demonstrates the increment; planning and refinement are separate activities." },

  { domain: "Agile/Hybrid", q: "A team completes about 32 story points each sprint. What is this measure called, and how should it be used?",
    options: ["Cycle time, used to bill the client","Velocity, used to forecast the team's own capacity","Lead time, used to rank the individual team members","Throughput, used to compare teams"],
    answer: 1, explain: "Velocity is story points completed per sprint, used to forecast that team's future capacity. It must never be used to rank individuals or compare different teams." },

  { domain: "Agile/Hybrid", q: "In Kanban, what is the primary mechanism for improving flow and exposing bottlenecks?",
    options: ["Using fixed-length sprints","Limiting work in progress (WIP)","Estimating work in story points","Holding a daily standup"],
    answer: 1, explain: "Kanban limits WIP to smooth flow and surface bottlenecks, using continuous flow rather than timeboxed iterations. Sprints, story points, and standups are not its core flow mechanism." },

  { domain: "Agile/Hybrid", q: "Which statement reflects a value from the Agile Manifesto?",
    options: ["Comprehensive documentation over working software","Customer collaboration over contract negotiation","Following a plan over responding to change","Processes and tools over individuals and interactions"],
    answer: 1, explain: "The manifesto values customer collaboration over contract negotiation — and individuals/interactions, working software, and responding to change over the right-hand items. The other options reverse the values." },

  { domain: "Agile/Hybrid", q: "A stakeholder demands a firm, fixed scope and delivery date for a full year out on an agile project. What is the BEST response?",
    options: ["Commit to the full scope and date as requested","Explain incremental delivery and shape a prioritized roadmap together","Refuse to provide any timeline at all","Switch the project over to a fully predictive, plan-driven approach immediately"],
    answer: 1, explain: "Agile embraces change and delivers value incrementally. Educate the stakeholder and collaborate on a prioritized, evolving roadmap rather than locking full scope a year ahead, refusing to plan, or abandoning agile." },

  { domain: "Agile/Hybrid", q: "What is the timebox for the Daily Scrum?",
    options: ["5 minutes","15 minutes","30 minutes","60 minutes"],
    answer: 1, explain: "The Daily Scrum is timeboxed to 15 minutes for the developers to inspect progress toward the sprint goal and surface impediments." },

  { domain: "Agile/Hybrid", q: "Which acronym captures the qualities of a well-formed user story?",
    options: ["SMART","INVEST","MoSCoW","SWOT"],
    answer: 1, explain: "INVEST stands for Independent, Negotiable, Valuable, Estimable, Small, and Testable — the marks of a good user story. SMART is for objectives; MoSCoW is prioritization; SWOT is strategic analysis." },

  { domain: "Agile/Hybrid", q: "Which chart makes scope changes visible alongside completed work over time?",
    options: ["A burndown chart","A burnup chart","A control chart","A Pareto chart"],
    answer: 1, explain: "A burnup chart plots completed work against a total-scope line, so scope changes are visible. A burndown chart shows only remaining work, hiding scope changes." },

  { domain: "Agile/Hybrid", q: "During a sprint, the team realizes a committed story is much larger than estimated and will not fit. What should they do?",
    options: ["Have the team work unpaid overtime to force the oversized story through","Discuss it with the Product Owner and renegotiate the sprint scope","Hide the problem until the sprint review","Cancel the sprint and start over"],
    answer: 1, explain: "Agile values transparency: collaborate with the Product Owner to adjust scope, splitting or moving the story. Protecting the sprint goal comes through honest re-planning, not overtime, concealment, or cancellation." },

  { domain: "Agile/Hybrid", q: "A stakeholder asks the Scrum Master to slip a 'quick' feature into the current sprint. What should the Scrum Master do?",
    options: ["Add the feature to keep the stakeholder happy","Direct the request to the Product Owner for prioritization","Tell the developers to squeeze it in this sprint","Decline the stakeholder's request firmly and end the discussion"],
    answer: 1, explain: "The Product Owner owns the backlog and priorities. The Scrum Master protects the team and routes the request to the right person rather than disrupting the sprint or shutting the stakeholder down." },

  { domain: "Agile/Hybrid", q: "The team's velocity has declined for three consecutive sprints. What is the BEST first step?",
    options: ["Assign the team more work to push them to perform harder","Raise it in the retrospective to find the root cause","Replace one or more team members","Stop tracking velocity altogether"],
    answer: 1, explain: "The retrospective is where the team inspects and adapts. Investigate the root cause collaboratively before taking drastic action such as adding work or changing the team." },

  { domain: "Agile/Hybrid", q: "What is the correct purpose of the sprint review?",
    options: ["To improve the team's internal process","To demonstrate the increment and gather stakeholder feedback","To plan the tasks for the next sprint","To conduct formal individual performance reviews of team members"],
    answer: 1, explain: "The sprint review inspects the increment with stakeholders and adapts the product backlog based on their feedback. Improving the process is the retrospective; planning is sprint planning." },

  { domain: "Agile/Hybrid", q: "A predictive project contains a few highly uncertain components. What is often the BEST approach?",
    options: ["Force the entire project to be predictive","Use a hybrid approach for the stable and uncertain parts","Cancel the uncertain components entirely to reduce project risk","Wait until all the uncertainty resolves itself"],
    answer: 1, explain: "Hybrid tailoring runs stable, well-defined work predictively while delivering uncertain work iteratively to manage risk and incorporate learning. Forcing one approach or waiting for certainty both fail." },

  { domain: "Agile/Hybrid", q: "Who manages the sprint backlog during the sprint?",
    options: ["The Scrum Master alone","The Product Owner who sets priorities","The developers (development team)","The project sponsor or steering committee"],
    answer: 2, explain: "The developers own and manage the sprint backlog — what they pulled in and how they will deliver it — self-organizing to meet the sprint goal." },

  { domain: "Agile/Hybrid", q: "The Product Owner is frequently unavailable, leaving the team unsure of priorities. What should the Scrum Master do?",
    options: ["Step in and make the prioritization decisions on the Product Owner's behalf","Coach the organization on the PO role and secure their availability","Cancel sprints until the Product Owner appears","Let the developers decide priorities by guessing"],
    answer: 1, explain: "The Scrum Master removes organizational impediments and coaches stakeholders. An absent PO is an impediment to resolve — not a reason to override the role, halt work, or let the team guess." },

  { domain: "Agile/Hybrid", q: "On a sprint burndown chart, the actual line is trending above the ideal line. What does this indicate?",
    options: ["The team is running comfortably ahead of the planned delivery pace","The team is behind; remaining work is not dropping fast enough","The sprint scope has been reduced","The sprint has been completed early"],
    answer: 1, explain: "When the actual remaining-work line sits above the ideal line, the team is behind the pace needed to finish the sprint's planned work." },

  { domain: "Agile/Hybrid", q: "A Kanban team has too many items in progress and delivery has slowed noticeably. What is the BEST action?",
    options: ["Add more people to the team","Set or lower WIP limits to improve flow","Start more items in parallel to keep busy","Remove the Kanban board to reduce overhead"],
    answer: 1, explain: "Lowering WIP limits reduces multitasking and bottlenecks, improving flow and cycle time — the heart of Kanban. Adding people or starting more work usually makes flow worse." },

  { domain: "Agile/Hybrid", q: "How should requirements be handled on an agile project?",
    options: ["Fully defined and then frozen in place before any work begins","Captured as a prioritized backlog and refined progressively","Left undefined until late in the project","Defined solely by the project manager"],
    answer: 1, explain: "Agile uses a living, prioritized product backlog with progressive elaboration, embracing change rather than freezing scope early or leaving it undefined." },

  { domain: "Agile/Hybrid", q: "What is the primary measure of progress on an agile project?",
    options: ["The number of hours the team has worked","Working, valuable product that is potentially shippable","The total number of project meetings and ceremonies that were held","The volume of documentation produced"],
    answer: 1, explain: "Per the Agile Manifesto, working product is the primary measure of progress — value delivered, not hours, meetings, or documentation." },

  { domain: "Agile/Hybrid", q: "What does the Definition of Done establish for a Scrum team?",
    options: ["Whatever personal quality preferences the Product Owner happens to hold","A shared, consistent standard for when work is truly complete","The length of the sprint timebox","The team's compensation structure"],
    answer: 1, explain: "The Definition of Done is the team's shared quality standard that an increment must meet to be considered complete, ensuring consistent, releasable quality across all work." },

  { domain: "Agile/Hybrid", q: "How do acceptance criteria for a user story differ from the Definition of Done?",
    options: ["They are exactly the same thing","Acceptance criteria are story-specific; the DoD is team-wide","The DoD is per story; acceptance criteria are team-wide","Neither concept is used in agile"],
    answer: 1, explain: "Acceptance criteria are conditions specific to a particular story; the Definition of Done is a uniform completeness standard applied to every increment." },

  { domain: "Agile/Hybrid", q: "What is backlog refinement (grooming)?",
    options: ["A formal change control board meeting","Ongoing work to clarify, estimate, split, and reorder backlog items","Essentially the same thing as running the sprint retrospective each sprint","A technique for skipping sprint planning"],
    answer: 1, explain: "Backlog refinement is the continuous activity of detailing, estimating, splitting, and ordering backlog items so they are 'ready' when a sprint pulls them in." },

  { domain: "Agile/Hybrid", q: "An agile team estimates with story points rather than hours. What do story points primarily measure?",
    options: ["The exact number of hours of effort","The relative size, complexity, and effort of work","The precise number of calendar days the work will require","The productivity of each team member"],
    answer: 1, explain: "Story points express relative size — a blend of effort, complexity, and uncertainty — rather than absolute time, which improves estimating consistency over the long run." },

  { domain: "Agile/Hybrid", q: "What is a spike in agile?",
    options: ["A sudden, unexpected increase in velocity","A timeboxed research task to reduce uncertainty","A defect found in the increment","A particular type of product release"],
    answer: 1, explain: "A spike is a timeboxed investigation — research, a prototype, or a proof of concept — used to gain enough knowledge to estimate or design risky or uncertain work." },

  { domain: "Agile/Hybrid", q: "A team wants to estimate backlog items collaboratively while avoiding anchoring on the first number spoken. Which technique fits?",
    options: ["The project manager estimates top-down","Planning poker","Parametric estimating","The Product Owner assigns the points"],
    answer: 1, explain: "Planning poker has team members reveal estimates simultaneously, discuss differences, and converge — leveraging collective knowledge and reducing anchoring bias." },

  { domain: "Agile/Hybrid", q: "What is the typical length of a sprint or iteration?",
    options: ["A single day","One to four weeks","About six months","Roughly one year"],
    answer: 1, explain: "Sprints are short, fixed timeboxes — usually one to four weeks — kept consistent to establish a sustainable, predictable cadence." },

  { domain: "Agile/Hybrid", q: "Why should the length of a sprint stay consistent over time?",
    options: ["To make the Product Owner's job easier","To create a steady cadence so velocity and forecasting are meaningful","Because the team's agile tooling technically requires a fixed sprint length","To reduce the need for retrospectives"],
    answer: 1, explain: "A consistent timebox creates a reliable rhythm, so velocity is comparable from sprint to sprint and forecasting and planning become meaningful." },

  { domain: "Agile/Hybrid", q: "A team consistently commits to more than it can finish each sprint. What is the BEST corrective action?",
    options: ["Add more working hours indefinitely","Use actual velocity to forecast realistically and commit to less","Stop holding sprint planning sessions","Remove or relax the Definition of Done so the team can move faster"],
    answer: 1, explain: "Over-commitment is fixed by using empirical velocity to right-size commitments. A sustainable pace yields more reliable delivery than chronic overload or cutting quality practices." },

  { domain: "Agile/Hybrid", q: "What does 'sustainable pace' mean on an agile project?",
    options: ["Working maximum overtime to hit deadlines","Maintaining a steady, healthy rate the team can sustain","Working hard only when the individual team members feel motivated","Skipping ceremonies to save time for delivery"],
    answer: 1, explain: "Sustainable pace means a steady, healthy work rate the team can maintain long term, protecting quality, morale, and throughput against burnout." },

  { domain: "Agile/Hybrid", q: "What is the main benefit of delivering working increments frequently rather than all at the end?",
    options: ["It pushes delivery of all project value to the very end of the project","It provides early, frequent value and feedback while reducing risk","It removes the need for any testing","It eliminates the need for a product backlog"],
    answer: 1, explain: "Incremental delivery yields value and feedback early and often, surfaces risks sooner, and lets priorities adapt as the team and stakeholders learn." },

  { domain: "Agile/Hybrid", q: "A traditional manager keeps assigning specific tasks to individual members of a self-organizing agile team. Why is this a problem?",
    options: ["It makes the team deliver too quickly","It undermines self-organization and the team's ownership","It is something explicitly required by the Scrum framework","It improves the team's Definition of Done"],
    answer: 1, explain: "Self-organizing teams decide who does what. External task assignment erodes ownership, motivation, and the team's ability to optimize its own work." },

  { domain: "Agile/Hybrid", q: "In a hybrid project, which kind of work is typically BEST suited to a predictive (plan-driven) approach?",
    options: ["Work with highly uncertain, fast-changing requirements","Stable, well-understood work with low expected change","Experimental research with unknown outcomes","Whatever work the team happens to prefer"],
    answer: 1, explain: "Predictive suits stable, well-defined work with low expected change; agile and iterative approaches suit uncertain, evolving work. Hybrid applies each where it fits best." },

  { domain: "Agile/Hybrid", q: "What is the purpose of a product roadmap in agile?",
    options: ["A detailed task-level schedule for the year","A high-level, evolving view of product direction over time","A fixed contract that locks in the full scope and delivery dates","A log for tracking and triaging defects"],
    answer: 1, explain: "A product roadmap communicates direction, themes, and priorities at a high level and evolves as learning occurs — not a fixed, task-level commitment or a defect tracker." },

  { domain: "Agile/Hybrid", q: "The team finishes its committed work partway through the sprint. What should they do?",
    options: ["Stop working entirely and just wait for the next sprint to begin shortly","Pull the next-highest-priority item, working with the Product Owner","Take on unrelated personal side projects","Extend the current sprint's length"],
    answer: 1, explain: "Finishing early, the team collaborates with the Product Owner to pull the next prioritized item or to invest in quality and refactoring, maintaining flow and value." },

  { domain: "Agile/Hybrid", q: "What does 'fail fast' mean in an agile context?",
    options: ["Encouraging careless, low-quality work","Surfacing invalid assumptions early through small experiments","Giving up quickly at the very first sign of any significant obstacle","Skipping testing to deliver more quickly"],
    answer: 1, explain: "Fail fast means using small, quick experiments to learn what does not work early, when changing course is cheap — turning failure into rapid learning, not encouraging carelessness." },

  { domain: "Agile/Hybrid", q: "Stakeholders complain that they do not know what the agile team is working on. What is the BEST agile-aligned response?",
    options: ["Produce heavy weekly written status reports","Increase transparency with information radiators and sprint reviews","Limit the stakeholders' access to project information to reduce noise","Switch to predictive-style status reporting"],
    answer: 1, explain: "Agile favors transparency through information radiators (boards, burn charts) and direct engagement at sprint reviews, rather than heavy push reporting or restricting access." },

  { domain: "Agile/Hybrid", q: "What is an information radiator?",
    options: ["A confidential status report intended for management only","A highly visible display that broadcasts progress to all","A particular type of recurring meeting","A register used to track project risks"],
    answer: 1, explain: "An information radiator is a big, visible display — physical or digital, such as a task board or burn chart — that continuously communicates team progress and metrics, promoting transparency." },

  { domain: "Agile/Hybrid", q: "Why does agile emphasize face-to-face (or video) conversation as the most effective form of communication?",
    options: ["It removes the need for the team to keep any written documentation","It conveys information richly and quickly with immediate feedback","It is simply cheaper than sending email","It is a strict contractual requirement"],
    answer: 1, explain: "The Agile Manifesto holds that direct conversation is the most efficient and effective way to convey information — rich, fast, and with instant feedback and clarification." },

  { domain: "Agile/Hybrid", q: "A team routinely ignores its Definition of Done to 'hit the date.' What is the likely consequence and BEST response?",
    options: ["Faster sustainable delivery, so continue the practice","Accumulating technical debt, so restore and uphold the DoD","No real consequence either way","Permanent removal of the Definition of Done"],
    answer: 1, explain: "Skipping the DoD creates undone work and technical debt that resurfaces later at higher cost. The team should uphold the DoD and adjust scope or forecasts honestly instead." },

  { domain: "Agile/Hybrid", q: "What does a minimum viable product (MVP) represent?",
    options: ["A low-quality throwaway prototype","The smallest releasable version that delivers value and enables learning","The complete, fully finished product including every single planned feature","A formal requirements specification document"],
    answer: 1, explain: "An MVP is the smallest product increment that delivers real value and lets the team learn from real users, validating direction before building more." },

  { domain: "Agile/Hybrid", q: "Can one person effectively serve as both the Scrum Master and the Product Owner for the same team?",
    options: ["Yes, and combining them is generally recommended","No, because the roles have conflicting focuses","Yes, it is required on small teams","Only the sponsor can make that call"],
    answer: 1, explain: "Combining the roles creates a conflict of interest: the Scrum Master serves the team and process while the Product Owner maximizes value and owns the backlog. Keeping them separate preserves balance." },

  { domain: "Agile/Hybrid", q: "An agile team is pressured to commit to a fixed scope, a fixed date, and a fixed cost all at once. What is the BEST guidance?",
    options: ["Agree to lock all three constraints","Flex scope while prioritizing the highest-value work first","Quietly reduce quality to meet all three","Refuse to commit to delivering anything under those fixed terms"],
    answer: 1, explain: "Agile typically fixes time and cost and flexes scope, delivering the highest-value items first. Locking all three constraints invites failure or quality erosion." },

  { domain: "Agile/Hybrid", q: "What is the main purpose of a sprint goal?",
    options: ["To list out every single individual task planned for the sprint","To give the sprint a single, coherent objective and focus","To measure each individual's performance","To replace the product backlog entirely"],
    answer: 1, explain: "The sprint goal is a concise objective for the sprint, giving the team a shared purpose and the flexibility to adapt the work while still achieving it." },

  { domain: "Agile/Hybrid", q: "A team repeatedly skips the retrospective because they are 'too busy delivering.' What is the BEST response?",
    options: ["Agree to drop retrospectives to save time","Protect the retrospective, since it removes the causes of overload","Make the retrospective an optional event","Replace the team's retrospective with a brief written status email instead"],
    answer: 1, explain: "Skipping retrospectives kills continuous improvement. The retrospective is precisely where teams fix the inefficiencies causing their overload, so it should be protected, not cut." },

  { domain: "Agile/Hybrid", q: "What does 'inspect and adapt' mean in Scrum?",
    options: ["A single one-time planning event conducted at the start of the project","A recurring cycle of examining results and adjusting accordingly","A documentation and reporting standard","A specific type of vendor contract"],
    answer: 1, explain: "Inspect and adapt is the empirical heart of Scrum: regularly examine the product and process through the events, then adjust to improve outcomes." },

  { domain: "Agile/Hybrid", q: "With multiple teams working on one product, which practice helps coordinate cross-team dependencies?",
    options: ["Having each team work in isolation","A regular cross-team sync such as a scrum of scrums","Eliminating planning to move faster","Letting one single team make all of the key decisions"],
    answer: 1, explain: "Cross-team coordination, such as a scrum of scrums, surfaces and resolves dependencies and impediments that span teams working on the same product." },

  { domain: "Agile/Hybrid", q: "A stakeholder insists that every requirement is a 'must have.' How should the team respond?",
    options: ["Accept the claim that everything is equally the top priority","Facilitate genuine prioritization and force real trade-offs","Build the items in a random order","Double the team size to do it all"],
    answer: 1, explain: "True prioritization requires trade-offs — if everything is a priority, nothing is. The team facilitates honest ranking (for example, MoSCoW or value versus effort) rather than treating all items as equal." },

  { domain: "Agile/Hybrid", q: "What is the BEST way to handle a defect found during a sprint in work the team is currently building?",
    options: ["Defer it to a separate effort after release","Fix it as part of meeting the Definition of Done","Ignore it until the customer reports it","Create a brand-new project to address it"],
    answer: 1, explain: "Quality is built in: defects in current work are fixed so the increment meets the Definition of Done, rather than deferring them as accumulating technical debt." },

  { domain: "Agile/Hybrid", q: "An organization measures agile success purely by team velocity. Why is this a poor sole measure?",
    options: ["Velocity is always perfectly accurate","Velocity gauges capacity, not delivered value or quality","Velocity is essentially identical to the project's profit","Velocity can fully replace the backlog"],
    answer: 1, explain: "Velocity helps a team forecast its own capacity but says nothing about value, quality, or outcomes — and it is easily gamed. Measure value delivered, not just points." },

  { domain: "Agile/Hybrid", q: "A team wants fast feedback that the software still works correctly after each change. Which technical practice best supports this?",
    options: ["Manual testing only at the end","Continuous integration with automated testing","Releasing only once per quarter","Skipping most of the tests in order to deliver faster"],
    answer: 1, explain: "Continuous integration with automated tests gives rapid feedback that the build still works after each change, enabling sustainable, high-quality incremental delivery." },

  { domain: "Agile/Hybrid", q: "A large user story (an epic) is too big to complete in one sprint. What is the BEST practice?",
    options: ["Force it into one sprint with overtime","Split it into smaller, independently valuable stories","Drop the story from the backlog entirely","Wait until the team grows much larger before starting on it"],
    answer: 1, explain: "Split large stories or epics into smaller slices that each deliver value and fit a sprint, improving flow, feedback, and predictability." },

  { domain: "Agile/Hybrid", q: "What does a team use a persona for during product work?",
    options: ["Tracking the team's sprint velocity","Representing a typical user to guide design and priorities","Assigning responsibility for defects","Measuring and tracking the project's overall cost and budget"],
    answer: 1, explain: "Personas are research-based, fictional user archetypes that keep the team focused on real user needs when shaping and prioritizing the product." },

  /* ============================================================
     BUSINESS ENVIRONMENT  (8%)
     ============================================================ */

  { domain: "Business Environment", q: "A regulation affecting your project changes partway through execution. What should the project manager do FIRST?",
    options: ["Continue as planned to avoid any delay","Assess the compliance impact and process it through change control","Defer dealing with the new requirement until a later project phase begins","Cancel the project to avoid non-compliance"],
    answer: 1, explain: "Compliance is mandatory. Assess the impact and bring the new requirement in through integrated change control. Ignoring it, deferring it, or cancelling outright are all inappropriate responses." },

  { domain: "Business Environment", q: "Which document justifies undertaking the project and is used to measure its success against the business need?",
    options: ["The project charter","The business case","The project management plan","The project scope statement"],
    answer: 1, explain: "The business case justifies the investment and links the project to business value and benefits; success is measured against it and the benefits management plan. The charter authorizes the work." },

  { domain: "Business Environment", q: "A PMO provides templates, training, and best practices but exercises little control over how projects are run. Which type of PMO is this?",
    options: ["Directive PMO","Supportive PMO","Controlling PMO","Projectized PMO"],
    answer: 1, explain: "A supportive PMO is advisory — offering templates, training, and lessons — with low control. Controlling exerts moderate control (compliance); directive actively manages the projects." },

  { domain: "Business Environment", q: "In a strong matrix organization, who generally holds more authority over the project?",
    options: ["The functional manager","The project manager","The two share authority equally","The PMO director"],
    answer: 1, explain: "Authority rises from functional to weak matrix, balanced matrix, strong matrix, and projectized. In a strong matrix, the project manager holds more authority than the functional manager." },

  { domain: "Business Environment", q: "Employees are resisting a new system the project will deliver, and adoption is at risk. What is the BEST approach?",
    options: ["Mandate adoption through an executive order","Apply organizational change management to build readiness","Delay the rollout until resistance fades","Cut the project scope to remove the parts that users dislike most"],
    answer: 1, explain: "Use structured change management (for example ADKAR or Kotter): build awareness and desire, enable ability, and reinforce adoption. Force, indefinite delay, or arbitrary scope cuts do not address the resistance." },

  { domain: "Business Environment", q: "The product's benefits are expected to be realized about six months after launch. Where is this tracked?",
    options: ["In the project charter","In the benefits management plan","In the risk register","In the stakeholder register"],
    answer: 1, explain: "The benefits management plan defines what benefits are expected and when and how they will be measured and realized — often extending beyond project closure." },

  { domain: "Business Environment", q: "Midway through the project, market conditions shift and the business case no longer holds. What should the project manager do?",
    options: ["Continue the project because it was already formally approved","Raise it with the sponsor or governance for re-evaluation","Conceal the change to protect the team","Cut quality to finish before it is noticed"],
    answer: 1, explain: "Projects must keep delivering value. If the business case is no longer valid, escalate to governance for a decision — even termination is a legitimate outcome. Hiding it or cutting quality is wrong." },

  { domain: "Business Environment", q: "Which metric represents the present value of future benefits, accounting for the time value of money?",
    options: ["Return on investment (ROI)","Net present value (NPV)","The payback period","Budget at completion (BAC)"],
    answer: 1, explain: "NPV discounts future cash flows to today's value; a higher, positive NPV is better. It accounts for the time value of money, unlike simple ROI or the payback period." },

  { domain: "Business Environment", q: "Choosing between two candidate projects, you compare their net present values. Which should you generally select?",
    options: ["The project with the lower NPV","The project with the higher NPV","The project with the longer payback","NPV should not influence the choice"],
    answer: 1, explain: "All else equal, select the project with the higher (more positive) NPV — it creates more value in present-value terms." },

  { domain: "Business Environment", q: "A directive PMO is involved in your project. What does that mean for how it operates?",
    options: ["It only provides templates and advice","It takes control and directly manages the projects","It audits for compliance but does not manage","It holds no real authority over the work"],
    answer: 1, explain: "A directive PMO has high control and directly manages projects. A supportive PMO is advisory, and a controlling PMO enforces compliance with moderate control." },

  { domain: "Business Environment", q: "Your project's deliverable could create an environmental or sustainability concern. As project manager, what should you do?",
    options: ["Treat it as outside the project's scope","Identify the impact, inform stakeholders, and address it responsibly","Keep the concern from the sponsor to avoid alarm","Halt the project immediately, without performing any impact analysis first"],
    answer: 1, explain: "Project managers consider broader value and societal and environmental impact (stewardship), surfacing concerns and addressing them responsibly within governance — not ignoring, hiding, or overreacting." },

  { domain: "Business Environment", q: "What is the difference between a project, a program, and a portfolio?",
    options: ["They are essentially the same thing","A project gives one result; a program links related projects; a portfolio aligns to strategy","A portfolio is just a smaller and simpler version of one large project","A program consists of a single task"],
    answer: 1, explain: "A project produces a unique result; a program manages related projects to achieve benefits unavailable separately; a portfolio groups programs and projects to meet strategic objectives." },

  { domain: "Business Environment", q: "Which of the following is an example of an organizational process asset (OPA)?",
    options: ["Current market conditions and competition","Templates, historical data, and lessons learned","Government regulations and standards","Prevailing industry interest rates"],
    answer: 1, explain: "OPAs are the organization's internal assets — processes, procedures, templates, and its knowledge base of historical information and lessons learned. External factors like markets and regulations are enterprise environmental factors." },

  { domain: "Business Environment", q: "Which of the following is an example of an enterprise environmental factor (EEF)?",
    options: ["The company's internal lessons-learned and templates repository","Market conditions, regulations, and organizational culture","The organization's project templates","The project's own risk register"],
    answer: 1, explain: "EEFs are conditions, internal or external, that influence the project but are outside the team's control — culture, market, regulations, standards, infrastructure. Templates and the knowledge base are OPAs." },

  { domain: "Business Environment", q: "An economic concept holds that choosing one project means giving up the benefit of the next-best alternative. What is this called?",
    options: ["Sunk cost","Opportunity cost","Fixed cost","Variable cost"],
    answer: 1, explain: "Opportunity cost is the value of the best alternative forgone. When selecting among projects, the opportunity cost is the benefit of the option not chosen." },

  { domain: "Business Environment", q: "Money already spent and unrecoverable is relevant how when deciding whether to continue a project?",
    options: ["It should strongly drive the decision","It is a sunk cost and should not influence the decision","It guarantees the project should continue","It actually increases the project's overall net present value"],
    answer: 1, explain: "Sunk costs are unrecoverable and should be ignored in forward-looking decisions; continue only if the remaining investment is justified by future value." },

  { domain: "Business Environment", q: "What is the difference between a stakeholder and a shareholder on a project?",
    options: ["The two terms mean the same thing","A stakeholder affects or is affected by the work; a shareholder holds an ownership stake","A shareholder is a completely separate party who is never also a stakeholder","Stakeholders exist only on agile projects"],
    answer: 1, explain: "Stakeholders include anyone who affects or is affected by the project (a broad group); shareholders are a subset who hold financial ownership. All shareholders are stakeholders, but not the reverse." },

  { domain: "Business Environment", q: "Why does a project manager 'tailor' the approach rather than apply every process by default?",
    options: ["To generate more documentation","To fit the methodology and rigor to the project's context","To find a way to skip governance","Because PMI strictly prohibits ever using the full processes"],
    answer: 1, explain: "Tailoring adapts the methodology, processes, and rigor to the project's size, complexity, risk, and culture so effort goes where it adds value — a core PMI principle, not one-size-fits-all." },

  { domain: "Business Environment", q: "A stakeholder pressures the project manager to deliver a result that would violate a regulation, 'just this once.' What should the PM do?",
    options: ["Comply once to keep the stakeholder satisfied","Refuse and uphold compliance, explaining the risk","Proceed quietly without creating any records","Ask a team member to take responsibility for it"],
    answer: 1, explain: "Compliance and the PMI Code of Ethics are non-negotiable. The PM must refuse to violate regulations regardless of pressure and explain the legal and organizational risk." },

  { domain: "Business Environment", q: "A change in the political or economic environment threatens the project's funding. What should the project manager do?",
    options: ["Treat it as entirely outside the project","Monitor it, assess the risk, and work with governance on contingencies","Cancel the project right away to be safe","Spend down the remaining project budget faster in order to use it all up"],
    answer: 1, explain: "Enterprise environmental factors like political and economic shifts can materially affect a project. The PM monitors them, treats them as risks, and works with governance on contingencies." },

  { domain: "Business Environment", q: "An in-flight project has become less aligned with the organization's strategy after a strategic shift. What should the project manager do?",
    options: ["Continue unchanged to finish the work","Raise the misalignment so governance can reprioritize or stop it","Hide the misalignment from leadership","Accelerate the remaining work to finish before anyone really notices"],
    answer: 1, explain: "Projects must stay aligned to strategy to remain justified. When strategy shifts, the PM surfaces the misalignment so governance can decide whether to continue, rescope, or terminate." },

  { domain: "Business Environment", q: "What best describes organizational governance as it relates to projects?",
    options: ["The day-to-day management of project tasks","The framework of policies and oversight that aligns projects to strategy","The detailed project schedule, its milestones, and the complete task list","The team's internal working agreements"],
    answer: 1, explain: "Governance is the framework of policies, decision rights, and oversight ensuring projects are authorized, monitored, and aligned with organizational strategy and value — not day-to-day task management." },

  { domain: "Business Environment", q: "A project delivers an output, but lasting value depends on adoption and a process change in operations. What should the project manager ensure?",
    options: ["Hand off at go-live and move on","Plan change management and a smooth transition to operations","Assume operations will handle adoption alone","Stop tracking anything at all once the final deliverable ships"],
    answer: 1, explain: "Value comes from adoption, not just delivery. The PM plans change management and operational transition and readiness so the organization actually realizes the intended benefits." },

  { domain: "Business Environment", q: "A multinational project must respect different countries' laws and customs. What should the project manager do?",
    options: ["Apply only the home country's rules everywhere","Understand and comply with each location's laws and norms","Disregard the various local customs to keep everything uniform","Let each local team do whatever it prefers"],
    answer: 1, explain: "Operating across jurisdictions requires understanding and complying with each location's legal and cultural environment — a core business-environment responsibility, not imposing one set of rules or having no standards." }

];
