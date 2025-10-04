document.addEventListener("DOMContentLoaded", (event) => {

    const tooth1 = document.getElementById("tooth1");
    const braces = document.querySelectorAll(".braces")
    const braceline = document.querySelectorAll(".braceline")
    const tooth2 = document.getElementById("tooth2");
    const bubbles = document.querySelectorAll(".bubbles");
    const tooth3 = document.getElementById("tooth3");
    const square = document.querySelectorAll(".square")
    const tooth4 = document.getElementById("tooth4");
    const worm = document.querySelectorAll(".worm");
    const tooth5 = document.getElementById("tooth5");

    tooth1.addEventListener("click", function(){ 
    document.querySelectorAll(".tooth").forEach(function(element){
      element.classList.toggle('on');
    });
      braces.forEach(function(element){
        element.classList.toggle('show')
      });
      braceline.forEach(function(element){
        element.classList.toggle('show')
       });
     });


    tooth2.addEventListener("click",function(){
      bubbles.forEach(function(element){
        element.classList.toggle('show')
      });
    });

    tooth3.addEventListener("click",function(){
      square.forEach(function(element){
        element.classList.toggle('show')
     });
    });

    tooth4.addEventListener("click",function(){
      worm.forEach(function(element){
        element.classList.toggle('show')
     });
    });

    tooth5.addEventListener("click",function(){
      braces.forEach(function(element){
        element.classList.remove('show')
      });
      braceline.forEach(function(element){
        element.classList.remove('show')
      });
      bubbles.forEach(function(element){
        element.classList.remove('show')
      });
      square.forEach(function(element){
        element.classList.remove('show')
     });
      worm.forEach(function(element){
        element.classList.remove('show')
     });
    });
  });

