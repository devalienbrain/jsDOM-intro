
// Finding HTML elements by tag name

const specialTextElements = document.getElementsByClassName('special-text');

for (element of specialTextElements) {
  console.log(element.innerText);
}