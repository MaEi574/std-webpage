// Variables //

let imageIndex = 0;
const maxTime = 60; // in seconds
let timeoutId;
let remainingTime = maxTime; //in seconds
let timerRunning = false;
//let imageTransitionRunning = false;

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
hideElement(btnRestart);
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
        clearInterval(timeoutId);    //clearTimeout()
        if (imageIndex >= 9)
          {
            displayGameOver();
            return;
          }
          else 
          {
            displayedImage.src = "stopImage.jpg";
            hideElement(timerElement);
            hideElement(btnContinue);
            setTimeout(changeImage, 5000);
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
  showElement(btnContinue);
  showElement(timerElement);
  displayedImage.src = imagesToUse[0];
  console.log("runGame entered");
  timeoutId = setInterval(checkTimerForImage, 1000);   // check Time every 1s-> setTimeout(checkTimerforImage,1000)
}

function restartGame()
{
  console.log("Restart Game entered");
  imageIndex = 0;
  remainingTime = maxTime;
  hideElement(gameOverElement);
  showElement(btnColours);
  showElement(btnBlackWhite);
  hideElement(displayedImage);
}

function changeImage()
{
  showElement(timerElement);
  showElement(btnContinue);
  imageIndex++;
  displayedImage.src = imagesToUse[imageIndex];
  remainingTime = maxTime;
  timerElement.textContent = remainingTime + " seconds";
  timeoutId = setInterval(checkTimerForImage, 1000);     //setTimeout(checkTimerforImage,1000)
}
    

 // Button Click Events //
console.log("buttons should work now");
btnColours.addEventListener("click", () => {
  imagesToUse = images.slice(0, images.length); // Use the original color image list
  displayedImage.src = "stopImage.jpg";
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnRestart);
  showElement(displayedImage);
  console.log("colours pressed");
  setTimeout(runGame, 5000);
});

btnBlackWhite.addEventListener("click", () => {
  imagesToUse = imagesToUse = images_bw.slice(0, images_bw.length);; // Use the black and white image list
  displayedImage.src = "stopImage.jpg";
  hideElement(btnColours);
  hideElement(btnBlackWhite);
  showElement(btnRestart);
  showElement(displayedImage);
  console.log("BW pressed");
  setTimeout(runGame, 5000);
});

btnContinue.addEventListener("click", () => {
  clearInterval(timeoutId);
        if (imageIndex >= 9)
          {
            displayGameOver();
          }
          else 
          {
            displayedImage.src = "stopImage.jpg";
            hideElement(timerElement);
            hideElement(btnContinue);
            setTimeout(changeImage, 5000);

          }
});

btnRestart.addEventListener("click", () => {
hideElement(btnColours);
hideElement(btnBlackWhite);
hideElement(btnContinue);
hideElement(timerElement);
showElement(btnRestart);
showElement(displayedImage);
showElement(gameOverElement);
console.log("Restart Press");
restartGame();
});