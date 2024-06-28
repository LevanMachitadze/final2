const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');
const colorDiv = document.getElementById('newDiv');

redBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'red';
  newDiv.classList.add('box');
  newDiv.style.background = 'red';
  colorDiv.appendChild(newDiv);
});

greenBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'green';
  newDiv.classList.add('box');
  newDiv.style.background = 'green';
  colorDiv.appendChild(newDiv);
});

blueBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'blue';
  newDiv.classList.add('box');
  newDiv.style.background = 'blue';
  colorDiv.appendChild(newDiv);
});
