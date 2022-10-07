import commonGameEngine from '../src/index.js';
import randomIntFromInterval from '../src/randomIntFromInterval.js';

const gcd = () => {
  const taskForGcd = 'Find the greatest common divisor of given numbers.';

  const gameEngineForGcd = () => {
    let rndNum1 = randomIntFromInterval(1, 100);
    let rndNum2 = randomIntFromInterval(1, 100);

    const question = `${rndNum1} ${rndNum2}`;

    let result = '';
    while (rndNum1 !== 0 && rndNum2 !== 0) {
      if (rndNum1 > rndNum2) {
        rndNum1 %= rndNum2;
      } else {
        rndNum2 %= rndNum1;
      }
      result = rndNum1 + rndNum2;
    }
    return [question, (result).toString()];
  };

  commonGameEngine(taskForGcd, gameEngineForGcd);
};

export default gcd;
