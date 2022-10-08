import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const even = () => {
  const taskForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const brainEven = () => {
    const rndNum = rndNumFromInt(1, 50);

    const question = `${rndNum}`;

    let result = '';
    if (rndNum % 2 === 0) {
      result = 'yes';
    } else if (rndNum % 2 !== 0) {
      result = 'no';
    }

    return [question, result];
  };

  gameEngine(taskForEven, brainEven);
};

export default even;
