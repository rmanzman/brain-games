import readlineSync from 'readline-sync';

const whatsYourName = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
};

export default whatsYourName;
