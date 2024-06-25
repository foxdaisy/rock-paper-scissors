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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) 
        {
            console.log(`Tied! Both of you chose ${humanChoice}.`);
            return;
        }
    
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper") 
        {
            humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            ++humanScore;
            return;
        } else {
            computerChoice = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
            return;
        }   
    }
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    if (humanScore === computerScore) {
        console.log(`It's a tie!\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`Congrats! You are the winner!\nYou: ${humanScore}\nComputer: ${computerScore}`);
    } else {
        console.log(`Sorry! The computer won.\nYou: ${humanScore}\nComputer: ${computerScore}`);
    }
}

playGame();