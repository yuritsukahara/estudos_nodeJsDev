require('dotenv').config();

const weatherKey = process.env.WEATHERAPIKEY;
const mapBoxKey = process.env.MAPBOXAPIKEY;

const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=Apucarana`;

request({ url: url, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to weather service!');
	} else if (response.body.error) {
		console.log('Unable to find location ');
	} else {
		const currentData = response.body.current;
		console.log(
			`Agora: ${currentData.temperature}ºC. Com a sensação de ${currentData.feelslike}ºC.`
		);
	}
});

// Geocoding

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxKey}`;

request({ url: geocodeURL, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to geocode service!');
	} else if (response.body.error) {
		console.log('Unable to complete geocode request');
	} else {
		const geoData = response.body.features[0];
		const latitude = geoData.center[0];
		const longitude = geoData.center[1];
		console.log('latitude:' + latitude + '\n' + 'longitude:' + longitude);
	}
});
