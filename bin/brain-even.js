#!/usr/bin/env node
import readlineSync from 'readline-sync';

import randomIntFromInterval from '../src/randomIntFromInterval.js';

const isEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const rndInt = randomIntFromInterval(6, 35);
    const answer = readlineSync.question(`Question: ${rndInt} `, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    if (answer === true && rndInt % 2 === 0) {
      console.log('Your answer: yes');
      console.log('Correct!');
      i += 1;
    } else if (answer === true && rndInt % 2 !== 0) {
      console.log('Your answer: yes');
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    } else if (answer === false && rndInt % 2 === 0) {
      console.log('Your answer: no');
      return console.log(`Let's try again, ${userName}!`);
    } else if (answer === false && rndInt % 2 !== 0) {
      console.log('Your answer: no');
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

isEven();
