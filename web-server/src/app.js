const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();

// Define Path for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to save
app.use(express.static(publicDirPath));

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
		title: 'Help',
		helpMessage:'Help Message',
		name: 'Yuri Tsukahara'

	})
})

app.get('/weather', (req, res) => {
	res.send({ location: 'location', forecast: 'forecast' });
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
	console.log('http://localhost:3000');
});
