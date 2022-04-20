"use strict"

// ----- jQuerry version ------

const figure = $(".myfigure");
const form = $(".form");
const select = $(".form-select");
const color = $(".form-control-color");


select.change(() => {
    figure.fadeOut(0,1);
    if (select.val() == "square") {
        figure.removeClass().addClass("square");
    } else if (select.val() == "rectangle") {
        figure.removeClass().addClass("rectangle");
    } else if (select.val() == "circle") {
        figure.removeClass().addClass("circle");
    } else{
        figure.removeClass();
    }
    figure.fadeIn(1000);
})


color.on('input', function() { figure.css("background-color", color.val()); });



// ----- Vanilla JS Version -----

// const figure = document.querySelector(".myfigure");
// const form = document.querySelector(".form");
// const select = document.querySelector(".form-select");
// const color = document.querySelector(".form-control-color");


// select.addEventListener('change', e=>{
    
//     if (e.target.value == "square") {
//         figure.classList.remove("triangle");
//         figure.classList.remove("circle");
//         figure.classList.add("square");
//     } else if (e.target.value == "triangle") {
//         figure.classList.remove("square");
//         figure.classList.remove("circle");
//         figure.classList.add("triangle");
//         figure.style.backgroundColor = "#fff";
//     } else if (e.target.value == "circle") {
//         figure.classList.remove("triangle");
//         figure.classList.remove("square");
//         figure.classList.add("circle");
//     } else{
//         figure.classList.remove("triangle");
//         figure.classList.remove("circle");
//         figure.classList.remove("square");
//     }
// })


// color.addEventListener('input', e=>{

//     const triangle = document.querySelector(".triangle");

//     if (figure.className == "myfigure triangle"){
//         triangle.style.borderBottom = `200px solid ${e.target.value}`;
//         figure.style.backgroundColor = "#fff";
//     } else{
//         figure.style.backgroundColor = e.target.value;
//     }
// })