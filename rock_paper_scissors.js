const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

const result = document.getElementById('result');
const computerCounter = document.getElementById('computer-score');
const userCounter = document.getElementById('your-score');

const elements = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

let userChoice;
let computerChoice;

userCounter.innerText = userScore;
computerCounter.innerText = computerScore;

[rockButton, paperButton, scissorsButton]
    .forEach(
        button => button.addEventListener
            ('click', () => {
                userChoice = button.id;
                computerChoice = elements[Math.floor(Math.random() * elements.length)]

                result.innerText = handleResult(userChoice, computerChoice);

                userCounter.innerText = userScore;
                computerCounter.innerText = computerScore;
            })
    )

resetButton.addEventListener('click', reset);

function handleResult(userChoice, computerChoice) {

    const winCases = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    }

    if (computerChoice === userChoice) {
        return 'It\'s tie!';
    }

    if (winCases[userChoice] === computerChoice) {
        userScore++
        return `You win! ${userChoice} beats ${computerChoice}`;

    } else {
        computerScore++
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
}

function reset() {
    userScore = 0;
    computerScore = 0;

    userCounter.innerText = userScore;
    computerCounter.innerText = computerScore;

    result.innerText = '';
}