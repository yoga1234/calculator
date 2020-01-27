// getting tag from html
let displayScreen = document.querySelector('.result-screen');
let calcButton = document.querySelectorAll('button');
let displayValue = "";
let numberContainer;
let firstNumber;
let secondNumber;
let operatorNumber;
let result;

// Basic math function
function add(number1, number2) {
  return Number(number1) + Number(number2);
}

function subtract(number1, number2) {
  return Number(number1) - Number(number2);
}

function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}

function divide(number1, number2) {
  return Number(number1) / Number(number2);
}

// operate function
function operate(operator, number1, number2) {
  if(operator == "+") {
    return add(number1, number2);
  } else if(operator == "-") {
    return subtract(number1, number2);
  } else if(operator == "x") {
    return multiply(number1, number2);
  } else if(operator == "÷") {
    return divide(number1, number2);
  }
}

// display function
function populateDisplay(e) {
  let valueTaken = e.target.dataset.button.split(',')[0].trim();
  let operatorTaken = e.target.dataset.button.split(',')[1].trim();

  // check for the operation
  if(operatorTaken == "number") {
    displayScreen.insertAdjacentHTML('beforeend', valueTaken);
    displayValue += valueTaken;
  } else if(operatorTaken == "operator") {
    displayScreen.insertAdjacentHTML('beforeend', valueTaken);
    firstNumber = displayValue;
    operatorNumber = valueTaken;
    displayValue = '';
  } else {
    secondNumber = displayValue;
    displayValue = '';
    result = operate(operatorNumber, firstNumber, secondNumber);
    console.log(result);
  }

  // console.log(e.target.dataset.button.split(',')[1].trim());
}

// button event listener
calcButton.forEach(key => key.addEventListener('click', populateDisplay));