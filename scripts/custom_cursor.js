// let background = document.querySelector("main");
// let cursor = document.querySelector(".cursor");

// // background.addEventListener("mousemove", (dets)=>{
// //     cursor.style.left = dets.pageX + "px";
// //     cursor.style.top = dets.pageY + "px";

// // })

// document.addEventListener("mousemove", (dets)=>{
//     let x = dets.pageX - cursor.offsetWidth / 2,
//           y = dets.pageY - cursor.offsetHeight / 2;
//     // cursor.setAttribute("style", "top:" + y + "px;" + "left:" + x + "px;", );

//     const keyFrames = {
//         transform: `translate(${x}px, ${y}px)`
//     }
//     cursor.animate(keyFrames,{
//         duration: 800,
//         fill: "forwards"
//     })
// })
var r = document.querySelector(':root');

const cursorDiv = document.querySelector(".cursor");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorAfter = document.querySelector(".cursor-after");
const interactableBigText = document.querySelectorAll("[interactable-big-text]");

window.addEventListener("mousemove", (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;
    const outlinPosY = e.clientY - cursorOutline.offsetHeight / 2;
    const outlinPosX = e.clientX - cursorOutline.offsetWidth / 2;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    gsap.to(cursorOutline, {
        left : `${outlinPosX}px`,
        top :`${outlinPosY}px`,
        duration: 1,
        ease: "power4.out"
    })
    gsap.to(cursorAfter, {
        left : `${outlinPosX}px`,
        top :`${outlinPosY}px`,
        duration: 1,
        ease: "power4.out"
    })
}
)
interactableBigText.forEach((interactable)=>{interactable.addEventListener("mouseover", (e)=>{
    gsap.to("interactable",{
        scale: 3,
        duration: .5,
    });
    let keyFrames = {
        transform: `scale(3)`
    }
    cursorOutline.animate(keyFrames,{
        duration: 800,
        fill: "forwards"
    })
    // r.style.setProperty('--cursor-outline-radius', '6vw');

})
})
interactableBigText.forEach((interactable)=>{interactable.addEventListener("mouseleave", (e)=>{
    // r.style.setProperty('--cursor-outline-radius', '2vw');
    let keyFrames = {
        transform: `scale(1)`
    }
    cursorOutline.animate(keyFrames,{
        duration: 800,
        fill: "forwards"
    })
})
})

function myFunction_set() {
  r.style.setProperty('--cursor-outline-radius', '6vw');
}