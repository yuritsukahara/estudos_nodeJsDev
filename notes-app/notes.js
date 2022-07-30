import chalk from 'chalk';
import fs from 'fs';

function addNote(title, body) {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({ title: title, body: body });
		saveNotes(notes);
		console.log(chalk.green.inverse('New note added!'));
	} else {
		console.log(chalk.red.inverse('Note title taken!'));
	}
}

function removeNotes(title) {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse('No note found!'));
	} else {
		console.log(chalk.green.inverse('Note removed!'));
		saveNotes(notesToKeep);
	}
}

function listNotes() {
	const notes = loadNotes();
	console.log(chalk.cyan.inverse('Your Notes'));
	notes.forEach((note) => console.log('-', note.title));
}

function loadNotes() {
	try {
		const dataBuffer = fs.readFileSync('notes.json', 'utf8');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}

function readNote(title){
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);

	if (note) {
	console.log(chalk.inverse(note.title));
	console.log(note.body);} else {
		console.log(chalk.red.inverse('Note not found!'));
	}
} 

function saveNotes(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

export { addNote, removeNotes, listNotes, readNote };
