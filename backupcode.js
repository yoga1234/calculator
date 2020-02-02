// this from consecutive calculation
  secondNumber = parseInt(resultDisplay.innerHTML); 
  operatorNumber = valueTaken;// saving the first number
  historyDisplay.innerHTML += secondNumber;
  historyDisplay.innerHTML += operatorNumber;
  firstNumber = calculation(firstNumber, secondNumber, operatorNumber);      
  console.log(firstNumber);
  resultDisplay.innerHTML = '';