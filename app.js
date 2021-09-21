const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get The Elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// adidng the evenetListener
btn.addEventListener("click", function(){
    // get random number between 0 & 3 size of array
    // Formula from gitHub Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    //const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    // Other Solution
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent = colors[randomNumber];
   
});

// my Arrow funvction to get a random number
const getRandomNumber = () => Math.floor(Math.random()*colors.length)