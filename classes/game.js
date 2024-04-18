import { randomBytes, createHmac } from 'node:crypto';

class Game {
  constructor(moves) {
    this.moves = moves;
  }

  refresh() {
    const key = randomBytes(32).toString('hex');
    const cMove = Math.floor(Math.random() * this.moves.length);
    const hmac = createHmac('sha3-256', key).update(this.moves[cMove]).digest('hex');
    return { hmac, cMove, key };
  }
}

export default Game;
