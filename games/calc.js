import gameEngine from '../src/index.js';
import rndNumFromInt from '../src/rndNumFromInt.js';

const calc = () => {
  const taskForCalc = 'What is the result of the expression?';

  const brainCalc = () => {
    const rndNum1 = rndNumFromInt(1, 10);
    const rndNum2 = rndNumFromInt(1, 30);

    const mathSign = ['+', '-', '*'];
    const rndMathSign = mathSign[rndNumFromInt(0, 2)];

    const question = `${rndNum1} ${rndMathSign} ${rndNum2}`;

    let result = 0;
    switch (rndMathSign) {
      case '+':
        result = (rndNum1 + rndNum2).toString();
        break;
      case '-':
        result = (rndNum1 - rndNum2).toString();
        break;
      case '*':
        result = (rndNum1 * rndNum2).toString();
        break;
      default:
        result = null;
    }

    return [question, result];
  };

  gameEngine(taskForCalc, brainCalc);
};

export default calc;
