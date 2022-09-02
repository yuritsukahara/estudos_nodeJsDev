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

		// db.collection('users').findOne(
		// 	{ _id: new ObjectId('630ff33509846d46476dbace') },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to fetch');
		// 		}

		// 		console.log(user);
		// 	}
		// );

		// db.collection('users')
		// 	.find({ age: 22 })
		// 	.count((error, count) => {
		// 		console.log(count);
		// 	});

		db.collection('tasks').findOne(
			{ _id: new ObjectId('630fe6f3564e751f787830ca') },
			(error, task) => {
				if (error) {
					return 'Unable to find';
				}

				console.log(task);
			}
		);

		db.collection('tasks')
			.find({ completed: false })
			.toArray((error, tasks) => {
				if (error) {
					return 'Unable to find';
				}

				console.log(tasks);
			});
	}
);
