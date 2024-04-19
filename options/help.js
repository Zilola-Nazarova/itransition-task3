import chalk from 'chalk';
import { sleep } from '../helpers/helpers.js';

const help = async (table) => {
  console.log(chalk.bold('\nGame rules:'));
  table.render();
  console.log(chalk.bold("Results (lose/win/draw) are shown from the user's perspective"));
  await sleep(1000);
};

export default help;