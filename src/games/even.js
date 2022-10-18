import gameEngine from '../index.js';
import rndNumFromInt from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (rndNum) => rndNum % 2 === 0;

const getQuestionAndAnswer = () => {
  const rndNum = rndNumFromInt(1, 50);

  const question = `${rndNum}`;

  const expectedAnswer = isEven(rndNum) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
