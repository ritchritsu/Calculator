document.addEventListener("DOMContentLoaded", function() {
  const DISPLAY = document.getElementById("display");
  const BUTTONS = document.querySelectorAll("button")
  let a, b, operator;
  

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
    } else if (content === 'C') {
        handleClear();
    }
}

function handleNumber(number) {
    // Append number to current input and update display
    // Determine if updating `a` or `b`
}

function handleOperator(op) {
    // Store operator and prepare for second number input
    // Update display to show operator if needed
}

function handleEquals() {
    // Perform calculation using `a`, `b`, and operator
    // Display result
}

function handleClear() {
    // Reset `a`, `b`, operator, and display
}


});



