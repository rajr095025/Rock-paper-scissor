const rockClicked = document.querySelector('#rock');
rockClicked.addEventListener('click', () => game("rock"));

const paperClicked = document.querySelector('#paper');
paperClicked.addEventListener('click', () => game("paper"));

const scissorClicked = document.querySelector('#scissor');
scissorClicked.addEventListener('click', () => game("scissor"));

let playerWonCount = 0;
let computerWonCount = 0;
let matchDrawnCount = 0;

function game(playerSelection){
    let finalResult = playRound(playerSelection);
    console.log(finalResult);
    document.getElementById("roundresult").innerHTML = finalResult;
    
    if (finalResult == "Player Won"){
        playerWonCount++
    } else if (finalResult == "Computer Won"){
        computerWonCount++
    } else if (finalResult == "Match Drawn"){
        matchDrawnCount++
    }

    document.getElementById("playerwoncount").innerHTML = playerWonCount;
    document.getElementById("matchdrawncount").innerHTML = matchDrawnCount;
    document.getElementById("computerwoncount").innerHTML = computerWonCount;

    console.log(playerWonCount);
    console.log(computerWonCount);
    console.log(matchDrawnCount);

    document.getElementById("finalresult").innerHTML = "";

    if (playerWonCount == 5 ){
        document.getElementById("finalresult").innerHTML = "Player won first 5 times";
        playerWonCount = 0
        computerWonCount = 0
        matchDrawnCount = 0
    } else if (computerWonCount == 5 ){
        document.getElementById("finalresult").innerHTML = "Computer won first 5 times";
        playerWonCount = 0
        computerWonCount = 0
        matchDrawnCount = 0
    }

}

function getComputerChoice() {
    let values = ["rock","paper","scissor"]
    return values[Math.floor(Math.random() * values.length)]
}


function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if((playerSelection == "rock" && computerSelection == "scissor")||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        return "Player Won";
    } else if((playerSelection == "rock" && computerSelection == "rock")||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "scissor")){
        return "Match Drawn";

    } else if((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")){
        return "Computer Won";
    }
}



  


