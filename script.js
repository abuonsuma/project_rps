let humanChoice;
let computerChoice;

function getComputeChoice(){
    computerChoice = Math.floor((Math.random) * 3);

    if(computerChoice == 1){
        return "rock";
    }
    else if(computerChoice == 2){
        return "paper";
    }
    else{
        return "scissors"
    }

}