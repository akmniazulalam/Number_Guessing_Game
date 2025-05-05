let playerOneName = document.querySelector(".nameInput");
let startBtn = document.querySelector(".startBtn");
let errorHeading = document.querySelector(".errorHeading");
let mainScreen = document.querySelector(".mainScreen");
let playerOne = document.querySelector(".playerOne");
let playHeading = document.querySelector(".playHeading");
let nameInputTwo = document.querySelector(".nameInputTwo")


startBtn.addEventListener("click", function () {
  if (playerOneName.value == "") {
    errorHeading.style.display = "block";
  } 
  else {
    // mainScreen.style.display = "none";
    // playerOne.style.display = "block";
    // playHeading.innerHTML = playHeading.innerHTML.replace("Wanna Play game?", "Player - 1");
    // playerOneName.placeholder = playerOneName.placeholder.replace("What is your name", "Give a number");
    // playerOneName.type = playerOneName.type.replace("text", "number");
    // startBtn.innerHTML = startBtn.innerHTML.replace("Start Game" ,"Let’s Play");
    // errorHeading.innerHTML = errorHeading.innerHTML.replace("Name Is Missing", "Please give a number");

    
    errorHeading.style.display = "none";
    playHeading.innerHTML = "Player - 1";
    playerOneName.value = "";
    playerOneName.placeholder = "Give a number";
    playerOneName.type = "number";
    startBtn.innerHTML = "Let’s Play";
    errorHeading.innerHTML = "Please give a number";


    playerOneName.addEventListener("input", function () {
      const val = Number(playerOneName.value);
      if (playerOneName.value !== "" && !isNaN(val)) {
        playerOneName.value = Math.max(1, Math.min(10, val));
      }
      
    });
    // playerOneName.addEventListener("input", function () {
    //   if(playerOneName.value < 1 && playerOneName.value > 10){
    //     errorHeading.style.display = "block";
    //   }
    // })
  }
});










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
