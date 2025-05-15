const startingMinutes = 25;
let time = startingMinutes * 60;

const pomodoroTimerEl = document.querySelector('.pomodoro-time');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let timerInterval = null;

function startTimer() {
    if (timerInterval === null) { 
        timerInterval = setInterval(pomodoroTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    time = startingMinutes * 60;
    updateDisplay();
}

function pomodoroTimer() {
    if (time <= 0) {
        pauseTimer();
        return;
    }

    time--;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    pomodoroTimerEl.innerHTML = `${minutes}:${seconds}`;
}

playButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();