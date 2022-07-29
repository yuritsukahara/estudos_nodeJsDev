import chalk from 'chalk';
import getNotes from './notes.js';

const msg = getNotes();

console.log(chalk.blue('Succes'));
