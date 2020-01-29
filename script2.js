// history display
let historyDisplay = document.querySelector('.history-screen');
// result display 
let resultDisplay = document.querySelector('.result-screen');
// get all the button
let calcButton = document.querySelectorAll('button');

// define operation container
let operationContainer = "";

// function for number button
function numberInput() {
  console.log("you are pressing number");
}

// function for operation button
function operationInput() {
  console.log("this is from operation function");
}

// operate function
function operate(e) {
  // get the operation that user click
  let numberTaken = e.target.dataset.button.split(',')[0].trim();
  // get the value from number
  let operationTaken = e.target.dataset.button.split(',')[1].trim();
  
  // check for the operation
  switch (operationTaken) {
    case "number":
      // number goes here
      numberInput();
      break;
    case "operator":
      // operator goes here
      operationInput();
      break;
    case "clear":
      // clear goes here
      console.log("you are pressing clear");
      break;
    case "delete":
      // delete goes here
      console.log("you are pressing delete");
      break;
    case "equalSign":
      // equal sign goes here
      console.log("you are pressing equal sign");
      break;
    default:
      alert("Instruction not clear, Sir!");
      break;
  }

}

// add listener to all the button
calcButton.forEach(key => key.addEventListener('click', operate));