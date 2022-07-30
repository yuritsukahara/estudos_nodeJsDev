import fs from 'fs';

function getNotes() {
	return 'Your notes';
}

function addNote(title, body) {
	const notes = loadNotes();

	notes.push({ title: title, body: body });

	saveNotes(notes);
	console.log(notes);
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

export { getNotes, addNote };
