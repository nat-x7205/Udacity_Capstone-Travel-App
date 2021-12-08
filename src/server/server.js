// const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Express to run server and routes
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
// app.use(express.static('src/client'));
app.use(express.static('dist'));

// Designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, () => {
  // Callback to debug
  console.log(`The server is running on localhost:${port}`)
});

/*
// GET request before Webpack
console.log(__dirname);
app.get('/', (req, res) => { res.sendFile('/client/views/index.html', { root: __dirname + '/..' })});
*/

// GET request with Webpack
app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
});

// Declare an API key variables
// const api_key = process.env.API_KEY;

// GEONAMES
// http://api.geonames.org/searchJSON?q=demo&maxRows=10&username=demo
// base URL: 'http://api.geonames.org/searchJSON?q=';
const geonames_key = 'natalia_petrenko';

// WEATHERBIT – https://www.weatherbit.io/api/weather-current
/*
Base URL
HTTP: http://api.weatherbit.io/v2.0/current
HTTPS: https://api.weatherbit.io/v2.0/current
Supported Methods: GET
Icons: https://www.weatherbit.io/support/post/icons
*/
// EG.: https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
const weatherbit_api = '45b77b9f9a924aa4af137982f0a096cf';

// PIXABAY – https://pixabay.com/api/docs/
// EG.: https://pixabay.com/api/?key=24530817-4aa34420374c3d6ea858a1520&q=yellow+flowers&image_type=photo
const pixabay_api = '24530817-4aa34420374c3d6ea858a1520';

// Initiate the endpoint object
const dataForUI = {};

// POST route
app.post('/data', async (req, res) => {
  // Define user's trip destination from the request parameters
  const destination = req.body.destination;

  // Retrieve data from GEONAMES
  const geonamesReply = await (fetch(`http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${geonames_key}`, { method: 'GET' }));
  const geonamesData = await geonamesReply.json();

  // Retrieve data from WEATHERBIT
  const weatherbitReply = await (fetch(`https://api.weatherbit.io/v2.0/current?lat=${geonamesData.geonames[0].lat}&lon=${geonamesData.geonames[0].lng}&key=${weatherbit_api}`, { method: 'GET' }));
  const weatherbitData = await weatherbitReply.json();

  // Retrieve data from PIXABAY
  const pixabayReply = await (fetch(`https://pixabay.com/api/?key=${pixabay_api}&q=${geonamesData.geonames[0].name}&image_type=photo`, { method: 'GET' }));
  
  try {
    const pixabayData = await pixabayReply.json();

    // Save collected data into the response object dataForUI{}
    dataForUI.tripDuration = req.body.tripDuration;
    dataForUI.cityInputName = destination;
    dataForUI.cityName = geonamesData.geonames[0].name;
    dataForUI.countryName = geonamesData.geonames[0].countryName;
    dataForUI.temperature = weatherbitData.data[0].temp;
    dataForUI.description = weatherbitData.data[0].weather.description;
    // dataForUI.iconCode = weatherbitData.data[0].weather.code;
    dataForUI.iconImg = weatherbitData.data[0].weather.icon;
    dataForUI.cityImage = pixabayData.hits[0].webformatURL;

    // res.send(pixabayData);
    // res.send(weatherbitData);
  } catch(error) {
    // Handle an error
    console.log("Error", error);
    dataForUI.cityImage = 'none'
  }  
  console.log(dataForUI);
  res.send(dataForUI);
})
