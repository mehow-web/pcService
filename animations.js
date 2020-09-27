const sidebar = document.querySelector(".sidebar");
const tl = gsap.timeline({delay: 0.2});
tl.fromTo(sidebar, 0.8, {x:"-100%"}, {x: "0%"});