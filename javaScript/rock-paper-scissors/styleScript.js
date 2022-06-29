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

//button style onclick
input.forEach(input => input.addEventListener('mousedown', buttonClick));
input.forEach(input => input.addEventListener('mouseup', buttonClick));
again.addEventListener('mousedown', buttonClick);
again.addEventListener('mouseup', buttonClick);

roundCount.appendChild(round);
scoreCount.appendChild(scorePlayer);
scoreCount.appendChild(scoreComputer);
gameResult.appendChild(result);
