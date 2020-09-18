function operate (a, b, operator) {
	return operator(a, b)
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

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.getAttribute('value');
		const display = document.getElementById('display');
		display.innerHTML += value;
	})
})


