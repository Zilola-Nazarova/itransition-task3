#!/usr/bin/env node
import { argv } from 'node:process';
import App from '../app.js';
import { validateArgs } from '../helpers/helpers.js';

const main = () => {
  const moves = argv.slice(2);
  if (validateArgs(moves)) {
    const app = new App(moves);
    app.welcome();
  }
};

main();
