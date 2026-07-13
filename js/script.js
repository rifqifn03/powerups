/* ==========================================
   POWER UPS WEBSITE
   Premium JavaScript
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/* ==========================
   Sticky Header
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/* ==========================
   Mobile Menu
========================== */

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});


/* ==========================
   Smooth Active Menu
========================== */

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});


/* ==========================
   Reveal Animation
========================== */

const revealElements=document.querySelectorAll("section");

function reveal(){

const windowHeight=window.innerHeight;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-120){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/* ==========================
   Counter Animation
========================== */

const counters=document.querySelectorAll(".counter h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const counter=document.querySelector(".counter");

if(!counter)return;

const top=counter.offsetTop;

if(window.scrollY>top-500 && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const target=counter.innerText.replace("+","");

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

}

update();

});

}

});


/* ==========================
   Hero Image Floating
========================== */

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/70;

let y=(window.innerHeight/2-e.pageY)/70;

heroImage.style.transform="translate("+x+"px,"+y+"px)";

});

}


/* ==========================
   Back To Top
========================== */

const topButton=document.createElement("div");

topButton.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topButton.className="backTop";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("active");

}else{

topButton.classList.remove("active");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================
   Card Hover Effect
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* ==========================
   Hero Typing Effect
========================== */

const heroTitle=document.querySelector(".hero h4");

if(heroTitle){

const text="WELCOME TO";

let i=0;

heroTitle.innerHTML="";

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();

}


/* ==========================
   Fade Image
========================== */

const images=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

images.forEach(img=>{

img.style.opacity=0;

img.style.transform="translateY(30px)";

img.style.transition="1s";

observer.observe(img);

});


/* ==========================
   Button Ripple
========================== */

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary,.cta a");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


console.log("POWER UPS WEBSITE LOADED");