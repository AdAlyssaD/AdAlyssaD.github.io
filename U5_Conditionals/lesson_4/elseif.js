let number = prompt("Guess the number between 1-10");

// if typed 9, they enter
// otherwise, if typed lower than 9, guess was too low
// otherwise, if typed higher than 9, guess was too high

if(number == "9") {
    alert("Correct number!!")
} if (number < "9"){
    alert("Your guess was too low")
} if (number > "9"){
    alert("Your guess was too high")
}
