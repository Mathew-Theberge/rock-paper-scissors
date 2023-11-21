const playerSelection = getplayerChoice()
const computerSelection = getComputerChoice()



function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
    case 0:
      computerChoice = "ROCK"
      break
    case 1:
      computerChoice = "PAPER"
      break
    case 2:
      computerChoice = "SCISSORS"
      break
  }
  return computerChoice

}
// generate three equaly random numbers
// asign those random numbers to either rock, paper or scissors
// return the random output



function getplayerChoice() {
  playerChoice = prompt("ROCK, PAPER, SCISSORS?")
  capitalizePlayerChoice = playerChoice.toUpperCase()
  return capitalizePlayerChoice
}

// get user input using prompt
// convert user input to all caps using toUpperCase
// return users input



function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "Draw Rock vs Rock"
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "You loose Rock vs Paper"
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You win Rock vs Scissors"
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "Draw Paper vs Paper"
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "You loose Paper vs Scissors"
  }  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "You win Paper vs Rock"
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "Draw Scissors vs Scissors"
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "You loose Scissors vs Rock"
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "You win Scissors vs Paper"
  }
}
// compare player selection and computer selection using if else statements
// use comparison operators to output a draw win or loss for the player



function game() {

}

console.log(playRound(playerSelection, computerSelection))