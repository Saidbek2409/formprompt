const form = document.getElementById('form');
const textInput = document.getElementById('text');
const blocksContainer = document.getElementById('blocks');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const text = textInput.value;
  const time = new Date().toLocaleTimeString();
  
  const block = document.createElement('div');
  block.classList.add('block');
  
  const textElement = document.createElement('p');
  textElement.textContent = text;
  block.appendChild(textElement);
  
  const timeElement = document.createElement('span');
  timeElement.classList.add('time');
  timeElement.textContent = time;
  block.appendChild(timeElement);
  
  blocksContainer.appendChild(block);
  
  textInput.value = '';
});