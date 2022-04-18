"use strict"

// ----- jQuerry version ------

const figure = $(".myfigure");
const form = $(".form");
const select = $(".form-select");
const color = $(".form-control-color");


select.change(e=>{

    if (e.target.value == "square") {
        figure.fadeOut(0,1);
        figure.removeClass("triangle");
        figure.removeClass("circle");
        figure.addClass("square");
        figure.fadeIn(3000);
    } else if (e.target.value == "triangle") {
        figure.fadeOut(0,1);
        figure.removeClass("square");
        figure.removeClass("circle");
        figure.addClass("triangle");
        figure.css("background-color", "white");
        figure.fadeIn(3000);
    } else if (e.target.value == "circle") {
        figure.fadeOut(0,1);
        figure.removeClass("triangle");
        figure.removeClass("square");
        figure.addClass("circle");
        figure.fadeIn(3000);
    } else{
        figure.removeClass("triangle");
        figure.removeClass("circle");
        figure.removeClass("square");
    }
})

color.change(e=>{
    const triangle = $(".triangle");
    figure.fadeOut(0,1);

    if (figure.hasClass("myfigure triangle")){
        figure.css("background-color", "white");
        triangle.css("border-bottom", `200px solid ${e.target.value}`);
        figure.fadeToggle(2000);
    } else{
        figure.fadeToggle(2000);
        figure.css("background-color", e.target.value);
        figure.css("border-bottom", `200px solid ${e.target.value}`);
    }
})


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


// color.addEventListener('change', e=>{

//     const triangle = document.querySelector(".triangle");

//     if (figure.className == "myfigure triangle"){
//         triangle.style.borderBottom = `200px solid ${e.target.value}`;
//         figure.style.backgroundColor = "#fff";
//     } else{
//         figure.style.backgroundColor = e.target.value;
//     }
// })
