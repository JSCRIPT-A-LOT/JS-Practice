const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";
// generates random # form 1-3
let computer = function computerTurn() {
    let turn = (Math.floor(Math.random() * 3 ) + 1);
    if (turn === 1 ) {
        turn = Rock;
    }
    else if (turn === 2){
        turn = Paper
    }
    else {
        turn = Scissors;
    }
return turn}
console.log(computer())
// create function to convert computer choice to valid value

function firstTurn(playerGo, computerGo){
    computerGo =computer;
    playerGo = prompt("Rock? Paper? Scissors?");
    let input = playerGo.trim().toLowerCase();
    if (input.value === "rock" && computerGo.value === "scissors" ) {
    console.log("You win! Rock beats Scissors")
    }
    else if (input === "rock" && computer === "paper") {
        console.log("You loose! Paper beats rock")
        }
    }
    firstTurn();
 