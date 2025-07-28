let humanChoice;
let computerChoice;

function getComputerChoice(){
    computerChoice = Math.floor((Math.random) * 3);

    if(computerChoice == 1){
        return "rock";
    }
    else if(computerChoice == 2){
        return "paper";
    }
    else{
        return "scissors";
    }

}

function getHumanChoice(){
    humanChoice = prompt("Your choice here: ");

    return humanChoice;
}

let computer = getComputerChoice();
let human = getHumanChoice();

function gameRound(compute,human){
    if (human == "rock" && computer == "scissors"
    || human == "scissors" && computer == "paper"
    || human == "paper" && computer == "rock"){
        return "You win";
    }
    
    else if(human == computer){
        human
    }

}