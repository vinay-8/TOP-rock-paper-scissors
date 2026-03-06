//User selection
    // input text. rock, paper or scissor
// Computer's choice.
    // should be random
    //Math.random() * 3
// Match those. Result - Draw, W or L
    // rock > scissors. Paper > rock . scissors > paper
// Ask if user wants to exit or continue.
// 

//No loops introduced rn
function getUserChoice(){
    let userChoice = prompt("Enter your choice: \n1 for rock\n2 for paper \n3 for scissors \ne to exit the game","");
    return userChoice;
}
function validateUserChoice(userChoice){
    if(userChoice == "e"){
        console.log("You exited the game. Have a good day!");
        return -1;
    }
    else if(userChoice != "1" && userChoice != "2" && userChoice != "3"){
        console.log(`${userChoice} is an invalid choice`);
        return -1;
    }
    return +userChoice - 1;
}

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    return computerChoice
}

function matchChoices(userChoice,computerChoice,arr){
    if((userChoice===computerChoice)){
        console.log(`Draw! You both chose ${arr[userChoice]}`)
    }
    else if( (userChoice == 0 && computerChoice == 2 ) || (userChoice == 1 && computerChoice == 0 ) || (userChoice == 2 && computerChoice == 1 )){
        console.log(`You win! You drew ${arr[userChoice]} and computer chose ${arr[computerChoice]}`);
    }
    else{
        console.log(`You lose! You drew ${arr[userChoice]} and computer chose ${arr[computerChoice]}`);
    }
}

let userChoice = getUserChoice();
let validUserChoice = validateUserChoice(userChoice); //Validating only once.
if(validUserChoice != -1){
    let computerChoice = getComputerChoice();
    let arr = ["rock","paper","scissors"];
    matchChoices(validUserChoice,computerChoice,arr);
}