"use strict";

const headings=document.querySelectorAll("h3");
let allimg=document.querySelectorAll(".sub");
let current=0;

allimg[current].style.flex="5";
headings[current].style.display="block";

for(let i=0;i<allimg.length;i++){
    allimg[i].addEventListener("mouseover",function(){
    if(i!=current)
    {
        allimg[i].style.flex="5";
    headings[i].style.display="block";
    allimg[current].style.flex="0.5";
    headings[current].style.display="none";
    current=i;
    }});
}