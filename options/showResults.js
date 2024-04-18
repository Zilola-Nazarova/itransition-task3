import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import sleep from '../helpers/sleep.js';

const showResults = async (result, key) => {
  const spinner = createSpinner('Checking results...').start();
  await sleep();
  if (result === chalk.green('Win')) {
    spinner.success({ text: chalk.green.bold('You win!\n') });
  } else if (result === chalk.red('Lose')) {
    spinner.error({ text: chalk.red.bold('You lose!\n') });
  } else {
    spinner.warn({ text: chalk.yellow.bold("It's a draw!\n") });
  }
  console.log(chalk.bgRed(` HMAC key: ${key} `));
  console.log(chalk.italic('You can use online tools to validate computer move (e.g. https://www.liavaag.org/English/SHA-Generator/HMAC/).'));
};

export default showResults;
