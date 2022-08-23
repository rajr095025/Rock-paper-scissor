console.log("Hello This is Rock paper scissor game")
function getComputerChoice() {
    let values = ["rock","paper","scissor"]
    return values[Math.floor(Math.random() * values.length)]
}
function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissor"){
        return("you won");
    }else if (playerSelection == "rock" && computerSelection == "rock"){
        return("same selection");
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return("you lost");
    }else if (playerSelection == "scissor" && computerSelection == "paper"){
        return("you won");
    }else if (playerSelection == "scissor" && computerSelection == "scissor"){
        return("same selection");
    }else if (playerSelection == "scissor" && computerSelection == "rock"){
        return("you lost");
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return("you won");
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        return("same selection");
    }else if (playerSelection == "paper" && computerSelection == "scissor"){
        return("you lost");
    }
}
function game(){
    let start = prompt(`if you want help type 'help' and after help reload the page
     (or) want to start the game type 'start'`)
    if(start=="help"){
        console.log(`Rules 
        1)Rock beats scissor
        2)Scissor beats paper
        3)paper beats rock`)
    }else if(start == "start"){   
        for (let i=0; i<5; i++){
            let playerInput = prompt(`type 'rock' or 'paper' or 'scissor' to play the game`);
            playerSelection = playerInput.toLowerCase()
            getComputerChoice();
            let computerSelection = getComputerChoice();
            console.log("player selected",playerSelection);
            console.log("computer selected",computerSelection);
            console.log(playRound(playerSelection,computerSelection));   
        }
    }    
}
game();
