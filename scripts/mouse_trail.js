const canvas = document.createElement("canvas");
const mouseTrailSection = document.querySelector(".section3");
const canvasContainer = document.querySelector(".canvas-container")
canvasContainer.appendChild(canvas)
const ctx = canvas.getContext("2d")
function resizeCanvas() {
    canvas.width = window.innerWidth
    // canvas.height = Math.max(
    //     document.body.scrollHeight,
    //     document.body.offsetHeight,
    //     document.documentElement.clientHeight,
    //     document.documentElement.scrollHeight,
    //     document.documentElement.offsetHeight
    // );
    canvas.height = mouseTrailSection.getBoundingClientRect().height;
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
}

resizeCanvas();

let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;

let lastX = null;
let lastY = null;
let hasMouseMoved = false;


ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(255,255,255,0.7)";
ctx.lineCap = "round"
ctx.filter = "blur(12px)"

function drawLine(newX, newY) {
    if (lastX !== null && lastY !== null) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(newX, newY);
        ctx.stroke();
    }
    lastX = newX;
    lastY = newY;
}

mouseTrailSection.addEventListener("mousemove", function (event) {
    console.log(event)
    if (!hasMouseMoved) {
        lastX = event.x;
        lastY = event.y;
        console.log(event.clientX)

        hasMouseMoved = true;
    } else {
        xMousePos = event.x;
        yMousePos = event.y;
        drawLine(xMousePos, yMousePos);
    }
});

// window.addEventListener("scroll", function () {
//     const xScrollDelta = window.scrollX - lastScrolledLeft;
//     const yScrollDelta = window.scrollY - lastScrolledTop;
//     if (xScrollDelta !== 0 || yScrollDelta !== 0) {
//         xMousePos += xScrollDelta;
//         yMousePos += yScrollDelta;
//         drawLine(xMousePos, yMousePos);

//     }
//     lastScrolledLeft = window.scrollY;
//     lastScrolledTop = window.scrollX;
//     // console.log(xMousePos,yMousePos,lastScrolledLeft,lastScrolledTop)
// });
document.addEventListener("scroll", () => {
    const xScrollDelta = window.scrollX - lastScrolledLeft;
    const yScrollDelta = window.scrollY - lastScrolledTop;
    lastScrolledLeft = window.scrollX;
    console.log(window.scrollX)
    lastScrolledTop = window.scrollY;
  
    if (xScrollDelta !== 0 || yScrollDelta !== 0) {
      lastX += xScrollDelta;
      lastY += yScrollDelta;
      drawLine(lastX, lastY);
    }
  });

window.addEventListener('resize', resizeCanvas);