let humanScore = 0;
let computerScore = 0;
const score = document.createElement("h1");
const gameMessage = document.createElement("p");
score.textContent = "0 - 0";
gameMessage.textContent = "Welcome to Rock, Paper, Scissors! Please make a selection to start the game.";

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameMessage.textContent = "It's a draw!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        gameMessage.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
        humanScore++;
        score.textContent = humanScore + " - " + computerScore;
    } else {
        gameMessage.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
        score.textContent = humanScore + " - " + computerScore;
    }
    if (humanScore === 5) {
        gameMessage.textContent = "You won the game!";
    } else if (computerScore === 5) {
        gameMessage.textContent = "You lost the game!";
    }
}

const gameDisplayContainer = document.createElement("div");
gameDisplayContainer.appendChild(score);
gameDisplayContainer.appendChild(gameMessage);


const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors"

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

const container = document.createElement("div");
container.className = "container";
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
document.body.appendChild(gameDisplayContainer);
document.body.appendChild(container);