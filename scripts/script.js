const tl = gsap.timeline();

tl.to("#section2 .horizontal", {
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