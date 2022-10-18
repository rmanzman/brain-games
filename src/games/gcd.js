import gameEngine from '../index.js';
import rndNumFromInt from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (rndNum1, rndNum2) => {
  for (let i = rndNum1; i > 0; i -= 1) {
    if (rndNum1 % i === 0 && rndNum2 % i === 0) {
      return String(i);
    }
  }
  return undefined;
};

const getQuestionAndAnswer = () => {
  const rndNum1 = rndNumFromInt(1, 100);
  const rndNum2 = rndNumFromInt(1, 100);

  const question = `${rndNum1} ${rndNum2}`;

  const expectedAnswer = getGcd(rndNum1, rndNum2);

  return [question, expectedAnswer];
};

export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
