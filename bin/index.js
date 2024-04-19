#!/usr/bin/env node
import { argv } from 'node:process';
import App from '../app.js';
import { isUnique } from '../helpers/helpers.js';

const main = () => {
  const moves = argv.slice(2);
  if (moves.length % 2 === 1 && moves.length > 1 && isUnique(moves)) {
    const app = new App(moves);
    app.welcome();
  } else {
    const error = Error('Please enter the odd number of arguments.');
    console.log(error.message);
  }
};

main();
