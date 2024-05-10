// Variables //

let imageIndex = 1;

let timeoutId; // Variable zum Speichern der Timeout-ID
let remainingTime = 60; // Startzeit für den Timer (in Sekunden)
let timerRunning = false; // Flag, um den Timer-Status zu verfolgen

// Arrays with image filepaths //

const images = ["STD_01.jpg", "STD_02.jpg", "STD_03.jpg", "STD_04.jpg","STD_05.jpg","STD_06.jpg","STD_07.jpg","STD_08.jpg","STD_09.jpg","STD_10.jpg"]; 
const images_bw = ["STD_01_bw.jpg", "STD_02_bw.jpg", "STD_03_bw.jpg", "STD_04_bw.jpg","STD_05_bw.jpg","STD_06_bw.jpg","STD_07_bw.jpg","STD_08_bw.jpg","STD_09_bw.jpg","STD_10_bw.jpg"];

// Get references to the HTML elements //
console.log("getting elements");
const displayedImage = document.getElementById("displayedImage");
const btnContinue = document.getElementById("btnContinue");
const gameOverElement = document.getElementById("gameOverMessage");
const btnRestart = document.getElementById("btnRestart");
const timerElement = document.getElementById("timer");
const btnColours = document.getElementById("btnColours");
const btnBlackWhite = document.getElementById("btnBlackWhite");

//Hide everything, initial state
console.log("hiding stuff");
showElement(btnColours);
showElement(btnBlackWhite);
hideElement(btnContinue);
hideElement(timerElement);
hideElement(btnRestart);
hideElement(displayedImage);


// Functions //

function hideElement (element) {
  element.style.visibility = "hidden";
}

function showElement (element) {
  element.style.visibility = "visible";
}

function runGame() {

}

 // Button Click Events //
console.log("buttons should work now");
btnColours.addEventListener("click", () => {
  imagesToUse = [...images]; // Use the original color image list
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnContinue);
  showElement(timerElement);
  showElement(displayedImage);
  console.log("colours pressed");
  //runGame();
});

btnBlackWhite.addEventListener("click", () => {
  imagesToUse = [...images_bw]; // Use the black and white image list
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnContinue);
  showElement(timerElement);
  showElement(displayedImage);
  console.log("BW pressed");
});

btnContinue.addEventListener("click", () => {

});

btnRestart.addEventListener("click", () => {
  
});





  