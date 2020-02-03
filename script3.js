// history display, don't use before finish
const historyDisplay = document.querySelector('.history-screen');
// result display
const display = document.querySelector('.display');
// get all of the button
const calcButton = document.querySelectorAll('button');
// container for saving custom attribute
const container = document.querySelector('.container');

// function for calculating the result
const calculate = (n1, operator, n2) => {
  let result = '';

  if(operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if(operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if(operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if(operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
}

// main calculator function
function mainFunc(e) {
  const key = e.target;
  const action = key.dataset.button;
  const keyContent = key.textContent; // get the number with textContent
  const displayedNum = display.textContent; // get the display with textContent
  const previousKeyType = container.dataset.previousKeyType;

  // remove .key-pressed class from all keys
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('key-pressed'));
  
  // user click on the number key
  if(action === 'number') {
    if(displayedNum === '0' || previousKeyType === 'operator') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
    container.dataset.previousKeyType = 'number';
  }
  
  // user click on the operator key
  if(
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply'  ||
    action === 'divide'
  ) {
    // check if the value is exists
    const firstValue = container.dataset.firstValue;
    const operator = container.dataset.operator;
    const secondValue = displayedNum;

    // it's sufficient to check for firstValue and operator because secondValue always exists
    if(
      firstValue && 
      operator &&
      previousKeyType !== 'operator'
    ) {
      display.textContent = calculate(firstValue, operator, secondValue);
    }

    key.classList.add('key-pressed');
    // add custom attribute
    container.dataset.previousKeyType = 'operator';
    // saving the calculation value
    container.dataset.firstValue = displayedNum;
    container.dataset.operator = action;
  }

  // user click on the decimal key
  if(action === 'decimal') {
    // check if the display already have dot
    if(!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
    }
    if(previousKeyType === 'operator') {
      display.textContent = '0.';
    }
    container.dataset.previousKeyType = 'decimal';
  }

  // user click on the clear key
  if(action === 'clear') {
    console.log("you are pressed on the clear key");
    container.dataset.previousKeyType = 'clear';
  }

  // user click on the equal key
  if(action === 'equal') {
    const firstValue = container.dataset.firstValue;
    const operator = container.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);

    container.dataset.previousKeyType = 'equal';
  }

  // user click on the delete button
  if(action === 'delete') {
    console.log("you are pressed on the delete key");

    container.dataset.previousKeyType = 'delete';
  }

}

// add event listener to all of the button
calcButton.forEach(key => key.addEventListener('click', mainFunc));