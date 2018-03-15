var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var cssProperty = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.getElementById("randomise");

document.addEventListener("DOMContentLoaded", setGradient);

//window.addEventListener("load", setGradient);

//body.onload = setGradient;

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssProperty.textContent = body.style.background + ";";
}

function randomiseGradient() {
	//1.Use RGB
	// body.style.background = "linear-gradient(to right, " + randomiseRGB() + ", " + randomiseRGB() + ")";
	// cssProperty.textContent = body.style.background + ";";

	//2.Use Hex
	color1.value = randomiseHex();
	color2.value = randomiseHex();
	setGradient();
}

function randomiseRGB() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Reference: https://stackoverflow.com/questions/1484506/random-color-generator
function randomiseHex() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomiseGradient);