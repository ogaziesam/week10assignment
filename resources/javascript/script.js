const buttons = document.querySelectorAll("button");
const resultMessage = document.getElementById("result-message");
const winCount = document.getElementById("win-count");
const loseCount = document.getElementById("lose-count");
const tieCount = document.getElementById("tie-count");

let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = generateComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        updateUI(playerChoice, computerChoice, result);
    });
});

function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "win";
    } else {
        computerScore++;
        return "lose";
    }
}

function updateUI(playerChoice, computerChoice, result) {
    resultMessage.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. You ${result}!`;

    winCount.textContent = playerScore;
    loseCount.textContent = computerScore;
    tieCount.textContent = round - (playerScore + computerScore);

    round++;

    if (round === 5) {
        endGame();
    }
}

function endGame() {
    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (playerScore > computerScore) {
        resultMessage.textContent = "You win the game!";
    } else if (playerScore < computerScore) {
        resultMessage.textContent = "Computer wins the game!";
    } else {
        resultMessage.textContent = "It's a tie game!";
    }
}
