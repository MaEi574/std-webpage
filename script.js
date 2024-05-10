// Variables //

let imageIndex = 0;
const maxTime = 10; // in seconds
let timeoutId;
let remainingTime = maxTime; //in seconds
let timerRunning = false;

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
hideElement(gameOverElement);



// Functions //

function hideElement (element)
{
  element.style.visibility = "hidden";
}

function showElement (element)
{
  element.style.visibility = "visible";
}


function checkTimerForImage()
{
    remainingTime--;
    timerElement.textContent = remainingTime + " seconds";

      if (remainingTime<=0)
      {
        clearInterval(timeoutId);
        if (imageIndex >= 9)
          {
            displayGameOver();
            return;
          }
          else 
          {
            imageIndex++;
            displayedImage.src = imagesToUse[imageIndex];
            remainingTime = maxTime;
            timerElement.textContent = remainingTime + " seconds";
            timeoutId = setInterval(checkTimerForImage, 1000);
            return;
          }
        
      }

      else {
        // Time hasn't expired -> just continue to next iteration of loop
      }
}

function displayGameOver()
{
  console.log("initiating game over");
  hideElement(displayedImage);
  hideElement(timerElement);
  hideElement(btnContinue);
  showElement(gameOverElement);
}

function runGame()
{
  console.log("runGame entered");
  timeoutId = setInterval(checkTimerForImage, 1000);
}


    

 // Button Click Events //
console.log("buttons should work now");
btnColours.addEventListener("click", () => {
  imagesToUse = images.slice(0, images.length); // Use the original color image list
  displayedImage.src = imagesToUse[0];
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnContinue);
  showElement(timerElement);
  showElement(displayedImage);
  console.log("colours pressed");
  runGame();
});

btnBlackWhite.addEventListener("click", () => {
  imagesToUse = imagesToUse = images_bw.slice(0, images_bw.length);; // Use the black and white image list
  displayedImage.src = imagesToUse[0];
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnContinue);
  showElement(timerElement);
  showElement(displayedImage);
  console.log("BW pressed");
  runGame();
});

btnContinue.addEventListener("click", () => {
  clearInterval(timeoutId);
        if (imageIndex >= 9)
          {
            displayGameOver();
          }
          else 
          {
            imageIndex++;
            displayedImage.src = imagesToUse[imageIndex];
            remainingTime = maxTime;
            timerElement.textContent = remainingTime + " seconds";
            timeoutId = setInterval(checkTimerForImage, 1000);
          }
});

btnRestart.addEventListener("click", () => {
  
});




  