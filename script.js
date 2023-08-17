const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let countdown;
let timeInSeconds = 60; // Initial time in seconds (5 minutes)
let isRunning = false;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(timeInSeconds);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startButton.textContent = "Pause";
    countdown = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(countdown);
        isRunning = false;
        startButton.textContent = "Start";
      }
    }, 1000);
  } else {
    clearInterval(countdown);
    isRunning = false;
    startButton.textContent = "Resume";
  }
}

function stopTimer() {
  clearInterval(countdown);
  isRunning = false;
  startButton.textContent = "Start";
}

function resetTimer() {
  clearInterval(countdown);
  isRunning = false;
  startButton.textContent = "Start";
  timeInSeconds = 60; // Reset time to 5 minutes
  updateTimerDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateTimerDisplay(); // Initial display
