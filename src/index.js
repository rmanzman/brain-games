import readlineSync from 'readline-sync';

const gameEngine = (task, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = game();
    console.log('Question:', questionAndResult[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = questionAndResult[1];
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
