let humanScore = 0;
let computerScore = 0;
let counter = 1;
const limit = 5;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

// Adding event listeners to the buttons
rockBtn.addEventListener('click', () => {
    playGame('Rock');
});

paperBtn.addEventListener('click', () => {
    playGame('Paper');
});

scissorsBtn.addEventListener('click', () => {
    playGame('Scissors');
});

// Function to randomly return one of three values: rock, paper, or scissors
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return 'Rock';
    } else if (randomNumber <= 0.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
 const results = document.querySelector("#results");
 const scores = document.querySelector("#scores");
// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock' && computerChoice === 'Paper'
        || humanChoice === 'Paper' && computerChoice === 'Scissors'
        || humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        results.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'
        || humanChoice === 'Paper' && computerChoice === 'Rock'
        || humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        results.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        results.textContent=`It's a tie! Both chose ${humanChoice}`;
    }
    scores.textContent=`Your Score: ${humanScore}, Computer Score: ${computerScore}`;
}

// Function to play the game up to a limit of 5 rounds
function playGame(humanChoice) {
    if (counter <= limit) {
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        const finalResult= document.querySelector("#finalResults");
        counter++;
       
        if (counter > limit) {
            if (humanScore > computerScore) {
                finalResult.textContent='Game Over! You win the game!';
            } else if (humanScore < computerScore) {
                finalResult.textContent='Game Over! You lose the game!';
            }else if (humanScore === computerScore){
                finalResult.textContent = 'Draw, You are both good!!';
            }
             else {
                finalResult.textContent='Game Over! It\'s a draw!';
            }
        }
    } else {
        finalResult.textContent="The game is over. Please refresh the page to start again.";
    }
}
