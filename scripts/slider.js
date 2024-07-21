let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let page5=document.querySelector('.page5');
let listHTML=document.querySelector('.page5 .list');

nextButton.onclick=function () {
    showSlider('next');
}
prevButton.onclick=function () {
    showSlider('prev');
}
let unAcceptClick;
const showSlider=(type)=>{
    nextButton.style.pointerEvents='none'
    prevButton.style.pointerEvents='none'
    page5.classList.remove('prev','next')
    let items=document.querySelectorAll('.page5 .list .item')
    if(type=='next'){
        listHTML.appendChild(items[0]);
        page5.classList.add('next')
    }
    else{
        let positionLast=items.length -1;
        listHTML.prepend(items[positionLast]);
        page5.classList.add('prev')
    }
    clearInterval(refreshpro)
    refreshpro=setInterval(()=>{
        nextButton.click()
    },2100)
    clearTimeout(unAcceptClick);
    unAcceptClick=setTimeout(() => {
    nextButton.style.pointerEvents='auto'
    prevButton.style.pointerEvents='auto'
    }, 1000);
}

let refreshpro=setInterval(()=>{
    nextButton.click()
},2100)

