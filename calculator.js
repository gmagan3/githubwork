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

operate(2,"+",2);