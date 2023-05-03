let btn = document.getElementById('submit');
let output = document.getElementById('userInput');

let randomnumber = [Math.floor(Math.random() * 100)];

btn.addEventListener('click',function(){
	let input = document.getElementById('userInput').value
// i used the .value to access the value of the Html.
	if(input == number){
		output.innerHTML =`You guessed right, your number was $(randomnumber)

	}  else if(input > number){
     output.innerHTML = "You guessed too high!"

	}; 

	if(input < number){
          output.innerHTML = "You guessed too low!"
	}

)};