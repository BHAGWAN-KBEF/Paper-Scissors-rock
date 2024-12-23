// console.log('Hello, world!');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase();
//     if (humanChoice === computerChoice) {
//         console.log(`It's a tie! Both chose ${humanChoice}`);
//     } else if (
//         (humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         humanScore++;
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//     } else {
//         computerScore++;
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//     }
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();