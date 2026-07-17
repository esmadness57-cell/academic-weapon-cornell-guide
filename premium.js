/* ============================================
   THE ACADEMIC WEAPON
   Premium Pack v2.0
   Part 1
============================================ */

/* ------------------------------
   Scroll Progress Bar
------------------------------ */

const progressBar = document.createElement("div");
progressBar.id = "aw-progress";
document.body.appendChild(progressBar);

const premiumStyle = document.createElement("style");

premiumStyle.innerHTML = `

#aw-progress{

position:fixed;

top:0;

left:0;

height:4px;

width:0%;

background:linear-gradient(90deg,#D4AF37,#FFD700);

box-shadow:0 0 15px #D4AF37;

z-index:99999;

transition:width .15s;

}

/* Gold Cursor Glow */

#goldGlow{

position:fixed;

width:300px;

height:300px;

border-radius:50%;

pointer-events:none;

background:radial-gradient(circle,
rgba(212,175,55,.15),
transparent 70%);

transform:translate(-50%,-50%);

z-index:-1;

transition:
left .08s linear,
top .08s linear;

}

/* Back To Top */

#backTop{

position:fixed;

right:25px;

bottom:25px;

width:58px;

height:58px;

display:flex;

justify-content:center;

align-items:center;

background:#D4AF37;

color:#111;

font-size:28px;

font-weight:bold;

border-radius:50%;

cursor:pointer;

box-shadow:0 0 20px rgba(212,175,55,.45);

opacity:0;

transform:translateY(20px);

transition:.35s;

z-index:9999;

}

#backTop.show{

opacity:1;

transform:translateY(0);

}

#backTop:hover{

transform:scale(1.08);

}

/* Floating Particles */

.aw-particle{

position:fixed;

width:4px;

height:4px;

border-radius:50%;

background:#D4AF37;

opacity:.18;

pointer-events:none;

animation:floatParticle linear infinite;

}

@keyframes floatParticle{

0%{

transform:translateY(100vh);

opacity:0;

}

20%{

opacity:.25;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

/* Hero Glow */

.hero::before{

content:"";

position:absolute;

width:650px;

height:650px;

border-radius:50%;

background:radial-gradient(circle,
rgba(212,175,55,.08),
transparent 70%);

top:-180px;

left:50%;

transform:translateX(-50%);

pointer-events:none;

animation:pulseHero 6s ease-in-out infinite;

}

@keyframes pulseHero{

0%{

transform:translateX(-50%) scale(1);

}

50%{

transform:translateX(-50%) scale(1.08);

}

100%{

transform:translateX(-50%) scale(1);

}

}

`;

document.head.appendChild(premiumStyle);

/* ------------------------------
   Scroll Progress
------------------------------ */

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});

/* ------------------------------
   Mouse Glow
------------------------------ */

const glow=document.createElement("div");

glow.id="goldGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ------------------------------
   Back To Top
------------------------------ */

const topButton=document.createElement("div");

topButton.id="backTop";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ------------------------------
   Floating Gold Particles
------------------------------ */

for(let i=0;i<35;i++){

const particle=document.createElement("div");

particle.className="aw-particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=
(12+Math.random()*10)+"s";

particle.style.animationDelay=
Math.random()*10+"s";

particle.style.opacity=
0.08+Math.random()*0.2;

document.body.appendChild(particle);

}

/* ------------------------------
   Hero Entrance
------------------------------ */

const hero=document.querySelector(".hero h2");

if(hero){

hero.animate([

{

opacity:0,

transform:"translateY(70px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1500,

easing:"ease-out",

fill:"forwards"

});

}

console.log("Premium Pack v2 Part 1 Loaded");

/* ============================================
   PREMIUM PACK v2
   PART 2
============================================ */


/* ============================================
   Apple Style Reveal Animation
============================================ */

const revealElements = document.querySelectorAll(
".card,.weapon,.faq-item,.cornell-layout,.cta,.section-title,.section-text"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(60px) scale(.96)",
filter:"blur(12px)"
},

{
opacity:1,
transform:"translateY(0px) scale(1)",
filter:"blur(0px)"
}

],{

duration:900,
easing:"cubic-bezier(.19,1,.22,1)",
fill:"forwards"

});

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});


/* ============================================
   Premium Card Physics
============================================ */

document.querySelectorAll(".card").forEach(card=>{

card.style.transformStyle="preserve-3d";

card.style.transition=
"transform .15s ease-out, box-shadow .3s";

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/15);

const rotateY=((rect.width/2-x)/15);

card.style.transform=

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)
`;

card.style.boxShadow=
"0 30px 60px rgba(212,175,55,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0)";

card.style.boxShadow="";

});

});


/* ============================================
   Weapon Card Hover
============================================ */

document.querySelectorAll(".weapon").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

}

],{

duration:250,

fill:"forwards"

});

});

card.addEventListener("mouseleave",()=>{

card.animate([

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:250,

fill:"forwards"

});

});

});


/* ============================================
   Navigation Glow
============================================ */

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.textShadow=

"0 0 12px #D4AF37";

});

link.addEventListener("mouseleave",()=>{

link.style.textShadow="none";

});

});


/* ============================================
   Gold Ripple Effect
============================================ */

document.querySelectorAll(".gold-btn").forEach(button=>{

button.style.position="relative";

button.style.overflow="hidden";

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background=
"rgba(255,255,255,.35)";

ripple.style.left=
(e.clientX-rect.left-size/2)+"px";

ripple.style.top=
(e.clientY-rect.top-size/2)+"px";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

button.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(3)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ============================================
   Footer Shine
============================================ */

const footerTitle=document.querySelector("footer h2");

if(footerTitle){

footerTitle.style.position="relative";
footerTitle.style.overflow="hidden";

setInterval(()=>{

footerTitle.animate([

{

textShadow:"0 0 0px #D4AF37"

},

{

textShadow:"0 0 18px #FFD700"

},

{

textShadow:"0 0 0px #D4AF37"

}

],{

duration:2200

});

},10000);

}


/* ============================================
   Hero Floating Motion
============================================ */

const heroContent=document.querySelector(".hero-content");

if(heroContent){

let t=0;

setInterval(()=>{

t+=0.02;

heroContent.style.transform=

`translateY(${Math.sin(t)*8}px)`;

},30);

}


/* ============================================
   Logo Pulse
============================================ */

const logo=document.querySelector(".logo-area img");

if(logo){

setInterval(()=>{

logo.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1400

});

},7000);

}


/* ============================================
   Console Branding
============================================ */

console.log(
"%cTHE ACADEMIC WEAPON",
"color:#D4AF37;font-size:28px;font-weight:bold;"
);

console.log(
"%cPremium Pack v2 Loaded",
"color:white;font-size:16px;"
);


/* ============================================
   PREMIUM PACK v2
   FINAL PART
   THE ACADEMIC WEAPON
============================================*/

/* ============================================
   Luxury Loading Fade
============================================ */

window.addEventListener("load",()=>{

document.body.animate([

{
opacity:0,
filter:"blur(8px)"
},

{
opacity:1,
filter:"blur(0px)"
}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

});


/* ============================================
   Premium Cursor
============================================ */

const cursor=document.createElement("div");

cursor.id="awCursor";

document.body.appendChild(cursor);

const cursorStyle=document.createElement("style");

cursorStyle.innerHTML=`

#awCursor{

position:fixed;

width:18px;

height:18px;

border-radius:50%;

background:#D4AF37;

pointer-events:none;

transform:translate(-50%,-50%);

mix-blend-mode:screen;

box-shadow:
0 0 12px #D4AF37,
0 0 25px rgba(212,175,55,.4);

transition:
width .25s,
height .25s,
background .25s;

z-index:999999;

}

.cursorGrow{

width:42px !important;

height:42px !important;

background:rgba(212,175,55,.25)!important;

}

`;

document.head.appendChild(cursorStyle);

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.card,.weapon").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursorGrow");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursorGrow");

});

});


/* ============================================
   Spotlight Effect
============================================ */

const spotlight=document.createElement("div");

spotlight.id="spotlight";

document.body.appendChild(spotlight);

const spotStyle=document.createElement("style");

spotStyle.innerHTML=`

#spotlight{

position:fixed;

width:650px;

height:650px;

border-radius:50%;

background:
radial-gradient(circle,
rgba(212,175,55,.08),
transparent 70%);

pointer-events:none;

transform:translate(-50%,-50%);

z-index:-2;

transition:left .12s linear,
top .12s linear;

}

`;

document.head.appendChild(spotStyle);

window.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX+"px";

spotlight.style.top=e.clientY+"px";

});


/* ============================================
   Animated Gold Background
============================================ */

const bg=document.createElement("div");

bg.id="goldBackground";

document.body.appendChild(bg);

const bgStyle=document.createElement("style");

bgStyle.innerHTML=`

#goldBackground{

position:fixed;

inset:0;

background:

radial-gradient(circle at 20% 30%,
rgba(212,175,55,.03),
transparent 40%),

radial-gradient(circle at 80% 70%,
rgba(212,175,55,.04),
transparent 45%),

radial-gradient(circle at 60% 10%,
rgba(255,215,0,.025),
transparent 35%);

animation:moveBackground 18s ease-in-out infinite alternate;

pointer-events:none;

z-index:-5;

}

@keyframes moveBackground{

0%{

transform:translateY(-20px);

}

100%{

transform:translateY(20px);

}

}

`;

document.head.appendChild(bgStyle);


/* ============================================
   Premium Hover Glow
============================================ */

document.querySelectorAll(".card,.weapon,.faq-item").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

card.style.borderColor="#FFD700";

card.style.boxShadow=

"0 0 35px rgba(212,175,55,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


/* ============================================
   Smooth Section Fade
============================================ */

const sections=document.querySelectorAll("section");

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(70px)";

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(70px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],{

duration:1000,

fill:"forwards"

});

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

sections.forEach(sec=>observer.observe(sec));


/* ============================================
   Footer Gold Sweep
============================================ */

const footer=document.querySelector("footer");

if(footer){

const shine=document.createElement("div");

shine.style.position="absolute";

shine.style.left="-200px";

shine.style.top="0";

shine.style.width="180px";

shine.style.height="100%";

shine.style.background=

"linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)";

shine.style.transform="skewX(-20deg)";

footer.style.position="relative";

footer.style.overflow="hidden";

footer.appendChild(shine);

setInterval(()=>{

shine.animate([

{

left:"-200px"

},

{

left:"120%"

}

],{

duration:2400,

easing:"ease"

});

},12000);

}


/* ============================================
   Smooth Scroll Enhancement
============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


/* ============================================
   Premium Finished
============================================ */

console.log(
"%c★ PREMIUM PACK V2 COMPLETE ★",
"color:#FFD700;font-size:22px;font-weight:bold;"
);

console.log(
"%cThe Academic Weapon",
"color:white;font-size:16px;"
);