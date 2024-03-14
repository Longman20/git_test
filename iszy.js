
        function getComputerChoice(){
            let m=Math.floor(Math.random()*10-1)+1;
            if (m<=4){
            return "paper";
            }else if(m>4&& m<=7) {
                return "rock";
            }else if(m>7&&m<=10){
                return "scissors"
            }
        }
        let choice=prompt("pick").toLowerCase()
        function getPlayerChoice(){
          if (choice=="paper"){
            return"paper"
          } else if (choice=="rock"){
            return"rock"
          }else if (choice=="scissors"){
            return"scissors"
          }
          else if(choice!=="rock"||"paper"||"scissors"){
            return "cancelled"
          }
        }
        const computerSelection=getComputerChoice()
        const playerSelection=getPlayerChoice()
        function playRound(){
           if (playerSelection=="paper"&&computerSelection=="rock"){
            return 'you win';
           }  else if(playerSelection=="paper"&&computerSelection=="scissors"){
            return "you lose";
           }else if(playerSelection=="paper"&&computerSelection=="paper"){
            return "draw";
           }else if(playerSelection=="rock"&&computerSelection=="paper"){
            return "you lose"
           }else if(playerSelection=="rock"&&computerSelection=="scissors"){
            return "you win"
           }else if(playerSelection=="rock"&&computerSelection=="rock"){
            return"draw"
           }else if(playerSelection=="scissors"&&computerSelection=="rock"){
            return"you lose"
        }else if(playerSelection=="scissors"&&computerSelection=="paper"){
            return"you win"
        }else if(playerSelection=="scissors"&&computerSelection=="scissors"){
            return"draw"
        }else if (playerSelection=="cancelled"){
            return "cancelled"
        }
    }
        const Game=playRound()
        function playGame(){
            let playerScore=0;
            let computerScore=0;
            if (Game=="you win"){
            return "USER WINS"; 
            }else if(Game=="you lose"){
                return "COMPUTER WINS"
            }else if (Game=="draw"){
                return "IT'S A TIE!!"
            }else if(Game=="cancelled"){
                return 'cancelled'
            }
        }
      console.log (playGame())
      