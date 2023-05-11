let btn = document.getElementById('submit');
let input = document.getElementById('userInput');
let output = document.getElementById('output');
let number = Math.floor(Math.random() * 100);
	console.log(number);

let guess = 0

btn.addEventListener('click', function() {
    let input = parseInt(document.getElementById('userInput').value);

    if (isNaN(input) || input < 1 || input > 100) {
        output.innerHTML = "Please enter a valid number between 1 and 100.";
    
    } else {
        if (input === number) {
            output.innerHTML = `You guessed right! The number was ${number}`;
       
        } else if (input > number) {
            output.innerHTML = "You guessed too high!";
        
        } else if (input < number) {
            output.innerHTML = "You guessed too low!";
        }
       
         guess += 1
  if(guess > 3) {
    output.innerHTML = `You have exceeded your number of tries, the correct number is ${number}`
    return;
  }

    }
});


