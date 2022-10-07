import commonGameEngine from '../src/index.js';
import randomIntFromInterval from '../src/randomIntFromInterval.js';

const calc = () => {
  const taskForCalc = 'What is the result of the expression?';

  const gameEngineForCalc = () => {
    const rndNum1 = randomIntFromInterval(1, 10);
    const rndNum2 = randomIntFromInterval(1, 30);

    const mathSign = ['+', '-', '*'];
    const rndMathSign = mathSign[randomIntFromInterval(0, 2)];

    const question = `${rndNum1} ${rndMathSign} ${rndNum2}`;

    let result = 0;
    switch (rndMathSign) {
      case '+':
        result = rndNum1 + rndNum2;
        break;
      case '-':
        result = rndNum1 - rndNum2;
        break;
      case '*':
        result = rndNum1 * rndNum2;
        break;
      default:
        result = null;
    }

    return [question, (result).toString()];
  };

  commonGameEngine(taskForCalc, gameEngineForCalc);
};

export default calc;
