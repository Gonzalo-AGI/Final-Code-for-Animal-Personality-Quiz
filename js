<!-- ✅ Move styles to the top -->
<style>

   .quiz-results {

     max-width: 600px;

     margin: 50px auto;

     padding: 30px;

     font-family: 'Helvetica Neue', sans-serif;

     text-align: center;

   }
 
  h1 {

     font-size: 28px;

     font-weight: 700;

     margin-bottom: 20px;

   }
 
  h2 {

     font-size: 24px;

     margin-bottom: 20px;

     color: #111;

   }
 
  h3#greeting {

     font-size: 20px;

     margin-bottom: 30px;

     color: #555;

   }

   .bar-bg {

     background: #eee;

     border-radius: 20px;

     height: 16px;

     margin: 10px auto 10px;

     overflow: hidden;

     width: 100%;

   }

   .bar {

     height: 100%;

     transition: width 1s ease-in-out;

   }

 #bar-sheep { background: #0169a7; }

 #bar-love_bird { background: #dfeb05; }

 #bar-owl { background: #049109; }

 #bar-rhino { background: #db1304; }

 
  .summary-text {

     margin-top: 10px;

     font-size: 16px;

     line-height: 1.5;

     color: #444;

   }
 
  .cta-wrapper {

   margin-top: 10px; /* 👈 was 60px */

   display: flex;

   justify-content: center;

   gap: 20px;

   flex-wrap: wrap;

 }
 
  .alt-btn {

     background-color: #3c82f6;

     color: white;

     font-weight: 600;

     text-transform: uppercase;

     letter-spacing: 2px;

     padding: 14px 28px;

     border-radius: 12px;

     text-decoration: none;

     transition: all 0.3s ease;

     box-shadow: 0 4px 10px rgba(0,0,0,0.1);

   }
 
  .alt-btn:hover {

     background-color: #d43b68;

     transform: translateY(-2px);

   }

   @media (max-width: 640px) {

   .cta-wrapper {

     flex-direction: column;

     align-items: center;

   }
 
  .alt-btn {

     width: 100%;

     max-width: 280px;

     margin-bottom: 12px; /* optional spacing between stacked buttons */

   }

     .greeting-text {

   font-size: 18px;

   line-height: 1.6;

   margin-bottom: 20px;

 }

 }

   .quiz-results {

   padding-bottom: 10px; /* reduce space under the bars */

   margin-bottom: 0px;

 }

 @keyframes gradientShift {

   0%   { background-position: 0% 50%; }

   50%  { background-position: 100% 50%; }

   100% { background-position: 0% 50%; }

 }
 
@keyframes bounceLoop {

   0%, 100% { transform: translateY(0); }

   50% { transform: translateY(-4px); }

 }
 
.animated-cta {

   background-color: #e94e77; /* fallback base color */

   background-image: linear-gradient(135deg, #0169a7, #005181);

   background-size: 200% 200%;

   animation: gradientShift 6s ease infinite, bounceLoop 1.5s ease-in-out infinite;

   color: white;

   font-weight: 600;

   text-transform: uppercase;

   letter-spacing: 2px;

   padding: 14px 28px;

   border-radius: 12px;

   text-decoration: none;

   transition: transform 0.3s ease, box-shadow 0.3s ease;

   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

   -webkit-tap-highlight-color: transparent;

   user-select: none;

   outline: none;

   border: none;

 }
 
.animated-cta:focus,

 .animated-cta:active {

   transform: scale(0.97);

   animation: gradientShift 6s ease infinite, bounceLoop 1.5s ease-in-out infinite;

   background: linear-gradient(135deg, #5b6b8c, #5b6b8c);

   outline: none;

   box-shadow: none;

 }

 .animated-cta:hover {

   transform: scale(1.02);

   animation: gradientShift 6s ease infinite, bounceLoop 1.5s ease-in-out infinite;

   background: linear-gradient(135deg, #1b5fa8, #a0bede);

   color: white;

 }
 
 
/* Bounce effect */

 @keyframes bounce {

   0%, 100% { transform: translateY(0); }

   50% { transform: translateY(-6px); }

 }
 
/* Gradient animation */

 @keyframes gradientShift {

   0% { background-position: 0% 50%; }

   50% { background-position: 100% 50%; }

   100% { background-position: 0% 50%; }

 }
 
.highlight-name {

   font-weight: 800;

   background: linear-gradient(to right, #1b5fa8, #a0bede);

   padding: 2px 6px;

   border-radius: 6px;

   color: #ffffff;

 }
</style>
 
<!-- ✅ Content starts after all styles -->
<div class="quiz-results">
<h1> Your Animal Personality Breakdown!</h1>
<h3 id="greeting" class="greeting-text"></h3> <!-- First name greeting here -->
<h2 id="result-title"></h2> <!-- Dynamic personality type -->
<p id="result-description" class="summary-text"></p> <!-- Description -->
<!-- Scores -->
<p>🐑 Sheep Personality: <span id="score-sheep">0%</span></p>
<div class="bar-bg"><div class="bar" id="bar-sheep"></div></div>
 
  <p>🦜 Love Bird Personality: <span id="score-love_bird">0%</span></p>
<div class="bar-bg"><div class="bar" id="bar-love_bird"></div></div>
 
  <p>🦉 Owl Personality: <span id="score-owl">0%</span></p>
<div class="bar-bg"><div class="bar" id="bar-owl"></div></div>
 
  <p>🦏 Rhino Personality: <span id="score-rhino">0%</span></p>
<div class="bar-bg"><div class="bar" id="bar-rhino"></div></div>
</div>
 
<!-- ✅ Buttons -->
<div class="cta-wrapper">
<a href="javascript:void(0)" id="cta-btn" class="btn alt-btn animated-cta">GET YOUR 30-DAY PLAN</a>
</div>
 
 
<!-- ✅ Script -->
<script>

 document.addEventListener("DOMContentLoaded", function () {

 const params = new URLSearchParams(window.location.search);

 const sheep = parseInt(params.get("sheep")) || 0;

 const love_bird = parseInt(params.get("love_bird")) || 0;

 const owl = parseInt(params.get("owl")) || 0;

 const rhino = parseInt(params.get("rhino")) || 0;

 const firstName = params.get("first_name");
 
// Calculate total

 const total = sheep + love_bird + owl + rhino;
 
// Calculate percentages

 const sheepPercent = total ? Math.round((sheep / total) * 100) : 0;

 const love_birdPercent = total ? Math.round((love_bird / total) * 100) : 0;

 const owlPercent = total ? Math.round((owl / total) * 100) : 0;

 const rhinoPercent = total ? Math.round((rhino / total) * 100) : 0;
 
 
  // Update bars and scores (you must create these IDs in HTML)

   document.getElementById("score-sheep").textContent = sheepPercent + "%";

   document.getElementById("bar-sheep").style.width = sheepPercent + "%";
 
  document.getElementById("score-love_bird").textContent = love_birdPercent + "%";

   document.getElementById("bar-love_bird").style.width = love_birdPercent + "%";
 
  document.getElementById("score-owl").textContent = owlPercent + "%";

   document.getElementById("bar-owl").style.width = owlPercent + "%";
 
  document.getElementById("score-rhino").textContent = rhinoPercent + "%";

   document.getElementById("bar-rhino").style.width = rhinoPercent + "%";
 
  // Determine the highest score

   const highest = Math.max(sheep, love_bird, owl, rhino);

   let resultText = "";

   let resultDesc = "";

   let ctaLink = "";

   let ctaText = "GET YOUR 30-DAY PLAN";
 
if (highest === sheep) {

   resultText = "🐑 You are a Sheep Leader!";

   resultDesc = "You keep the peace and create safety—but avoiding conflict drains your energy. Lead with calm boundaries and clear asks so your empathy turns into real momentum and results";

   ctaLink = "https://biinse-ja.myshopify.com/pages/30-day-plan";

 } else if (highest === love_bird) {

   resultText = "🦜 You are a Love Bird Leader!";

   resultDesc = "You’ve risen stronger than ever. Now it’s your time to dominate.";

   ctaLink = "https://biinse-ja.myshopify.com/pages/30-day-plan-lovebird";

 } else if (highest === owl) {

   resultText = "🦉 You are an Owl Leader!";

   resultDesc = "You have the vision. Now you need the structure to execute it.";

   ctaLink = "https://biinse-ja.myshopify.com/pages/30-day-planowl";

 } else if (highest === rhino) {

   resultText = "🦏 You are a Rhino Leader!";

   resultDesc = "You’re already building. Now do it your way.";

   ctaLink = "https://biinse-ja.myshopify.com/pages/30-day-plan-rhino";

 }
 
  document.getElementById("result-title").textContent = resultText;

   document.getElementById("result-description").textContent = resultDesc;
 
  const cta = document.getElementById("cta-btn");

   if (cta) {

     cta.href = ctaLink;

     cta.textContent = ctaText;

   }
 
  if (firstName) {

     document.getElementById("greeting").innerHTML = `Hola <span class="highlight-name">${firstName}</span>, here's your Leadership Power 👇`;

   }

   // 🔽 Dynamic breakdown content by highest animal (keeps structure; swaps text only)

   const cardBlocks = Array.from(document.querySelectorAll('div[style*="background:#D6ECFA"]')).slice(0,6);

   const setCard = (index, html) => { if (cardBlocks[index]) { cardBlocks[index].innerHTML = html; } };

   const plans = {

     sheep: {

       harsh: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">The harsh reality</h3><p>You keep the peace, hold the team together, and make people feel safe—yet you sometimes stay quiet when your voice is most needed.</p><p>Avoiding conflict costs you energy and respect. Boundaries protect your calm; silence does not.</p>',

       strengths: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Your strengths</h3><ul><li>Loyal, steady, team-first; excellent listener.</li><li>Calm under pressure; de-escalates tension.</li><li>Creates trust and connection quickly.</li></ul>',

       drains: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">What’s draining your energy:</h3><ul><li>Aggressive or confrontational tones.</li><li>Unclear expectations and last-minute changes.</li><li>Feeling isolated or left out of decisions.</li></ul>',

       revelations: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal revelations</h3><ul><li>Safety doesn’t require silence; boundaries create safety.</li><li>Your empathy is a superpower—pair it with clear asks.</li><li>“No pressure” doesn’t mean “no standards.”</li></ul>',

       control: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Revelations to take control of your life:</h3><ul><li>State needs early (“I can deliver X by Friday if I have Y by noon”).</li><li>Use short scripts for pushback; calm &amp; direct beats avoidance.</li><li>Schedule connection on purpose—don’t wait for it.</li></ul>',

       plan: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal Development Plan – 30 days</h3><h4 style="margin-top:1rem; font-weight:600;">Week 1 – Audit like a CEO</h4><ul><li>Map your top 5 relationships: what you need vs. what you give.</li><li>Cut two small obligations that drain you without impact.</li><li>Choose one personal growth goal and tell an accountability partner.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 2 – Get Your Edge Back</h4><ul><li>Use this boundary script daily: “I want to help. Here’s what I can do by ___.”</li><li>Mirror &amp; match energy—but keep your steady tone.</li><li>Join one room where you’re not the most experienced; contribute once.</li></ul><h4 style="margin-top:1rem; font-weight:600;">WEEK 3 – CREATE HABITS THAT LEAVE A LEGACY</h4><ul><li>Run one “inclusion check” in meetings: invite two quiet voices to share.</li><li>Build a weekly clarity ritual: recap agreements &amp; next steps to the group.</li><li>Practice 60-second assertive updates (headline → why it matters → ask).</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 4 – Activate Expansion</h4><ul><li>Say the thing you’ve been avoiding—kind, specific, and direct.</li><li>Set a “non-negotiables” list for your calendar.</li><li>Invite a mentor/peer to review your growth and set the next 90-day target.</li></ul>'

     },

     love_bird: {

       harsh: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">The harsh reality</h3><p>You thrive on connection and comeback energy—but over-giving keeps you busy instead of powerful.</p><p>Seeking harmony with everyone can make you abandon your own standards. Loyalty without limits turns into burnout.</p>',

       strengths: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Your strengths</h3><ul><li>Magnetic presence; inspires trust and loyalty.</li><li>Resilient—turns pain into purpose fast.</li><li>Skilled community builder and motivator.</li></ul>',

       drains: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">What’s draining your energy:</h3><ul><li>Saying yes to keep the peace.</li><li>Unreciprocated relationships and one-sided support.</li><li>Chaotic environments with no shared rules of engagement.</li></ul>',

       revelations: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal revelations</h3><ul><li>Love is a strategy when paired with standards.</li><li>Your story is a brand asset—use it to lead, not to rescue.</li><li>Attention is not the same as impact.</li></ul>',

       control: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Revelations to take control of your life:</h3><ul><li>Define your “give/get” rule for every relationship.</li><li>Replace people-pleasing with clear offers and deadlines.</li><li>Create a “no drama” boundary: facts, agreements, next steps.</li></ul>',

       plan: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal Development Plan – 30 days</h3><h4 style="margin-top:1rem; font-weight:600;">Week 1 – Reclaim Your Standards</h4><ul><li>Write 5 non-negotiables for energy, money, and time.</li><li>Audit your top DMs/texts: close open loops with one decisive response.</li><li>Announce your office hours (even if personal).</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 2 – Lead the Room</h4><ul><li>Open meetings with a 30-second vision and 3 outcomes.</li><li>Use this script: “I’m excited to help. Here’s what I need to make it real…”</li><li>Host one small circle (4–6 people) with a single call to action.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 3 – Scale Connection</h4><ul><li>Create a weekly broadcast message (email/voice note) with one lesson + one ask.</li><li>Batch “care pings” to key allies; track responses.</li><li>Stop rescuing—coach with questions, not favors.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 4 – Dominate with Discipline</h4><ul><li>Publish a promise you can keep for 30 more days.</li><li>Exit one draining commitment and document the lesson.</li><li>Set a Q90 target and three weekly lead measures.</li></ul>'

     },

     owl: {

       harsh: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">The harsh reality</h3><p>Your vision is sharp—but perfection and over-planning delay momentum.</p><p>You see risks others miss, yet avoiding imperfect action keeps your ideas trapped on paper.</p>',

       strengths: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Your strengths</h3><ul><li>Strategic, pattern-driven, future-focused.</li><li>Clear thinker under uncertainty.</li><li>Designs elegant systems and roadmaps.</li></ul>',

       drains: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">What’s draining your energy:</h3><ul><li>Ambiguity with no decision owner.</li><li>Constant interruptions that break deep-work flow.</li><li>Fire-drills that skip discovery and metrics.</li></ul>',

       revelations: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal revelations</h3><ul><li>Speed is a feature—ship v1 to learn.</li><li>Your frameworks are tools, not trophies.</li><li>Decisions have a price of delay; choose a default.</li></ul>',

       control: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Revelations to take control of your life:</h3><ul><li>Work in cycles: discovery → draft → demo → data.</li><li>Define “good enough” with acceptance criteria.</li><li>Time-box research; over-collecting is a hidden fear.</li></ul>',

       plan: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal Development Plan – 30 days</h3><h4 style="margin-top:1rem; font-weight:600;">Week 1 – Architect the Machine</h4><ul><li>Write a 1-page PRD for your #1 idea with a 14-day v1.</li><li>Pick 3 KPIs and define success/failure thresholds.</li><li>Block 90 minutes of daily deep work.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 2 – Ship the Prototype</h4><ul><li>Deliver a demo to 3 stakeholders; collect structured feedback.</li><li>Cut scope by 30% and keep the core outcome.</li><li>Create a kill-switch rule for low-signal tasks.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 3 – Instrument & Learn</h4><ul><li>Measure results vs. your KPIs and publish a 5-bullet update.</li><li>Automate 1 recurring decision with a checklist.</li><li>Schedule a weekly retrospective with action items.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 4 – Systemize Scale</h4><ul><li>Document the playbook in 1 page: inputs → process → outputs.</li><li>Delegate one component with clear SLAs.</li><li>Lock the next 90-day roadmap (themes, metrics, owners).</li></ul>'

     },

     rhino: {

       harsh: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">The harsh reality</h3><p>You charge forward and get results—but “go through it” isn’t the same as “grow through it.”</p><p>Force without focus creates expensive detours. Grinding isn’t a strategy; leverage is.</p>',

       strengths: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Your strengths</h3><ul><li>Decisive, relentless executor.</li><li>High tolerance for pressure and pace.</li><li>Turns vision into concrete wins fast.</li></ul>',

       drains: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">What’s draining your energy:</h3><ul><li>Slow rooms with endless debate.</li><li>Micromanaging details that others can own.</li><li>Projects with no scoreboard or finish line.</li></ul>',

       revelations: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal revelations</h3><ul><li>Power comes from focus, not friction.</li><li>Delegation is speed—ownership creates scale.</li><li>Recovery is part of performance.</li></ul>',

       control: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Revelations to take control of your life:</h3><ul><li>Pick one game to win and ignore the rest.</li><li>Define roles, rules, and results for your team.</li><li>Replace hustle hours with leverage hours (systems, people, capital).</li></ul>',

       plan: '<h3 style="color:#1a325d; font-size:1.5rem; font-weight:700;">Personal Development Plan – 30 days</h3><h4 style="margin-top:1rem; font-weight:600;">Week 1 – Focus the Charge</h4><ul><li>Rank projects by impact × ease; kill or park the bottom 50%.</li><li>Write a 3-line mission for the #1 goal.</li><li>Create a visible scoreboard.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 2 – Build the Crew</h4><ul><li>Delegate two outcomes with clear owners and deadlines.</li><li>Adopt a 10-minute daily standup: blockers → decisions → next steps.</li><li>Automate one repeat process.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 3 – Leverage & Recovery</h4><ul><li>Install a weekly “no-meeting build block.”</li><li>Audit energy: add one recovery ritual you actually keep.</li><li>Secure one partnership or tool that removes a bottleneck.</li></ul><h4 style="margin-top:1rem; font-weight:600;">Week 4 – Own Your Way</h4><ul><li>Say no publicly to one tempting distraction.</li><li>Run a 30-minute post-mortem on a recent win: what made it fast?</li><li>Lock your next 90-day build theme with 3 lead measures.</li></ul>'

     }

   };

   const applyPlan = (key) => {

     const p = plans[key];

     if (!p) return;

     setCard(0, p.harsh);

     setCard(1, p.strengths);

     setCard(2, p.drains);

     setCard(3, p.revelations);

     setCard(4, p.control);

     setCard(5, p.plan);

   };

   if (highest === love_bird) applyPlan('love_bird');

   else if (highest === owl) applyPlan('owl');

   else if (highest === rhino) applyPlan('rhino');

   else applyPlan('sheep');

 });
</script>
