let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let timerDisplay = document.getElementById("timer");
let randomNumber;
let timer;
let timeLeft = 30;
let gameOver = false;

function generateNumber() {
  randomNumber = Math.ceil(Math.random() * 100);
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameOver = true;
      gameResult.textContent = "⏳ Time's up! Game Over.";
      gameResult.style.backgroundColor = "#dc3545";
    } else {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
    }
  }, 1000);
}

function checkGuess() {
  if (gameOver) return;
  let guessedNumber = parseInt(userInput.value);
  if (isNaN(guessedNumber)) {
    gameResult.textContent = "Please enter a valid number!";
    gameResult.style.backgroundColor = "#dc3545";
    return;
  }
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "📈 Too High! Try Again.";
    gameResult.style.backgroundColor = "#fd7e14";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "📉 Too Low! Try Again.";
    gameResult.style.backgroundColor = "#fd7e14";
  } else {
    gameResult.textContent = "🎉 Congratulations! You got it right!";
    gameResult.style.backgroundColor = "#28a745";
    clearInterval(timer);
    gameOver = true;
  }
}

function resetGame() {
  clearInterval(timer);
  timeLeft = 30;
  timerDisplay.textContent = timeLeft;
  userInput.value = "";
  gameResult.textContent = "";
  gameResult.style.backgroundColor = "transparent";
  gameOver = false;
  generateNumber();
  startTimer();
}


generateNumber();
startTimer();
