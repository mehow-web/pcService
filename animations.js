const sidebar = document.querySelector(".sidebar");
const tl = gsap.timeline({delay: 0.2});
tl.fromTo(sidebar, 0.8, {x:"-100%"}, {x: "0%"});

const buttons = document.querySelectorAll(".button");
const plates = document.querySelectorAll(".productplate");

function onFocus(){
    for(let i; i=0;i++){
        buttons[i].addEventListener("click", productplate.style.transfrom.tranlate = "scale(1.3)");
    }
    
};
