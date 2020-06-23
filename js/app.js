// Select and assign all necessary DOM elements.
let numSquares = 6;
let colors =[];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let MessageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");

init();

// Calls all necessary functions for the program to work.
function init(){
    setupModeButtons();
    setupSquares();
    resetButton.addEventListener("click", reset);
    reset();
}

// Sets up 'Easy' and 'Hard' Buttons: Enables them (upon click) to appear as selected,
// changes the number of squares active and resets the game.
function setupModeButtons(){
    for (i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
    })};
}

// Sets up squares to (upon click) be check against the Picked Color and display a resulting message on the Message Display.
function setupSquares(){
    for (i=0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
            let clickedColor = this.style.backgroundColor;
            // console.log(clickedColor)
            if(pickedColor === clickedColor){
                MessageDisplay.textContent = "Thats Right!";
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);          
            }
            else {
                this.style.backgroundColor = "#232323";
                MessageDisplay.textContent = "Wrong Choice!";
            }
    })};
}

// Called from the setupSquares function: changes all squares to the Picked Color in the event when the correct color is chosen.
function changeColors(color){
    for (i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;      
    }
}

// Does everything from generating new colors, to setting and displaying the new Picked Color, 
// to resetting the dashboard text content and color, to assigning the squares the newly generated colors.
function reset(){
    colors = generateRandomColors(numSquares);
    colorDisplay.textContent = pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    MessageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue"; 
    for (i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }  
    }
}

// Called by reset: generates and returns an array of random colors.
function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to array
    for(i=0; i < num; i++){
        arr.push(randomColor());
    };
    //return that array
    return arr;
}

// Called by generateRandomColor: generates and returns a random rgb color.
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Called by reset: generates a random number inorder to select a random index from the array 
// returned by generateRandomColors, inorder to select a random Picked Color. 
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}