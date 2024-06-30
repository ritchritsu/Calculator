document.addEventListener("DOMContentLoaded", function() {
    const DISPLAY = document.querySelector(".display");
    const BUTTONS = document.querySelectorAll("button");
    let a = '';
    let b = '';
    let operator = '';

    BUTTONS.forEach(button => {
        button.addEventListener('click', function() {
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
        else if (content === 'DEL'){
            handleDelete();
        }
    }

    function isNumber(content){
        return !isNaN(content);
    }

    function handleNumber(number) {
        // Append number to current input and update display
        if (operator === '') {
            a += number;
            DISPLAY.textContent = a;
        } else {
            b += number;
            DISPLAY.textContent = b;
        }
    }

    function isOperator(content){
        return ['+', '-', '/', '*'].includes(content);
    }

    function handleOperator(content) {
        // Store operator and prepare for second number input
        if (operator === '' && a !== '') {
            operator = content;
            DISPLAY.textContent = a + ' ' + operator;
        } else if (a !== '' && b !== '') {
            // Handle consecutive operator input by calculating intermediate result
            handleEquals();
            operator = content;
            DISPLAY.textContent = a + ' ' + operator;
        } else if (operator !== '' && b === '') {
            // Replace operator if there's no second operand yet
            operator = content;
            DISPLAY.textContent = a + ' ' + operator;
        }
    }

    function handleEquals() {
        if (a !== '' && b !== '' && operator !== '') {
            let result;
            let numA = parseFloat(a);
            let numB = parseFloat(b);

            switch (operator) {
                case '+':
                    result = numA + numB;
                    break;
                case '-':
                    result = numA - numB;
                    break;
                case '*':
                    result = numA * numB;
                    break;
                case '/':
                    result = numA / numB;
                    break;
                default:
                    result = null;
            }

            DISPLAY.textContent = result;
            // Reset for next calculation, keep result as `a`
            a = result.toString();
            b = '';
            operator = '';
        }
    }

    function handleClear() {
        // Reset `a`, `b`, operator, and display
        a = '';
        b = '';
        operator = '';
        DISPLAY.textContent = '';
    }

    function handleDelete() {
        let currentText = DISPLAY.textContent;
        if (currentText.length > 0) {
            DISPLAY.textContent = currentText.slice(0, -1);
        }
    }

});
