const tl3 = gsap.timeline();

tl3.to("#section2 .horizontal", {
    transform: "translateX(-70%)",
    scrollTrigger: {
      trigger: '#section2',
      scroller: "body",
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: true,
    }
  })
// gsap.from(".aboutus-content"),
//   {
//   y: 120,
//   stagger: 0.2,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".about_us",
//     scroller: "main",
//     start: "top 45%",
//     end: "top 37%",
//     markers: true,
//     scrub: 2,
//   }
// }
const tl = gsap.timeline()

tl.from(".nav_element",{
  opacity: 0.2,
  y: -120,
  duration: .7,
  stagger: 0.1,
  ease: "back.out"
})
tl.from(".hero h1",{
  opacity: 0,
  y: 120,
  duration: 1,
}, "-=0.5")
  // tl.to("#section2 .horizontal2", {
  //   transform: "translateX(-90%)",
  //   scrollTrigger: {
  //     trigger: '#section2',
  //     scroller: "body",
  //     start: "top 0%",
  //     end: "top -100%",
  //     scrub: 2,
  //     pin: true,
  //   }
//   // })
//   const quotes = document.querySelectorAll(".quote");

// function setupSplits() {
//   quotes.forEach(quote => {
//     // Reset if needed
//     if(quote.anim) {
//       quote.anim.progress(1).kill();
//       quote.split.revert();
//     }

//     quote.split = new SplitText(quote, { 
//       type: "lines,words,chars",
//       linesClass: "split-line"
//     });

//     // Set up the anim
//     quote.anim = gsap.from(quote.split.chars, {
//       scrollTrigger: {
//         trigger: quote,
//         toggleActions: "restart pause resume reverse",
//         start: "left 50%",                // <--------
//         containerAnimation: scrollTween,  // <--------
//         markers: true
//       },
//       duration: .1, 
//       ease: "circ.out", 
//       y: 80, 
//       stagger: 0.05
//     });
//   });
// }

// ScrollTrigger.addEventListener("refresh", setupSplits);
// setupSplits();