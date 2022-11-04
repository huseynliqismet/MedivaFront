const toggle=document.getElementById("toggledark")
const moon=document.getElementById("togglemoon")
const body=document.querySelector("body")
const blog=document.querySelectorAll(".blog-content")
const d=document.querySelectorAll("body p")
const client=document.querySelector(".client-area")
const clientbox=document.querySelector(".client-area .client-inner-box")
const h3=document.querySelectorAll("body h3")
const h2=document.querySelectorAll("body h2")
const title=document.querySelector(".title-4")
const form1=document.querySelector(".queries-form")
const form2=document.querySelector(".newsletter-area")
const ul=document.querySelectorAll("body ul")
const li=document.querySelectorAll("body li")
const at=document.querySelectorAll(".at")
const peter=document.querySelectorAll(".peter")
const area=document.querySelector(".copyright-area")
const num=document.querySelectorAll(".number")

toggle.addEventListener("click",function(){
    this.style.display="none"
    moon.style.display="block"
    body.style.backgroundColor="black"
    client.style.backgroundColor="black"
    clientbox.style.backgroundColor="black"
    title.style.backgroundColor="black"
    form1.style.backgroundColor="black"
    form2.style.backgroundColor="black"
    area.style.backgroundColor="black"

    for(let l=0;l<ul.length;l++){
        ul[l].style.color="white"
    }
    for (let index = 0; index < blog.length; index++) {
        
  blog[index].style.backgroundColor="black"
}
for(let i=0;i<d.length;i++){
    d[i].style.color="white"
}
for(let k=0;k<d.length;k++){
    h3[k].style.color="white"
}
for(let j=0;j<h2.length;j++){
    h2[j].style.color="white"
}
for(let q=0;q<li.length;q++){
    li[q].style.color="white"
}
for(let n=0;n<at.length;n++){
    at[n].style.color="white"
}
for(let y=0;y<peter.length;y++){
    peter[y].style.color="white"
}
for(let g=0;g<num.length;g++){
    num[g].style.color="white"
}






})
moon.addEventListener("click",function(){
    this.style.display="none"
    toggle.style.display="block"
    body.style.backgroundColor="white"
    client.style.backgroundColor="white"
    clientbox.style.backgroundColor="white"
    title.style.backgroundColor="white"
    form1.style.backgroundColor="white"
    form2.style.backgroundColor="white"

    for(let g=0;g<num.length;g++){
        num[g].style.color="black"
    }
    for(let y=0;y<peter.length;y++){
        peter[y].style.color="black"
    }
    for(let l=0;l<ul.length;l++){
        ul[l].style.color="black"
    }
    for (let index = 0; index < blog.length; index++) {
        
  blog[index].style.backgroundColor="white"
}
for(let i=0;i<d.length;i++){
    d[i].style.color="black"
}
for(let k=0;k<d.length;k++){
    h3[k].style.color="black"
}
for(let j=0;j<h2.length;j++){
    h2[j].style.color="black"
}
for(let q=0;q<li.length;q++){
    li[q].style.color="black"
}
for(let n=0;n<at.length;n++){
    at[n].style.color="black"
}

})






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






$('.owl-stage').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });