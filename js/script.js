// Mainscreen Start

let nameInput = document.querySelector(".nameInput");
let startBtn = document.querySelector(".startBtn");
let errorHeading = document.querySelector(".errorHeading");
let playHeading = document.querySelector(".playHeading");
let playerOne = document.querySelector(".playerOne");
let screenOne = document.querySelector(".screenOne");

startBtn.addEventListener("click", function () {
  if (nameInput.value == "") {
    errorHeading.style.display = "block";
  } 
  else {
    playerOne.style.display = "block"
    screenOne.style.display = "none"
    playHeading.innerHTML = "Player - 1"
    errorHeading.style.display = "none"
  }
});

// Mainscreen End 


// PlayerOne Start

let nameInputTwo = document.querySelector(".nameInputTwo")
let playBtn = document.querySelector(".playBtn");
let playerTwoName = document.querySelector(".playerTwoName")

nameInputTwo.addEventListener("input", function () {
  const val = Number(nameInputTwo.value);
  if (nameInputTwo.value !== "" && !isNaN(val)) {
    nameInputTwo.value = Math.max(1, Math.min(10, val));
  }
})


playBtn.addEventListener("click", function () {
  if (nameInputTwo.value == "") {
    errorHeading.innerHTML = "Please give a number"
    errorHeading.style.display = "block"
  } 
  else if (nameInputTwo.value <= 0 || nameInputTwo.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  else {
    errorHeading.style.display = "none"
    playerTwoName.style.display = "block"
    playerOne.style.display = "none"
    playHeading.innerHTML = "Player - 2"
  }
});

// PlayerOne End 

// PlayerTwo Name Start

let nameInputThree = document.querySelector(".nameInputThree")
let startBtnTwo = document.querySelector(".startBtnTwo")
let playerTwoNumber = document.querySelector(".playerTwoNumber")

startBtnTwo.addEventListener("click", function () {
    if (nameInputThree.value == "") {
      errorHeading.style.display = "block"
      errorHeading.innerHTML = "Name Is Missing"
    }
    else {
      playerTwoNumber.style.display = "block"
      errorHeading.style.display = "none"
      playerTwoName.style.display = "none"
    }
})

// PlayerTwo Name End 


// Player Two Number Start

let playerTwoInput = document.querySelector(".playerTwoInput")
let playBtnTwo = document.querySelector(".playBtnTwo")
let guessNumber = document.querySelector(".guessNumber")
let congrats = document.querySelector(".congrats")
let name = document.querySelector(".name")

playBtnTwo.addEventListener("click", function () {
  const val = Number(nameInputTwo.value)
  if (playerTwoInput.value == val) {
    congrats.style.display = "block"
    name.innerHTML = `${nameInputThree.value}`
    playerTwoNumber.style.display = "none"
    playHeading.style.display = "none"
    errorHeading.style.display = "none"
  }
  else if (playerTwoInput.value == "") {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Please give a number"
  }
  else if (playerTwoInput.value <= 0 || playerTwoInput.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  
  else {
    errorHeading.style.display = "none"
    guessNumber.style.display = "block"
    playerTwoNumber.style.display = "none"
    playHeading.innerHTML = "Player - 2"
  }
})

// Player Two Number End 

// Guessing start 

let guessNumberThree = document.querySelector(".guessNumberThree")
let guessNumberInput = document.querySelector(".guessNumberInput")
let guessBtn = document.querySelector(".guessBtn")

guessBtn.addEventListener("click", function () {
  const val = Number(nameInputTwo.value)
  if (guessNumberInput.value == val) {
    congrats.style.display = "block"
    name.innerHTML = `${nameInputThree.value}`
    guessNumber.style.display = "none"
    playHeading.style.display = "none"
    errorHeading.style.display = "none"
  }
  else if (guessNumberInput.value == "") {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Please give a number"
  }
  else if (guessNumberInput.value <= 0 || guessNumberInput.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  else {
    errorHeading.style.display = "none"
    guessNumberThree.style.display = "block"
    guessNumber.style.display = "none"
    playHeading.innerHTML = "Player - 2"
  }
})


let guessNumberFour = document.querySelector(".guessNumberFour")
let guessNumberThreeInput = document.querySelector(".guessNumberThreeInput")
let guessThreeBtn = document.querySelector(".guessThreeBtn")

guessThreeBtn.addEventListener("click", function () {
  const val = Number(nameInputTwo.value)
  if (guessNumberThreeInput.value == val) {
    congrats.style.display = "block"
    name.innerHTML = `${nameInputThree.value}`
    guessNumberThree.style.display = "none"
    playHeading.style.display = "none"
    errorHeading.style.display = "none"
  }
  else if (guessNumberThreeInput.value == "") {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Please give a number"
  }
  else if (guessNumberThreeInput.value <= 0 || guessNumberThreeInput.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  else {
    errorHeading.style.display = "none"
    guessNumberFour.style.display = "block"
    guessNumberThree.style.display = "none"
    playHeading.innerHTML = "Player - 2"
  }
})



let lastGuess = document.querySelector(".lastGuess")
let guessNumberFourInput = document.querySelector(".guessNumberFourInput")
let guessFourBtn = document.querySelector(".guessFourBtn")

guessFourBtn.addEventListener("click", function () {
  const val = Number(nameInputTwo.value)
  if (guessNumberFourInput.value == val) {
    congrats.style.display = "block"
    name.innerHTML = `${nameInputThree.value}`
    guessNumberFour.style.display = "none"
    playHeading.style.display = "none"
    errorHeading.style.display = "none"
  }
  else if (guessNumberFourInput.value == "") {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Please give a number"
  }
  else if (guessNumberFourInput.value <= 0 || guessNumberFourInput.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  else {
    errorHeading.style.display = "none"
    lastGuess.style.display = "block"
    guessNumberFour.style.display = "none"
    playHeading.innerHTML = "Player - 2"
  }
})



let failure = document.querySelector(".failure")
let guessNumberFiveInput = document.querySelector(".guessNumberFiveInput")
let guessFiveBtn = document.querySelector(".guessFiveBtn")
let actualNumber = document.querySelector(".actualNumber")
let one = document.querySelector(".one")


guessFiveBtn.addEventListener("click", function () {
  const val = Number(nameInputTwo.value)
  if (guessNumberFiveInput.value == val) {
    congrats.style.display = "block"
    name.innerHTML = `${nameInputThree.value}`
    lastGuess.style.display = "none"
    playHeading.style.display = "none"
    errorHeading.style.display = "none"
  }
  else if (guessNumberFiveInput.value == "") {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Please give a number"
  }
  else if (guessNumberFiveInput.value <= 0 || guessNumberFiveInput.value >= 11) {
    errorHeading.style.display = "block"
    errorHeading.innerHTML = "Invalid Number"
  }
  else {
    failure.style.display = "block"
    actualNumber.innerHTML = `${nameInputTwo.value}`
    one.innerHTML = `${nameInput.value}`
    errorHeading.style.display = "none"
    lastGuess.style.display = "none"
    playHeading.style.display = "none"
  }
})

// Guessing end 






console.log("Amin");
// 3 types of function

// regular function
function math(numberOne, numberTwo) {
  let result = numberOne + numberTwo;
  console.log(result);
}
math(3, 9);
math(88, 99);

function info(name, age) {
  console.log("My name is" + " " + name + ". My age is" + " " + age);
}
info("Niaz", 21);
info("Sumon", 23);
info("Minhaj", 24);
// regular function

// Nameless Function/ Anonymous Function
let x = function () {
  console.log("Ami nameless function");
};
x();
// Nameless Function

// Arrow Function
let y = () => {
  console.log("Ami Arrow Function");
};
y();
// Arrow Function

let teams = ["Amin", "Arif", "Sumon", "Ahad"];

teams.map((item) => {
  console.log(item);
});

let details = {
  name: "Rita",
  age: 21,
  address: function () {
    console.log("Ami Demra Thaki"); // Nameless/Anonymous Function
  },
  height: () => {
    console.log("Tall"); // Arrow Function
  },
  maritalStatus: function marriage() {
    console.log("Engaged"); // Regular Function
  },
};

details.maritalStatus();

details.height();
details.address();

setTimeout(function () {
  console.log("This will run after 1 second"); // Anonymous Function
}, 1000);
