const selectionArray = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * selectionArray.length);
    return selectionArray[randomNumber];
}

  function playRound(playerSelection, computerSelection){
    for(i = 0; i < 5; i++){

        computerSelection = computerPlay();

        tryError();
        function tryError(){
            playerSelection = prompt('Choose your selection between rock, paper or scissors');
            playerSelection = playerSelection.toLowerCase();

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
            console.log('Please type rock, paper or scissors');
            i--;

        } else if (computerSelection === playerSelection){
            console.log('It\'s a tie!');

        } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
            console.log('The computer wins this round.');
            computerScore++;

        } else if (computerSelection === 'paper' && playerSelection === 'rock'){
            console.log('The computer wins this round.');
            computerScore++;

        } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
            console.log('The computer wins this round.');
            computerScore++;

        } else {
            console.log('You win this round!');
            playerScore++;
        }
            console.log(`Player score is ${playerScore}\nComputer score is ${computerScore}`);
      }
      console.log(`i value is: ${i}`);
    }
   return playerScore, computerScore;
  }

playRound();

if (playerScore === computerScore){
    console.log('It\'s a tie!');
} else if (playerScore > computerScore){
    console.log('You win!!!');
} else {
    console.log('The computer wins!');
}

console.log(`Player score is ${playerScore}\nComputer score is ${computerScore}`);





