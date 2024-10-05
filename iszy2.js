let humanScore = 0;
        let computerScore = 0;
        let counter = 1;
        const limit = 5;

        // function randomly returns one of three values: rock, paper or scissors
        function getComputerChoice(){
            randomNumber = Math.random()
            if (randomNumber <= 0.33){
                return("rock");
            } else if (randomNumber > 0.33 && randomNumber <= 0.66){
                return("paper");
            } else {
                return("scissors");
            }
        }

        // function get the choice of one of three variants from user
        function getHumanChoice(){
            choice = prompt("Write your variant");
            return choice
        }

        function playRound(humanChoice, computerChoice){
            humanChoice = humanChoice.toLowerCase();
            console.log(humanChoice)
            if (humanChoice === 'rock' && computerChoice === 'paper'
            || humanChoice === 'paper' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'rock'){
                computerScore++;
                console.log("You loose " + computerChoice + " beats " + humanChoice)
                console.log(`Your Score: ${humanScore}, Comp Score: ${computerScore}`)
            } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper'){
                humanScore++;
                console.log("You win " + humanChoice + " beats " + computerChoice)
                console.log(`Your Score: ${humanScore}, Comp Score: ${computerScore}`)
            } else if (humanChoice === computerChoice){
                console.log(`${humanChoice} "is the same as" ${computerChoice}`)
            }        
            counter++
        }

        function playGame(){
            while (counter <= limit){
                const humanChoice = getHumanChoice();
                const computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);

            if(humanScore > computerScore){
                console.log("You win!");
            } else {
                console.log("You loose!");
            }
            }
        }

        playGame()