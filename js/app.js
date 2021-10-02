"use strict";

let username = prompt("What is your name?");

alert("Hello " + username + " , welcome to my About Me page!");

let answerSports = prompt("Does Tiara like sports? Yes or No").toLowerCase();

if (answerSports === "no" || answerSports === "n") {
  alert("You answered correctly!");
  // console.log('You answered correctly!');
} else {
  alert("Sorry, you are wrong.");
  // console.log('You answered correctly!');
}

let answerMilk = prompt("Can Tiara drink milk? Yes or No").toLowerCase();

if (answerMilk === "no" || answerMilk === "n") {
  alert("You answered correctly!");
  // console.log('You answered correctly!');
} else {
  alert("Sorry, you are wrong.");
  // console.log('You answered correctly!');
}

let answerPet = prompt("Does Tiara have a dog? Yes or No").toLowerCase();

if (answerPet === "yes" || answerPet === "y") {
  alert("You answered correctly!");
  // console.log('You answered correctly!');
} else {
  alert("Sorry, you are wrong.");
  // console.log('You answered correctly!');
}

let answerBoyfriend = prompt(
  "Does Tiara have a boyfriend? Yes or No"
).toLowerCase();

if (answerBoyfriend === "yes" || answerBoyfriend === "y") {
  alert("You answered correctly!");
  // console.log('You answered correctly!');
} else {
  alert("Sorry, you are wrong.");
  // console.log('You answered correctly!');
}

let answerHair = prompt("Does Tiara have short hair? Yes or No").toLowerCase();

if (answerHair === "yes" || answerHair === "y") {
  alert("You answered correctly!");
  // console.log('You answered correctly!');
} else {
  alert("Sorry, you are wrong.");
  // console.log('You answered correctly!');
}

//THIS IS QUESTION 6


let attempts = 0;

//let numberGuesser = prompt('Guess a number between 1-20');

 let correctAnswer = 8;


for(let i = 4; i >= attempts; i-- ) {
    let correctAnswer = 8;
    let numberGuesser = parseInt(prompt('Guess a number between 1-20', ''));

    if(numberGuesser === correctAnswer) {
        alert('You are correct.');
        break;
    } else if (numberGuesser < correctAnswer) {
        alert(`Your guess is too low. You have ${(i-1)} attempts remaining.`);
    } else if(numberGuesser > correctAnswer) {
        alert(`Your guess is too high. You have ${(i)} attempts remaining.`);
    } 
    
    if ((i) === 1){
      alert(`The correct answer was ${correctAnswer}.`);
      break;
    }

}

alert('Thank you, ' + username + ', for playing along.')

// alert(`The correct answer was ${correctAnswer}.`);

// let attempts = 4;

// let correctAnswer = 8;







//THIS IS QUESTION 7
// Use a while loop to create your 6th question that creates four opportunities 

// have your answers in an array for your 7th question that have six attempts with multiple correct answer. You can not use a function yet

let petsName = ['Chance','Weiner','Stinky Boy']
let userResponse;
let attemptRemaining = 6;
let answeredCorrectly  = false;
let score = 0;
score++




while (attemptsRemaining && !answeredCorrectly) {
	console.log('I\'m inside the loop');

for (let i = 0; i < petsName.length; i++) {
	console.log(petsName[i]);
	if (userResponse === petsName[i]) {
		alert('That is correct');
		answeredCorrectly = true;
	} else {
		alert('That is wrong');
	}
	console.log(attemptsRemaining);
	alert('You have ${attemptsRemaining -1 }');
	
	attemptsRemaining--;
}
}