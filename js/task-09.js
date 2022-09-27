function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.color');
const change = document.querySelector('.change-color');

change.addEventListener('click', changeColor);
function changeColor () {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
  change.style.color = bgColor;
}