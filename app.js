let header = document.getElementById("header");
let textBox = document.getElementById("textBox");
let button = document
	.getElementById("button")
	.addEventListener("click", runIt);
let display = document.getElementById("display");
function runIt(e) {
	console.log(textBox.value);
	display.innerHTML += textBox.value + "<br>";
}
console.log(textBox.value);
console.log('Hello');
