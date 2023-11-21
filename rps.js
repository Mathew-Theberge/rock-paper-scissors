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



function playerSelection() {

}

// get user input using prompt
// convert user input to all caps using toUpperCase
// return users input



function playRound() {

}
// compare player selection and computer selection using if else statements
// use comparison operators to output a draw win or loss for the player



function game() {

}

console.log(getComputerChoice())