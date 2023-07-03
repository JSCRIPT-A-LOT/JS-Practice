// will be using q1 ,q2 ,q3 ... and so on for each question's answer starting with the instructions commented above each question


// Write a function called add7 that takes one number and returns that number + 7.
function add7(n) {
return n +7;
}
let q1 = add7(37281);
console.log(q1);

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
    return a * b;
}
let q2 = multiply(10, 7);
console.log(q2);

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 function capitalize() {
let userInput = prompt("Enter text to get first letter only capitalized");
let firstCapital = userInput[0].toUpperCase();
console.log(firstCapital)
 }
 capitalize();

 //  Write a function called lastLetter that takes a string and returns the very last letter of that string

 function lastLetter() {
    let userInput = prompt("returns the very last letter of that string")
    let lastCapital = userInput[userInput.length -1]
    console.log(lastCapital)
 }
 lastLetter();