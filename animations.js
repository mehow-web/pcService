const sidebar = document.querySelector(".sidebar");
const tl = gsap.timeline({delay: 0.2});
tl.fromTo(sidebar, 0.8, {x:"-100%"}, {x: "0%"});

const real = document.querySelectorAll(".realization");
// width: calc(-(100%/3) - 10%);
let i = 0;
window.addEventListener("click", function(){
    while(i < real.length){
        if(real[i] == real[1]){
            tl.to(real[1], 0.5, {x: "-150%"});
        } else {
            tl.to(real[0], 0.5, {x: "150%"});
            tl.to(real[2], 0.5, {x: "150%"});
        }
        i++;
    }
});