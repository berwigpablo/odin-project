const selectionArray = ['rock','paper','scissors'];
const computerSelection = computerPlay();
let playerSelection = prompt('Choose your selection between rock, paper or scissors');
playerSelection = playerSelection.toLowerCase();

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * selectionArray.length);
    return selectionArray[randomNumber];
}

function playRound(){
    if (computerSelection === playerSelection){
        alert('It\'s a tie!');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        alert('The computer wins!');
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        alert('The computer wins!');
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        alert('The computer wins!');
    } else {
        alert('You win!');
    }
}

console.log(`Computer selection: ${computerSelection}`);
console.log(`Player selection: ${playerSelection}`);

console.log(playRound());




