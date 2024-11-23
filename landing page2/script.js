const container =document.querySelector(".container");
const menuIcon =document.querySelector(".menu-Icon");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("navigate");
});