
function getComputerChoice(){
    const choice = ["rock","paper","scizzors"]
    return choice[Math.floor(Math.random()* choice.length )]
}

function play(playerSelection,ComputerChoice){
    if(playerSelection.toLowerCase() == ComputerChoice){
        return "Draw!"
    }
    else if(playerSelection.toLowerCase() == "rock" && ComputerChoice == "paper"){
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == "paper" && ComputerChoice == "scizzors"){
        return "You Lose! Scizzors beats Paper"
    }
    else if(playerSelection.toLowerCase() == "scizzors" && ComputerChoice == "rock"){
        return "You Lose! Rock beats Scizzors"
    }
    else if(playerSelection.toLowerCase() == "rock" && ComputerChoice == "scizzors"){
        return "You Win! Rock beats Scizzors"
    }
    else if(playerSelection.toLowerCase() == "paper" && ComputerChoice == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == "scizzors" && ComputerChoice == "paper"){
        return "You Win! Scizzors beats Paper"
    }
}

function game(){
    let playerScore = 0
    let ComputerScore = 0
    for(let i = 0; i < 5;i++){
       let outcome = play(prompt("Enter Move"),getComputerChoice())
       console.log(outcome)
       console.log(playerScore,ComputerScore)
       if(outcome.startsWith("You Win!")){
            playerScore++;
       }
       else if(outcome.startsWith("You Lose!")){
            ComputerScore++;
       }
    }
}

game()