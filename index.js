// // console.log('Hello, world!');


// // function getComputerChoice() {
// //     const choices = ['rock', 'paper', 'scissors'];
// //     const randomNumber = Math.floor(Math.random() * 3);
// //     return choices[randomNumber];
// // }


// // function getHumanChoice() {
// //     const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
// //     if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
// //         return choice;
// //     } else {
// //         console.log("Invalid choice, please try again.");
// //         return getHumanChoice();
// //     }
// // }

// // // let humanScore = 0;
// // // let computerScore = 0;

// // // function playRound(humanChoice, computerChoice) {
// // //     humanChoice = humanChoice.toLowerCase();
// // //     if (humanChoice === computerChoice) {
// // //         console.log(`It's a tie! Both chose ${humanChoice}`);
// // //     } else if (
// // //         (humanChoice === 'rock' && computerChoice === 'scissors') ||
// // //         (humanChoice === 'paper' && computerChoice === 'rock') ||
// // //         (humanChoice === 'scissors' && computerChoice === 'paper')
// // //     ) {
// // //         humanScore++;
// // //         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
// // //     } else {
// // //         computerScore++;
// // //         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
// // //     }
// // // }

// // function playGame() {
// //     let humanScore = 0;
// //     let computerScore = 0;

// //     function playRound(humanChoice, computerChoice) {
// //         humanChoice = humanChoice.toLowerCase();
// //         if (humanChoice === computerChoice) {
// //             console.log(`It's a tie! Both chose ${humanChoice}`);
// //         } else if (
// //             (humanChoice === 'rock' && computerChoice === 'scissors') ||
// //             (humanChoice === 'paper' && computerChoice === 'rock') ||
// //             (humanChoice === 'scissors' && computerChoice === 'paper')
// //         ) {
// //             humanScore++;
// //             console.log(`You win! ${humanChoice} beats ${computerChoice}`);
// //         } else {
// //             computerScore++;
// //             console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
// //         }
// //     }

// //     // for (let i = 0; i < 5; i++) {
// //     //     const humanChoice = getHumanChoice();
// //     //     const computerChoice = getComputerChoice();
// //     //     playRound(humanChoice, computerChoice);
// //     // }

// //     console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
// // }

// // playGame();

// // Global variables for scores
// let playerScore = 0;
// let computerScore = 0;

// // Get DOM elements
// const playerScoreSpan = document.getElementById('playerScore');
// const computerScoreSpan = document.getElementById('computerScore');
// const gameResultDiv = document.getElementById('gameResult');

// // Function to get computer's choice
// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomNumber = Math.floor(Math.random() * 3);
//     return choices[randomNumber];
// }

// // Function to play one round of Rock, Paper, Scissors
// function playRound(playerSelection) {
//     const computerSelection = getComputerChoice();

//     let result = '';

//     // Determine the result of the round
//     if (playerSelection === computerSelection) {
//         result = "It's a tie!";
//     } else if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         playerScore++;
//         result = `You win this round! ${playerSelection} beats ${computerSelection}.`;
//     } else {
//         computerScore++;
//         result = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
//     }

//     // Update the scores in the DOM
//     playerScoreSpan.textContent = playerScore;
//     computerScoreSpan.textContent = computerScore;

//     // Display the round result
//     gameResultDiv.textContent = result;

//     // Check if someone has won the game
//     if (playerScore === 5) {
//         gameResultDiv.textContent = "You won the game!";
//         disableButtons();  // Disable buttons after game ends
//     } else if (computerScore === 5) {
//         gameResultDiv.textContent = "Computer won the game!";
//         disableButtons();  // Disable buttons after game ends
//     }
// }

// // Disable buttons when the game ends
// function disableButtons() {
//     document.getElementById('rock').disabled = true;
//     document.getElementById('paper').disabled = true;
//     document.getElementById('scissors').disabled = true;
// }

// // Event listeners for each button
// document.getElementById('rock').addEventListener('click', () => {
//     playRound('rock');
// });

// document.getElementById('paper').addEventListener('click', () => {
//     playRound('paper');
// });

// document.getElementById('scissors').addEventListener('click', () => {
//     playRound('scissors');
// });

// Global variables for scores
let playerScore = 0;
let computerScore = 0;

// Get DOM elements
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const gameResultDiv = document.getElementById('gameResult');

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play one round of Rock, Paper, Scissors
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    let result = '';

    // Determine the result of the round
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        result = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
    }

    // Update the scores in the DOM
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    // Display the round result
    gameResultDiv.textContent = result;

    // Check if someone has won the game
    if (playerScore === 5) {
        gameResultDiv.textContent = "You won the game!";
        disableButtons();  // Disable buttons after game ends
    } else if (computerScore === 5) {
        gameResultDiv.textContent = "Computer won the game!";
        disableButtons();  // Disable buttons after game ends
    }
}

// Disable buttons when the game ends
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event listeners for each button
document.getElementById('rock').addEventListener('click', () => {
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', () => {
    playRound('scissors');
});