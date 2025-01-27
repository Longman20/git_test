let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
const maxRounds = 5;

// Function that randomly returns one of three values: rock, paper, or scissors
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    let resultMessage;

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        resultMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    } else {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    }

    document.getElementById("results").textContent = resultMessage;
    document.getElementById("scores").textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
}

// Function to handle button clicks and update the game
function handleButtonClick(humanChoice) {
    if (roundCounter > maxRounds) {
        document.getElementById("finalResults").textContent = "The game is over! Refresh to play again.";
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    roundCounter++;

    if (roundCounter > maxRounds) {
        let finalMessage;
        if (humanScore > computerScore) {
            finalMessage = "Congratulations! You win the game!";
        } else if (humanScore < computerScore) {
            finalMessage = "You lose the game! Better luck next time!";
        } else {
            finalMessage = "It's a tie! What a close game!";
        }
        document.getElementById("finalResults").textContent = finalMessage;
    }
}

// Add event listeners to buttons
document.getElementById("rockbutton").addEventListener("click", () => handleButtonClick("rock"));
document.getElementById("paperbutton").addEventListener("click", () => handleButtonClick("paper"));
document.getElementById("scissorsbutton").addEventListener("click", () => handleButtonClick("scissors"));
