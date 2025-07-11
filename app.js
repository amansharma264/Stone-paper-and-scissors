const buttons = document.querySelectorAll(".btn button");
const result = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let playerScore = 0;
let systemScore = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const computerSelection = systemPlay();
        const roundResult = playRound(btn.id.toLowerCase(), computerSelection);
        result.textContent = roundResult;
    });
});

function systemPlay() {
    const choose = ["rock", "paper", "scissors"];
    const autochoose = Math.floor(Math.random() * choose.length);
    return choose[autochoose];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        userScore.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        systemScore++;
        computerScore.textContent = systemScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}