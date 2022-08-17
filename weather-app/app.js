const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Unable to find location ');
// 	} else {
// 		const currentData = response.body.current;
// 		console.log(
// 			`Agora: ${currentData.temperature}ºC. Com a sensação de ${currentData.feelslike}ºC.`
// 		);
// 	}
// });

// Geocoding

// const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxKey}`;

// request({ url: geocodeURL, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to geocode service!');
// 	} else if (response.body.error) {
// 		console.log('Unable to complete geocode request');
// 	} else {
// 		const geoData = response.body.features[0];
// 		const latitude = geoData.center[0];
// 		const longitude = geoData.center[1];
// 		console.log('latitude:' + latitude + '\n' + 'longitude:' + longitude);
// 	}
// });

geocode('Apucarana', (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});

forecast(-51.4611, -23.5525, (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});
