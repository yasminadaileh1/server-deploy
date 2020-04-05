require('dotenv').config();
const express = require('express');
// create our app 
// expose the prototype that will get set on requests
// expose the prototype that will get set on responses

const cors = require('cors');
// cors origin source sharing

const PORT = process.env.PORT || 4000;
// we write it in the .env file also an alternative for it in case the server shutdown.

const app = express();
// app.handle (req, res, next);

app.use(cors());

// lecotion request & the respone will be new object we have it form the constructor refferd to JOSN file.
app.get('/location', (request , respone) => {
    const geoData = require('./data/geo.json');
    const city = request.query.city ;
    const locationData = new Location(city, geoData);
    respone.status(200).json(locationData);
// });
// app.get('/weather', (request , respone) => {
//     const weatherData = require('./data/darksky.json');
//     const city = request.query.city ;
//     const weatherNow = new Weather(city, weatherData);
//     respone.status(200).json(weatherNow);
// });

//constructor function 
function Location ( city , geoData){
    this.search_query = city;
    this.formatted_query = geoData[0].display_name;
    this.latitude = geoData[0].latitude;
    this.longitude = geoData[0].longitude;
}
// function Weather ( city , weatherData){
//     this.search_query = city;
//     this.formatted_query = weatherData[0].display_name;
//     this.latitude = weatherData[0].latitude;
//     this.longitude = weatherData[0].lon;
// }



app.use('*', (request, response) => response.status(404).send('404 page not found'));
app.listen(PORT,() => console.log( ` this is our express ${express}`));
app.listen(PORT,() => console.log( ` this is our app ${app}`));
app.listen(PORT,() => console.log(`Listening to port ${PORT}`));
app.listen(PORT,() => console.log( ` this is our app ${cors}`));


