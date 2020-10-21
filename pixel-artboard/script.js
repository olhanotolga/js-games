let actualColor = "#101c2a";
const defaultColor = "white";

const allDivs = document.querySelectorAll(".pixel");

for (let i = 0; i < allDivs.length; i++) {
	allDivs[i].addEventListener("click", function () {
		setPixelColor(this);
	});
}

function setColor(clickedColor) {
	// console.log("before", actualColor);
	actualColor = clickedColor;
	// console.log("after", actualColor);
}

function setPixelColor(pixel) {
	pixel.style.backgroundColor = actualColor;
}

function reset() {
	for (i = 0; i < allDivs.length; i++) {
		allDivs[i].style.backgroundColor = defaultColor;
	}
}
