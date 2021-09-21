const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Get Elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

// add tge event
btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor+= hex[getRandomNumber(hex.length)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// Arraw Function with parameter
const getRandomNumber = (size) => Math.floor(Math.random()*size);