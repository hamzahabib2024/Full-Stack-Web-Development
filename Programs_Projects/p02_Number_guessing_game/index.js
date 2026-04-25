// Number guessing game

const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

let attempts = 0;
let feedback = document.getElementById("feedback");
let guessButton = document.getElementById("guessButton");
let resetButton = document.getElementById("resetButton");

resetButton.onclick = function() {
    location.reload();
};

guessButton.onclick = function() {
    let guess = Number(document.getElementById("guessInput").value);
 
    
    if (isNaN(guess)) {
        feedback.textContent = "Please enter a valid number.";
    }
    else if (guess < minimum || guess > maximum) {
        feedback.textContent = `Please enter a number between ${minimum} and ${maximum}.`;
    }
    else{
        attempts++;
        if (guess < answer) {
            feedback.textContent = "Too low! Try again.";
        }
        else if (guess > answer) {
            feedback.textContent = "Too high! Try again.";
        }
        else{
            feedback.textContent = `Congratulations! You've guessed the number ${answer} in ${attempts} attempts.`;
            running = false; 
        }
    }
}