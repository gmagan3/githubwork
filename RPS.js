function computerPlay(){
    Throw=["Rock","Paper","Scissors"];
    var number = Throw[Math.floor(Math.random()*Throw.length)];
    return number;
}
computerPlay();

function playRound(playerSelection,computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You won! Rock beats Scissors"
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lost. Paper beats Rock"
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You won! Paper beats Rock"
    } else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lost. Scissors beats Rock"
    } else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lost. Scissors beats Paper"
    } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You won! Paper beats Scissors"
    } else {
        return "It's a tie."
    }

}
const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))