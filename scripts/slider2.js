let nextButton2 = document.getElementById("next2");
let prevButton2 = document.getElementById("prev2");
let page6 = document.querySelector(".page6");
let listHTML2 = document.querySelector(".page6 .list");

nextButton2.onclick = function () {
    showSlider2("next");
};
prevButton2.onclick = function () {
    showSlider2("prev");
};
let unAcceptClick2;
const showSlider2 = (type) => {
    nextButton2.style.pointerEvents = "none";
    prevButton2.style.pointerEvents = "none";
    page6.classList.remove("prev", "next");
    let items = document.querySelectorAll(".page6 .list .item");
    if (type == "next") {
        listHTML2.appendChild(items[0]);
        page6.classList.add("next");
    } else {
        let positionLast = items.length - 1;
        listHTML2.prepend(items[positionLast]);
        page6.classList.add("prev");
    }
    clearInterval(refreshpro2);
    refreshpro2 = setInterval(() => {
        nextButton2.click();
    }, 2100);
    clearTimeout(unAcceptClick2);
    unAcceptClick2 = setTimeout(() => {
        nextButton2.style.pointerEvents = "auto";
        prevButton2.style.pointerEvents = "auto";
    }, 1000);
};

let refreshpro2 = setInterval(() => {
    nextButton2.click();
}, 2100);
