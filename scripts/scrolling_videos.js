// const lenis2 = new Lenis()
// lenis2.on('scroll', ScrollTrigger.update);
// gsap.ticker.add((time) => {
//     lenis2.raf(time * 1000)
// });

// gsap.ticker.lagSmoothing(0);


gsap.registerPlugin(ScrollTrigger);
function cnvs() {

  const canvas = document.querySelector("canvas#first");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  ../assets/images/scrolling_videos/video1/__000.jpg
  ../assets/images/scrolling_videos/video1/__001.jpg
  ../assets/images/scrolling_videos/video1/__002.jpg
  ../assets/images/scrolling_videos/video1/__003.jpg
  ../assets/images/scrolling_videos/video1/__004.jpg
  ../assets/images/scrolling_videos/video1/__005.jpg
  ../assets/images/scrolling_videos/video1/__006.jpg
  ../assets/images/scrolling_videos/video1/__007.jpg
  ../assets/images/scrolling_videos/video1/__008.jpg
  ../assets/images/scrolling_videos/video1/__009.jpg
  ../assets/images/scrolling_videos/video1/__010.jpg
  ../assets/images/scrolling_videos/video1/__011.jpg
  ../assets/images/scrolling_videos/video1/__012.jpg
  ../assets/images/scrolling_videos/video1/__013.jpg
  ../assets/images/scrolling_videos/video1/__014.jpg
  ../assets/images/scrolling_videos/video1/__015.jpg
  ../assets/images/scrolling_videos/video1/__016.jpg
  ../assets/images/scrolling_videos/video1/__017.jpg
  ../assets/images/scrolling_videos/video1/__018.jpg
  ../assets/images/scrolling_videos/video1/__019.jpg
  ../assets/images/scrolling_videos/video1/__020.jpg
  ../assets/images/scrolling_videos/video1/__021.jpg
  ../assets/images/scrolling_videos/video1/__022.jpg
  ../assets/images/scrolling_videos/video1/__023.jpg
  ../assets/images/scrolling_videos/video1/__024.jpg
  ../assets/images/scrolling_videos/video1/__025.jpg
  ../assets/images/scrolling_videos/video1/__026.jpg
  ../assets/images/scrolling_videos/video1/__027.jpg
  ../assets/images/scrolling_videos/video1/__028.jpg
  ../assets/images/scrolling_videos/video1/__029.jpg
  ../assets/images/scrolling_videos/video1/__030.jpg
  ../assets/images/scrolling_videos/video1/__031.jpg
  ../assets/images/scrolling_videos/video1/__032.jpg
  ../assets/images/scrolling_videos/video1/__033.jpg
  ../assets/images/scrolling_videos/video1/__034.jpg
  ../assets/images/scrolling_videos/video1/__035.jpg
  ../assets/images/scrolling_videos/video1/__036.jpg
  ../assets/images/scrolling_videos/video1/__037.jpg
  ../assets/images/scrolling_videos/video1/__038.jpg
  ../assets/images/scrolling_videos/video1/__039.jpg
  ../assets/images/scrolling_videos/video1/__040.jpg
  ../assets/images/scrolling_videos/video1/__041.jpg
  ../assets/images/scrolling_videos/video1/__042.jpg
  ../assets/images/scrolling_videos/video1/__043.jpg
  ../assets/images/scrolling_videos/video1/__044.jpg
  ../assets/images/scrolling_videos/video1/__045.jpg
  ../assets/images/scrolling_videos/video1/__046.jpg
  ../assets/images/scrolling_videos/video1/__047.jpg
  ../assets/images/scrolling_videos/video1/__048.jpg
  ../assets/images/scrolling_videos/video1/__049.jpg
  ../assets/images/scrolling_videos/video1/__050.jpg
  ../assets/images/scrolling_videos/video1/__051.jpg
  ../assets/images/scrolling_videos/video1/__052.jpg
  ../assets/images/scrolling_videos/video1/__053.jpg
  ../assets/images/scrolling_videos/video1/__054.jpg
  ../assets/images/scrolling_videos/video1/__055.jpg
  ../assets/images/scrolling_videos/video1/__056.jpg
  ../assets/images/scrolling_videos/video1/__057.jpg
  ../assets/images/scrolling_videos/video1/__058.jpg
  ../assets/images/scrolling_videos/video1/__059.jpg
  ../assets/images/scrolling_videos/video1/__060.jpg
  ../assets/images/scrolling_videos/video1/__061.jpg
  ../assets/images/scrolling_videos/video1/__062.jpg
  ../assets/images/scrolling_videos/video1/__063.jpg
  ../assets/images/scrolling_videos/video1/__064.jpg
  ../assets/images/scrolling_videos/video1/__065.jpg
  ../assets/images/scrolling_videos/video1/__066.jpg
  ../assets/images/scrolling_videos/video1/__067.jpg
  ../assets/images/scrolling_videos/video1/__068.jpg
  ../assets/images/scrolling_videos/video1/__069.jpg
  ../assets/images/scrolling_videos/video1/__070.jpg
  ../assets/images/scrolling_videos/video1/__071.jpg
  ../assets/images/scrolling_videos/video1/__072.jpg
  ../assets/images/scrolling_videos/video1/__073.jpg
  ../assets/images/scrolling_videos/video1/__074.jpg
  ../assets/images/scrolling_videos/video1/__075.jpg
  ../assets/images/scrolling_videos/video1/__076.jpg
  ../assets/images/scrolling_videos/video1/__077.jpg
  ../assets/images/scrolling_videos/video1/__078.jpg
  ../assets/images/scrolling_videos/video1/__079.jpg
  ../assets/images/scrolling_videos/video1/__080.jpg
  ../assets/images/scrolling_videos/video1/__081.jpg
  ../assets/images/scrolling_videos/video1/__082.jpg
  ../assets/images/scrolling_videos/video1/__083.jpg
  ../assets/images/scrolling_videos/video1/__084.jpg
  ../assets/images/scrolling_videos/video1/__085.jpg
  ../assets/images/scrolling_videos/video1/__086.jpg
  ../assets/images/scrolling_videos/video1/__087.jpg
  ../assets/images/scrolling_videos/video1/__088.jpg
  ../assets/images/scrolling_videos/video1/__089.jpg
  ../assets/images/scrolling_videos/video1/__090.jpg
  ../assets/images/scrolling_videos/video1/__091.jpg
  ../assets/images/scrolling_videos/video1/__092.jpg
  ../assets/images/scrolling_videos/video1/__093.jpg
  ../assets/images/scrolling_videos/video1/__094.jpg
  ../assets/images/scrolling_videos/video1/__095.jpg
  ../assets/images/scrolling_videos/video1/__096.jpg
  ../assets/images/scrolling_videos/video1/__097.jpg
  ../assets/images/scrolling_videos/video1/__098.jpg
  ../assets/images/scrolling_videos/video1/__099.jpg
  ../assets/images/scrolling_videos/video1/__100.jpg
  ../assets/images/scrolling_videos/video1/__101.jpg
  ../assets/images/scrolling_videos/video1/__102.jpg
  ../assets/images/scrolling_videos/video1/__103.jpg
  ../assets/images/scrolling_videos/video1/__104.jpg
  ../assets/images/scrolling_videos/video1/__105.jpg
  ../assets/images/scrolling_videos/video1/__106.jpg
  ../assets/images/scrolling_videos/video1/__107.jpg
  ../assets/images/scrolling_videos/video1/__108.jpg
  ../assets/images/scrolling_videos/video1/__109.jpg
  ../assets/images/scrolling_videos/video1/__110.jpg
  ../assets/images/scrolling_videos/video1/__111.jpg
  ../assets/images/scrolling_videos/video1/__112.jpg
  ../assets/images/scrolling_videos/video1/__113.jpg
  ../assets/images/scrolling_videos/video1/__114.jpg
  ../assets/images/scrolling_videos/video1/__115.jpg
  ../assets/images/scrolling_videos/video1/__116.jpg
  ../assets/images/scrolling_videos/video1/__117.jpg
  ../assets/images/scrolling_videos/video1/__118.jpg
  ../assets/images/scrolling_videos/video1/__119.jpg
  ../assets/images/scrolling_videos/video1/__120.jpg
  ../assets/images/scrolling_videos/video1/__121.jpg
  ../assets/images/scrolling_videos/video1/__122.jpg
  ../assets/images/scrolling_videos/video1/__123.jpg
  ../assets/images/scrolling_videos/video1/__124.jpg
  ../assets/images/scrolling_videos/video1/__125.jpg
  ../assets/images/scrolling_videos/video1/__126.jpg
  ../assets/images/scrolling_videos/video1/__127.jpg
  ../assets/images/scrolling_videos/video1/__128.jpg
  ../assets/images/scrolling_videos/video1/__129.jpg
  ../assets/images/scrolling_videos/video1/__130.jpg
  ../assets/images/scrolling_videos/video1/__131.jpg
  ../assets/images/scrolling_videos/video1/__132.jpg
  ../assets/images/scrolling_videos/video1/__133.jpg
  ../assets/images/scrolling_videos/video1/__134.jpg
  ../assets/images/scrolling_videos/video1/__135.jpg
  ../assets/images/scrolling_videos/video1/__136.jpg
  ../assets/images/scrolling_videos/video1/__137.jpg
  ../assets/images/scrolling_videos/video1/__138.jpg
  ../assets/images/scrolling_videos/video1/__139.jpg
  ../assets/images/scrolling_videos/video1/__140.jpg
  ../assets/images/scrolling_videos/video1/__141.jpg
  ../assets/images/scrolling_videos/video1/__142.jpg
  ../assets/images/scrolling_videos/video1/__143.jpg
  ../assets/images/scrolling_videos/video1/__144.jpg
  ../assets/images/scrolling_videos/video1/__145.jpg
  ../assets/images/scrolling_videos/video1/__146.jpg
  ../assets/images/scrolling_videos/video1/__147.jpg
  ../assets/images/scrolling_videos/video1/__148.jpg
  ../assets/images/scrolling_videos/video1/__149.jpg
  ../assets/images/scrolling_videos/video1/__150.jpg
  ../assets/images/scrolling_videos/video1/__151.jpg
  ../assets/images/scrolling_videos/video1/__152.jpg
  ../assets/images/scrolling_videos/video1/__153.jpg
  ../assets/images/scrolling_videos/video1/__154.jpg
  ../assets/images/scrolling_videos/video1/__155.jpg
  ../assets/images/scrolling_videos/video1/__156.jpg
  ../assets/images/scrolling_videos/video1/__157.jpg
  ../assets/images/scrolling_videos/video1/__158.jpg
  ../assets/images/scrolling_videos/video1/__159.jpg
  ../assets/images/scrolling_videos/video1/__160.jpg
  ../assets/images/scrolling_videos/video1/__161.jpg
  ../assets/images/scrolling_videos/video1/__162.jpg
  ../assets/images/scrolling_videos/video1/__163.jpg
  ../assets/images/scrolling_videos/video1/__164.jpg
  ../assets/images/scrolling_videos/video1/__165.jpg
  ../assets/images/scrolling_videos/video1/__166.jpg
  ../assets/images/scrolling_videos/video1/__167.jpg
  ../assets/images/scrolling_videos/video1/__168.jpg
  ../assets/images/scrolling_videos/video1/__169.jpg
  ../assets/images/scrolling_videos/video1/__170.jpg
  ../assets/images/scrolling_videos/video1/__171.jpg
  ../assets/images/scrolling_videos/video1/__172.jpg
  ../assets/images/scrolling_videos/video1/__173.jpg
  ../assets/images/scrolling_videos/video1/__174.jpg
  ../assets/images/scrolling_videos/video1/__175.jpg
  ../assets/images/scrolling_videos/video1/__176.jpg
  ../assets/images/scrolling_videos/video1/__177.jpg
  ../assets/images/scrolling_videos/video1/__178.jpg
  ../assets/images/scrolling_videos/video1/__179.jpg
  ../assets/images/scrolling_videos/video1/__180.jpg
  ../assets/images/scrolling_videos/video1/__181.jpg
  ../assets/images/scrolling_videos/video1/__182.jpg
  ../assets/images/scrolling_videos/video1/__183.jpg
  ../assets/images/scrolling_videos/video1/__184.jpg
  ../assets/images/scrolling_videos/video1/__185.jpg
  ../assets/images/scrolling_videos/video1/__186.jpg
  ../assets/images/scrolling_videos/video1/__187.jpg
  ../assets/images/scrolling_videos/video1/__188.jpg
  ../assets/images/scrolling_videos/video1/__189.jpg
  ../assets/images/scrolling_videos/video1/__190.jpg
  `;
    return data.split("\n")[index];
  }

  const frameCount = 190;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page`,
      start: `top top`,
      end: `500% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }


  ScrollTrigger.create({
    trigger: "#page",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `500% top`,
    markers: true
  });


}
// gsap.to("#page1", {
//   scrollTrigger: { 
//     trigger: `#page`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `body`
//   }
// })
// gsap.to("#page2", {
//   scrollTrigger: {
//     trigger: `#main`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `body`
//   }
// })
// gsap.to("#page3", {
//   scrollTrigger: {
//     trigger: `#page3`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `body`
//   }
// })

cnvs()


// const canvas = document.querySelector("canvas#second");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `./WhatsApp Video 2024-07-15 at 10.58.11 AM_000.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_001.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_002.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_003.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_004.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_005.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_006.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_007.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_008.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_009.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_10.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_011.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_012.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_013.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_014.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_015.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_016.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_017.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_018.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_019.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_020.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_021.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_022.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_023.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_024.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_025.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_026.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_027.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_028.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_029.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_030.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_031.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_032.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_033.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_034.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_035.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_036.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_037.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_038.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_039.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_040.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_041.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_042.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_043.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_044.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_045.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_046.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_047.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_048.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_049.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_050.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_051.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_052.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_053.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_054.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_055.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_056.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_057.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_058.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_059.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_060.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_061.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_062.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_063.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_064.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_065.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_066.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_067.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_068.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_069.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_070.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_071.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_072.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_073.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_074.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_075.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_076.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_077.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_078.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_079.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_080.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_081.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_082.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_083.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_084.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_085.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_086.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_087.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_088.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_089.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_090.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_091.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_092.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_093.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_094.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_095.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_096.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_097.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_098.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_099.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_100.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_101.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_102.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_103.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_104.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_105.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_106.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_107.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_108.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_109.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_110.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_111.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_112.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_113.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_114.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_115.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_116.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_117.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_118.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_119.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_120.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_121.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_122.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_123.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_124.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_125.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_126.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_127.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_128.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_129.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_130.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_131.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_132.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_133.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_134.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_135.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_136.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_137.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_138.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_139.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_140.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_141.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_142.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_143.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_144.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_145.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_146.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_147.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_148.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_149.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_150.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_151.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_152.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_153.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_154.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_155.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_156.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_157.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_158.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_159.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_160.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_161.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_162.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_163.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_164.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_165.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_166.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_167.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_168.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_169.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_170.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_171.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_172.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_173.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_174.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_175.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_176.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_177.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_178.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_179.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_180.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_181.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_182.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_183.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_184.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_185.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_186.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_187.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_188.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_189.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_190.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_191.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_192.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_193.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_194.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_195.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_196.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_197.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_198.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_199.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_200.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_201.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_202.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_203.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_204.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_205.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_206.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_207.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_208.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_209.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_210.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_211.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_212.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_213.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_214.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_215.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_216.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_217.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_218.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_219.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_220.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_221.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_222.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_223.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_224.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_225.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_226.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_227.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_228.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_229.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_230.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_231.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_232.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_233.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_234.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_235.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_236.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_237.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_238.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_239.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_240.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_241.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_242.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_243.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_244.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_245.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_246.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_247.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_248.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_249.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_250.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_251.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_252.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_253.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_254.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_255.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_256.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_257.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_258.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_259.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_260.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_261.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_262.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_263.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_264.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_265.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_266.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_267.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_268.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_269.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_270.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_271.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_272.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_273.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_274.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_275.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_276.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_277.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_278.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_279.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_280.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_281.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_282.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_283.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_284.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_285.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_286.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_287.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_288.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_289.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_290.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_291.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_292.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_293.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_294.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_295.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_296.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_297.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_298.jpg
// ./WhatsApp Video 2024-07-15 at 10.58.11 AM_299.jpg
// `;
//   return data.split("\n")[index];
// }

// const frameCount = 300;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: 0.15,
//     trigger: `#page>canvas`,
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }


// ScrollTrigger.create({
//   trigger: "canvas",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
//   start: `top top`,
//   end: `600% top`,
// });
