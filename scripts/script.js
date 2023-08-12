
// getElementById
const ulFindElements = document.getElementById("find-elements");

//change by .innerText
// ulFindElements.innerText = 'Hacked by JS DOM!'

// change style by js dom
ulFindElements.style.color = 'green';

// create add an element from js using createElement and appendChild
/*const liNew = document.createElement('li');
liNew.innerText = "Hello from js";

ulFindElements.appendChild(liNew);*/

// create a new section using innerText

// Step-1: Create Or where to add

const mainBody = document.getElementById('main-body');

// Step-2: what to add

const sectionNew = document.createElement('section');

const h3New = document.createElement('h3');
h3New.innerText = 'Add HTML Contents from JS or Script Code';

const h5New = document.createElement('h5');
h5New.innerText = 'Using innerText = ; process:';

const ulNew = document.createElement('ul');

const liNewOne = document.createElement('li');
liNewOne.innerText = 'document.createElement(tagName);';

const liNewTwo = document.createElement('li');
liNewTwo.innerText = '.innerText = ;';

const liNewThree = document.createElement('li');
liNewThree.innerText = '.appendChild();';


// Step-3: Add Or execute
mainBody.appendChild(h3New);
mainBody.appendChild(h5New);
mainBody.appendChild(ulNew);
ulNew.appendChild(liNewOne);
ulNew.appendChild(liNewTwo);
ulNew.appendChild(liNewThree);

// Using innerHTML= ; process:

// Step-1: Where to Add
// mainBody already created

// Step-2: What to Add
const h5Second = document.createElement('h5');
h5Second.innerText = "Another process innerHTML = ; to use:"

// Step-3: Add / append
mainBody.appendChild(h5Second);

const ulSecond = document.createElement('ul');

const liSecond = document.createElement('li');
liSecond.innerText = ".innerHTML= ` HTML tags, new-line, text etc. `;"

ulSecond.appendChild(liSecond);
mainBody.appendChild(ulSecond);

// Create a new section by innerHTML
// STEP 1: Where to add
// In this case main body already got

// STEP 2: What sontents/text to add
const sectionThreeSteps = document.createElement('section');
sectionThreeSteps.innerHTML = `
<h3> Three Steps to add elelment to HTML from JS using DOM </h3>
<ul>
  <li> Step 1: Where to add. Get the element by getElementById</li>
  <li> Step 2: What to add. Set the contents/text by innerHTML/ innerText</li>
  <li> Step 3: Add/append. Use appendChild() method.</li>
  </ul>
`;

// STEP 3: Append
mainBody.appendChild(sectionThreeSteps);

