//function clear calculatoe screen. 
function clearScreen(){
	document.getElementById("result").value = "";
}

//function show values
function display(value) {
	document.getElementById("result").value += value;
}

//function calculate result
function calculate() {
	var p = document.getElementById("result").value;
	var q = eval(p);
	document.getElementById("result").value = q;
}