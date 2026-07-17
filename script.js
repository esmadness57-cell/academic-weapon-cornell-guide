/* ===========================================
   THE ACADEMIC WEAPON
   Cornell Notes Website
   script.js
=========================================== */

// ------------------------------
// Fade-in Animation on Scroll
// ------------------------------

const faders = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(el=>{
    appearOnScroll.observe(el);
});


// ------------------------------
// Navbar Active Link
// ------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ------------------------------
// Hero Parallax
// ------------------------------

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let offset=window.pageYOffset;

    hero.style.backgroundPositionY=offset*0.35+"px";

});


// ------------------------------
// Card Hover Glow
// ------------------------------

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,.12),
        #181818 55%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#181818";

    });

});


// ------------------------------
// Weapon Cards Animation
// ------------------------------

const weapons=document.querySelectorAll(".weapon");

weapons.forEach((weapon,index)=>{

    weapon.style.animationDelay=`${index*0.12}s`;

    weapon.classList.add("fade");

    appearOnScroll.observe(weapon);

});


// ------------------------------
// CTA Button Pulse
// ------------------------------

const button=document.querySelector(".gold-btn");

setInterval(()=>{

    button.classList.add("pulse");

    setTimeout(()=>{

        button.classList.remove("pulse");

    },1000);

},5000);


// ------------------------------
// Smooth Page Load
// ------------------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .8s ease";

        document.body.style.opacity="1";

    },100);

});


// ------------------------------
// Footer Year
// ------------------------------

const copyright=document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML=
    "© "+new Date().getFullYear()+
    " The Academic Weapon • All Rights Reserved.";

}


// ------------------------------
// Console Message
// ------------------------------

console.log("%cTHE ACADEMIC WEAPON",
"color:#D4AF37;font-size:26px;font-weight:bold;");

console.log("%cKnowledge is Intelligence",
"color:white;font-size:16px;");


// ------------------------------
// End
// ------------------------------