document.addEventListener("DOMContentLoaded", (event) => {

  const pinkSound = new Audio('./allthat.mp3');
  const yellowSound = new Audio('./angelsbymyside.mp3');
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box, i) => {
    const color = (i % 2 === 0) ? 'pink' : 'yellow';
    box.style.backgroundColor = color;
    box.dataset.color = color; 


  	  
    box.addEventListener('click', () => {
    	box.classList.toggle('active');


      if (box.dataset.color === 'pink') {
        pinkSound.currentTime = 0;
        pinkSound.play();
      } else if (box.dataset.color === 'yellow') {
        yellowSound.currentTime = 0;
        yellowSound.play();
      }
    });
  });
});
