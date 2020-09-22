const display = document.getElementById('display');
const clear = document.getElementById('clear');
const buttons = document.querySelectorAll('.button');
let operationArray = []; //2 values and operator for operation are stored here
let currentInput = ''; // current value being inputted
let currentAnswer = ''; // solution to operation chain
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.getAttribute('value');
		if (value == '=') {	// if the '=' button is pressed, evaluate the final 2 number operation
			if (currentInput == '') {
				return
			}
			operationArray.push(currentInput);
			const newAnswer = getAnswer(operationArray);
			const roundedAnswer = Math.round(newAnswer * 1000) / 1000;
			operationArray = []; 
			currentInput = '';
			currentAnswer = roundedAnswer;
			display.innerHTML = roundedAnswer;
		} else if (value == '+' || value == '-' || value == '*' || value == '/') { // if an operator button is pressed
			if (currentInput == '') { // if an operator is pressed before numbers are inputted or after '=' has been pressed.
				if (currentAnswer == '') {
					display.innerHTML = 'Please submit a number before selecting an operator';
				} else {
					operationArray.push(currentAnswer);
					operationArray.push(value);
				}
			} else {
				operationArray.push(currentInput); // push the number inputed before the operator was selected
				currentInput = ''; // reinitialize the current input
				if (operationArray.length == 3) { // if the operation array already has 2 numbers
					const newAnswer = getAnswer(operationArray);
					const roundedAnswer = Math.round(newAnswer * 1000) / 1000;
					operationArray = [roundedAnswer];
					display.innerHTML = roundedAnswer;
				} 
				operationArray.push(value);
			}
		} else if (value == 'clear') {
			operationArray = [];
			currentInput = '';
			currentAnswer = '';
			display.innerHTML = '';
		} else { // for all numbers and decimals
			let refValue = value;
			currentInput += refValue;
			display.innerHTML = currentInput;
		}
	})
})




function operate (a, b, operator) {
	const parsedA = parseFloat(a);
	const parsedB = parseFloat(b);
	if (operator == '+') {
		return add(parsedA,parsedB);
	} else if (operator == '-') {
		return subtract(parsedA,parsedB);
	} else if (operator == '*') {
		return multiply(parsedA,parsedB);
	} else if (operator == '/') {
		return divide(parsedA,parsedB);
	}
}

function add (a, b) {
	return a+b
}

function subtract (a, b) {
	return a-b
}

function multiply (a, b) {
	return a*b
}

function divide (a, b) {
	return a/b
}

function getAnswer (arr) {
	const refArray = arr;
	const firstValue = refArray[0];
	const operator = refArray[1];
	const lastValue = refArray[2];
	return operate(firstValue, lastValue, operator);
}


