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

const nbProjects = [...document.querySelectorAll('.project')]
console.log(nbProjects.length);

for (let i = 0; i < nbProjects.length; i++) {
  // 1st PROJECT TIMELINE
  let projectTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.pj${i+1}`,
      // markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
      start: 'top bottom-=20%'
    }
  })
  projectTimeline.to(`.pj${i+1}`, { duration: 1, opacity: 1, scale: 1, ease: "ease.in" })
  projectTimeline.to(`.ovr${i+1}`, { duration: 1, x: '100%', ease: "ease.in" }, "<")
}


// SECTION TITLE ANIMATION

const menuItems = [...document.querySelectorAll('.section-title')]

menuItems.forEach(item => {
  let word = item.children[0].children[0].innerText.split('')
  item.children[0].innerHTML = ''
  word.forEach((letter,index) => {
    item.children[0].innerHTML += `<span style="--index:${index};">${letter}</span>`
  })
  let cloneDiv = item.children[0].cloneNode(true)
  cloneDiv.style.position = 'absolute'
  cloneDiv.style.left = '0'
  cloneDiv.style.top = '0'
  cloneDiv.style.display = 'flex'
  item.appendChild(cloneDiv)

})

// LINKS ANIMATION

let linkTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '#contact',
    markers: {startColor: "green", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20},
    start: 'top bottom-=50%'
  }
})

linkTimeLine.to('.link', 1, { transform: 'rotate(300deg)'})
