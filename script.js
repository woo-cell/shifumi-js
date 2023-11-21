const rockButton = document.getElementById("btn1");
const paperButton = document.getElementById("btn2");
const scissorsButton = document.getElementById("btn3");
const userChoice = document.getElementById("user-choice");
const compChoice = document.getElementById("comp-choice");
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const winMessage = document.getElementById("winner");

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

let userPoints = 0;
let compPoints = 0;



function playRock(){
    let playerChoice = "ROCK";
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice,playerChoice);
    userChoice.textContent = "ROCK";
    compChoice.textContent = computerChoice;
    let message;
    if (winner === "D") {
        message = "its a draw";
        winMessage.textContent = message;
    } else if (winner === "U") {
        message = "rock beats scissors, you win this round";
        winMessage.textContent = message;
    } else if (winner === "C") {
        message = "rock is beaten by paper, you lost this round";
        winMessage.textContent = message;
    }
    pointCounter(winner);
    gameOver(userPoints,compPoints);
}

function playPaper(){
    let playerChoice = "PAPER";
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice,playerChoice);
    userChoice.textContent = "PAPER";
    compChoice.textContent = computerChoice;
    let message;
    if (winner === "D") {
        message = "its a draw";
        winMessage.textContent = message;
    } else if (winner === "U") {
        message = "paper beats rock, you win this round";
        winMessage.textContent = message;
    } else if (winner === "C") {
        message = "paper is beaten by scissors, you lost this round";
        winMessage.textContent = message;
    }
    pointCounter(winner);
    gameOver(userPoints,compPoints);
}

function playScissors(){
    let playerChoice = "SCISSORS";
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice,playerChoice);
    userChoice.textContent = "SCISSORS";
    compChoice.textContent = computerChoice;
    let message;
    if (winner === "D") {
        message = "its a draw";
        winMessage.textContent = message;
    } else if (winner === "U") {
        message = "scissors beats paper, you win this round";
        winMessage.textContent = message;
    } else if (winner === "C") {
        message = "scissors is beaten by rock, you lost this round";
        winMessage.textContent = message;
    }
    pointCounter(winner);
    gameOver(userPoints,compPoints);
}

function playRound(computerSelection, playerSelection) {
    let winner;
    if (playerSelection === computerSelection) {
        winner = "D";
        return winner;
    } else if (
        playerSelection === "PAPER" && computerSelection === "ROCK"
        || playerSelection === "SCISSORS" && computerSelection === "PAPER"
        || playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        winner = "U";
        return winner;
    } else if (
        playerSelection === "PAPER" && computerSelection === "SCISSORS"
        || playerSelection === "SCISSORS" && computerSelection === "ROCK"
        || playerSelection === "ROCK" && computerSelection === "PAPER") {
        winner = "C"
        return winner;
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = "ROCK";
    } else if (randomNumber === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    // addCChoiceToDiv(computerChoice);
    console.log(computerChoice);
    return computerChoice;
}


function pointCounter(won) {
    if (won === "U") {
        userPoints ++;
        userScore.textContent = userPoints;
    } else if (won === "C") {
        compPoints ++;
        compScore.textContent = compPoints;
    } else {

    }
}

function gameOver(uP,cP) {
    if (uP>=5) {
        alert("YOU WON, YOU SCORED 5 POINTS FIRST");
        resetScreen()
    } else if (cP>=5) {
        alert("YOU LOST, COMPUTER SCORED 5 POINTS FIRST");
        resetScreen()
    }
}

function resetScreen() {
    winMessage.textContent = "";
    userScore.textContent = "";
    compScore.textContent = "";
    userChoice.textContent = "";
    compChoice.textContent = "";
    userPoints = 0;
    compPoints = 0;
}