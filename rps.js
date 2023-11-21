
let playerScore = 0
let computerScore = 0
let totalScore = 0

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
  playerSelection = getplayerChoice()
  computerSelection = getComputerChoice()
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "Draw Rock vs Rock"
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore = ++computerScore
    return "You loose Rock vs Paper"
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore = ++playerScore
    return "You win Rock vs Scissors"
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "Draw Paper vs Paper"
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore = ++computerScore
    return "You loose Paper vs Scissors"
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore = ++playerScore
    return "You win Paper vs Rock"
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "Draw Scissors vs Scissors"
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore = ++computerScore
    return "You loose Scissors vs Rock"
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore = ++playerScore
    return "You win Scissors vs Paper"
  }
}
// compare player selection and computer selection using if else statements
// use comparison operators to output a draw win or loss for the player



function game() {
  while (totalScore < 5 && playerScore < 3 && computerScore < 3) {
    console.log(playRound())
    totalScore = playerScore + computerScore
  }
if (playerScore < computerScore) {
  console.log(`YOU LOOSE PlayerScore: ${playerScore} Computer: ${computerScore}`)
} else {
  console.log(`YOU WIN PlayerScore: ${playerScore} Computer: ${computerScore}`)
}
}


game()

// each playRound() keep track of who won or lost 
// add a point to a varible assigned to each player for each win
// store and compare those values and loop until one hits 3
// when someone has 3 points declare them the winner