import commonGameEngine from '../src/index.js';
import randomIntFromInterval from '../src/randomIntFromInterval.js';

const even = () => {
  const taskForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameEngineForEven = () => {
    const rndNum = randomIntFromInterval(1, 50);

    const question = `${rndNum}`;

    let result = '';
    if (rndNum % 2 === 0) {
      result = 'yes';
    } else if (rndNum % 2 !== 0) {
      result = 'no';
    }

    return [question, result];
  };

  commonGameEngine(taskForEven, gameEngineForEven);
};

export default even;
