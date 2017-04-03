document.addEventListener("DOMContentLoaded", function(){

    var next = document.querySelector(".right_indicator");
    var prev = document.querySelector(".left_indicator");
    var pictures = document.querySelectorAll(".slider_picture img");



    var count = 0;
    next.addEventListener("click", function(){
        console.log("click");
        pictures[count].classList.add("invisible");
        count++
        if(count>=pictures.length){
            count=0;
        }
        pictures[count].classList.remove("invisible");
    })


    prev.addEventListener("click", function(){
        console.log("click");

        pictures[count].classList.add("invisible");
        count--;
        if(count<0){
            count = pictures.length-1;
        }
        pictures[count].classList.remove("invisible");

    })






})
