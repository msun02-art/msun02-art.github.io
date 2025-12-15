

document.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript goes here.
  document.getElementById("button").addEventListener("click", function(){ 
  this.style.background = "red" 
});

  const myButton = document.querySelector("button");

  myButton.addEventListener("click", (event) => {
    alert('Hello World!');
  });
  
});
  document.getElementById("#push").addEventListener("click", function(){
  this.style.background = "blue"
});
 