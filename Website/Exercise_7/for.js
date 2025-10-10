document.addEventListener("DOMContentLoaded", (event) => {

	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box, i) => {
  	const color = (i % 2 === 0) ? 'red' : 'blue'; // 0,2,4... = red; 1,3,5... = blue
  	box.style.backgroundColor = color;
	});
});

