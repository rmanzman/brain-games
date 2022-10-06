import readlineSync from 'readline-sync';
import randomIntFromInterval from './randomIntFromInterval.js';

// Common logic for all tasks
const whatsYourName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const congrats = () => {
  const userName = whatsYourName();
  console.log(`Congratulations, ${userName}!`);
};

// Logic for brain-even game
const brainEven = () => {
  const userName = whatsYourName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let roundCount = 0;
  while (roundCount < 3) {
    const rndInt = randomIntFromInterval(6, 35);
    console.log(`Question: ${rndInt}`);
    const answer = readlineSync.prompt({ prompt: 'Your answer: ' });
    if (answer === 'yes' && rndInt % 2 === 0) {
      console.log('Correct!');
      roundCount += 1;
    } else if (answer === 'no' && rndInt % 2 !== 0) {
      console.log('Correct!');
      roundCount += 1;
    } else if (answer === 'yes' && rndInt % 2 !== 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    } else if (answer === 'no' && rndInt % 2 === 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    } else if (answer !== 'yes' && answer !== 'no') {
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return congrats;
};

// Logic for brain-calc game
const brainCalc = () => {
  whatsYourName();
};

export { whatsYourName, brainEven, brainCalc };
