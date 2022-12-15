gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.to(".column", {
    yPercent: pos => pos*-15-15,
    scrollTrigger: {
        trigger: ".parallax-trigger",
        start: "top bottom",
        end: "bottom top",
        scrub: true, 
    },
    yoyo: true,
});
gsap.fromTo(".column",{
    opacity: 0,
    filter: 'grayscale(100%)'
},
{
opacity: 1,
filter: 'grayscale(0%)',
scrollTrigger: {
    trigger: "header",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true, 
},
yoyo: true,
});
gsap.fromTo(".column",{
    opacity: 1,
    filter: 'grayscale(0%)'
},
{
opacity: 0,
filter: 'grayscale(100%)',
scrollTrigger: {
    trigger: ".parallax-trigger",
    start: "bottom center",
    end: "bottom top",
    scrub: true, 
},
yoyo: true,
});
gsap.to(".info-left", {
    startAt: {
        scale: 0.8,
    },
    scale: 1.1,
    scrollTrigger: {
        trigger: ".info-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});
gsap.to(".info-right-text", {
    scrollTrigger: {
        trigger: ".info-section",
        start: "top top",
        end: "bottom 60%",
        scrub: true,
        pin: ".info-right-text"
    }
})
gsap.fromTo(".clients-wrapper", {
    scaleX: 0.5,
},
{
    scaleX: 1,
    scrollTrigger: {
        trigger: ".clients-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
})