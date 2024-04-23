let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Please pick rock, paper, or scissors.").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Please enter a valid choice of rock, paper, or scissors (case insensitive).").toLowerCase();
    }
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return 0;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
        return 1;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
        return 2;
    }
}

function playGame(numberOfRounds) {
    let index = 0;
    while (index < numberOfRounds && humanScore <= (numberOfRounds / 2) && computerScore <= (numberOfRounds / 2)) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        console.log("The score is " + humanScore + " : " + computerScore);
        if (result > 0) {
            ++index;
        }
    }
    if (humanScore == computerScore) {
        console.log("The game is a tie!");
    } else if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame(5);