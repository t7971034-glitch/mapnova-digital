/* ==========================================
   MAPNOVA DIGITAL
   Premium Script V7
==========================================*/

// =============================
// Website Loaded
// =============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){
        loader.classList.add("hidden");
    }

});

// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", ()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// =============================
// Scroll To Top
// =============================

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

if(scrollBtn){

scrollBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

// =============================
// Counter
// =============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=100;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});

// =============================
// Scroll Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});

// =============================
// Dark Mode
// =============================

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

}

}

// =============================
// Active Menu
// =============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

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

// =============================
// Contact Form
// =============================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! We will contact you soon.");

form.reset();

});

}

// =============================
// Console
// =============================

console.log("MapNova Digital Premium Website Loaded Successfully");