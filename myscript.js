let humanScore = 0;
let computerScore = 0;
let roundWinner = '';


console.log("Hello, Franc!!")

const btnRock = document.getElementById('btnRock')
const btnPaper = document.getElementById('btnPaper')
const btnScissors = document.getElementById('btnScissors')

btnRock.addEventListener("click", ()=> handleClick("rock"));
btnPaper.addEventListener("click", ()=> handleClick("paper"));
btnScissors.addEventListener("click", () => handleClick("scissors"));

// playGame();

function getHumanChoice(choice) {
    choice = choice.toLowerCase();
    return choice;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
    else {
        return "error";
    }
}

function handleClick(humanChoice) {
    if (isGameOver()) {
        console.log("Game Over!")
        return
    }
    else {
        playRound(humanChoice,getComputerChoice())
    }

    if (isGameOver()) {
        console.log("Game Over!")
        resetGame();
    }
    

    
}


const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

function playRound(humanChoice, computerChoice){
    console.log(`human: ${humanChoice}`);
    console.log(`computer: ${computerChoice}`);
    if (humanChoice == computerChoice) {
        console.log("TIE!")
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log("human score!")
    }
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore++;
        console.log("computer score!")
    }

    updateScores();

}

function updateScores() {
    playerScorePara.textContent = `Player Score : ${humanScore}`
    computerScorePara.textContent = `Computer Score : ${computerScore}`
}

function isGameOver() {
    if (humanScore === 5 || computerScore === 5){
        console.log("GAME OVER!")
        return true
    } 
    else
        return false
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function playGame() {
    
    // for (let index = 0; index < 5; index++) {
        console.log("Round " + (index+1))
        const humanChoice = getHumanChoice(prompt("Select one (Rock, Paper, Scissors): "))
        const computerChoice = getComputerChoice()

        console.log("Player: " + humanChoice)
        console.log("Computer: " + computerChoice)
        playRound(humanChoice, computerChoice)

        console.log("SCORE:")
        console.log("Player: " + humanScore)
        console.log("Computer: " + computerScore)
    // }

    if (humanScore > computerScore){
        console.log("You win!")
    }
    else if (computerScore > humanScore) {
        console.log("You lose!")
    }
    else {
        console.log("It's a tie!")
    }
    console.log("Game Over!")

}

