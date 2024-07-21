gsap.to("#section2 .horizontal", {
    transform: "translateX(-90%)",
    scrollTrigger: {
      trigger: '#section2',
      scroller: "body",
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: true,
    }
  })