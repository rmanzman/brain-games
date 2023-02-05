import gameEngine from '../index.js';
import rndNumFromInt from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const num = rndNumFromInt(1, 50);
  const question = `${num}`;
  const expectedAnswer = isEven(num);
  return [question, expectedAnswer];
};

export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
