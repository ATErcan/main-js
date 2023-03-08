const moves = [`Rock`, `Scissors`, `Paper`];

// Function that randomly selects move for computer
const computerPlay = () => {
  return Math.floor(Math.random() * 3);
}

// Function to prevent invalid inputs
const validityCheck = () => {
  let input = true;
  while(input) {
    const playerSelection = (prompt(`Enter your move:`)).toLowerCase();
    switch(playerSelection) {
      case `rock`:
        input = false;
        return playerSelection;
      case `paper`:
        input = false;
        return playerSelection;
      case `scissors`:
        input = false;
        return playerSelection;
      default:
        break;
    }
  }
}

// single selection for tasks a, b, c, d
// const computerSelection = computerPlay();

// Single round play for tasks a, b, c, d
// console.log(playRound(validityCheck(), computerSelection));

let playerScore = 0;
let computerScore = 0;

function calculateResult(playerSelection) {
  for (let i = 0; i < moves.length; i++) {
    if(playerSelection === moves[i].toLowerCase()){
      return i;
    }
  }
}

function playRound(playerSelection, computerSelection) {
  const result = calculateResult(playerSelection) - computerSelection;
  switch(result){
    case -1:
      playerScore += 1;
      return `You Won! ${moves[calculateResult(playerSelection)]} beats ${
        moves[computerSelection]
      }!`;
    case 2:
      playerScore += 1;
      return `You Won! ${moves[calculateResult(playerSelection)]} beats ${
        moves[computerSelection]
      }!`;     
    case 1:
      computerScore += 1;
      return `You Lose! ${moves[computerSelection]} beats ${
        moves[calculateResult(playerSelection)]
      }!`;
    case -2:
      computerScore += 1;
      return `You Lose! ${moves[computerSelection]} beats ${
        moves[calculateResult(playerSelection)]
      }!`;
    case 0:
      playerScore += 1;
      computerScore += 1;
      return `It's a draw!`;
  }
}

/* e) Write a NEW function called game(). Call the playRound
 function inside of this one to play a 5 round game that keeps 
 score and reports a winner or loser at the end. */

// Function to display the final result of the game
function checkResults() {
  if (playerScore > computerScore) {
    return `Congratulations! You Won!`
  } else if (computerScore > playerScore) {
    return `You Lose! Better Luck Next Time!`
  } else {
    return `It's a Draw!`
  }
}

// Main function to run the game
function game() {
  let round = 5;
  for (let i = 0; i < round; i++) {
    const computerSelection = computerPlay();
    console.log(playRound(validityCheck(), computerSelection));
    console.log(`Player ${playerScore} - ${computerScore} Computer`);
  }

  console.log(checkResults())
}

game();

