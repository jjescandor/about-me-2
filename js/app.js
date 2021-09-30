'use strict';

let username = prompt('What is your name?')

alert ('Hello ' + username + ' , welcome to my About Me page!');

let answerSports = prompt('Does Tiara like sports? Yes or No').toLowerCase();


if (answerSports === 'no'){
  alert('You answered correctly!');
  // console.log('You answered correctly!');
} else {
  alert('Sorry, you are wrong.');
  // console.log('You answered correctly!');
}

let answerMilk = prompt('Can Tiara drink milk? Yes or No').toLowerCase();

if (answerMilk === 'no'){
  alert('You answered correctly!');
  // console.log('You answered correctly!');
} else {
  alert('Sorry, you are wrong.');
  // console.log('You answered correctly!');
}

let answerPet = prompt('Does Tiara have a dog? Yes or No').toLowerCase();

if (answerPet === 'yes'){
  alert('You answered correctly!');
  // console.log('You answered correctly!');
} else {
  alert('Sorry, you are wrong.');
  // console.log('You answered correctly!');
}

let answerBoyfriend = prompt('Does Tiara have a boyfriend? Yes or No').toLowerCase();

if (answerBoyfriend === 'yes'){
  alert('You answered correctly!');
  // console.log('You answered correctly!');
} else {
  alert('Sorry, you are wrong.');
  // console.log('You answered correctly!');
}

let answerHair = prompt('Does Tiara have short hair? Yes or No').toLowerCase();

if (answerHair === 'yes'){
  alert('You answered correctly!');
  // console.log('You answered correctly!');
} else {
  alert('Sorry, you are wrong.');
  // console.log('You answered correctly!');
}

alert("Thank you, " + username + ", for answering my questions.")