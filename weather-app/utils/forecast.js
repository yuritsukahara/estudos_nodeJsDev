require('dotenv').config();

const request = require('postman-request');

const weatherKey = process.env.WEATHERAPIKEY;

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

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${longitude},${latitude}&units=m`;
    console.log(url)
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (response.body.error) {
			callback('Unable to find location ', undefined);
		} else {
			const location = response.body.location.name;
			const currentData = response.body.current;

			const windSpeed = currentData.wind_speed;
			const temperature = currentData.temperature;
			const precip = currentData.precip;
            const humidity = currentData.humidity;
            const weatherDescription = currentData.weather_descriptions;

			callback(undefined, {
				location: location,
				temperature: temperature,
				wind_speed: windSpeed,
				rainnig: precip,
                humidity: humidity,
                weatherDescription: weatherDescription,
			});
		}
	});
};

module.exports = forecast;
