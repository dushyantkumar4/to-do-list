let div = document.querySelector(".box");
let ul=document.querySelector(".ul");
let inp=document.querySelector(".inp");
let add=document.querySelector(".add");
let btn=document.querySelector(".btn");
let li=document.querySelector(".li");



add.addEventListener("click",()=>{
    let newLi=document.createElement("li");
    newLi.innerText=inp.value;
    newLi.classList.add("li")
    let newBtn=document.createElement("button");
    newBtn.innerText="X";
    newBtn.classList.add("btn");
    newLi.appendChild(newBtn);
    ul.appendChild(newLi);
   
});

btn.addEventListener("click",(event)=>{
    event.target;
    ul.removeChild(li);
});