let num1 = null;
let num2 = null;
let operator = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
    // Rounding error fix
}

function operate(num1, num2, operator){
    return operator(num1, num2);
}

