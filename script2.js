// history display
let historyDisplay = document.querySelector('.history-screen');
// result display 
let resultDisplay = document.querySelector('.result-screen');
// get all the button
let calcButton = document.querySelectorAll('button');

// container for number and operator
let firstNumber;
let secondNumber;
let operatorNumber;

// storing calculation result
let resultCalculation;

// function for number button
function numberInput() {
  console.log("you are pressing number");
}

// function for calculation
function calculation(firstNum, secondNum, operatorNum) {
  switch (operatorNum) {
    case "+":
      return (firstNum + secondNum);
      break;
    case "-":
      return (firstNum - secondNum);
      break;
    case "x":
      return (firstNum * secondNum);
      break;
    case "÷":
      return (firstNum / secondNum);
      break;
    case "%":
      return (firstNum % secondNum);
    default:
      alert("Something is error, Sir!");
      break;
  }
}

// function for operation button
function operationInput(valueTaken, operationTaken) {
  
  // check the equalSign
  if(operationTaken == "operator") {
    // saving firstNumber and operator
    firstNumber = parseInt(resultDisplay.innerHTML); // saving the first number
    operatorNumber = valueTaken;
    resultDisplay.innerHTML = historyDisplay.innerHTML = '';
    historyDisplay.innerHTML += firstNumber + operatorNumber; // update history display
  } else {
    // saving firstNumber and operator
    secondNumber = parseInt(resultDisplay.innerHTML); // saving the first number
    resultDisplay.innerHTML = historyDisplay.innerHTML = ''; // clear the display
    historyDisplay.innerHTML += firstNumber + operatorNumber + secondNumber; // update history display
    resultCalculation = calculation(firstNumber, secondNumber, operatorNumber);
    resultDisplay.innerHTML = resultCalculation;
  }

}

// function for updating display
function updateDisplay(inputNumber) {
  resultDisplay.innerHTML += inputNumber;
}

// function for clear the screen
function clearScreen() {
  // assignment chaining
  historyDisplay.innerHTML = resultDisplay.innerHTML = operatorNumber = '';
  firstNumber = secondNumber = 0;
}

// function for delete operation
function delete() {
  
}

// operate function
function operate(e) {
  // get the operation that user click
  let valueTaken = e.target.dataset.button.split(',')[0].trim();
  // get the value from number
  let operationTaken = e.target.dataset.button.split(',')[1].trim();

  // check for the operation
  switch (operationTaken) {
    case "number":
      //update display
      updateDisplay(valueTaken);    
      break;
    case "operator":
      operationInput(valueTaken, operationTaken);
      break;
    case "clear":
      clearScreen();
      break;
    case "delete":
      console.log("you are pressing delete");
      break;
    case "equalSign":
      operationInput(valueTaken, operationTaken);
      break;
    default:
      alert("Instruction not clear, Sir!");
      break;
  }

}

// add listener to all the button
calcButton.forEach(key => key.addEventListener('click', operate));