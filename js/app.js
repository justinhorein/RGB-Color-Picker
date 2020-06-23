// Select and assign all Necessary DOM Elements
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

function init(){
    setupModeButtons();
    resetButton.addEventListener("click", reset);
    setupSquares();
    reset();
}

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

//Assign starting colors to squares
for (i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
};

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color){
    for (i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;      
    }
}

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

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

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
};

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     colorDisplay.textContent = pickedColor = pickColor();
//     MessageDisplay.textContent = "";
//     for (i=0; i< squares.length; i++){
//         if (colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }  
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     colorDisplay.textContent = pickedColor = pickColor();
//     MessageDisplay.textContent = "";
//     for (i=0; i< squares.length; i++){
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//         }  
// });

