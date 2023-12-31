let currentInput = '';
let currentOperation = null;
let previousInput = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput !== '') {
        if (previousInput !== null) {
            calculate();
        }

        currentOperation = operation;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== '' && previousInput !== null && currentOperation !== null) {
        switch (currentOperation) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
            case '%' :
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();


        }
        previousInput = null;
        currentOperation = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.querySelector('.result');
    const displayValue = currentInput === '' ? '0' : currentInput;
    if (previousInput !== null && currentOperation !== null) {
        // If there is a previous input and an operation, display both
        displayElement.textContent = `${previousInput} ${currentOperation} ${displayValue}`;
    } else {
        // Otherwise, display only the current input
        displayElement.textContent = displayValue;
    }

    // document.querySelector('.result').textContent = currentInput === '' ? '0' : currentInput;
}

let isbracketopen = true ;
function togglebrackets() {
    if (isbracketopen) {
        currentInput += '(';
    } else {
        currentInput += ')';
    }
    isbracketopen = !isbracketopen;
    updateDisplay();

}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}



