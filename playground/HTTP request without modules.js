const http = require('http')
require('dotenv').config();

const weatherKey = process.env.WEATHERAPIKEY;

const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=Apucarana&units=m`

const request = http.request(url, (response) =>{
    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) =>{
    console.log('An error', error)
})
request.end()