//global constants
const clueHoldTime = 600;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const patternLength = 8;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var numMistakes;

//The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function genPattern() {
  for (let i = 0; i < patternLength; i++) {
    let x = getRandomInt(1, 5);
    pattern.push(x);
  }
}

function startGame() {
  //initialize game variables
  numMistakes = 0;
  progress = 0;
  gamePlaying = true;
  pattern = [];
  genPattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("mistakes").innerHTML = "Mistakes: 0";
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("mistakes").innerHTML = "";
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. 😔🤡");
}

function winGame() {
  stopGame();
  alert("Congrats! You won. 🥳🤩");
}

/// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//playing clues
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//player guessing
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn === pattern[guessCounter]) {   //correct button pressed
    if (guessCounter === progress) {   //if end of pattern
      if (progress === pattern.length - 1) {   //if last turn
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    updateMistakes();
    if (numMistakes === 3) {
      setTimeout(loseGame, 500);
    } else {
      playClueSequence();
    }
  }
}

function updateMistakes() {
  numMistakes++;
  document.getElementById("mistakes").innerHTML = "Mistakes: " + numMistakes;
}

/*
function timer() {
  var count = 10;
  var interval = setInterval(function(count){
    printTime(count);
    count--;
    if (count === 0){
      clearInterval(interval);
    }
  }, 1000, count);
}

function printTime(count) {
  document.getElementById("timer").innerHTML = "Time left: " + count;
  console.log(count);
} */

