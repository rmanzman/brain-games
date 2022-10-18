import gameEngine from '../index.js';
import rndNumFromInt from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthOfProg = rndNumFromInt(10, 20);
  const firstNumOfProg = rndNumFromInt(1, 10);
  const stepOfProg = rndNumFromInt(1, 5);

  const arr = [firstNumOfProg];

  for (let i = 0; arr.length <= lengthOfProg; i += 1) {
    arr.push(arr[i] + stepOfProg);
  }

  return arr;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const indexForDots = rndNumFromInt(0, 10);

  const expectedAnswer = String(progression[indexForDots]);
  progression[indexForDots] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
