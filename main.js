div = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    div.style.backgroundColor = "rgb(0, 196, 0)";
    humanScore++;
    return "You win Rock beats Scissors";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    div.style.backgroundColor = "red";
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    div.style.backgroundColor = "yellow";
    return "You are both Rock, tie";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    div.style.backgroundColor = "rgb(0, 196, 0)";
    humanScore++;
    return "You win Paper beats Rock";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    div.style.backgroundColor = "red";
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    div.style.backgroundColor = "yellow";
    return "You are both Paper, tie";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    div.style.backgroundColor = "rgb(0, 196, 0)";
    humanScore++;
    return "You win Scissors beats Paper";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    div.style.backgroundColor = "red";
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    div.style.backgroundColor = "yellow";
    return "You are both Scissors, tie";
  } else {
    div.style.backgroundColor = "purple";
    return "Wrong Input";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", wholeFunction);
});
function wholeFunction() {
  humanChoice = this.classList.value;
  computerChoice = getComputerChoice();
  divText = playRound(humanChoice, computerChoice);
  div.innerText = `${divText}\n The score is: ${humanScore} - ${computerScore}`;
  if (humanScore == 5) {
    div.innerText = `You Win! The score is:\n ${humanScore} - ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    div.innerText = `You Lose The score is:\n ${humanScore} - ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  }
}
