//cursor animation

function cursor(){
    let cursor=document.querySelector(".cursor");
    let body=document.querySelector("body");
    // adding event listener on the mouse
    body.addEventListener("mousemove",(e)=>{
        gsap.to(cursor,{
            x:e.x + "px",
            y:e.y + "px",
        });
    });
}
cursor();

//========section1 animation=========

function section1 (){
    let tl= gsap.timeline();
    tl.from('.header',{
        y:-50,
        opacity:0,
        duration:1,
    });

    tl.from('.textcontent h1, .textcontent p',{
        y:100,
        opacity:0,
        duration:0.8,

    });
}
section1();

//==============section2 animations=============

function section2(){
    let sectionTwo=document.querySelector(".section2");
    let cursor=document.querySelector(".cursor");
    let body=document.querySelector("body");

    //animation when mouse enters section2 

    sectionTwo.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{
            height: "100px",
            width: "100px",
            innerHTML: "<i class='fa-solid fa-volume-high'></i>",
            fontSize: "25px",
            color: "black",
            margin: "20px",
            background: "white",
        });

        gsap.to(body, {
            background:"#0f0f0f",
            color:"white",
        });
    });
    // animation when mouse leaves section2
    sectionTwo.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{
            height: "18px",
            width: "18px",
            margin: 0,
            innerHTML: "",
        });
        
        gsap.to(body, {
            background:"white",
            color: "#0f0f0f",
        });
    });
}
section2();

//================section3 animations==================

function section3(){
    let cursor= document.querySelector(".cursor");
    let SectionThree= document.querySelector(".section3");

    // changing cursor color when wntering section 3

    SectionThree.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{
            background: "#0f0f0f",

        });
    });
}
section3();

//===============section4 animations=================

function section4(){
    let sectionFour= document.querySelector(".section4");
    let cursor=document.querySelector(".cursor");

    sectionFour.addEventListener("mouseenter",()=>{
        cursor.style.background ="#0f0f0f"
    });

    gsap.to(sectionFour,{
        background: "#0f0f0f",
        color: "white",
        scrollTrigger:{
            trigger: ".section4 .four .moving-text",
            start: "bottom center",
            end: "bottom center",
            scrub: 2,
            //markers: true,
        },
    });

    sectionFour.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            background:"white",
            scrollTrigger:{
                trigger: ".section4 .four .moving-text",
                start:"bottom center",
                end:"bottom center",
                scrub: 0.1,
            },
        });
    });
//==================games===================
let parentEl = document.querySelector(".bg");
let childEl= document.querySelectorAll(".first-game .first");
childEl.forEach((item) => {
    item.addEventListener("mouseenter",()=>{
        let ids = item.getAttribute("data-id");
        let bgEl = document.querySelector(`.id-${ids}`);

        //console.log(bgEl);

        parentEl.querySelectorAll('video').forEach((video)=>{
            video.style.display='none';
        });
        bgEl.style.display="block";

        gsap.to(cursor,{
            height:"100px",
            width:"100px",
            duration: 0.1,
            innerHTML: "<P>View Game</P>",
            fontSize:"15px",
            margin:"20px",
        });
    });

    item.addEventListener("mouseleave",()=>{
        let ids = item.getAttribute("data-id");
        let bgEl = document.querySelector(`.id-${ids}`);

        parentEl.querySelectorAll('video').forEach((video)=>{
            video.style.display='none';
        });
        bgEl.style.display="none";

        gsap.to(cursor,{
            
            height:"18px",
            width:"18px",
            duration: 0.1,
            innerHTML: "",
            margin: 0,
        });
    });
});
}
section4();
//===============section7 animations=============
function section7(){
    let cursor=document.querySelector(".cursor");
    let body=document.querySelector("body");
    let sectionSeven= document.querySelector(".section7");

    gsap.to(body, {
        background: "#0f0f0f",
        color: "white",
        scrollTrigger :{
            trigger: ".section6 .right",
            start: "bottom 60%",
            end: "bottom 40%",
            scrub: 1,

        },
    });
    sectionSeven.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            background: "white",
            duration: 0.1,
            scrollTrigger :{
                trigger: ".section6 .right",
                start: "bottom 60%",
                end: "bottom 40%",
                scrub: 1,

            }        
        });
    });
    
}
section7();

