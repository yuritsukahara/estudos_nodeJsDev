require('../src/db/mongoose');
const User = require('../src/models/user');

// 63228489203b187878e41003

User.findByIdAndUpdate('63228489203b187878e41003', { age: 22 })
	.then((user) => {
		console.log(user);
		return User.countDocuments({ age: 0 });
	})
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
