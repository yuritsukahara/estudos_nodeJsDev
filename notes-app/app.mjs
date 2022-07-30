import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv));
argv.version('1.1.0');
// Create add command
argv.command('add', 'Add a new note', () => {}, (argv) => {
    console.log('Adding a new note')
    console.info(argv)
  })

// Create remove command
argv.command('remove', 'remove new note', () => {}, (argv) => {
    console.log('Remove a note')
    console.info(argv)
  })

// Create list command
argv.command('list', 'list new note', () => {}, (argv) => {
    console.log('List a note')
    console.info(argv)
  })

// Create read command
argv.command('read', 'read new note', () => {}, (argv) => {
    console.log('Read a note')
    console.info(argv)
  })
  
argv.demandCommand(1).parse()