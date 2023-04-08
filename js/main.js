const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnpopup=document.querySelector('.btnLogin-popup');
const close=document.querySelector('.icon-close');
const slides=document.querySelectorAll('.slide-container');
const clip=document.querySelectorAll('.clip');
let index=0;


function next(){
    slides[index].classList.remove('active');
    index=(index+1)%slides.length;
    slides[index].classList.add('active');

}
function prew(){
    slides[index].classList.remove('active');
    index=(index-1+slides.length) % slides.length;
    slides[index].classList.add('active');

}


registerLink.addEventListener('click',()=>{
wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });

    btnpopup.addEventListener('click',()=>{
        wrapper.style.display='block'
        });
        close.addEventListener('click',()=>{
            wrapper.style.display='none'
            });

   
let country=document.querySelector(".number-1")
let p=document.querySelectorAll(".time-content p")
let valueDisplay=document.querySelectorAll(".num");
let interval=5000;
valueDisplay.forEach((valueDisplay) =>{
    let startvalue=0;
    let endvalue=parseInt(valueDisplay.getAttribute("data-value"));
    let duraction=Math.floor(interval/endvalue);
    let counter=setInterval(function(){
        startvalue+=1;
        valueDisplay.textContent=startvalue;
        if(startvalue==endvalue){
            clearInterval(counter);
        }
    }, duraction);

})