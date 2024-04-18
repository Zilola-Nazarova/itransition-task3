import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import Rules from './classes/rules.js';
import Table from './classes/table.js';
import Game from './classes/game.js';
import Menu from './classes/menu.js';
import exit from './options/exit.js';
import playAgain from './options/playAgain.js';
import showResults from './options/showResults.js';
import help from './options/help.js';
import sleep from './helpers/sleep.js';

class App {
  constructor(moves) {
    this.moves = moves;
    this.results = new Rules(moves).generateResults();
    this.table = new Table(moves, this.results);
    this.game = new Game(moves);
    this.menu = new Menu(moves);
  }

  async welcome() {
    const rainbowTitle = chalkAnimation.rainbow('\nWelcome to the most amazing game in the world!');
    await sleep(1500);
    rainbowTitle.stop();
    this.startGame();
  }

  async startGame() {
    console.log();
    const spinner = createSpinner('Generating HMAC').start();
    const { hmac, cMove, key } = this.game.refresh();
    await sleep();
    spinner.success({ text: chalk.bgRed(` HMAC: ${hmac} \n`) });
    this.menu.display();
    await this.makePrompt(cMove, key);
  }

  async makePrompt(cMove, key) {
    const answers = await inquirer.prompt({
      name: 'player_move',
      type: 'number',
      message: 'Enter your move:',
    });
    const answer = answers.player_move;
    if (answer === 0) {
      exit();
    } else if (answer === this.moves.length + 1) {
      await help(this.table);
      await playAgain() ? this.startGame() : exit();
    } else if (answer <= this.moves.length && answer > 0) {
      console.log(`\nYour move: ${this.moves[answer - 1]}`);
      console.log(`Computer move: ${this.moves[cMove]}\n`);
      await showResults(this.results[cMove][answer - 1], key);
      await playAgain() ? this.startGame() : exit();
    } else {
      console.log(chalk.bold.red(`! Please enter a number in the range between 0 and ${this.moves.length + 1} !`));
      return this.makePrompt();
    }
  }
}

export default App;
