let btn = document.getElementById('submit');
let input = document.getElementById('userInput');
let output = document.getElementById('output');
let number = Math.floor(Math.random() * 100);
	console.log(number);

let guess = 0


btn.addEventListener('click', function() {
  let input = parseInt(document.getElementById('userInput').value);
 
  // I used .value to access the HTML document.

  if (input === number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
    // Use ${number} to display the correct number

  } else if (input > number) {
    output.innerHTML = "You guessed too high!";

  } else if (input < number) {
    output.innerHTML = "You guessed too low!";
  }

  guess += 1
  if(guess > 3) {
  	output.innerHTML = `You have exceeded your number of tries, the correct number is ${number}`
  }

});