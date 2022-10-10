const skillsEl = document.querySelector('.skills');
const expEl = document.querySelector('.exp');
const educEl = document.querySelector('.educ');
const linksEl = document.querySelectorAll('.links');
const linksContEl = document.querySelectorAll('.link-cont');
// const studyEl = document.querySelector('.study')
open()
function open(e){
    for(let i=0; i<linksEl.length; i++){
        linksEl[i].addEventListener('click',(e)=>{
    // console.log(linksEl[i])
    for(let i=0; i<linksEl.length; i++){
        linksEl[i].classList.remove('active-link') 
        }
    for(let i=0; i<linksContEl.length; i++){
        linksContEl[i].classList.remove('active-desc') 
        }
        e.target.classList.add('active-link');
        linksContEl[i].classList.add('active-desc') 
    });
    }
    
}

 portfolio
 const playEl = document.querySelectorAll('.bi-play-btn');
 const pauseEl = document.querySelectorAll('.bi-pause-btn');
 const fullEl = document.querySelectorAll('.bi-fullscreen');
 const videoEl = document.querySelectorAll('video')

 for(let i=0; i<videoEl.length; i++){
     playEl[i].addEventListener('click',()=>{
     videoEl[i].play()
 });
     pauseEl[i].addEventListener('click',(e)=>{
     videoEl[i].pause()
 });
     fullEl[i].addEventListener('click',()=>{
         videoEl[i].requestFullscreen()
     });
 }

// gsap
gsap.registerPlugin(ScrollTrigger);
// let yoyo = gsap.timeline({repeat:2, yoyo:true})
// yoyo.to(".logos", {duration:3, x:130})

gsap.from(".skill", {scrollTrigger:".skill", duration:2, opacity:0, y:150, stagger: 0.30, ease: "bounce.out" })
