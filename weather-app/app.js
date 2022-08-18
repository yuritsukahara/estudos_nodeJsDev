const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const args = process.argv.slice(2);
const locationName = args[0];

if (!locationName) {
	return console.log('Por favor, digite uma cidade');
}

geocode(locationName, (error, {location, latitude, longitude} = {}) => {
	if (error) {
		return console.log(error);
	}

	forecast(latitude, longitude, (error, forecastData) => {
		if (error) {
			return console.log(error);
		}
		console.log(location);
		console.log(forecastData);
	});
});
