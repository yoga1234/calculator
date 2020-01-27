// getting tag from html
let displayScreen = document.querySelector('.result-screen');
let calcButton = document.querySelectorAll('button');
let displayValue = "";

// Basic math function
function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

// operate function
function operate(operator, number1, number2) {

}

// display function
function populateDisplay(e) {
  displayScreen.insertAdjacentHTML('beforeend', e.target.dataset.button);
  displayValue += e.target.dataset.button;
  console.log(displayValue);
}

// button event listener
calcButton.forEach(key => key.addEventListener('click', populateDisplay));