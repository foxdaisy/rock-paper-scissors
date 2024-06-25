function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2) + 1;
    let computerChoice;
    switch(randomNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            console.error("Unexpected number");
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    if (checkValidity(humanChoice) === false) {
        return;
    }
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function checkValidity(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return true;
    } else {
        console.error("Invalid Play: You must type rock, paper or scissors.");
        return false;
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
// console.log(computerChoice);
console.log(humanChoice)