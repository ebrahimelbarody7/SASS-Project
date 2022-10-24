let menu=document.querySelector(".menu");
let textUl=document.querySelector(".text ul");

menu.onclick=function(){
    textUl.classList.toggle("active");
}