const mainCanvas = document.getElementById("canvas");
const smallCanvas = document.getElementById("smallcanvas");

const main = mainCanvas.getContext("2d");
const small = smallCanvas.getContext("2d");

function resizeCanvas() {
  smallCanvas.width = smallCanvas.clientWidth;
  smallCanvas.height = smallCanvas.clientHeight;
  mainCanvas.width = mainCanvas.clientWidth;
  mainCanvas.height = mainCanvas.clientHeight;
}

function generatePixels() {
 resizeCanvas();

    // 画主画布背景
  main.fillStyle = "#E0FFFE";
  main.fillRect(0, 0, mainCanvas.width, mainCanvas.height);


  small.clearRect(0, 0, smallCanvas.width, smallCanvas.height);
let route = [];
let x = smallCanvas.width / 2;
let y = smallCanvas.height / 2;
for(let i = 0; i < 1000; i++){
	x += Math.random() * 20 - 10;
	y += Math.random() * 20 - 10;
	route.push({ x, y });   
}

const color1 = "#F02AF5";
const color2 = "#FFD93D";
const color3 = "#00C9A7";
const color4 = "#7B61FF";

    // 调色板（想加颜色就在这里多写几个变量并放进数组）
const palette = [color1, color2, color3, color4];

const pixel = 8;

small.fillStyle = "palette";

   

for(let i = 0; i< route.length; i++){
let p = route[i];
const px = Math.floor(p.x / pixel) * pixel;
const py = Math.floor(p.y / pixel) * pixel;
small.fillRect(px, py, pixel, pixel);
   }
}

// 按钮绑定
document.getElementById("generate").onclick = generatePixels;

// 初始生成一次
generatePixels();
window.addEventListener('resize', generatePixels);
