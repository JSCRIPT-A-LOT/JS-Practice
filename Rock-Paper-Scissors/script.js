const one = "rock"
const two = "paper"
const three = "scissors"

// generates random # form 1-3
const computer = () => {
    let turn = (Math.floor(Math.random() * 3 ) + 1);
    console.log(turn);
}
computer();

