let humanChoice;
let computerChoice;

console.log(humanChoice)

function getComputerChoice(){
    computerChoice = Math.floor((Math.random) * 3);
    console.log(computerChoice);

    
    if(computerChoice == 1){
        console.log(computerChoice)
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

// let computer = getComputerChoice();
// let human = getHumanChoice();

function playRound(computer,human){
    if (human == "rock" && computer == "scissors"
    || human == "scissors" && computer == "paper"
    || human == "paper" && computer == "rock"){
        console.log("You win");
        // alert("You win");
        return "human";
    }
    
    else if(human == computer){
        console.log("Tie");
        // alert("Tie");
        // return "Tie"
    }

    else{
        console.log("Computer win");
        // alert("Computer win");
        return "computer"
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function gameRound(){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === "human"){
            humanScore++;

        }
        else if(result === "computer"){
            computerScore++;
        }

        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
    }

    gameRound()
}

