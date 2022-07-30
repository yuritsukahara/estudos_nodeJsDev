import chalk from 'chalk';
import fs from 'fs';

function getNotes() {
	return 'Your notes';
}

function addNote(title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({ title: title, body: body });
		saveNotes(notes);
		console.log('New note added!');
	} else {
		console.log('Note title taken!');
	}
}

function removeNotes(title) {
	const notes = loadNotes();
	const notesToKeep = notes.filter(function (note) {
		return note.title !== title;
	});

	if (notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse('No note found!'));
	} else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
	}
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

function saveNotes(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

export { getNotes, addNote, removeNotes };
