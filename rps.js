console.log("Welcome to Rock, Paper, Scissors!")

//random number gen
let a = Math.random()
//console.log(a)

//generate a random number, round it down (floor)
//3 times (*3), and then add 1 to it
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

//record input of player's choice from a prompt
//then converts it to lowercase
//assigns that input to the playerChoice variable
function getHumanChoice() {
    let playerInput = prompt("Pick rock, paper or scissors").toLowerCase();
    let playerChoice = playerInput;
    return playerChoice;
}

//log the computer and player choice. this was a test
//console.log(getComputerChoice());
//console.log(getHumanChoice());

//create the score for human and computer, and set it to 0
let humanScore = 0
let computerScore = 0

//this is the function for one round of the game
//with each possible result
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

//console.log(humanScore)
//console.log(computerScore)

//function for the five rounds and score keeping, which calls the one round function
//scores are set to 0, and a 'times' variable is created
//'index' starts at 0. once the 'index' is more than 'times' = game played 5 times
//then for loop stops
function playGame() {
    humanScore = 0;
    computerScore = 0;
    const times = 5;

    for (let index = 0; index < times; index++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Game ${index + 1}`);
        console.log(`Human: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        
    }

    if (humanScore > computerScore) {
        console.log("Human wins the best of five!");
    }    
        else if (humanScore < computerScore) {
            console.log("Computer wins the best of five!")
        }
        else {
            console.log("It's a draw!")
        }
}
//starts the game, which calls upon all the functions above
playGame();









