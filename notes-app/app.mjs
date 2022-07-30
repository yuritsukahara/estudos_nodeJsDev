import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as notes from './notes.js';

const argv = yargs(hideBin(process.argv));
argv.version('1.1.0');

// Create add command
argv.command(
	'add',
	'Add a new note',
	{
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string',
		},
	},
	(argv) => {
		notes.addNote(argv.title, argv.body);
	}
);

// Create remove command
argv.command(
	'remove',
	'Remove a note',
	{
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string',
		},
	},
	(argv) => {
		notes.removeNotes(argv.title);
	}
);

// Create list command
argv.command(
	'list',
	'List all notes',
	() => {},
	() => {
		notes.listNotes();
	}
);

// Create read command
argv.command(
	'read',
	'Read a note',
	{title:{
		describe: 'Note Title',
		demandOption: true,
		type:'string',
	}},
	(argv) => {
		notes.readNote(argv.title);
	}
)

argv.demandCommand(1).parse();
