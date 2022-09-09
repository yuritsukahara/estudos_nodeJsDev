// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		const db = client.db(databaseName);

		db.collection('users')
			.deleteMany({
				age: 23,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});

		db.collection('tasks')
			.deleteOne({
				description: 'Estudar',
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
);
