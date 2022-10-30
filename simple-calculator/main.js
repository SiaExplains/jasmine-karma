function updateResult (result) {
    const element = document.getElementById('result');
    if(element) {
        element.innerText = result;
    }
}

function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);
    const numberA = Number(numbers[0]);
    const numberB = Number(numbers[1]);
    const matchOperation = inputValue.match(expression);
    if(matchOperation === null || Number.isNaN(numberA) || Number.isNaN(numberB)) {
        updateResult('Expression not recognized.');
        return;
    }
    const operator = matchOperation[0];
    const calculator = new Calculator();
    calculator.add(numberA);
    let result;
    console.log(operator)
    if(operator === '+') {
        
        result = calculator.add(numberB);
    }
    else if(operator === '-') {
        result = calculator.subtract(numberB);
    }
    else if(operator === '*') {
        result = calculator.multiply(numberB);
    }
    else if(operator === '/') {
        result = calculator.divide(numberB);
    }
    updateResult(result);
}

function showVersion() {
    const calculator = new Calculator();
    const element = document.getElementById('version');
    element.innerText = calculator.version;
}