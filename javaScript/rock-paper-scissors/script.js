const selectionArray = ['rock','paper','scissors'];
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

input.forEach(input => input.addEventListener('click', userPlay));

function userPlay(){ //user selection
    playerSelection = this.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function computerPlay(){ //computer selection
    const randomNumber = Math.floor(Math.random() * selectionArray.length);
    return selectionArray[randomNumber];
}

function playRound(){ //game

    if (computerSelection === playerSelection){
        round.textContent = 'It\'s a tie!';
        round.style.color = 'brown';

    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore++;
        round.textContent = 'The computer wins this round!';
        round.style.color = 'red';

    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore++;
        round.textContent = 'The computer wins this round!';
        round.style.color = 'red';

    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore++;
        round.textContent = 'The computer wins this round!';
        round.style.color = 'red';

    } else {
        playerScore++;
        round.textContent = 'You win this round!';
        round.style.color = 'green';
    }
        scorePlayer.textContent = `Player score is ${playerScore}`;
        scoreComputer.textContent = `Computer score is ${computerScore}`;
              
    if(playerScore === 5 || computerScore === 5){ //checking for a winner
        if (playerScore === computerScore){
            result.textContent = 'It\s a tie!';
            result.style.color = 'brown';
        } else if (playerScore > computerScore){
            result.textContent = 'You win!!!';
            result.style.color = 'green';
        } else {
            result.textContent = 'The computer wins! ):';
            result.style.color = 'red';
        }
      input.forEach(input => input.removeEventListener('click', userPlay));
      input.forEach(input => input.removeEventListener('mousedown', buttonClick));
      input.forEach(input => input.removeEventListener('mouseup', buttonClick));

      again.textContent = 'Play again!';
      playAgain.appendChild(again);
      again.addEventListener('click', replay);
    } 
}








