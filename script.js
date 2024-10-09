// Create a function that randomly return rock, paper, or scissors called getComputerChoice.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        }
}

function getHumanChoice() {
    // Validate human input, if input wrong, then re-prompt, use prompt to get input from human.
    let humanChoice = prompt("What's your choice? Enter rock, paper, or scissors!").toLowerCase();

    switch(humanChoice) {
        case 'rock':
            return 'Rock'
        case 'paper':
            return 'Paper'
        case 'scissors':
            return 'Scissors'
        default:
            alert("That's not a valid choice. Please choose again.")
            return getHumanChoice()
    }
}

let humanScore = 0;
let computerScore = 0;

// const rockButton = document.querySelector('.rock')
// const paperButton = document.querySelector('.paper')
// const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const humanScoreSpan = document.querySelector('.human-score')
const computerScoreSpan = document.querySelector('.computer-score')
const buttons = document.querySelectorAll('button')

// Create function that plays a single round of the game. The function should take two parameters.
// -human

function playRound(humanSelection, computerSelection) {
    const p = document.createElement('p')

    // Logic to decide who's the winner. 
    if (humanSelection === computerSelection) {    
        p.innerText = `Draw, You both choose the same option. You choose ${humanSelection}, while the computer choose ${computerSelection}.`
    } else if (
        (humanSelection === 'Rock') && (computerSelection === 'Scissors') ||
        (humanSelection === 'Paper') && (computerSelection === 'Rock') ||
        (humanSelection === 'Scissors') && (computerSelection === 'Paper')
    ) {
        p.innerText = `You win, ${humanSelection} beats ${computerSelection}. You choose ${humanSelection}, while the computer choose ${computerSelection}.`
        humanScore++;
    } else {
        p.innerText = `You lose, ${computerSelection} beats ${humanSelection}. You choose ${humanSelection}, while the computer choose ${computerSelection}.`
        computerScore++
    }
    outcomeDiv.appendChild(p)
}

const checkForWinner = (humanScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (humanScore === 5) {
        h2.classList.add('human-won')
        h2.innerText = `Congratulations! You won the game. Your score is ${humanScore}, while the computer's score is ${computerScore}.`
    }

    if (computerScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `Oh no, you lost the game. Your score is ${humanScore}, while the computer's score is ${computerScore}.`
    }
    outcomeDiv.append(h2)
}

const updateScores = (humanScore, computerScore) => {
    humanScoreSpan.innerText = `Human Score: ${humanScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanSelection = `${button.className}`
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        updateScores(humanScore, computerScore)
        checkForWinner(humanScore, computerScore)
    })
})
// rockButton.addEventListener('click', () =>  {
//     const humanSelection = 'Rock'
//     const computerSelection = getComputerChoice()
//     playRound(humanSelection, computerSelection)
//     updateScores(humanScore, computerScore)
//     checkForWinner(humanScore, computerScore)
// })

// paperButton.addEventListener('click', () =>  {
//     const humanSelection = 'Paper'
//     const computerSelection = getComputerChoice()
//     playRound(humanSelection, computerSelection)
//     updateScores(humanScore, computerScore)
//     checkForWinner(humanScore, computerScore)
// })

// scissorsButton.addEventListener('click', () =>  {
//     const humanSelection = 'Scissors'
//     const computerSelection = getComputerChoice()
//     playRound(humanSelection, computerSelection)
//     updateScores(humanScore, computerScore)
//     checkForWinner(humanScore, computerScore)
// })

// function startGame() {
//     alert("This is a rock paper scissors game. You will play against the computer for 5 rounds.")
     
//     let round = 0;
//     do {
//         round += 1;
//         //alert("Round " +round +". Fight!")
//         playGame();
//     } while (round < 5);
     
//     if (humanScore > computerScore) {
//         return 'Congratulations! You won the game.'
//     } else if (humanScore < computerScore) {
//         console.log("Oh no, you lost the game. Better luck next time!")
//     } else {
//         console.log("You tied against the computer. Guess thats better than losing.")
//     }
  
//     let rematch = window.confirm("Do you want a rematch?");
//     if (rematch) {
//         round = 0;
//         humanScore = 0;
//         computerScore = 0;
//         startGame();
//     } else {
//         }
// }

// startGame();