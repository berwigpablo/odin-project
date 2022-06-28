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

again.textContent = 'Play again?';

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


function buttonClick(){
    this.classList.toggle('clicked');
}

function replay(){ //resetting elements to play again
    playerScore = 0;
    computerScore = 0;
    let reset = document.querySelectorAll('p');
    reset.forEach(element => element.textContent = '');

    input.forEach(input => input.addEventListener('click', userPlay));
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
            console.log('It\'s a tie!');
            round.textContent = 'It\'s a tie!';

        } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
            console.log('The computer wins this round.');
            computerScore++;
            round.textContent = 'The computer wins this round!';

        } else if (computerSelection === 'paper' && playerSelection === 'rock'){
            console.log('The computer wins this round.');
            computerScore++;
            round.textContent = 'The computer wins this round!';

        } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
            console.log('The computer wins this round.');
            computerScore++;
            round.textContent = 'The computer wins this round.';

        } else {
            console.log('You win this round!');
            playerScore++;
            round.textContent = 'You win this round!';
        }
            console.log(`Player score is ${playerScore}\nComputer score is ${computerScore}`);
            scorePlayer.textContent = `Player score is ${playerScore}`;
            scoreComputer.textContent = `Computer score is ${computerScore}`;
              
    if(playerScore === 5 || computerScore === 5){ //winner check
        if (playerScore === computerScore){
            console.log('It\'s a tie!');
            result.textContent = 'It\s a tie!';
        } else if (playerScore > computerScore){
            console.log('You win!!!');
            result.textContent = 'You win!!!';
        } else {
            console.log('The computer wins!');
            result.textContent = 'The computer wins! ):';
        }
      input.forEach(input => input.removeEventListener('click', userPlay));
      input.forEach(input => input.removeEventListener('mousedown', buttonClick));
      input.forEach(input => input.removeEventListener('mouseup', buttonClick));

      playAgain.appendChild(again);
      playAgain.addEventListener('click', replay);
    }    
}








