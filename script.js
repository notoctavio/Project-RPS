const choices = [1,2,3]

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice() {
    const input = prompt("Please enter your choice: \n1 - Rock\n2 - Paper\n3 - Scissors");
    const playerChoice = Number(input);
    return playerChoice;
}

function getWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "Tie";
    } else if (
        (computerChoice === 1 && playerChoice === 3) ||
        (computerChoice === 2 && playerChoice === 1) ||
        (computerChoice === 3 && playerChoice === 2)
    ) {
        return "Computer";
    } else {
        return "Player";
    }
}

function playGame() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
        const winner = getWinner(getComputerChoice(), getPlayerChoice());
        if (winner === "Computer") {
            losses++;
        } else if (winner === "Player") {
            wins++;
        } else {
            ties++;
        }
    }
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Ties: " + ties);
}
    