
function add(a,b){
	number = a+b
	console.log(number)
}

function subtract(a,b){
	number = a -b
	console.log(number)
}

function multiply(a,b){
	number = a *b
	console.log(number)
}
function divide(a,b){
	number = a/b
	console.log(number)
}

function operate(a,b,c){
	if (b == "+"){
		add(a,c);
	}
	else if ( b == "-"){
		subtract(a,c);
	} else if (b == "*"){
		multiply(a,c);
	} else if (b == "/"){
		divide(a,c);
	}
}
var display = document.getElementById("display")

function button() {
const btn = document.querySelectorAll(".grid-item");

btn.forEach((button) => {
	button.addEventListener('click',(e) => {
		return display.value = button.textContent;
	});
});
}

button();





