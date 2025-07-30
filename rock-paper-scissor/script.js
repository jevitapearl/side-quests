let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementById("user-choice");

let possibleChoices = document.getElementById("choices").querySelectorAll("button");

let game_container = document.getElementById("game-container");
let intro = document.getElementById("intro");

let resultText = document.getElementById("result-text");

let userChoice, computerChoice;
const choices = new Map([
  ["rock", "✊"],
  ["paper", "✋"],
  ["scissors", "✌"]
]);

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=>{
  userChoice = e.target.id;
  userChoiceDisplay.innerText = choices.get(userChoice);
  generateComputerChoice();
  getResult();
}))


function generateComputerChoice(){
  let randomNum = Math.floor(Math.random()*3);

  switch(randomNum){
  
  case 0:
    computerChoice = "rock";
    break;

  case 1:
    computerChoice = "paper";
    break;

  case 2:
    computerChoice = "scissors";
    break;
  }

  computerChoiceDisplay.innerText = choices.get(computerChoice);

}


function getResult(){
  let result = true;
  if (computerChoice===userChoice){
    resultText.innerText = "It's a draw!";
    return;
  }

  switch(userChoice){
  
    case "rock":
      if (computerChoice == "paper")
        result = false;
      break;

    case "paper":
      if (computerChoice === "scissors")
        result = false;
      break;

    case "scissors":
      if (computerChoice === "rock")
        result = false;
      break;
  }

  if (result){
    resultText.innerText = "You win!";
    userScore.innerText = parseInt(userScore.textContent)+1;
  }

  else{
    resultText.innerText = "You lost!";
    computerScore.innerText = parseInt(computerScore.textContent)+1;

  }

}

function playGame(){
  game_container.style.display = "flex";
  intro.style.display = "none";
}

function restart(){
  userScore.innerText = 0;
  computerScore.innerText = 0;
}

function exit(){
  game_container.style.display = "none";
  intro.style.display = "block";

}
