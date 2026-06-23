/* =====================================================================
   PMP STUDY APP — QUESTION WORDING VARIANTS  (window.PMP_QUESTION_ALTS)
   ---------------------------------------------------------------------
   Maps each question's ORIGINAL stem text to one or more alternate
   phrasings of the SAME scenario. The options, correct answer, and
   explanation are never changed — only the wording of the question.
   app.js attaches these as q.alt and, when the "Reworded" toggle is on,
   picks one at random per quiz so you learn the concept, not the sentence.
   A key that doesn't match a question is simply ignored (no variant shown).
   ===================================================================== */
window.PMP_QUESTION_ALTS = {

  /* ---------- PEOPLE ---------- */
  "During a design review, two senior engineers get into a heated argument over the system architecture. Both are influential, the debate has stalled two iterations of work, and the rest of the team has gone quiet. What should the project manager do FIRST?":
    ["Two influential senior engineers are locked in a heated dispute over the system architecture during a design review. Their standoff has already burned two iterations of progress and the rest of the team has fallen silent. What is the project manager's BEST first move?"],

  "A team that formed three weeks ago is bickering over small process details, and tension is high in nearly every meeting. Velocity has dropped and one member privately complains the team is 'dysfunctional.' What is the BEST interpretation and action?":
    ["A team came together about three weeks ago and now squabbles over minor process points; meetings are tense, velocity has slipped, and one member quietly calls the team 'dysfunctional.' How should you interpret this and act?"],

  "You need a currently skeptical regulatory stakeholder to become an active supporter. Where do you record the difference between their present attitude and the level of support the project requires?":
    ["A regulatory stakeholder is skeptical today, but the project needs them actively on board. In which document do you capture the gap between their current engagement and the level the project requires?"],

  "Your project team grows from 6 members to 9 members. How many additional communication channels now exist?":
    ["A team of 6 people expands to 9. By how many do the project's communication channels increase?"],

  "A team member who recently transferred from an overseas office rarely speaks in meetings and gives only brief answers when asked directly. Their deliverables are on time and correct. What should the project manager do FIRST?":
    ["A member who recently transferred in from an overseas office says little in meetings and answers only briefly when prompted, though their deliverables are accurate and on time. What should the project manager do FIRST?"],

  "In the daily standup, a developer reports they are blocked waiting on a deliverable from another department. The blocker needs cross-team coordination to resolve. What is the Scrum Master's appropriate response?":
    ["During the daily standup a developer says they are blocked, waiting on another department's deliverable, and resolving it will take coordination across teams. How should the Scrum Master respond?"],

  "Two team members repeatedly clash because each assumes the other is responsible for the same integration task, and the work keeps slipping. Which tool most directly prevents this recurring problem?":
    ["Two members keep colliding because each believes the other owns the same integration task, and the work keeps slipping. Which tool most directly prevents this from recurring?"],

  "A strong performer tells you they feel stagnant and want more challenging assignments and a path to grow. Which motivation theory best explains what they are seeking?":
    ["A high performer says they feel stuck and want tougher assignments and a path to grow. Which motivation theory best accounts for what they are after?"],

  "Your team is fully remote across four time zones, and several members say they feel disconnected and out of the loop on decisions. What is the BEST way to address this?":
    ["Your team works entirely remotely across four time zones, and several people report feeling disconnected and unaware of decisions being made. What is the BEST way to handle this?"],

  "A functional manager keeps reassigning your team members to other work without telling you, and your iteration commitments are now at risk. What should you do?":
    ["A functional manager repeatedly pulls your team members onto other work without informing you, putting your iteration commitments at risk. What is your BEST course of action?"],

  "Two sub-teams disagree sharply during a planning workshop and the discussion turns tense. As a servant leader, what is your primary role in this moment?":
    ["During a planning workshop two sub-teams clash sharply and the room grows tense. In this moment, what is your primary responsibility as a servant leader?"],

  "A team member lacks a technical skill that an upcoming critical task requires, and no one else is available for it. What is the BEST response?":
    ["A critical upcoming task needs a technical skill one of your team members doesn't have, and nobody else can take it on. What is the BEST response?"],

  "You are negotiating a sticking point with a long-term vendor whose relationship matters for future work. Which approach best reflects the PMI mindset?":
    ["You're working through a contentious point with a long-term vendor you'll rely on for future work. Which negotiating approach best fits the PMI mindset?"],

  "A newly formed team is unsure of their roles and how they will work together. What should the project manager do to set them up for success?":
    ["A team that just formed is unclear about their roles and how they'll collaborate. What should the project manager do to set them up well?"],

  "An influential stakeholder is openly criticizing the project to peers, and the negativity is starting to affect team morale. What is the BEST first step?":
    ["An influential stakeholder is badmouthing the project to colleagues, and the negativity is beginning to hurt team morale. What is the BEST first step?"],

  "On an agile team, who should establish the team's ground rules, and who is responsible for upholding them?":
    ["For an agile team, who creates the team's ground rules, and who is responsible for keeping to them?"],

  "A stakeholder demands a detailed status report every single day, which is consuming a large share of your time. What should you do?":
    ["A stakeholder insists on a detailed status report every day, eating up a big portion of your time. What should you do?"],

  "Two engineers are in conflict over a decision. To end the tension, one simply yields to the other without the underlying disagreement being resolved. Which conflict-resolution technique is this?":
    ["Two engineers disagree over a decision, and to defuse the tension one simply gives in to the other while the real disagreement goes unresolved. Which conflict-resolution technique is this?"],

  "During a dispute, a manager ends the discussion by saying, 'We are doing it my way because I am in charge here.' Which conflict-resolution technique is being used?":
    ["A manager shuts down a dispute by declaring, 'We're doing it my way because I'm the boss.' Which conflict-resolution technique is that?"],

  "To resolve a deadlock quickly, two parties each give up something and settle on a middle position that neither fully prefers. Which conflict-resolution technique is this?":
    ["To break a deadlock fast, both parties concede something and land on a middle ground neither fully likes. Which conflict-resolution technique is this?"],

  "When a real conflict surfaces between two team members, what is generally the FIRST thing a project manager should do?":
    ["A genuine conflict erupts between two team members. What should the project manager generally do FIRST?"],

  "Your team members follow your lead primarily because they respect your judgment and want your good opinion, not because of your title. Which type of power is this?":
    ["People follow your direction mainly out of respect for your judgment and a desire for your good opinion — not because of your position. Which type of power is this?"],

  "A project manager directs the team mainly by relying on the authority that comes with the title and position. Which type of power is this?":
    ["A project manager leads the team chiefly through the authority that comes with the role itself. Which type of power is this?"],

  "A leader articulates a compelling vision, inspires the team to exceed their own expectations, and encourages them to embrace change. Which leadership style is this?":
    ["A leader paints a compelling vision, motivates the team to surpass their own expectations, and champions change. Which leadership style is this?"],

  "Following situational leadership, a brand-new team with low competence and low confidence most needs which leadership behavior?":
    ["Under situational leadership, what does a brand-new team with low skill and low confidence need most from its leader?"],

  "A manager assumes employees inherently dislike work and must be closely supervised and pushed to perform. Which set of assumptions is this?":
    ["A manager believes workers naturally dislike their jobs and must be closely watched and prodded to perform. Which set of assumptions is this?"],

  "According to Maslow's hierarchy, which needs must generally be satisfied before esteem and self-actualization will motivate a person at work?":
    ["Per Maslow's hierarchy, which needs generally have to be met before esteem and self-actualization can motivate someone at work?"],

  "In Herzberg's two-factor theory, competitive salary and good working conditions are best classified as what?":
    ["In Herzberg's two-factor theory, how are a competitive salary and good working conditions best categorized?"],

  "A team member is driven mainly by a desire to influence others and take the lead. According to McClelland's theory, which need is dominant for them?":
    ["A team member is motivated above all by influencing others and taking charge. In McClelland's theory, which need is dominant for them?"],

  "A stakeholder has high power over your project but low interest in its details. According to the power/interest grid, how should you engage them?":
    ["A stakeholder holds significant power over your project but little interest in the details. Per the power/interest grid, how should you engage them?"],

  "What does practicing active listening during a difficult conversation primarily require of the project manager?":
    ["In a difficult conversation, what does genuine active listening mainly demand of the project manager?"],

  "Which statement best describes psychological safety on a team?":
    ["Which description best captures what psychological safety means on a team?"],

  "A self-organizing agile team is repeatedly told exactly how to perform each task by a manager. What is the likely effect, and what should change?":
    ["A manager keeps dictating exactly how a self-organizing agile team should do each task. What is the probable effect, and what should change?"],

  "Which of the following is an example of interactive communication?":
    ["Which of these is an example of interactive communication?"],

  "Two team members from different cultures keep misreading each other's level of directness, creating friction. What is the BEST project manager response?":
    ["Two members from different cultures repeatedly misjudge how direct the other is being, causing friction. What is the BEST response from the project manager?"],

  "What is the primary purpose of a team charter?":
    ["What is a team charter mainly intended to accomplish?"],

  "A team member proposes a better approach than the one you had planned for the work. As a servant leader, what should you do?":
    ["A team member suggests a better way to do the work than the approach you'd planned. As a servant leader, how should you respond?"],

  "Colocating a project team in a shared workspace (or a virtual 'war room') is primarily intended to achieve what?":
    ["Putting a project team together in a shared space (or a virtual 'war room') is mainly meant to achieve what?"],

  "A project's work is complete and the team is about to be released. The team has reached the adjourning stage. What is the BEST project manager action now?":
    ["The work is done and the team is about to disband, having reached the adjourning stage. What should the project manager do now?"],

  "During discussions, one team member consistently dominates while quieter members stop contributing. The work is still getting done. What should the project manager do?":
    ["In discussions one member always takes over while quieter members go silent, yet the work still gets done. What should the project manager do?"],

  "A team member is technically excellent but frequently dismisses others' ideas, and morale is suffering. What should the project manager do FIRST?":
    ["A technically brilliant team member often brushes off others' ideas, and morale is dropping. What should the project manager do FIRST?"],

  "A motivated, capable team is being held up by an external dependency they cannot control. As a servant leader, what is your priority?":
    ["A capable, motivated team is stalled by an external dependency outside their control. As a servant leader, what is your top priority?"],

  "A team member privately tells you about a serious interpersonal problem with a peer and asks for your help. What is the BEST response?":
    ["A team member confidentially shares a serious interpersonal problem with a peer and asks you to help. What is the BEST response?"],

  "Which is the strongest indicator that a team has reached Tuckman's performing stage?":
    ["What is the clearest sign that a team has reached the performing stage in Tuckman's model?"],

  "You notice one team member is overloaded while another is underutilized. What is the BEST action?":
    ["You see that one team member is swamped while another has too little to do. What is the BEST action?"],

  "A stakeholder repeatedly bypasses you and gives instructions directly to your team members, disrupting their focus. What is the BEST first response?":
    ["A stakeholder keeps going around you to give your team members instructions directly, breaking their focus. What is the BEST first response?"],

  "You must deliver difficult feedback to a team member about a recurring issue. What is the BEST approach?":
    ["You need to give a team member tough feedback about a repeating problem. What is the BEST approach?"],

  "An agile team's members are reluctant to admit when a story is falling behind, so problems surface late. What should the leader cultivate to fix this?":
    ["Members of an agile team are hesitant to admit when a story is slipping, so issues come to light too late. What should the leader build to fix this?"],

  "Why is it important to have the people who will do the work participate in estimating it?":
    ["Why does it matter that the people who will actually do the work take part in estimating it?"],

  "On a hybrid team, some members resist the agile ceremonies, calling them 'extra meetings that waste time.' What is the BEST response?":
    ["On a hybrid team, some members push back on the agile ceremonies as 'pointless extra meetings.' What is the BEST response?"],

  "A stakeholder is currently 'unaware' of your project but will be significantly affected by it. What is your FIRST priority regarding them?":
    ["A stakeholder doesn't yet know about your project but stands to be significantly affected by it. What is your FIRST priority with them?"],

  "What primarily distinguishes coaching from mentoring?":
    ["What is the main difference between coaching and mentoring?"],

  "Small frictions on a team keep escalating because members react impulsively to one another. Which emotional-intelligence competency most directly helps an individual manage their own reactions?":
    ["Minor frictions on a team keep blowing up because people react impulsively to each other. Which emotional-intelligence competency most directly helps a person control their own reactions?"],

  "An agile coach realizes the team has come to depend on them for nearly every decision. What is the BEST long-term action?":
    ["An agile coach notices the team now leans on them for almost every decision. What is the BEST long-term move?"],

  "Overlapping authority between two team leads over the same workstream is causing recurring conflict. What is the BEST structural fix?":
    ["Two team leads share authority over the same workstream, which keeps sparking conflict. What is the BEST structural fix?"],

  "A remote team member feels excluded from decisions that the colocated majority makes informally. What should the project manager do?":
    ["A remote team member feels shut out of decisions the colocated majority makes casually. What should the project manager do?"],

  "Which action best demonstrates a servant leader 'shielding the team'?":
    ["Which action best illustrates a servant leader 'shielding the team'?"],

  "A team consistently delivers excellent results. The project manager wants to sustain this. According to Herzberg, which action best sustains their motivation over time?":
    ["A team keeps delivering excellent results and the project manager wants to keep it that way. Per Herzberg, which action best sustains their motivation over time?"],

  "A team member raises a concern that the project's current approach could harm end users. What should the project manager do?":
    ["A team member warns that the project's current approach might harm end users. What should the project manager do?"],

  /* ---------- PROCESS ---------- */
  "The project is in execution at about 60% complete when a key stakeholder requests a significant new capability they say is now essential. What should the project manager do FIRST?":
    ["At roughly 60% complete and in execution, a key stakeholder asks for a major new capability they now call essential. What should the project manager do FIRST?"],

  "The customer is about to formally sign off on a set of completed deliverables. Which process is taking place?":
    ["The customer is about to give formal acceptance to a batch of completed deliverables. Which process is this?"],

  "A project reports CPI = 0.9 and SPI = 1.2. What does this indicate about its performance?":
    ["A project's metrics show CPI = 0.9 and SPI = 1.2. What does that say about how it is performing?"],

  "BAC = $200,000, EV = $90,000, AC = $100,000. Assuming current cost performance continues, what is the estimate at completion (EAC)?":
    ["Given BAC = $200,000, EV = $90,000, and AC = $100,000, and assuming the current cost performance holds, what is the EAC?"],

  "An activity can be delayed up to four days without pushing out the project's finish date. What is this four days called?":
    ["An activity can slip by as much as four days before it would delay the project's completion. What is that four-day cushion called?"],

  "The project is behind schedule. The sponsor wants to keep the original finish date and will accept added risk but no additional cost. Which technique fits BEST?":
    ["The project is running late. The sponsor wants to hold the original end date and will tolerate more risk but no extra spend. Which technique fits BEST?"],

  "The project is behind schedule and the sponsor approves spending more money to recover the original finish date. Which schedule-compression technique fits?":
    ["The project has fallen behind, and the sponsor authorizes additional spending to get back to the original finish date. Which compression technique applies?"],

  "Optimistic = 8, Most Likely = 14, Pessimistic = 26 days. What is the PERT (beta) three-point estimate?":
    ["With Optimistic = 8, Most Likely = 14, and Pessimistic = 26 days, what is the beta (PERT) three-point estimate?"],

  "A risk that the team identified earlier has now actually occurred and is affecting the project. Where is it primarily managed now?":
    ["A previously identified risk has now materialized and is impacting the project. Where is it chiefly managed at this point?"],

  "To handle the financial impact of a possible major threat, the project buys an insurance policy. Which risk response strategy is this?":
    ["To cover the financial hit of a possible major threat, the project takes out an insurance policy. Which risk response is that?"],

  "An opportunity could let the project finish early. The team assigns its best people to ensure the opportunity definitely happens. Which positive-risk response is this?":
    ["An opportunity could bring the project in early, so the team puts its strongest people on it to make sure it happens. Which positive-risk response is this?"],

  "Which reserve covers identified ('known-unknown') risks, sits inside the cost baseline, and is controlled by the project manager?":
    ["Which reserve is set aside for identified ('known-unknown') risks, lives within the cost baseline, and is managed by the project manager?"],

  "On a control chart, seven consecutive data points fall on one side of the mean, although all points are within the control limits. What does this indicate?":
    ["A control chart shows seven points in a row on the same side of the mean, yet every point stays within the control limits. What does this tell you?"],

  "Which contract type places the MOST cost risk on the seller?":
    ["Under which contract type does the seller bear the GREATEST cost risk?"],

  "The scope of work is not yet well defined and is expected to evolve as the project proceeds. Which contract type is MOST appropriate?":
    ["The work isn't fully defined yet and will likely change as the project unfolds. Which contract type is MOST appropriate?"],

  "What is the primary purpose of maintaining a lessons learned register?":
    ["Why does a project keep a lessons learned register — what is its main purpose?"],

  "Raw status measurements from execution are analyzed and compared against the baseline. What is this analyzed output called?":
    ["Raw measurements from execution are analyzed and compared to the baseline. What is that analyzed result called?"],

  "According to the PMI mindset, how should quality primarily be achieved on a project?":
    ["In the PMI mindset, what is the primary way quality should be achieved on a project?"],

  "A deliverable has just failed internal inspection. What must happen before it can be presented to the customer for acceptance?":
    ["A deliverable just failed its internal inspection. What has to happen before it can go to the customer for acceptance?"],

  "BAC = $120,000, the work is 40% complete, and AC = $60,000. What is the cost variance (CV)?":
    ["With BAC = $120,000, the work 40% complete, and AC = $60,000, what is the cost variance (CV)?"],

  "EV = $50,000 and PV = $40,000 on a project. What is the SPI, and what does it indicate?":
    ["A project has EV = $50,000 and PV = $40,000. What is its SPI, and what does that mean?"],

  "Which document formally authorizes the project to begin and grants the project manager authority to apply organizational resources?":
    ["Which document officially launches the project and gives the project manager authority to use organizational resources?"],

  "A team member implemented a change to a deliverable directly, without it being approved. What should the project manager do?":
    ["A team member made a change to a deliverable on their own, without approval. What should the project manager do?"],

  "An activity on the critical path, which has zero float, is delayed by three days. What is the effect on the project?":
    ["A critical-path activity (zero float) slips by three days. What does that do to the project?"],

  "A team needs to systematically explore the underlying causes of a recurring defect. Which tool is MOST appropriate?":
    ["A team wants to methodically dig into the root causes of a recurring defect. Which tool is MOST appropriate?"],

  "A Pareto chart shows that about 80% of customer complaints come from roughly 20% of the causes. How should the team act on this?":
    ["A Pareto chart reveals that about 80% of complaints trace to roughly 20% of the causes. How should the team respond?"],

  "A risk has a 25% probability of occurring and would cause a $40,000 loss. What is its expected monetary value (EMV)?":
    ["A risk has a 25% chance of occurring and would cost $40,000 if it does. What is its expected monetary value (EMV)?"],

  "Implementing a risk response creates a new risk as a direct result of that response. What is the new risk called?":
    ["Carrying out a risk response directly produces a brand-new risk. What is that new risk called?"],

  "Which estimating technique applies a statistical relationship from historical data, such as cost per square foot multiplied by area?":
    ["Which estimating technique uses a statistical relationship from historical data — for example, cost per square foot times area?"],

  "A project manager estimates total cost by estimating each work package in detail and rolling the figures up. Which technique is this, and what is its trade-off?":
    ["A project manager builds the total cost by estimating every work package in detail and summing them. Which technique is this, and what's the trade-off?"],

  "A risk has been actively accepted by the team. What is the appropriate proactive measure to take in case it occurs?":
    ["The team has chosen active acceptance for a risk. What proactive step is appropriate in case it materializes?"],

  "Which sequence correctly orders the project management process groups?":
    ["Which option lists the project management process groups in the correct order?"],

  "What is decomposed to create the work breakdown structure (WBS), and what is its lowest level called?":
    ["What gets broken down to build the WBS, and what is the lowest level of it called?"],

  "A project's persistent cost overrun (CPI 0.85) prompts the sponsor to ask how much the whole project will likely cost. Which value should the project manager report?":
    ["With a steady cost overrun (CPI 0.85), the sponsor asks what the project's total cost is now likely to be. Which value should the PM report?"],

  "BAC = $100,000 and EAC = $125,000. What is the variance at completion (VAC), and what does it mean?":
    ["Given BAC = $100,000 and EAC = $125,000, what is the variance at completion (VAC), and what does it signify?"],

  "The team must complete the remaining work within the remaining budget to still meet the original BAC. Which index expresses the cost efficiency now required?":
    ["To still hit the original BAC, the team must finish the remaining work within the remaining funds. Which index captures the cost efficiency now required?"],

  "Which document defines the project's deliverables, acceptance criteria, exclusions, assumptions, and constraints?":
    ["Which document spells out the project's deliverables, acceptance criteria, exclusions, assumptions, and constraints?"],

  "What three components together form the scope baseline?":
    ["The scope baseline is made up of which three components?"],

  "Two activities have a finish-to-start relationship, and the team deliberately inserts a three-day wait between them (for example, to let material cure). What is this delay called?":
    ["With a finish-to-start relationship, the team intentionally adds a three-day wait between two activities (say, for curing). What is that imposed delay called?"],

  "A dependency is required by the physical nature of the work — the walls cannot be built before the foundation. What kind of dependency is this?":
    ["A dependency exists because of the physical nature of the work — you can't build walls before the foundation. What type of dependency is that?"],

  "Resource leveling is applied to a schedule that has over-allocated resources. What is the typical effect?":
    ["You apply resource leveling to a schedule with over-allocated resources. What typically results?"],

  "Which of these is a cost of conformance in the cost of quality model?":
    ["In the cost of quality model, which of these counts as a cost of conformance?"],

  "Which quality tool plots two variables against each other to show whether a relationship or correlation exists?":
    ["Which quality tool graphs two variables against each other to reveal whether they are correlated?"],

  "A project manager runs a Monte Carlo simulation on the schedule. What is the purpose of doing this?":
    ["A project manager performs a Monte Carlo simulation on the schedule. Why?"],

  "A decision tree shows two options with different probabilities and payoffs. What does the analysis help the project manager choose?":
    ["A decision tree lays out two options with different probabilities and payoffs. What does the analysis help the PM decide?"],

  "Which risk strategy eliminates a threat entirely, for example by changing the plan so the cause can no longer occur?":
    ["Which risk strategy removes a threat completely — for instance, by changing the plan so its cause can't happen?"],

  "A threat is significant and lies outside the project team's authority to address, so it must be raised to the program or portfolio level. Which risk response is this?":
    ["A serious threat is beyond the project team's authority and must be raised to the program or portfolio level. Which risk response is that?"],

  "What is configuration management primarily concerned with?":
    ["What is the main focus of configuration management?"],

  "Who typically approves or rejects change requests on a project?":
    ["On a project, who normally has the authority to approve or reject change requests?"],

  "A procurement is for a clearly defined, standard commodity where price is the main differentiator. Which contract type fits BEST?":
    ["You're procuring a well-defined, standard commodity where price is the key factor. Which contract type fits BEST?"],

  "During Close Procurements, the buyer and seller settle final payments and formally accept the work. What is essential to capture for the organization?":
    ["As procurements close, the buyer and seller finalize payments and accept the work. What must be captured for the organization?"],

  "The project manager discovers the project will likely miss a regulatory deadline. What should they do FIRST?":
    ["The project manager realizes the project is likely to miss a regulatory deadline. What should they do FIRST?"],

  "Which best describes progressive elaboration in project management?":
    ["Which statement best captures what progressive elaboration means in project management?"],

  "Which procurement document is used to request detailed solutions and proposals from sellers for a complex need?":
    ["For a complex need, which procurement document asks sellers for detailed solutions and proposals?"],

  "The Point of Total Assumption (PTA) is a concept associated with which contract type?":
    ["With which contract type is the Point of Total Assumption (PTA) associated?"],

  "A quality audit is performed on a project. What is its primary purpose?":
    ["A quality audit is conducted on a project. What is it mainly meant to accomplish?"],

  "A risk audit, as distinct from a risk review, primarily evaluates what?":
    ["As opposed to a risk review, what does a risk audit mainly assess?"],

  "Best practice for a RACI chart is to have exactly one 'A' per activity. Why does this matter?":
    ["RACI best practice calls for exactly one 'A' per activity. Why is that important?"],

  "A predictive project has just finished a phase and must decide whether to continue. What is this go/no-go decision point called?":
    ["A predictive project has wrapped up a phase and faces a continue-or-stop decision. What is that decision point called?"],

  "What is the main purpose of perform integrated change control?":
    ["What is the central purpose of the Perform Integrated Change Control process?"],

  "A project manager needs to establish the logical order in which activities must be performed, producing the network diagram. Which process is this?":
    ["A project manager works out the logical order of activities to build the network diagram. Which process is that?"],

  "What does a risk trigger represent?":
    ["What exactly is a risk trigger?"],

  "Validated deliverables and accepted deliverables differ in an important way. Which statement is correct?":
    ["There's a key difference between validated and accepted deliverables. Which statement is correct?"],

  "Which analysis identifies which individual risks or variables have the greatest potential impact on project outcomes, often shown as a tornado diagram?":
    ["Which analysis ranks the risks or variables with the biggest potential impact on outcomes, often depicted as a tornado diagram?"],

  "A project manager must decide whether to produce a component in-house or purchase it externally. Which analysis supports this decision?":
    ["A project manager is deciding whether to build a component internally or buy it from outside. Which analysis informs that?"],

  "What is the purpose of a bidder (pre-bid) conference during procurement?":
    ["During procurement, what is a bidder (pre-bid) conference for?"],

  "The cost baseline is best described as which of the following?":
    ["Which of the following best describes the cost baseline?"],

  "What is the difference between preventive action and corrective action?":
    ["How does preventive action differ from corrective action?"],

  "What is rolling wave planning?":
    ["What does rolling wave planning involve?"],

  "The schedule baseline must be revised because an approved change added scope. What should the project manager do?":
    ["An approved change has added scope, so the schedule baseline needs revising. What should the project manager do?"],

  /* ---------- AGILE / HYBRID ---------- */
  "Midway through a sprint, an influential stakeholder insists that a new high-priority feature be added to the current sprint right away. What should the team do?":
    ["Halfway through a sprint, an influential stakeholder demands that a new top-priority feature be added to the current sprint immediately. What should the team do?"],

  "Who is accountable for maximizing the value of the product and ordering the product backlog?":
    ["Who has accountability for maximizing the product's value and ordering the product backlog?"],

  "What is the primary purpose of the sprint retrospective?":
    ["What is the sprint retrospective mainly for?"],

  "A team completes about 32 story points each sprint. What is this measure called, and how should it be used?":
    ["A team finishes roughly 32 story points per sprint. What is that metric called, and how should it be used?"],

  "In Kanban, what is the primary mechanism for improving flow and exposing bottlenecks?":
    ["In Kanban, what is the main lever for improving flow and revealing bottlenecks?"],

  "Which statement reflects a value from the Agile Manifesto?":
    ["Which of these expresses a value from the Agile Manifesto?"],

  "A stakeholder demands a firm, fixed scope and delivery date for a full year out on an agile project. What is the BEST response?":
    ["On an agile project, a stakeholder insists on a locked scope and delivery date a full year ahead. What is the BEST response?"],

  "What is the timebox for the Daily Scrum?":
    ["How long is the Daily Scrum timeboxed to?"],

  "Which acronym captures the qualities of a well-formed user story?":
    ["Which acronym describes the characteristics of a good user story?"],

  "Which chart makes scope changes visible alongside completed work over time?":
    ["Which chart shows completed work over time while also making scope changes visible?"],

  "During a sprint, the team realizes a committed story is much larger than estimated and will not fit. What should they do?":
    ["Mid-sprint, the team discovers a committed story is far bigger than estimated and won't fit. What should they do?"],

  "A stakeholder asks the Scrum Master to slip a 'quick' feature into the current sprint. What should the Scrum Master do?":
    ["A stakeholder asks the Scrum Master to squeeze a 'quick' feature into the running sprint. What should the Scrum Master do?"],

  "The team's velocity has declined for three consecutive sprints. What is the BEST first step?":
    ["A team's velocity has dropped three sprints in a row. What is the BEST first step?"],

  "What is the correct purpose of the sprint review?":
    ["What is the sprint review actually meant to accomplish?"],

  "A predictive project contains a few highly uncertain components. What is often the BEST approach?":
    ["A mostly predictive project has a handful of highly uncertain components. What is often the BEST approach?"],

  "Who manages the sprint backlog during the sprint?":
    ["During the sprint, who owns and manages the sprint backlog?"],

  "The Product Owner is frequently unavailable, leaving the team unsure of priorities. What should the Scrum Master do?":
    ["The Product Owner is often absent, so the team is unclear on priorities. What should the Scrum Master do?"],

  "On a sprint burndown chart, the actual line is trending above the ideal line. What does this indicate?":
    ["On a sprint burndown, the actual remaining-work line is running above the ideal line. What does that mean?"],

  "A Kanban team has too many items in progress and delivery has slowed noticeably. What is the BEST action?":
    ["A Kanban team has too much in progress and delivery has clearly slowed. What is the BEST action?"],

  "How should requirements be handled on an agile project?":
    ["On an agile project, how should requirements be managed?"],

  "What is the primary measure of progress on an agile project?":
    ["On an agile project, what is the main measure of progress?"],

  "What does the Definition of Done establish for a Scrum team?":
    ["For a Scrum team, what does the Definition of Done set?"],

  "How do acceptance criteria for a user story differ from the Definition of Done?":
    ["What's the difference between a user story's acceptance criteria and the Definition of Done?"],

  "What is backlog refinement (grooming)?":
    ["What does backlog refinement (grooming) involve?"],

  "An agile team estimates with story points rather than hours. What do story points primarily measure?":
    ["An agile team uses story points instead of hours. What do story points mainly capture?"],

  "What is a spike in agile?":
    ["In agile, what is a spike?"],

  "A team wants to estimate backlog items collaboratively while avoiding anchoring on the first number spoken. Which technique fits?":
    ["A team wants to estimate backlog items together without anchoring on whoever speaks first. Which technique fits?"],

  "What is the typical length of a sprint or iteration?":
    ["How long is a sprint or iteration typically?"],

  "Why should the length of a sprint stay consistent over time?":
    ["Why is it best to keep sprint length the same from sprint to sprint?"],

  "A team consistently commits to more than it can finish each sprint. What is the BEST corrective action?":
    ["A team keeps committing to more than it can complete each sprint. What is the BEST corrective action?"],

  "What does 'sustainable pace' mean on an agile project?":
    ["On an agile project, what is meant by 'sustainable pace'?"],

  "What is the main benefit of delivering working increments frequently rather than all at the end?":
    ["Why is delivering working increments often better than delivering everything at the end?"],

  "A traditional manager keeps assigning specific tasks to individual members of a self-organizing agile team. Why is this a problem?":
    ["A traditional manager keeps handing specific tasks to individuals on a self-organizing agile team. Why is that a problem?"],

  "In a hybrid project, which kind of work is typically BEST suited to a predictive (plan-driven) approach?":
    ["On a hybrid project, what type of work usually fits a predictive (plan-driven) approach best?"],

  "What is the purpose of a product roadmap in agile?":
    ["In agile, what is a product roadmap for?"],

  "The team finishes its committed work partway through the sprint. What should they do?":
    ["The team completes its committed work before the sprint is over. What should they do?"],

  "What does 'fail fast' mean in an agile context?":
    ["In agile, what does 'fail fast' mean?"],

  "Stakeholders complain that they do not know what the agile team is working on. What is the BEST agile-aligned response?":
    ["Stakeholders say they have no visibility into what the agile team is doing. What is the BEST agile-aligned response?"],

  "What is an information radiator?":
    ["What does the term 'information radiator' refer to?"],

  "Why does agile emphasize face-to-face (or video) conversation as the most effective form of communication?":
    ["Why does agile treat face-to-face (or video) conversation as the most effective form of communication?"],

  "A team routinely ignores its Definition of Done to 'hit the date.' What is the likely consequence and BEST response?":
    ["A team habitually skips its Definition of Done to 'make the date.' What is the likely result, and the BEST response?"],

  "What does a minimum viable product (MVP) represent?":
    ["What is a minimum viable product (MVP)?"],

  "Can one person effectively serve as both the Scrum Master and the Product Owner for the same team?":
    ["Is it effective for one person to be both Scrum Master and Product Owner on the same team?"],

  "An agile team is pressured to commit to a fixed scope, a fixed date, and a fixed cost all at once. What is the BEST guidance?":
    ["An agile team is being pushed to lock scope, date, and cost simultaneously. What is the BEST guidance?"],

  "What is the main purpose of a sprint goal?":
    ["What is a sprint goal primarily for?"],

  "A team repeatedly skips the retrospective because they are 'too busy delivering.' What is the BEST response?":
    ["A team keeps skipping the retrospective, saying they're 'too busy delivering.' What is the BEST response?"],

  "What does 'inspect and adapt' mean in Scrum?":
    ["In Scrum, what does 'inspect and adapt' mean?"],

  "With multiple teams working on one product, which practice helps coordinate cross-team dependencies?":
    ["When several teams work on one product, which practice helps coordinate dependencies between them?"],

  "A stakeholder insists that every requirement is a 'must have.' How should the team respond?":
    ["A stakeholder claims every requirement is a 'must have.' How should the team respond?"],

  "What is the BEST way to handle a defect found during a sprint in work the team is currently building?":
    ["What is the BEST way to deal with a defect found mid-sprint in work the team is actively building?"],

  "An organization measures agile success purely by team velocity. Why is this a poor sole measure?":
    ["An organization judges agile success on team velocity alone. Why is velocity a poor sole measure?"],

  "A team wants fast feedback that the software still works correctly after each change. Which technical practice best supports this?":
    ["A team wants quick confirmation that the software still works after every change. Which technical practice best supports that?"],

  "A large user story (an epic) is too big to complete in one sprint. What is the BEST practice?":
    ["An epic is too large to finish within a single sprint. What is the BEST practice?"],

  "What does a team use a persona for during product work?":
    ["What purpose does a persona serve in a team's product work?"],

  /* ---------- BUSINESS ENVIRONMENT ---------- */
  "A regulation affecting your project changes partway through execution. What should the project manager do FIRST?":
    ["Partway through execution, a regulation that affects your project changes. What should the project manager do FIRST?"],

  "Which document justifies undertaking the project and is used to measure its success against the business need?":
    ["Which document makes the case for doing the project and serves as the yardstick for its success against the business need?"],

  "A PMO provides templates, training, and best practices but exercises little control over how projects are run. Which type of PMO is this?":
    ["A PMO offers templates, training, and best practices but has little say in how projects are actually run. What type of PMO is it?"],

  "In a strong matrix organization, who generally holds more authority over the project?":
    ["Within a strong matrix organization, who typically has greater authority over the project?"],

  "Employees are resisting a new system the project will deliver, and adoption is at risk. What is the BEST approach?":
    ["Staff are pushing back on the new system the project will deliver, and adoption is in jeopardy. What is the BEST approach?"],

  "The product's benefits are expected to be realized about six months after launch. Where is this tracked?":
    ["The product's benefits should materialize roughly six months post-launch. Where is that tracked?"],

  "Midway through the project, market conditions shift and the business case no longer holds. What should the project manager do?":
    ["Mid-project, the market shifts and the business case no longer stands up. What should the project manager do?"],

  "Which metric represents the present value of future benefits, accounting for the time value of money?":
    ["Which metric expresses the present value of future benefits, factoring in the time value of money?"],

  "Choosing between two candidate projects, you compare their net present values. Which should you generally select?":
    ["Deciding between two candidate projects, you look at their net present values. Which do you generally pick?"],

  "A directive PMO is involved in your project. What does that mean for how it operates?":
    ["Your project falls under a directive PMO. What does that imply about how it works?"],

  "Your project's deliverable could create an environmental or sustainability concern. As project manager, what should you do?":
    ["Your project's deliverable might raise an environmental or sustainability concern. What should you do as project manager?"],

  "What is the difference between a project, a program, and a portfolio?":
    ["How do a project, a program, and a portfolio differ from one another?"],

  "Which of the following is an example of an organizational process asset (OPA)?":
    ["Which of these would count as an organizational process asset (OPA)?"],

  "Which of the following is an example of an enterprise environmental factor (EEF)?":
    ["Which of these is an example of an enterprise environmental factor (EEF)?"],

  "An economic concept holds that choosing one project means giving up the benefit of the next-best alternative. What is this called?":
    ["There's an economic idea that picking one project means forgoing the benefit of the next-best option. What is it called?"],

  "Money already spent and unrecoverable is relevant how when deciding whether to continue a project?":
    ["When deciding whether to keep a project going, how should money already spent and unrecoverable factor in?"],

  "What is the difference between a stakeholder and a shareholder on a project?":
    ["On a project, how does a stakeholder differ from a shareholder?"],

  "Why does a project manager 'tailor' the approach rather than apply every process by default?":
    ["Why would a project manager 'tailor' the approach instead of applying every process by default?"],

  "A stakeholder pressures the project manager to deliver a result that would violate a regulation, 'just this once.' What should the PM do?":
    ["A stakeholder leans on the project manager to deliver something that would break a regulation, 'just this once.' What should the PM do?"],

  "A change in the political or economic environment threatens the project's funding. What should the project manager do?":
    ["A shift in the political or economic climate puts the project's funding at risk. What should the project manager do?"],

  "An in-flight project has become less aligned with the organization's strategy after a strategic shift. What should the project manager do?":
    ["After a change in strategy, an in-progress project no longer fits the organization's direction as well. What should the project manager do?"],

  "What best describes organizational governance as it relates to projects?":
    ["In relation to projects, what best describes organizational governance?"],

  "A project delivers an output, but lasting value depends on adoption and a process change in operations. What should the project manager ensure?":
    ["A project produces an output, but real value hinges on adoption and an operational process change. What should the project manager ensure?"],

  "A multinational project must respect different countries' laws and customs. What should the project manager do?":
    ["A project spanning several countries has to honor each one's laws and customs. What should the project manager do?"],

  /* ---------- EXPANDED BANK: PEOPLE ---------- */
  "A vendor's technical lead and your in-house architect are deadlocked over the integration approach, and the disagreement has stalled work for several days. What should the project manager do FIRST?":
    ["A vendor's tech lead and your in-house architect are at an impasse over the integration approach, and work has been stalled for days. What should the project manager do FIRST?"],

  "You take over a team that has low trust after a previous manager micromanaged them. What is the BEST way to begin building trust?":
    ["You inherit a team whose trust was eroded by a previous manager's micromanaging. What is the BEST way to start rebuilding trust?"],

  "A powerful stakeholder keeps bypassing you and handing new work directly to your developers mid-iteration. What should the project manager do?":
    ["A powerful stakeholder repeatedly goes around you, assigning new work straight to your developers mid-iteration. What should the project manager do?"],

  "Your team is distributed across four time zones and decisions made on calls keep surprising those who could not attend. What is the BEST action?":
    ["Your team spans four time zones, and people who miss calls keep getting blindsided by decisions made on them. What is the BEST action?"],

  "A strong performer has quietly taken on far more than their share and is showing early signs of burnout. What should the project manager do FIRST?":
    ["A strong performer has quietly shouldered far more than their fair share and is starting to show burnout. What should the project manager do FIRST?"],

  "In meetings, one assertive member dominates while quieter members disengage and stop contributing ideas. What should the project manager do?":
    ["During meetings, one assertive member takes over while the quieter ones tune out and stop offering ideas. What should the project manager do?"],

  "A functional manager pulls one of your key team members onto unrelated operational work without telling you, and a deliverable is now at risk. What should you do FIRST?":
    ["Without telling you, a functional manager reassigns one of your key members to unrelated operations work, and a deliverable is now at risk. What should you do FIRST?"],

  "Senior management hands your team a deadline-driven estimate the team believes is unrealistic. What is the BEST approach?":
    ["Senior management imposes a deadline-driven estimate your team considers unrealistic. What is the BEST approach?"],

  "A team member who transferred from another culture is reluctant to deliver bad news in front of the group, though they share it one-on-one. What should the PM do?":
    ["A member from a different culture avoids delivering bad news in front of the group but shares it readily one-on-one. What should the PM do?"],

  "Emotions are running very high during a heated disagreement and the discussion has become unproductive. What is the MOST appropriate immediate step?":
    ["A heated disagreement has gotten so emotional that the discussion is going nowhere. What is the MOST appropriate immediate step?"],

  "A capable junior developer is new to the technology and unsure how to proceed on their tasks. Which leadership approach fits BEST right now?":
    ["A capable but junior developer is new to the tech and unsure how to tackle their tasks. Which leadership approach fits BEST right now?"],

  "A giving-a-raise discussion reveals a top engineer is dissatisfied because the work itself has become routine and unchallenging. What addresses the real issue?":
    ["In a raise conversation, a top engineer reveals they're unhappy because the work has gotten routine and unchallenging. What addresses the real problem?"],

  "Coaching has not improved a team member's repeated missed commitments, and the pattern is now affecting others. What is the appropriate NEXT step?":
    ["Coaching hasn't fixed a team member's repeated missed commitments, and it's now hurting others. What is the appropriate NEXT step?"],

  "A stakeholder is currently resistant, but the project needs them to be actively supportive. Where and how do you plan to close that gap?":
    ["A stakeholder is resistant today, but the project needs them actively supportive. Where and how do you plan to close the gap?"],

  "During an agile transition, an experienced team lead openly resists the new way of working and undermines it in front of the team. What should the PM/coach do FIRST?":
    ["During an agile transition, a seasoned team lead openly resists the change and undercuts it in front of the team. What should the PM/coach do FIRST?"],

  "Your project operates in a weak matrix where you have little formal authority, yet you need strong cooperation from specialists. What is your BEST source of influence?":
    ["You're in a weak matrix with little formal authority but need strong cooperation from specialists. What is your BEST source of influence?"],

  "A self-organizing team is functioning well, but one senior member keeps assigning specific tasks to others. What should the Scrum Master do?":
    ["A self-organizing team is doing well, except one senior member keeps doling out specific tasks to teammates. What should the Scrum Master do?"],

  "A team member confides that they were asked by another department to alter test results to make a deliverable look ready. What should the PM do?":
    ["A team member tells you another department asked them to fudge test results so a deliverable looks ready. What should the PM do?"],

  "Two members reach an agreement in which each gives up part of what they wanted just to end the dispute quickly. Which conflict technique is this?":
    ["Two members settle by each surrendering part of what they wanted, simply to end the dispute fast. Which conflict technique is this?"],

  "A newly formed team is enthusiastic but unclear on how they will work together, make decisions, and handle conflict. What should the PM facilitate FIRST?":
    ["A brand-new team is eager but unsure how they'll collaborate, decide, and handle conflict. What should the PM facilitate FIRST?"],

  "A remote team member tells you privately they feel out of the loop and uncertain whether their work still matters. What is the BEST response?":
    ["A remote team member privately admits feeling out of the loop and unsure their work still matters. What is the BEST response?"],

  "The team cannot reach consensus on a design option after lengthy debate, and a decision is needed today. What should the PM do?":
    ["After a long debate the team still can't agree on a design option, and a decision is due today. What should the PM do?"],

  "After a major milestone, the team pulled long hours to deliver. What is the MOST appropriate thing for the PM to do?":
    ["The team put in long hours to hit a major milestone. What is the MOST appropriate thing for the PM to do afterward?"],

  "A team member becomes defensive when you start giving feedback and stops listening. What active-listening behavior helps MOST?":
    ["As soon as you begin giving feedback, a team member gets defensive and stops listening. Which active-listening behavior helps MOST?"],

  "You need a skeptical regulator's cooperation, but they have low interest in day-to-day project details and high power over approvals. How should you engage them?":
    ["You need cooperation from a skeptical regulator who cares little about daily details but holds great power over approvals. How should you engage them?"],

  "Mid-project a new member joins a high-performing team and is unsure of norms and how the team works. What should the PM do to integrate them effectively?":
    ["A new member joins a high-performing team mid-project and doesn't yet know its norms or ways of working. How should the PM integrate them effectively?"],

  "A conflict has arisen because two members each believed the other owned a shared task, and it slipped. Beyond fixing it now, what BEST prevents recurrence?":
    ["Conflict broke out because two members each assumed the other owned a shared task, which then slipped. Beyond the immediate fix, what BEST prevents a repeat?"],

  "During a difficult conversation, a team member raises their voice and you feel yourself getting angry. Which emotional-intelligence skill is MOST important in the moment?":
    ["In a tough conversation a team member raises their voice and you feel your own anger rising. Which emotional-intelligence skill matters MOST right then?"],

  "Your team keeps experiencing friction over who gets scarce test environments and when. What is the most likely root cause to address?":
    ["Your team keeps clashing over who gets the scarce test environments and when. What is the most likely root cause to tackle?"],

  "A motivated team is being held back because approvals from outside the team take days. What is the servant-leader's primary job here?":
    ["A motivated team is stuck because outside approvals take days. What is the servant-leader's main job here?"],

  /* ---------- EXPANDED BANK: PROCESS ---------- */
  "A project has BAC = $800,000 and is 40% complete; actual cost to date is $400,000. What is the cost performance index (CPI)?":
    ["A project with BAC = $800,000 is 40% complete and has spent $400,000 so far. What is its cost performance index (CPI)?"],

  "On a project with BAC = $500,000, the CPI has stabilized at 0.80 and is expected to continue. What is the estimate at completion (EAC)?":
    ["A project's BAC is $500,000 and its CPI has settled at 0.80, expected to hold. What is the estimate at completion (EAC)?"],

  "An activity has Optimistic = 6 days, Most Likely = 12 days, Pessimistic = 30 days. What is the PERT (beta) expected duration?":
    ["For an activity with Optimistic = 6, Most Likely = 12, and Pessimistic = 30 days, what is the PERT (beta) expected duration?"],

  "Midway through execution, a stakeholder asks for a 'tiny' scope addition, insisting it is too small to bother with paperwork. What should the PM do?":
    ["Mid-execution, a stakeholder requests a 'tiny' scope add-on, saying it's too minor to need paperwork. What should the PM do?"],

  "Which sequence correctly reflects how a deliverable moves toward customer sign-off?":
    ["Which order correctly shows how a deliverable progresses toward customer sign-off?"],

  "A new risk is identified during execution that was not in the risk register. What should the project manager do FIRST?":
    ["During execution a risk surfaces that isn't in the risk register. What should the project manager do FIRST?"],

  "The scope of work is highly uncertain and likely to evolve as the project proceeds. Which contract type best protects the buyer's interests?":
    ["The scope is very uncertain and will probably change as the project goes on. Which contract type best protects the buyer?"],

  "Under a firm-fixed-price contract, the seller's costs run well over their bid. Who absorbs the overrun?":
    ["On a firm-fixed-price contract, the seller's costs blow well past their bid. Who eats the overrun?"],

  "A control chart shows seven consecutive points falling below the mean, though all are within the control limits. What does this indicate?":
    ["A control chart has seven points in a row below the mean, even though all stay within the limits. What does that signal?"],

  "You set aside funds to cover specific identified risks that you expect to manage within the project. What is this called and who controls it?":
    ["You reserve funds for specific identified risks you plan to handle within the project. What is that reserve called, and who controls it?"],

  "You must shorten the project schedule but the budget is fixed and cannot absorb extra cost. Which compression technique is appropriate?":
    ["You need to compress the schedule, but the budget is locked and can't take on extra cost. Which compression technique fits?"],

  "At project closeout, the customer has used the product but has not yet formally signed off. What must the PM ensure before closing?":
    ["At closeout the customer is using the product but hasn't formally signed off yet. What must the PM secure before closing?"],

  "Stakeholders want a probability distribution of possible project completion dates given uncertain activity durations. Which technique provides this?":
    ["Given uncertain activity durations, stakeholders want a probability distribution of possible finish dates. Which technique delivers that?"],

  "Two activities can run at the same time, but the team chose to sequence them based on a preferred best practice rather than a physical requirement. What kind of dependency is this?":
    ["Two activities could run concurrently, but the team sequenced them out of a preferred best practice, not a physical need. What kind of dependency is that?"],

  "A seller and buyer disagree over whether certain work is within the contracted scope. What is the PREFERRED first approach to resolve the dispute?":
    ["A buyer and seller disagree about whether some work falls under the contracted scope. What is the PREFERRED first way to resolve it?"],

  "During execution, work performance data is collected from completed activities. What happens to it next in the monitoring and controlling process?":
    ["Work performance data is gathered from completed activities during execution. What becomes of it next in monitoring and controlling?"],

  "An activity has a total float of 4 days and is not on the critical path. The customer asks what happens if it slips 2 days. What is the correct response?":
    ["A non-critical activity has 4 days of total float. The customer asks what a 2-day slip would do. What is the correct answer?"],

  "The team wants to decompose the scope to the level where work can be reliably estimated and assigned. What is that lowest level of the WBS called?":
    ["The team breaks the scope down to where work can be reliably estimated and assigned. What is that bottom level of the WBS called?"],

  "Halfway through a predictive project, the PM realizes lessons learned have not been recorded yet. When should lessons learned be captured?":
    ["Midway through a predictive project, the PM notices no lessons learned have been logged. When should they be captured?"],

  "A quality audit finds the team is following an inefficient process that still produces acceptable output. This audit and process focus is part of which process?":
    ["A quality audit reveals an inefficient process that nonetheless yields acceptable output. That audit and process focus belongs to which process?"],

  "Stakeholders are identified late, and one overlooked group now objects to a key design decision. What does this reveal about stakeholder identification?":
    ["Because stakeholders were identified late, an overlooked group is now objecting to a key design choice. What does this say about stakeholder identification?"],

  "A risk response (taking out insurance) is chosen for a high-impact threat. Which response strategy does buying insurance represent?":
    ["For a high-impact threat, the team buys insurance as the response. Which risk strategy does that represent?"],

  "The procurement statement of work for a complex service is vague, and bidders keep asking divergent questions. What is the BEST way to give all sellers the same information fairly?":
    ["A complex service's procurement SOW is vague and bidders keep asking different questions. What is the BEST way to give every seller the same information fairly?"],

  "A decision has two options: Option A has a 60% chance of $100,000 profit and a 40% chance of a $20,000 loss; Option B yields a certain $40,000. Using EMV, which is the better choice?":
    ["You face two options: Option A gives a 60% chance of $100,000 profit and a 40% chance of a $20,000 loss; Option B pays a guaranteed $40,000. By EMV, which should you pick?"],

  /* ---------- EXPANDED BANK: AGILE / HYBRID ---------- */
  "Midway through a sprint, a stakeholder demands a new high-priority feature be added to the current sprint. What should the Scrum Master do?":
    ["Mid-sprint, a stakeholder insists a new high-priority feature go into the current sprint. What should the Scrum Master do?"],

  "The daily standup routinely runs 30+ minutes because the team dives into detailed technical problem-solving. What should the Scrum Master do?":
    ["The daily standup keeps dragging past 30 minutes because the team gets into deep technical problem-solving. What should the Scrum Master do?"],

  "The Product Owner is frequently unavailable, so the team cannot get timely answers to clarify backlog items. How should the Scrum Master treat this?":
    ["The Product Owner is often unreachable, so the team can't get quick answers on backlog items. How should the Scrum Master treat this?"],

  "Team velocity has dropped for two consecutive sprints. What is the BEST first action?":
    ["The team's velocity has fallen two sprints running. What is the BEST first action?"],

  "A sponsor insists on a fixed scope, fixed date, and a detailed up-front plan, but requirements are highly uncertain and changing. What approach should the PM recommend?":
    ["A sponsor wants locked scope, a fixed date, and a detailed up-front plan, yet requirements are highly uncertain and shifting. What approach should the PM recommend?"],

  "A team repeatedly fails to complete everything it commits to each sprint. What is the BEST way to improve predictability?":
    ["A team keeps falling short of its sprint commitments. What is the BEST way to make delivery more predictable?"],

  "At sprint end, several stories are functionally working but do not meet the Definition of Done (e.g., not fully tested). How should they be treated?":
    ["At the end of the sprint, several stories work but fall short of the Definition of Done (for example, not fully tested). How should they be handled?"],

  "Stakeholders want to see and give feedback on the working product produced this sprint. Which event is designed for this?":
    ["Stakeholders want to see this sprint's working product and give feedback. Which event is built for that?"],

  "Several teams working on one product keep blocking each other on shared dependencies. What practice helps coordinate across teams?":
    ["Multiple teams on the same product keep blocking one another over shared dependencies. Which practice helps coordinate them?"],

  "A project will run an early predictive design/regulatory phase, then build the solution in iterations. How is this BEST described?":
    ["A project starts with a predictive design/regulatory phase and then builds the solution iteratively. How is that BEST described?"],

  "A Kanban team's work-in-progress limit for the 'Testing' column is exceeded, and items are piling up there. What should the team do?":
    ["A Kanban team has blown past the WIP limit on the 'Testing' column, and work is piling up there. What should the team do?"],

  "Early in development, the team faces a risky technical unknown that could derail the design. What agile tool helps reduce this uncertainty before committing?":
    ["Early on, the team hits a risky technical unknown that could wreck the design. Which agile tool helps reduce that uncertainty before committing?"],

  "A Product Owner keeps stuffing the backlog with pet features that add little value while high-value items wait. What is the core agile principle being violated?":
    ["A Product Owner keeps loading the backlog with low-value pet features while high-value items wait. Which core agile principle is being broken?"],

  "The team wants relative estimates that improve consistency over time and reduce anchoring during estimation. What should they use?":
    ["The team wants relative estimates that get more consistent over time and limit anchoring. What should they use?"],

  "Retrospective action items keep getting identified but never implemented, so the same problems recur. What should the Scrum Master do?":
    ["The team keeps naming retrospective actions but never acting on them, so the same issues return. What should the Scrum Master do?"],

  "Technical debt is quietly accumulating and starting to slow delivery. How should an agile team handle it?":
    ["Technical debt is building up unnoticed and beginning to slow delivery. How should an agile team deal with it?"],

  "A startup wants to validate whether customers want a feature before investing heavily. What should the team deliver FIRST?":
    ["A startup wants to test whether customers actually want a feature before sinking in a lot of effort. What should the team deliver FIRST?"],

  "A team new to agile insists on writing complete, detailed requirements for the entire product before any coding. How should the coach guide them?":
    ["A team new to agile wants to fully document every requirement for the whole product before writing any code. How should the coach steer them?"],

  "Halfway through a release, the burndown shows the team will not finish all planned scope by the release date. What is the BEST response?":
    ["Halfway into a release, the burndown indicates the team won't complete all planned scope by the date. What is the BEST response?"],

  "A manager wants to use velocity to compare two different teams and rank their performance. Why is this inappropriate?":
    ["A manager plans to compare two teams' velocities to rank their performance. Why is that inappropriate?"],

  "During the Daily Scrum, a manager attends and starts asking each person for a detailed status update. What is the problem?":
    ["A manager sits in on the Daily Scrum and begins demanding a detailed status update from each person. What's wrong with that?"],

  "An organization wants the benefits of agile but has a regulatory milestone that requires a formal documented review at a fixed date. What is the BEST approach?":
    ["An organization wants agile's benefits but must hold a formal documented review for a regulatory milestone on a fixed date. What is the BEST approach?"],

  "The team debates how to know a single user story is complete and acceptable to the customer. What defines that for THAT story specifically?":
    ["The team argues over how to tell that one particular user story is complete and acceptable to the customer. What defines that for THAT specific story?"],

  /* ---------- EXPANDED BANK: BUSINESS ENVIRONMENT ---------- */
  "Partway through the project, market shifts make the original business case no longer valid. What should the project manager do?":
    ["Mid-project, market changes leave the original business case no longer valid. What should the project manager do?"],

  "A new regulation takes effect that affects your product mid-project. What is the project manager's responsibility?":
    ["A new regulation affecting your product comes into force partway through the project. What is the project manager responsible for doing?"],

  "Most of the expected benefits of your project will only materialize months after the product goes live. Who typically owns tracking those benefits, and via what?":
    ["Most of your project's benefits won't appear until months after launch. Who usually owns tracking them, and through what?"],

  "Employees affected by a new system are anxious and resistant to adopting it. Which approach BEST supports the change?":
    ["Employees facing a new system are anxious and reluctant to adopt it. Which approach BEST supports the change?"],

  "A sponsor asks you to report a yellow/at-risk project as 'green' to avoid scrutiny in an upcoming review. What should you do?":
    ["A sponsor wants you to label a yellow/at-risk project as 'green' to dodge scrutiny in an upcoming review. What should you do?"],

  "Leadership must choose between two mutually exclusive projects. Project A has an NPV of $250,000; Project B has an NPV of $180,000. Which should they select, all else equal?":
    ["Leadership has to pick one of two mutually exclusive projects: Project A's NPV is $250,000, Project B's is $180,000. All else equal, which should they choose?"],

  "A directive PMO is involved in your project. What level of control should you expect from it?":
    ["Your project is overseen by a directive PMO. How much control should you expect it to exert?"],

  "A long-running project is found to no longer align with the organization's revised strategy. What is the appropriate course of action?":
    ["A long-running project turns out to no longer fit the organization's revised strategy. What is the appropriate course of action?"],

  "A normally reliable engineer has become withdrawn and their output has dropped sharply over the past week. You are unsure why. What should the project manager do FIRST?":
    ["A usually dependable engineer has grown withdrawn and their output has fallen off sharply this past week, and you don't know why. What should the project manager do FIRST?"]

};
