const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates')

app.use(express.static(publicDirPath));

app.set('view engine', 'hbs')
app.set('views', viewPath)

app.get('', (req, res) =>{
	res.render('index', {
		title: 'Weather App',
		name: 'Yuri Tsukahara',
	})
})

app.get('/about', (req, res)=>{
	res.render('about', {
		title:'About Me',
		name:'Yuri Tsukahara',
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		helpMessage:'Help Message'

	})
})

app.get('/weather', (req, res) => {
	res.send({ location: 'location', forecast: 'forecast' });
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
	console.log('http://localhost:3000');
});
