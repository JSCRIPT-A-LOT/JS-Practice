const one = "rock"
const two = "paper"
const three = "scissors"

// generates random # form 1-3
const computer = () => {
    let turn = (Math.floor(Math.random() * 3 ) + 1);
    return turn;
}
function convertComputer(computer){
if (computer === 1) {
    computer = one;
    console.log("one")
}
else if (computer === 2) {
    computer = two;
    console.log("two")
}
else if (computer === 3) {
    computer = three;
    console.log("three")
}
}
convertComputer();

function firstTurn(){
    let userTurn = prompt("Rock? Paper? Scissors?");
    let input = userTurn.trim().toLowerCase();
    if (input === "rock" && computer === "scissors") {
    console.log("You win! Rock beats Scissors")
    if (input === "rock" && computer === "paper") {
    console.log("You loose! Paper beats rock")
    if (input === "rock" && computer === 3) {
    console.log("You win! Rock beats Scissors")
    }
    }
    }
    }
    firstTurn();