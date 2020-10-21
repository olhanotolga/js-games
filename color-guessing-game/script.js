var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var howToButton = document.querySelector("#howto");
var rules = document.getElementById("rules");
var closeButton = document.getElementById("close");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}
function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                messageDisplay.classList.remove("none");
                changeColors(clickedColor);
                resetButton.textContent = "Play again?";
                colorDisplay.style.backgroundColor = clickedColor;
                messageDisplay.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#0d1d30";
                messageDisplay.textContent = "Try again!";
                messageDisplay.classList.remove("none");
            }
        })
    }
}
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    
    
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    colorDisplay.style.backgroundColor = "#999999";
    messageDisplay.style.backgroundColor = "#eeeeee";
    messageDisplay.textContent = "";
    messageDisplay.classList.add("none");
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", reset);

howToButton.addEventListener("click", function(){
    console.log("click!");
    rules.classList.remove("none");
});
closeButton.addEventListener("click", function(){
    rules.classList.add("none");
});
