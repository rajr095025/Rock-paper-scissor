function getComputerChoice() {
    let values = ["rock","paper","scissor"]
    return values[Math.floor(Math.random() * values.length)]
}
const rockClicked = document.querySelector('#rock');
rockClicked.addEventListener('click', () => game("rock"));

const paperClicked = document.querySelector('#paper');
paperClicked.addEventListener('click', () => game("paper"));

const scissorClicked = document.querySelector('#scissor');
scissorClicked.addEventListener('click', () => game("scissor"));

let playerWonCount = 0;
let computerWonCount = 0;
let matchDrawnCount = 0;

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if((playerSelection == "rock" && computerSelection == "scissor")||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        return "playerWon";
    } else if((playerSelection == "rock" && computerSelection == "rock")||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "scissor")){
        return "matchDrawn";

    } else if((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")){
        return "computerWon";
    }
}

function game(playerSelection){
    let finalResult = playRound(playerSelection);
    console.log(finalResult);
    document.getElementById("demo1").innerHTML = finalResult;
    
    if (finalResult == "playerWon"){
        playerWonCount++
    } else if (finalResult == "computerWon"){
        computerWonCount++
    } else if (finalResult == "matchDrawn"){
        matchDrawnCount++
    }

    console.log(playerWonCount);
    console.log(computerWonCount);
    console.log(matchDrawnCount);

    if (playerWonCount == 4 ){
        document.getElementById("demo2").innerHTML = "Player won 5 times first";
    } else if (computerWonCount == 4 ){
        document.getElementById("demo2").innerHTML = "Computer won 5 times first";
    }




}


//let finalResult = playRound();
//document.getElementById("demo").innerHTML = playRound();
//console.log(finalResult);
//let result = document.querySelector('#results')
//let round = document.createElement('div')
//round.textContent = playRound();
//result.appendChild(round)

  


