import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const prime = () => {
  const taskForPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const brainPrime = () => {
    const num = rndNumFromInt(2, 500);
    const question = `${num}`;
    let result = '';

    const isPrime = () => {
      for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
        if (num % i === 0) {
          result = 'no';
          return false;
        }
      }
      result = 'yes';
      return true;
    };
    isPrime();

    return [question, result];
  };

  gameEngine(taskForPrime, brainPrime);
};

export default prime;
