function operate (a, b, operator) {
	const parsedA = parseInt(a);
	const parsedB = parseInt(b);
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

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let operationArray = [];
let recentAnswer = 0;
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.getAttribute('value');
		if (value == '=') {	// if the '=' button is pressed, evaluate the final 2 number operation
			const newAnswer = getAnswer(operationArray);
			display.innerHTML = newAnswer;
			operationArray = []; 
		} else if (value == '+' || value == '-' || value == '*' || value == '/') { // if an operator button is pressed
			if (operationArray.length == 3) { // if the operation array already has 2 numbers
				const newAnswer = getAnswer(operationArray);
				operationArray = [newAnswer];
				display.innerHTML = newAnswer;
			}
			operationArray.push(value);
		} else { // for all numbers and decimals
			operationArray.push(value);
			display.innerHTML = value;
		}
	})
})


