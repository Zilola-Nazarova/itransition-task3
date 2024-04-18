import chalk from 'chalk';

class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  generateResults() {
    const l = this.moves.length;
    const r = Array.from({ length: l }, () => []);
    const p = Math.floor(l / 2);
    let sign;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        sign = Math.sign(((j - i + p + l) % l) - p);
        if (sign > 0) {
          r[i].push(chalk.green('Win'));
        } else if (sign < 0) {
          r[i].push(chalk.red('Lose'));
        } else {
          r[i].push(chalk.yellow('Draw'));
        }
      }
    }
    return r;
  }
}

export default Rules;
