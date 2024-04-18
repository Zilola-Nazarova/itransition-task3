import chalk from 'chalk';

class Menu {
  constructor(moves) {
    this.moves = moves;
    this.menu = [...moves, 'help', 'exit'];
  }

  display() {
    console.log(chalk.red('AVAILABLE MOVES:'));
    this.moves.forEach((text, i) => {
      console.log(`${chalk.red(i + 1)} - ${text}`);
    });
    console.log(chalk.italic(`${this.moves.length + 1} - help\n0 - exit\n`));
  }
}

export default Menu;
