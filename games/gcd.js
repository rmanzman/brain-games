import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const gcd = () => {
  const taskForGcd = 'Find the greatest common divisor of given numbers.';

  const brainComDiv = () => {
    let rndNum1 = rndNumFromInt(1, 100);
    let rndNum2 = rndNumFromInt(1, 100);

    const question = `${rndNum1} ${rndNum2}`;

    let result = '';
    while (rndNum1 !== 0 && rndNum2 !== 0) {
      if (rndNum1 > rndNum2) {
        rndNum1 %= rndNum2;
      } else {
        rndNum2 %= rndNum1;
      }
      result = (rndNum1 + rndNum2).toString();
    }

    return [question, result];
  };

  gameEngine(taskForGcd, brainComDiv);
};

export default gcd;
