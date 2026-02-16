//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts;
let won = 0;
let lost = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("Random Number: " + randomNumber);
  attempts = 0;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";
  document.querySelector("#guessResult").textContent = "";

  document.querySelector("#guessBtn").style.display = "inline";


  //adding focus to textbox
  let playerGuess = document.querySelector("#userGuess");
  playerGuess.focus();
  playerGuess.value = "";

  let feeback = document.querySelector("#feedback");
  feeback.textContent = "";
  document.querySelector("#attemptsLeft").textContent = "7";
  document.querySelector("#won").textContent = `${won} `;
  document.querySelector("#lost").textContent = `${lost} `;
}

function guess() {
  let userGuess = document.querySelector("#userGuess").value;
  //"value" is only for input elements

  // alert(userGuess);
  attempts++;
  if (userGuess > 99 || userGuess < 1) {
    document.querySelector("#guessResult").textContent =
      "Enter a number between 1 and 99";
    document.querySelector("#guessResult").style.color = "purple";
    attempts--;
  } else if (userGuess == randomNumber) {
    document.querySelector("#guessResult").textContent =
      "You guessed it! You Won!";
    document.querySelector("#guessResult").style.color = "green";
    document.querySelector("#feedback").textContent += `${userGuess} `;
    won++;
    document.querySelector("#won").textContent = `${won} `;
    gameOver();
  } else {
    if (attempts >= 7) {
      document.querySelector("#guessResult").textContent =
        "Out of Guesses! The Number is " + randomNumber;
      lost++;
      document.querySelector("#lost").textContent = `${lost} `;
      gameOver();
    } else if (userGuess < randomNumber) {
      document.querySelector("#guessResult").textContent = "Too Low!";
      document.querySelector("#guessResult").style.color = "blue";
    } else {
      document.querySelector("#guessResult").textContent = "Too High!";
      document.querySelector("#guessResult").style.color = "red";
    }
    document.querySelector("#feedback").textContent += `${userGuess} `;
    document.querySelector("#attemptsLeft").textContent =
      "Attempts Left: " + (7 - attempts);
    document.querySelector("#attemptsLeft").textContent = `${7 - attempts} `;
  }
}

function gameOver() {
  let guessBtn = document.querySelector("#guessBtn");
  let resetBtn = document.querySelector("#resetBtn");
  guessBtn.style.display = "none";
  resetBtn.style.display = "inline";
}
