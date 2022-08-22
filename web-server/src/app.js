const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
	res.send([
		{
			name: 'Yuri',
			age: 29,
		},
		{
			name: 'Ju',
			age: 23,
		},
	]);
});

app.get('/about', (req, res) => {
	res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
	res.send({ location: 'location', forecast: 'forecast' });
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
	console.log('http://localhost:3000');
});
