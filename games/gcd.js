import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const gcd = () => {
  const taskForGcd = 'Find the greatest common divisor of given numbers.';

  const brainComDiv = () => {
    const rndNum1 = rndNumFromInt(1, 50);
    const rndNum2 = rndNumFromInt(1, 25);

    const question = `${rndNum1} ${rndNum2}`;

    let x = rndNum1;
    let y = rndNum2;
    let result = '';
    while (x !== 0 && y !== 0) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
      result = (x + y).toString();
    }
    return [question, result];
  };

  gameEngine(taskForGcd, brainComDiv);
};

export default gcd;
