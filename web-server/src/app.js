const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const app = express();

// Define Path for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to save
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Yuri Tsukahara',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Yuri Tsukahara',
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Yuri Tsukahara',
		helpMessage: 'Help Message',
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide a valid location',
		});
	}

	geocode(
		req.query.address,
		(error, { location, latitude, longitude } = {}) => {
			if (error) {
				return res.send({
					error,
				});
			}

			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					return res.send({
						error,
					});
				}
				res.send({
					location,
					forecast: forecastData,
					address: req.query.address,
				});
			});
		}
	);
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Yuri Tsukahara',
		errorMessage: 'Article not found',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Yuri Tsukahara',
		errorMessage: 'Page not Found',
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
	console.log('http://localhost:3000');
});
