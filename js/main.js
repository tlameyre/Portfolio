import cursor from './cursor';
import hoverMenu from './hoverMenu';

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
});

linkItems.forEach(item => {
  item.addEventListener("mouseleave", (e) => {
    TweenMax.to(item, 1, {
      transform: "translate(0px, 0px)"
    })
  });
});

const bannerTimeline = new TimelineMax({})

window.addEventListener("load", () => {
  bannerTimeline.staggerFrom('.hidetext', 1, { y: "100%"}, 0.3)
  console.log();
});

// const cursorImage = document.querySelector(".cursor")
// const overlays = document.querySelectorAll(".project-overlay")

// const moveCircle = (e) => {
//   TweenLite.to(cursorImage, 0.5, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     },
//     delay: 0.03
//   })
// }

// Array.from(document.querySelectorAll(".p-1")).forEach((item, i) => {
//   item.addEventListener("mouseenter", () => {
//     item.style.mixBlendMode = "overlay"
//     cursorImage.style.backgroundImage = `url(./images/1.jpeg)`
//   })
//   item.addEventListener("mouseout", () => {
//     item.style.mixBlendMode = "normal"
//   })
// })

// var flag = true

// Array.from(overlays).forEach((overlay) => {
//   overlay.addEventListener("mousemove", (e) => {
//     flag = true;
//     TweenLite.to(cursorImage, 0.3, { scale: 1, autoAlpha: 1})
//     moveCircle(e)
//   })

//   overlay.addEventListener("mouseout", (e) => {
//     flag = false;
//     TweenLite.to(cursorImage, 0.3, { scale: 0, autoAlpha: 1})
//   })
// })


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.test',
    // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
    // start: 'top bottom-=20%'
  }
})

tl.staggerTo('.project-list', 1, { opacity: 1}, 0.1, "<+=0.3")
tl.staggerTo('.project-title h1', 0.5, { opacity: 1}, 0.2, "<+=0.1")
tl.staggerTo('.project-title span', 0.5, { opacity: 1}, 0.2, "<+=0.1")

