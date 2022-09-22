require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('63226523b2f5d6ccbfaacf92')
	.then((task) => {
		console.log('removido: ' + task);
		return Task.countDocuments({ completed: false });
	})
	.then((incomplete) => {
		console.log(incomplete);
	})
	.catch((e) => {
		console.log(e);
	});
