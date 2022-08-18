const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const args = process.argv.slice(2);

const locationName = args[0];

if (!locationName) {
	return console.log('Digite uma cidade');
}

geocode(locationName, (error, data) => {
	if (error) {
		return console.log(error);
	}

	forecast(data.latitude, data.longitude, (error, forecastData) => {
		if (error) {
			return console.log(error);
		}
		console.log(data.location);
		console.log(forecastData);
	});
});
