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

  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);

  if(operator === 'add') {
    return firstNum + secondNum;
  } 
  if(operator === 'subtract') {
    return firstNum - secondNum;
  }
  if(operator === 'multiply') {
    return firstNum * secondNum;
  }
  if(operator === 'divide') {
    return firstNum / secondNum;
  }

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
    if(
      displayedNum === '0' || 
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
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
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      const calcValue = calculate(firstValue, operator, secondValue);
      display.textContent = calcValue;

      // update calculated value as firstValue
      container.dataset.firstValue = calcValue
    } else {
      // if there are no calculations, set displayedNum as the firstValue
      container.dataset.firstValue = displayedNum;
    }

    key.classList.add('key-pressed');
    // add custom attribute
    container.dataset.previousKeyType = 'operator';
    // saving the calculation value
    container.dataset.operator = action;
  }

  // user click on the decimal key
  if(action === 'decimal') {
    // check if the display already have dot
    if(!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
    }
    if(
      previousKeyType === 'operator' ||
      previousKeyType === 'equal'
    ) {
      display.textContent = '0.';
    }
    container.dataset.previousKeyType = 'decimal';
  }

  // user click on the clear key
  if(action === 'clear') {
    // reset calculator to its initial state
    container.dataset.firstValue = '';
    container.dataset.modValue = '';
    container.dataset.operator = '';
    container.dataset.previousKeyType = '';
    display.textContent = 0;

    container.dataset.previousKeyType = 'clear';
  }

  // user click on the equal key
  if(action === 'equal') {
    let firstValue = container.dataset.firstValue;
    let operator = container.dataset.operator;
    let secondValue = displayedNum;

    // check if user already enter number
    if(firstValue) {
      if(previousKeyType === 'equal') {
        firstValue = displayedNum;
        secondValue = container.dataset.modValue;
      }
      display.textContent = calculate(firstValue, operator, secondValue);
    }

    // set modValue attribute
    container.dataset.modValue = secondValue;
    container.dataset.previousKeyType = 'equal';
  }

  // user click on the delete button
  if(action === 'delete') {
    // remove the current entry
    display.textContent = 0;

    container.dataset.previousKeyType = 'delete';
  }

}

// add event listener to all of the button
calcButton.forEach(key => key.addEventListener('click', mainFunc));