// Process 1: onclick
function makeBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
}

// Process 2: getElementByid & addEventListener
document.getElementById('red-theme').addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
})


// secret message part
const inputText = document.getElementById('input-text');

const hideBtn = document.getElementById('hide-btn');

const secretMessage = document.getElementById('secret-message');

inputText.addEventListener('keyup', function () {
  if (inputText.value === 'delete') {
    hideBtn.disabled = false;
  }
  else {
    hideBtn.disabled = true;
  }
});

hideBtn.addEventListener('click', function () {
  secretMessage.style.display = 'none';
});