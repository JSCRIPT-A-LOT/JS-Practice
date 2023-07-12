let score = 0;
// generates random # form 1-3 and assisgns rock, paper, or sccisors.
const getComputerplayerSelection = ()=>{
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
//  1 round prompts user for input and runs against getComputerplayerSelection while adding to score of user wins.
const oneRound = function firstTurn(playerSelection, computerSelection){
    computerSelection = getComputerplayerSelection();
    playerSelection = prompt("Rock? Paper? Scissors?").trim().toLowerCase();
    if (playerSelection === "rock" && computerSelection  === "scissors") {
        score++;
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection  === "paper") {
        return "You Lose! Paper beats rock";
        }
    else if (playerSelection === "paper" && computerSelection  === "rock") {
        score++;
        return "You Win! Paper beats rock";
        }
    else if (playerSelection === "paper" && computerSelection  === "scissors") {
        return "You Lose! Scissors beats paper";
        }
    else if (playerSelection === "scissors" && computerSelection  === "paper") {
        score++;
        return "You Win! Scissors beats paper";
        }
    else if (playerSelection === "scissors" && computerSelection  === "rock") {
        return "You Lose! Rock beats Scissors";
        }
        else if (playerSelection === computerSelection) {
            result = "A tie!";
          }
        else if (playerSelection !== "rock" || "scissors" || "paper")
        return "enter valid input";
            }
    // plays 5 rounds records score after each round with winner stated at the end.
    function game(){
       oneRound();
       console.log(score);
       oneRound();
       console.log(score);
       oneRound();
       console.log(score);
       oneRound();
       console.log(score);
       oneRound();
       console.log(score);
       if (score >= 3) {
        console.log(`You Win!, your score was ${score}/5`);
       }
        else {
        console.log(`You Loose!, your score was ${score}/5`); 
        }
       
        }
       game();
