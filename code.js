document.addEventListener("DOMContentLoaded", function() {
  const DISPLAY = document.getElementById("display");
  const BUTTONS = document.querySelectorAll("button")
  let a, b, operator;

  function calculator(operation, a, b) {
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        default:
            return "Error: Unsupported operation";
    }
}

});



