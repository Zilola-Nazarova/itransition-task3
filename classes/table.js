import CliTable from 'cli-table3';

class Table {
  constructor(moves, results) {
    this.moves = moves;
    this.results = results;
  }

  render() {
    const table = new CliTable({
      style: { head: [], border: [] },
      head: ['v PC \\ User >', ...this.moves],
    });
    for (let i = 0; i < this.moves.length; i++) {
      table.push({ [this.moves[i]]: this.results[i] });
    }
    console.log(table.toString());
  }
}

export default Table;
