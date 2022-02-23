import cursor from './cursor';
import hoverMenu from './hoverMenu';
import project from './projects';

const linkItems = document.querySelectorAll("nav ul li a");
linkItems.forEach(item => {
  item.addEventListener("mousemove", (e) => {
    const position = item.getBoundingClientRect();
    const xLink = e.pageX - position.left - position.width/2;
    const yLink = e.pageY - position.top - position.height/2;
    TweenMax.to(item, 1, {
      transform: "translate(" + xLink * 0.5 + "px," + yLink * 0.5 + "px)"
    })
  });

  item.addEventListener("mouseleave", (e) => {
    TweenMax.to(item, 1, {
      transform: "translate(0px, 0px)"
    })
  });
});

// BANNER REVEAL ANIMATION

const bannerTimeline = new TimelineMax({})

window.addEventListener("load", () => {
  bannerTimeline.staggerFrom('.hidetext', 1, { y: "100%"}, 0.3)
  console.log();
})

// DESCRIPTION TEXT REVEAL ANIMATION

const textrev = gsap.timeline({
  scrollTrigger: {
    trigger: '.description',
    // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=20%'
  }
})

textrev.from(".line span", 1.8, {
  y: 200,
  ease: "power4.out",
  delay: 0,
  skewY: 10,
  stagger: {
    amount: 0.8
  }
})

// CURSUS LINE REVEAL ANIMATION

let cursusTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.cursus-container',
    // markers: {startColor: "green", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=20%'
  }
})

cursusTimeLine.staggerTo('.school-list', 1, { opacity: 1}, 0.1, "<+=0.3")
cursusTimeLine.staggerTo('.school-title h1', 0.5, { opacity: 1}, 0.2, "<+=0.1")
cursusTimeLine.staggerTo('.school-title span', 0.5, { opacity: 1}, 0.2, "<+=0.1")

// PROJECT LINE REVEAL ANIMATION

// 1st PROJECT TIMELINE
let project1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.pj1',
    markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=20%'
  }
})

project1Timeline.to('.pj1', { duration: 1, opacity: 1, ease: "ease.in" })
project1Timeline.to('.ovr1', { duration: 1, x: '100%', ease: "ease.in" }, "<")

// 2nd PROJECT TIMELINE
let project2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.pj2',
    markers: {startColor: "blue", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=20%'
  }
})

project2Timeline.to('.pj2', { duration: 1, opacity: 1, ease: "ease.in" })
project2Timeline.to('.ovr2', { duration: 1, x: '100%', ease: "ease.in" }, "<")

// 3rd PROJECT TIMELINE
let project3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.pj3',
    markers: {startColor: "blue", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=20%'
  }
})

project3Timeline.to('.pj3', { duration: 1, opacity: 1, ease: "ease.in" })
project3Timeline.to('.ovr3', { duration: 1, x: '100%', ease: "ease.in" }, "<")


const title = document.querySelector('.title')

title.addEventListener('mouseenter', () => {
  const topText = title.childNodes[1]
  const bottomText = title.childNodes[3]
  console.log(bottomText);
  topText.style.transform = 'translateY(-20px) scaleY(0)'
  bottomText.style.transform = 'translateY(0px) scaleY(1)'
})

title.addEventListener('mouseleave', () => {
  const topText = title.childNodes[1]
  const bottomText = title.childNodes[3]
  topText.style.transform = 'translateY(0px) scaleY(1)'
  bottomText.style.transform = 'translateY(20px) scaleY(0)'
})

console.log(title);
