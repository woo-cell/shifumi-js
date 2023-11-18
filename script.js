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
    return computerChoice;
}

// get user choice, if no choice or other choices, reprompt
function getUserChoice() {
    let userChoice = "";
    while (userChoice ==="" && userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
        userChoice = String(prompt("Rock, paper or scissors?")).toUpperCase();
    }
    return userChoice;
}

function playRound() {
    
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