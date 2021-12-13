const dotenv = require('dotenv');
dotenv.config();

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
// app.use(express.static('src/client')); // before Webpack
app.use(express.static('dist'));


// GET request with Webpack
app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
});

// Declare an API key variables
const geonames_key = process.env.GEONAMES_KEY;
const weatherbit_api = process.env.WEATHERBIT_API;
const pixabay_api = process.env.PIXABAY_API;

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

    // res.send(pixabayData); // for debugging
    // res.send(weatherbitData); // for debugging
  } catch(error) {
    // Handle an error
    console.log("Error", error); //for debugging
    dataForUI.cityImage = 'none'
  }  
  console.log(dataForUI); // for debugging
  res.send(dataForUI);
})

module.exports = app;