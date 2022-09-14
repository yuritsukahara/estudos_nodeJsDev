const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	age: {
		type: Number,
		trim: true,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		},
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		trim: true,
		validate(value) {
			if (value.includes('password')) {
				throw new Error('Password must not contain password');
			}
		},
	},
});

const me = new User({
	name: '   Yuri    ',
	email: ' MEUEmAIL@Yuri.com',
	password: 'asdpassword',
});

// me.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('Error!', error);
// 	});

const Tasks = mongoose.model('Tasks', {
	description: {
		type: String,
		trim: true,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const task = new Tasks({
	description: 'Take pills',
});

task.save()
	.then(() => {
		console.log(task);
	})
	.catch((error) => {
		console.log('Error!', error);
	});
