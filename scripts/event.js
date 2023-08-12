// Process 1: onclick
function makeBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
}

// Process 2: getElementByid & addEventListener
document.getElementById('red-theme').addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
})
