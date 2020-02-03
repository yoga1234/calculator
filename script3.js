// history display, don't use before finish
const historyDisplay = document.querySelector('.history-screen');
// result display
const display = document.querySelector('.display');
// get all of the button
const calcButton = document.querySelectorAll('button');

// main calculate function
function calculate(e) {
  const key = e.target;
  const action = key.dataset.button;
  const keyContent = key.textContent; // get the number with textContent
  const displayedNum = display.textContent; // get the display with textContent

  // remove .key-pressed class from all keys
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('key-pressed'));
  
  // user click on the number key
  if(action === 'number') {
    if(displayedNum === '0') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
  
  // user click on the operator key
  if(
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply'  ||
    action === 'divide'
  ) {
    key.classList.add('key-pressed');
  }

  // user click on the decimal key
  if(action === 'decimal') {
    display.textContent = displayedNum + '.';
  }

  // user click on the clear key
  if(action === 'clear') {
    console.log("you are pressed on the clear key");
  }

  // user click on the equal key
  if(action === 'equal') {
    console.log("you are pressed on the equal key");
  }

  // user click on the delete button
  if(action === 'delete') {
    console.log("you are pressed on the delete key");
  }

}

// add event listener to all of the button
calcButton.forEach(key => key.addEventListener('click', calculate));