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

   color: #e94e77;

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

   ctaLink = "https://www.adrianagallardo.com/pages/legendaria";

 } else if (highest === love_bird) {

   resultText = "🦜 You are a Love Bird Leader!";

   resultDesc = "You’ve risen stronger than ever. Now it’s your time to dominate.";

   ctaLink = "https://www.adrianagallardo.com/pages/renacida";

 } else if (highest === owl) {

   resultText = "🦉 You are an Owl Leader!";

   resultDesc = "You have the vision. Now you need the structure to execute it.";

   ctaLink = "https://www.adrianagallardo.com/pages/visionaria";

 } else if (highest === rhino) {

   resultText = "🦏 You are a Rhino Leader!";

   resultDesc = "You’re already building. Now do it your way.";

   ctaLink = "https://www.adrianagallardo.com/pages/constructora";

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

 });
</script>
