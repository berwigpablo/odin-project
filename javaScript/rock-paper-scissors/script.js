let input = document.querySelectorAll('input');
let roundCount = document.getElementById('round-count');
let scoreCount = document.getElementById('score-count');
let gameResult = document.getElementById('game-result');
let playAgain = document.getElementById('play-again');

let rock = document.getElementById('rock');
let round = document.createElement('p');
let scorePlayer = document.createElement('p');
let scoreComputer = document.createElement('p');
let result = document.createElement('p');
let again = document.createElement('button');

const selectionArray = ['rock','paper','scissors'];
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

roundCount.appendChild(round);
scoreCount.appendChild(scorePlayer);
scoreCount.appendChild(scoreComputer);
gameResult.appendChild(result);

input.forEach(input => input.addEventListener('click', userPlay));

//button style onclick
input.forEach(input => input.addEventListener('mousedown', buttonClick));
input.forEach(input => input.addEventListener('mouseup', buttonClick));
again.addEventListener('mousedown', buttonClick);
again.addEventListener('mouseup', buttonClick);


function buttonClick(){ //styling buttons
    this.classList.toggle('clicked');
}

function replay(){ //resetting elements to play again
    playerScore = 0;
    computerScore = 0;
    let reset = document.querySelectorAll('p');
    reset.forEach(element => element.textContent = '');

    input.forEach(input => input.addEventListener('click', userPlay));
    input.forEach(input => input.addEventListener('mousedown', buttonClick));
    input.forEach(input => input.addEventListener('mouseup', buttonClick));

    playAgain.removeChild(again);
}

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








