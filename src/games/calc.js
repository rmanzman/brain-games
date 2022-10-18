import gameEngine from '../index.js';
import rndNumFromInt from '../helper.js';

const description = 'What is the result of the expression?';

const calculate = (rndNum1, rndNum2, rndMathSign) => {
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
  return String(result);
};

const getQuestionAndAnswer = () => {
  const rndNum1 = rndNumFromInt(1, 10);
  const rndNum2 = rndNumFromInt(1, 30);

  const mathSign = ['+', '-', '*'];
  const rndMathSign = mathSign[rndNumFromInt(0, 2)];

  const question = `${rndNum1} ${rndMathSign} ${rndNum2}`;

  const expectedAnswer = calculate(rndNum1, rndNum2, rndMathSign);

  return [question, expectedAnswer];
};

export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
