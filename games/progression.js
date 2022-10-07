import commonGameEngine from '../src/index.js';
import randomIntFromInterval from '../src/randomIntFromInterval.js';

const progression = () => {
  const taskForProgr = 'What number is missing in the progression?';

  const gameEngineForProgr = () => {
    const lengthOfProg = randomIntFromInterval(6, 14);
    const firstNumOfProg = randomIntFromInterval(1, 10);
    const stepOfProg = randomIntFromInterval(1, 5);
    const indexForDots = randomIntFromInterval(1, 10);

    const arr = [];
    arr.push(firstNumOfProg);
    for (let i = 0; arr.length <= lengthOfProg; i += 1) {
      arr.push(arr[i] + stepOfProg);
    }
    arr[indexForDots] = '..';
    const progString = arr.join(' ');
    const result = stepOfProg;

    const question = `${progString}`;

    return [question, (result).toString()];
  };

  commonGameEngine(taskForProgr, gameEngineForProgr);
};

export default progression;
