const rspList = ["Rock","Paper","Scissors"];
let restartGameBool = false;


function computerChoice(){
    let choice = Math.floor(Math.random()*3);
    return rspList[choice];
}
function displayUserChoice(string){
    userChoiceDisplay.textContent = string;
}
function displayComputerChoice(choice){
    computerChoiceDisplay.textContent = choice;

}
function gameResult(userChoice,computerChoice){
    if(userChoice == computerChoice){
        gameInstructions.textContent = "This round was a tie";
    }
    else if((userChoice == "Rock" & computerChoice == "Scissors") | (userChoice == "Paper" & computerChoice =="Rock")| (userChoice == "Scissors" & computerChoice =="Paper")){
               gameInstructions.textContent = "User won this round!"
        let updatedUserWins = +userWinsDisplay.textContent.split(" ")[1] + 1;
        userWinsDisplay.textContent = "WINS: "+ updatedUserWins;
        if (updatedUserWins == 5){
            restartGameBool = true;
            gameInstructions.textContent = "User won the round of 5! Please restart the game."
        }
        else{
            gameInstructions.textContent = "User won this round!"
        }
    }else{
        let updatedComputerWins = +computerWinsDisplay.textContent.split(" ")[1] + 1
        computerWinsDisplay.textContent = "WINS: "+ updatedComputerWins
        if (updatedComputerWins == 5){
            restartGameBool = true;
            gameInstructions.textContent = "Computer won the round of 5! Please restart the game"
        }
        else{
            gameInstructions.textContent = "Computer won this round!"
        }
    }

}

function createRestartButton(){
    const restartButton = document.createElement("button");
    restartButton.textContent = "RESTART"
    restartButton.classList.add("restart-button");
    gameInstructions.parentNode.appendChild(restartButton);
}

const gameInstructions = document.querySelector(".game-instructions");
const computerWinsDisplay = document.querySelector(".computer-win-counter")
const userWinsDisplay = document.querySelector(".user-win-counter")
const computerChoiceDisplay = document.querySelector(".computer-choice")
const gameButtonContainer = document.querySelector(".game-button-container")
const userChoiceDisplay = document.querySelector(".user-choice")

gameButtonContainer.addEventListener("click",(event)=>{
        if (event.target.tagName === "BUTTON" & restartGameBool == false){
                let userGameChoice = event.target.textContent
                displayUserChoice(userGameChoice);
                let computerGameChoice = computerChoice()
                displayComputerChoice(computerGameChoice)
                gameResult(userGameChoice,computerGameChoice)
                if(restartGameBool){
                    createRestartButton();
                }
        }
    }
)
gameInstructions.parentNode.addEventListener("click",(event)=>{
    if(event.target.tagName == "BUTTON"){
        displayUserChoice("");
        displayComputerChoice("");
        userWinsDisplay.textContent ="WINS: 0";
        computerWinsDisplay.textContent ="WINS: 0";
        gameInstructions.textContent = "Start the game";
        restartGameBool = false;
        event.target.remove();
    }
}
)
