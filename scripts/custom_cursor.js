let background = document.querySelector("main");
let cursor = document.querySelector(".cursor");

// background.addEventListener("mousemove", (dets)=>{
//     cursor.style.left = dets.pageX + "px";
//     cursor.style.top = dets.pageY + "px";

// })

document.addEventListener("mousemove", (dets)=>{
    let x = dets.pageX - cursor.offsetWidth / 2,
          y = dets.pageY - cursor.offsetHeight / 2;
    // cursor.setAttribute("style", "top:" + y + "px;" + "left:" + x + "px;", );

    const keyFrames = {
        transform: `translate(${x}px, ${y}px)`
    }
    cursor.animate(keyFrames,{
        duration: 800,
        fill: "forwards"
    })
})



