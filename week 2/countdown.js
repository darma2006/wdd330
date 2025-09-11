// Get references to elements
const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
const pauseResumeButton = document.getElementById("pauseResumeButton");
const customTimeInput = document.getElementById("customTime");

let countdownTime = 10;       // Default start time
let countdownInterval = null; // Interval ID
let isPaused = false;

// Function to start or restart countdown
function startCountdown() {
  // Get time from input, fallback to 10
  const inputTime = parseInt(customTimeInput.value);
  countdownTime = isNaN(inputTime) ? 10 : inputTime;

  // Display starting time
  countdownDisplay.textContent = countdownTime;

  // Clear any previous countdown
  clearInterval(countdownInterval);
  isPaused = false;
  pauseResumeButton.textContent = "Pause";

  // Start new countdown interval
  countdownInterval = setInterval(() => {
    countdownTime--;
    countdownDisplay.textContent = countdownTime;

    if (countdownTime === 0) {
      clearInterval(countdownInterval);
      setTimeout(() => {
        countdownDisplay.textContent = "Time's up!";
      }, 500);
    }
  }, 1000);
}

// Function to pause or resume countdown
function togglePauseResume() {
  if (!isPaused) {
    // Pause
    clearInterval(countdownInterval);
    pauseResumeButton.textContent = "Resume";
    isPaused = true;
  } else {
    // Resume
    pauseResumeButton.textContent = "Pause";
    isPaused = false;

    countdownInterval = setInterval(() => {
      countdownTime--;
      countdownDisplay.textContent = countdownTime;

      if (countdownTime === 0) {
        clearInterval(countdownInterval);
        setTimeout(() => {
          countdownDisplay.textContent = "Time's up!";
        }, 500);
      }
    }, 1000);
  }
}

// Add event listeners
startButton.addEventListener("click", startCountdown);
pauseResumeButton.addEventListener("click", togglePauseResume);
