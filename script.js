// getting tag from html
let displayScreen = document.querySelector('.result-screen');
let historyScreen = document.querySelector('.history-screen')
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

// updating the display
function displayFunction(valueTaken, operatorTaken) {
  // check for the operation
  if(operatorTaken == "number") {
    // update the display
    displayScreen.insertAdjacentHTML('beforeend', `<span class="result-value">${valueTaken}</span>`);
    // add valueTaken into displayValue
    displayValue += valueTaken;
  } else if(operatorTaken == "operator") {
    // if user click operator
    displayScreen.insertAdjacentHTML('beforeend', `<span class="result-value">${valueTaken}</span>`);
    firstNumber = displayValue;
    console.log(firstNumber);
    operatorNumber = valueTaken;
    displayValue = '';
  } else if(operatorTaken == "clear"){
    clearDisplay();
  } else if(operatorTaken == "delete"){
    deleteDisplay();
  } else {
    // if user click equal sign
    secondNumber = displayValue;
    result = operate(operatorNumber, firstNumber, secondNumber);
    displayScreen.innerHTML = '';
    displayValue = result;
    displayScreen.insertAdjacentHTML('beforeend', result);
    historyScreen.innerHTML = '';
    historyScreen.insertAdjacentHTML('beforeend', firstNumber + operatorNumber + secondNumber);
  }
}

// populating display
function populateDisplay(e) {
  let valueTaken = e.target.dataset.button.split(',')[0].trim();
  let operatorTaken = e.target.dataset.button.split(',')[1].trim();

  displayFunction(valueTaken, operatorTaken);
}

// clear display function
function clearDisplay() {
  historyScreen.innerHTML = '';
  displayScreen.innerHTML = '';
}

// delete display function
function deleteDisplay() {
  let resultValue = document.querySelectorAll('.result-value');
  if(!resultValue.length) {
    return;
  } else {
    displayScreen.removeChild(displayScreen.lastChild);
  }
}

// button event listener
calcButton.forEach(key => key.addEventListener('click', populateDisplay));