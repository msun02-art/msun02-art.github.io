// 先选元素
const background = document.querySelector('.backgroundbox');
const label = document.getElementById('label');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const img = document.getElementById('randomImg');
const img2 = document.getElementById('randomImg2');
const img3 = document.getElementById('randomImg3');


const colors = ['red','pink','blue','green','yellow','purple','brown'];

// 生成三色随机渐变
function randomGradient() {
  if (!background || !label) return;

  // 选 3 个不同颜色
  const selected = [];
  while (selected.length < 3) {
    const c = colors[Math.floor(Math.random() * colors.length)];
    if (!selected.includes(c)) selected.push(c);
  }

  // 随机角度
  const angle = Math.floor(Math.random() * 360);

  // 渐变字符串
  const gradient = `linear-gradient(${angle}deg, ${selected[0]}, ${selected[1]}, ${selected[2]})`;

  // 应用到背景盒
  background.style.background = gradient;      // ✅ 用 background，而不是 backgroundColor

  // 更新文字
  label.innerHTML = `🎨 ${selected.join(' → ')}<br><small>${angle}°</small>`;
}

// 绑定按钮点击
button1.addEventListener('click', randomGradient);

const images = [
  'head/1.png',
  'head/2.png',
  'head/3.png',
  'head/4.png',
  'head/5.png'
];

button2.addEventListener('click', () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  img.classList.remove('show');          // hide first for fade effect
  img.src = randomImage + '?cb=' + Date.now(); // cache-buster
  img.onload = () => img.classList.add('show'); // fade in
});
const images2 = [
  'body/1.png',
  'body/2.png',
  'body/3.png',
  'body/4.png',
  'body/5.png'
];

button3.addEventListener('click', () => {
  const randomImage2 = images2[Math.floor(Math.random() * images2.length)];
  img2.classList.remove('show');          // hide first for fade effect
  img2.src = randomImage2 + '?cb=' + Date.now(); // cache-buster
  img2.onload = () => img2.classList.add('show'); // fade in
});
const images3 = [
  'tail/1.png',
  'tail/2.png',
  'tail/3.png',
  'tail/4.png',
  'tail/5.png'
];

button4.addEventListener('click', () => {
  const randomImage3 = images3[Math.floor(Math.random() * images3.length)];
  img3.classList.remove('show');          // hide first for fade effect
  img3.src = randomImage3 + '?cb=' + Date.now(); // cache-buster
  img3.onload = () => img3.classList.add('show'); // fade in
});
returnBtn.addEventListener('click', () => {
  window.location.reload();
});