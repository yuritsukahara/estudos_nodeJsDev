require('dotenv').config();

const mapBoxKey = process.env.MAPBOXAPIKEY;

const request = require('postman-request');

const geocode = (adress, callback) => {
	const url =
		`https://api.mapbox.com/geocoding/v5/mapbox.places/` +
		encodeURIComponent(adress) +
		`.json?access_token=${mapBoxKey}`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to locatation services!', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search', undefined);
		} else {
			const geoData = body.features[0];
			callback(undefined, {
				location: geoData.place_name,
				latitude: geoData.center[1],
				longitude: geoData.center[0],
			});
		}
	});
};

module.exports = geocode;
