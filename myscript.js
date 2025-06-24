let humanScore = 0;
let computerScore = 0;


console.log("Hello, Franc!!")
playGame();

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

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        console.log("TIE!")
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
    }
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore++;
    }

}

function playGame() {
    
    for (let index = 0; index < 5; index++) {
        console.log("Round " + (index+1))
        const humanChoice = getHumanChoice(prompt("Select one (Rock, Paper, Scissors): "))
        const computerChoice = getComputerChoice()

        console.log("Player: " + humanChoice)
        console.log("Computer: " + computerChoice)
        playRound(humanChoice, computerChoice)

        console.log("SCORE:")
        console.log("Player: " + humanScore)
        console.log("Computer: " + computerScore)
    }

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