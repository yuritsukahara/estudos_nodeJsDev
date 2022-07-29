import chalk from 'chalk';
import getNotes from './notes.js';

const msg = getNotes();
console.log(msg);

console.log(chalk.inverse.red('Error!'));
