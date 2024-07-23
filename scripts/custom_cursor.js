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
const cursorDiv = document.querySelector(".cursor");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

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
}
)

