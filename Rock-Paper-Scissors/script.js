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
    let input = playerGo;
    let choice = input;
    if (choice === "rock" && computerGo === "scissors") {
    console.log("You win! Rock beats Scissors");
    }
    else if (choice === "rock" && computerGo === "paper") {
        console.log("You lose! Paper beats rock");
        }
    else if (choice === "rock" && computerGo === "rock") {
        console.log("A tie!");
        }
    else if (choice === "paper" && computerGo === "paper") {
        console.log("A tie!");
        }
    else if (choice === "paper" && computerGo === "rock") {
        console.log("You Win! Paper beats rock");
        }
    else if (choice === "paper" && computerGo === "scissors") {
        console.log("You lose! Scissors beats paper");
        }
    else if (choice === "scissors" && computerGo === "scissors") {
        console.log("A tie");
        }
    else if (choice === "scissors" && computerGo === "paper") {
        console.log("You Win! Scissors beats paper");
        }
    else if (choice === "scissors" && computerGo === "rock") {
        console.log("You lose! Rock beats Scissors");
        }
        else if (choice !== "rock" || "scissors" || "paper")
            console.log("enter valid input");
            }
    
    firstTurn();
