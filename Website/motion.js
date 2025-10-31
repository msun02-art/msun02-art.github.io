// var x = 0;
// speed = 10;
// function setup(){
// createCanvas(windowWidth, windowHeight);
// }

// function draw(){
// 	var y = height/2;
// 	background('yellow');
// 	fill('purple');
// 	//var x = windowWidth/2;
// 	//var y = windowHeight/2;
// 	circle(x, y, 100);
// 	// if (x>width){
// 	// 	speed = -10;
// 	// }
// 	// else if (x<0){
// 	// 	speed = 10;
// 	// }
// 	// fill('red');

// 	// x = x+speed;
// 	// beginShape();
// 	//   vertex(300, 20);
// 	//   vertex(150, 20);
// 	//   vertex(85, 75);
// 	//   vertex(30, 75);
// 	//   endShape(CLOSE);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
//custom variables for y-coordinate of sun & horizon

let fishHeight;
let fishWidth;
let fishEye;
let balls = [];
let horizon;
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();

  horizon = windowHeight / 2;
  for (let i = 0; i < 10; i++) {
    balls.push({
      x: random(width),
      y: random(horizon, height),
      size: random(40, 80),
      color: '#B4D3FA'  // 
    });
  }
}


function draw() {
	background('lightblue')

//sun
  fill('#DE4C00');
  circle(windowWidth/2, 350, 500);

	let horizon = windowHeight/2;
  fill("#043470");
  rect(0, horizon, windowWidth, horizon);

for (let b of balls) {
    fill(b.color);
    circle(b.x, b.y, b.size);
  }


//fish follows y-coordinate of mouse
  fishHeight = mouseY;


  //with if-else statement

 // fill('orange');
 //  noStroke();
 //  circle(windowWidth/2, fishHeight, 100);




  if (fishHeight < horizon) {
	fill('orange'); 
  } 
  else {
  	fill('#911684')
  }

noStroke();
ellipse(windowWidth/2, fishHeight, 245, 120);
triangle(
    windowWidth / 2 + 90, fishHeight,        
    windowWidth / 2 + 205, fishHeight - 40,   
    windowWidth / 2 + 205, fishHeight + 40  
   );
triangle(
    windowWidth / 2 - 160, fishHeight,      
    windowWidth / 2 - 93, fishHeight - 40,   
    windowWidth / 2 - 93, fishHeight + 40  
  );
triangle(
    windowWidth / 2 - 165, fishHeight - 8,       
    windowWidth / 2 - 155, fishHeight + 8,   
    windowWidth / 2 - 155, fishHeight - 8  
  );
triangle(
    windowWidth / 2 - 165, fishHeight + 8,        
    windowWidth / 2 - 155, fishHeight - 8,   
    windowWidth / 2 - 155, fishHeight + 8  
  );

triangle(
  windowWidth / 2 - 60, fishHeight - 50,    // 左角（鳍根）
  windowWidth / 2 + 50, fishHeight - 50,    // 右角（鳍根）
  windowWidth / 2 + 10, fishHeight - 110);

let EyeX = windowWidth/2 - 100;
let EyeY = fishHeight;

if (fishHeight < horizon){
    stroke('red');
    strokeWeight(5);
    line(EyeX - 10, EyeY - 10, EyeX + 10, EyeY + 10);
    line(EyeX + 10, EyeY - 10, EyeX - 10, EyeY + 10);
    noStroke();
  }
else {
    noStroke();
    fill('white');
    circle(EyeX, EyeY, 30);
    fill('black');
    circle(EyeX, EyeY, 20);
 
  }
}
function mousePressed() {
  // 🟢 when you click, re-randomize the positions of all balls
  for (let b of balls) {
    b.x = random(width);             // random horizontal position
    b.y = random(horizon, height);   // random vertical position (underwater)
  }
}
