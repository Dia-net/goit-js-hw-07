function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const element = document.body;
const color = document.querySelector(".color");
changeColor.addEventListener('click', function(){
  const newColor = getRandomHexColor();
  element.style.backgroundColor = newColor;
  color.textContent = newColor;
})


