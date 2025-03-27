console.log("Hello World")

//random number gen
let a = Math.random()
console.log(a)

//generate a computer choice
function getComputerChoice() {
    let numChoice = Math.floor(Math.random() *3) +1;

    if (numChoice === 1) {
        return ("rock");
    }
    else if (numChoice === 2) {
        return ("paper")
    }

    else if (numChoice === 3) {
        return ("scissors")
    }
}

//record a player's choice from a prompt
function getHumanChoice() {
    let playerInput = prompt("Pick rock, paper or scissors");
    let playerChoice = playerInput;
    return playerChoice;
}

//log the computer and player choice
console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
            return("It's a tie!")
    }
    
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return("You win!")
        }
        
        else {
            computerScore++;
            return("Computer wins!")}
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            return("You win!")
        }
        else {
            computerScore++;
            return("Computer wins!")
        }
    }    
    
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            return("You win!")
        }
        else {
            computerScore++;
            return("Computer wins!")
        }
    }
}

console.log(humanScore)
console.log(computerScore)


function playGame() {






}










