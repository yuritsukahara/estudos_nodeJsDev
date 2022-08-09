require('dotenv').config()

const weatherKey = process.env.WEATHERAPIKEY
const mapBoxKey = process.env.MAPBOXAPIKEY

const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=Apucarana`

request({ url: url, json: true}, (error, response) =>{
    const currentData = response.body.current
    console.log(`Agora: ${currentData.temperature}ºC. Com a sensação de ${currentData.feelslike}ºC.`)
 })


const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxKey}`

 request({ url: mapBoxUrl, json: true}, (error, response) =>{
    const mapBoxData = response.body.features[0]
    const latitude = mapBoxData.center[0]
    const longitude = mapBoxData.center[1]
    console.log('latitude:' + latitude + '\n' + 'longitude:' + longitude)
 } )