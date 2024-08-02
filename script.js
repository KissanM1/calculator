let num1 = null;
let num2 = null;
let operator = null;

const display = document.querySelector(".display");

const operationCalls = {
    'X' : multiply,
    '/' : divide,
    '+' : add,
    '-' : subtract,
    '=' : operator
};


//Assigns html number button elements to variables
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");
const zero = document.querySelector(".zero");

//Assigns html operation button elements to variables
const multiplyButton = document.querySelector(".multiplyButton");
const divideButton = document.querySelector(".divideButton");
const addButton = document.querySelector(".addButton");
const subtractButton = document.querySelector(".subtractButton");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");


//Updates display with button corresponding symbol
one.addEventListener("click", () => updateDisplay(1, operator));
two.addEventListener("click", () => updateDisplay(2, operator));
three.addEventListener("click", () => updateDisplay(3, operator));
four.addEventListener("click", () => updateDisplay(4, operator));
five.addEventListener("click", () => updateDisplay(5, operator));
six.addEventListener("click", () => updateDisplay(6, operator));
seven.addEventListener("click", () => updateDisplay(7, operator));
eight.addEventListener("click", () => updateDisplay(8, operator));
nine.addEventListener("click", () => updateDisplay(9, operator));
zero.addEventListener("click", () => updateDisplay(0, operator));

multiplyButton.addEventListener("click", () => updateDisplay(null, "X"));
divideButton.addEventListener("click", () => updateDisplay(null, "/"));
addButton.addEventListener("click", () => updateDisplay(null, "+"));
subtractButton.addEventListener("click", () => updateDisplay(null, "-"));
equalsButton.addEventListener("click", operate);

clearButton.addEventListener("click", clearDisplay);


//Operation function
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
    // TODO Rounding error fix
}


// Calculation and display functions
function operate(){
    let operatorFunction = operationCalls[operator];
    num1 = operatorFunction(parseInt(num1), parseInt(num2)).toString();
    num2 = null;
    operator = null;
    display.textContent = num1;
}


function clearDisplay() {
    num1 = null;
    num2 = null;
    operator = null;

}


function updateDisplay(number, operatorInput){
    if (operator == null) {
        if (num1 === null) {
            num1 = number.toString();
        } else if (number != null){
            num1 += number.toString();
        } else {
            operator = operatorInput;
        }
        display.textContent = num1;
        } else  {
            if (num2 === null) {
                num2 = number.toString();
            } else {
                num2 += number.toString();
            }
            display.textContent = num2;

    }
}