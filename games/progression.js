import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const progr = () => {
  const taskForProgr = 'What number is missing in the progression?';

  const brainProgr = () => {
    const lengthOfProg = rndNumFromInt(10, 20);
    const firstNumOfProg = rndNumFromInt(1, 10);
    const stepOfProg = rndNumFromInt(1, 5);
    const indexForDots = rndNumFromInt(0, 10);

    const arr = [];
    arr.push(firstNumOfProg);
    for (let i = 0; arr.length <= lengthOfProg; i += 1) {
      arr.push(arr[i] + stepOfProg);
    }
    arr[indexForDots] = '..';
    const progString = arr.join(' ');
    const result = (stepOfProg).toString();

    const question = `${progString}`;

    return [question, result];
  };

  gameEngine(taskForProgr, brainProgr);
};

export default progr;
