// generates random # form 1-3 and assisgns rock, paper, or sccisors string
const getComputerChoice = ()=>{
    let turn = (Math.floor(Math.random() * 3 ) + 1);
 switch (turn) {
    case 1:
        turn = "rock"
        break;
    case 2:
        turn = "paper"
        break;
    case 3:
        turn = "scissors"
        break;
 }
return turn}
//  1 round prompts user for input and runs against getComputerChoice function
function firstTurn(){
    let computerGo = getComputerChoice();
    let playerGo = prompt("Rock? Paper? Scissors?").trim().toLowerCase();
    let choice = playerGo;
    if (choice === "rock" && computerGo === "scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (choice === "rock" && computerGo === "paper") {
        return "You lose! Paper beats rock";
        }
    else if (choice === "rock" && computerGo === "rock") {
        return "A tie!";
        }
    else if (choice === "paper" && computerGo === "paper") {
        return "A tie!";
        }
    else if (choice === "paper" && computerGo === "rock") {
        return "You Win! Paper beats rock";
        }
    else if (choice === "paper" && computerGo === "scissors") {
        return "You lose! Scissors beats paper";
        }
    else if (choice === "scissors" && computerGo === "scissors") {
        return "A tie";
        }
    else if (choice === "scissors" && computerGo === "paper") {
        return "You Win! Scissors beats paper";
        }
    else if (choice === "scissors" && computerGo === "rock") {
        return "You lose! Rock beats Scissors";
        }
        else if (choice !== "rock" || "scissors" || "paper")
        return "enter valid input";
            }
    
    firstTurn();
    function game(){

    }
