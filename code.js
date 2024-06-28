document.addEventListener("DOMContentLoaded", function() {
  const DISPLAY = document.querySelector(".display");
  const BUTTONS = document.querySelectorAll("button")
  let a = '';
  let b = '';
  let operator = '';

  

  BUTTONS.forEach(button => {
    button.addEventListener('click', function() {
        // Determine if the button is a number, operator, equals, or clear
        handleButtonClick(button.textContent);
    });
});

function handleButtonClick(content){
    if (isNumber(content)) {
        handleNumber(content);
    } else if (isOperator(content)) {
        handleOperator(content);
    } else if (content === '=') {
        handleEquals();
    } else if (content === 'RESET') {
        handleClear();
    }
}

function isNumber(content){
    return !isNaN(content);
}

function handleNumber(number) {
    // Append number to current input and update display
    // Determine if updating `a` or `b`
    if(operator === ''){
        a+=number;
        DISPLAY.textContent = a;
    }
    else{
        b+=number;
        DISPLAY.textContent = b;
    }
}

function isOperator(operator){
    if (operator === '+' || operator === '-' || operator === '/' || operator === '*'){
        return true;
    } 
    else{
        return false;
    }
}

function handleOperator(operator) {
    // Store operator and prepare for second number input
    // Update display to show operator if needed
    if (DISPLAY.textContent === '+' || DISPLAY.textContent === '-' || DISPLAY.textContent === '/' || DISPLAY.textContent === '*'){
        DISPLAY.textContent = operator;
    }
    else{
        DISPLAY.textContent += operator;
    }
    
    
}

function handleEquals() {
    // Perform calculation using `a`, `b`, and operator
    // Display result
}

function handleClear() {
    // Reset `a`, `b`, operator, and display
    a = '';
    b = '';
    operator = '';
    DISPLAY.textContent = '';
}


});



