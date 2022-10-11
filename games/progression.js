import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const progr = () => {
  const taskForProgr = 'What number is missing in the progression?';

  const brainProgr = () => {
    const lengthOfProg = rndNumFromInt(10, 20);
    const firstNumOfProg = rndNumFromInt(1, 10);
    const stepOfProg = rndNumFromInt(1, 5);
    const indexForDots = rndNumFromInt(0, 10);

    const arr = [firstNumOfProg];

    for (let i = 0; arr.length <= lengthOfProg; i += 1) {
      arr.push(arr[i] + stepOfProg);
    }
    const result = (arr[indexForDots]).toString();
    arr[indexForDots] = '..';
    const question = arr.join(' ');

    return [question, result];
  };

  gameEngine(taskForProgr, brainProgr);
};

export default progr;
