"use strict";
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
    console.log(computerChoice);
    return computerChoice;
}

// get user choice, if no choice or other choices, reprompt
function getUserChoice() {
    let userChoice = "";
    while (userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
        userChoice = String(prompt("Rock, paper or scissors?")).toUpperCase();
    }
    return userChoice;
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
    } else {
        winner = "C"
        return winner;
    }
}

/* if
comp rock user rock : draw
comp paper user paper : draw
comp sci user sci : draw

comp rock user paper : user win
comp paper user sci : user win
comp sci user rock : user win

comp rock user sci : comp win
comp paper user rock : comp win
comp sci user paper : comp win

*/

function game(num) {
    let score = 0;
    let wMessage;
    function scoreCounter(whoWins) {
        if (whoWins==="D") {
            score = score;
        } else if (whoWins==="U") {
            score ++;
        } else if (whoWins==="C") {
            score = score;
        }
        return score;
    }
    function winMessage(whoWins,point) {
        if (whoWins==="D") {
            wMessage = `It's a draw. You have ${point} points`;
        } else if (whoWins==="U") {
            wMessage = `You win, computer looses. You have ${point} points`;
        } else if (whoWins==="C") {
            wMessage = `You lose, computer wins. You have ${point} points`;
        }
        return wMessage;
    }
    for (let i = 0 ; i < num; i ++) {
        let wi = playRound(getComputerChoice(),getUserChoice());
        let sc = scoreCounter(wi);
        let ms = winMessage(wi,sc);
        console.log(ms);
    }
}