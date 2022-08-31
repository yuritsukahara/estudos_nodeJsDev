// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		const db = client.db(databaseName);

		// db.collection('users').insertOne(
		// 	{
		// 		name: 'Yuri',
		// 		age: 27,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('users').insertMany(
		// 	[
		// 		{ name: 'Ju', age: '23' },
		// 		{ name: 'Junior', age: 25 },
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert documents');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		db.collection('tasks').insertMany(
			[
				{
					description: 'Estudar',
					completed: 'false',
				},
				{
					description: 'Comer',
					completed: 'false',
				},
				{
					description: 'Beber água',
					completed: 'true',
				},
			],
			(error, result) => {
				if (error) {
					return 'Unable to insert tasks!';
				}

				console.log(result.ops);
			}
		);
	}
);
