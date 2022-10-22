const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET requests are disabled');
// 	} else {
// 		next();
// 	}
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
	console.log('http://localhost:' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
	// const task = await Task.findById('6353f7229a6a979f8d03c95e');
	// await task.populate('owner');
	// console.log(task.owner);

	const user = await User.findById('6353f4fc06d1f1940e5b24ae');
	await user.populate('tasks');
	console.log(user.tasks);
};
main();
