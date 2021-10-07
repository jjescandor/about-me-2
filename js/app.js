"use strict";

let score = 0;
let username = prompt("What is your name?");
let arrayOfAnswersOne = ['no', 'no', 'yes', 'yes', 'yes']
let arrayOfAnswersTwo = ['n', 'n', 'y', 'y', 'y']

alert("Hello " + username + " , welcome to my About Me page!");

function checkAnswer(userAnswer, storedAnswerOne, storedAnswerTwo) {
  if (userAnswer === storedAnswerOne || userAnswer === storedAnswerTwo) {
    alert("You answered correctly!");
    score++;
    // console.log('You answered correctly!');
  } else {
    alert("Sorry, you are wrong.");
    // console.log('You answered correctly!');
  }
};

function questionOne() {
  let answerSports = prompt("Does Tiara like sports? Yes or No").toLowerCase();
  checkAnswer(answerSports, arrayOfAnswersOne[0], arrayOfAnswersTwo[0]);
};
questionOne();

function questionTwo() {
  let answerMilk = prompt("Can Tiara drink milk? Yes or No").toLowerCase();
  checkAnswer(answerMilk, arrayOfAnswersOne[1], arrayOfAnswersTwo[1]);
};
questionTwo();



function questionThree() {
  let answerPet = prompt("Does Tiara have a dog? Yes or No").toLowerCase();
  checkAnswer(answerPet, arrayOfAnswersOne[2], arrayOfAnswersTwo[2]);
};
questionThree();

function questionFour() {
  let answerBoyfriend = prompt("Does Tiara have a boyfriend? Yes or No").toLowerCase();
  checkAnswer(answerBoyfriend, arrayOfAnswersOne[3], arrayOfAnswersTwo[3]);
};
questionFour();

function questionFive() {
  let answerHair = prompt("Does Tiara have short hair? Yes or No").toLowerCase();
  checkAnswer(answerHair, arrayOfAnswersOne[4], arrayOfAnswersTwo[4]);
};
questionFive();

//THIS IS QUESTION 6




//let numberGuesser = prompt('Guess a number between 1-20');
let attempts = 4;
let correctAnswer = 8;

function questionSix() {
  while (attempts) {
    let numberGuesser = parseInt(prompt('Guess a number between 1-20', ''));
    if (numberGuesser === correctAnswer) {
      alert('You are correct.');
      score++;
      break;
    } else if (numberGuesser < correctAnswer) {
      attempts--;
      alert(`Your guess is too low. You have ${attempts} attempts remaining.`);
    } else if (numberGuesser > correctAnswer) {
      attempts--;
      alert(`Your guess is too high. You have ${attempts} attempts remaining.`);
    }
  }
}
questionSix();

function attempt() {
  if (attempts === 0) {
    alert(`The correct answer was ${correctAnswer}.`);
  }
}

attempt();




//THIS IS QUESTION 7
// Use a while loop to create your 6th question that creates four opportunities 

// have your answers in an array for your 7th question that have six attempts with multiple correct answer. You can not use a function yet

let petsName = ['chance', 'weiner', 'stinky boy'];


let guesses = 0;
let correct = false;
for (let k = 6; k > guesses; k--) {
  let userResponse = prompt('What is my dogs name? (there are multiple correct answers)').toLowerCase();
  for (let j = 0; j < petsName.length; j++) {
    if (userResponse.toLowerCase() === petsName[j]) {
      alert('That is correct! ' + username);
      correct = true;
      score++;
    }
  }
  if (!correct) {
    alert(`You have ${[k - 1]} guesses left.`);
  }
  if (correct) break;
}

alert(`The names my dog goes by were ${petsName}`);
alert(`Your total score was ${score}`);

alert('Thank you, ' + username + ', for playing along.');


