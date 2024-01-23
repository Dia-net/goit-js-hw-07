function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputRender = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesElement = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxesElement.appendChild(box);
  }
}

function destroyBoxes() {
  boxesElement.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputRender.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputRender.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes)
 





