console.log("Hello World")


let a = Math.random()
console.log(a)

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    compChoice = choices.at(Math.floor(Math.random() * choices.length));
    return compChoice;
}

function getPlayerChoice() {
    let playerInput = prompt("Pick rock, paper or scissors");
    let playerChoice = playerInput;
    return playerInput;
}

console.log(getComputerChoice());
console.log(getPlayerChoice());
