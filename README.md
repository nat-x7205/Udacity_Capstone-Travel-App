# Udacity. Capstone: Travel App

## Overview
This is the fifth project of the [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.
The project includes a simple form where the user enters the location they are traveling to, as well as the start and end dates of the trip. After clicking the 'Explore' button, the app sends a request to the Geonames API to obtain the location's coordinates, which are used to pull the location's wheather information from the Wheatherbit API. For the final touch, an image of the location entered will be displayed; for this, the app uses the Pixabay API.

## References
The app uses data from [Geonames](http://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/), and [Pixabay](https://pixabay.com/).

## Used technologies
- HTML
- Sass
- JavaScript
- Node
- Express
- API
- Webpack
- Jest
- Workbox Service Worker

## Suggestions to make the project stand out
- [x] Add end date and display length of trip.
- [ ] Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- [ ] Allow user to add multiple destinations on the same trip.
  - Pull in weather for additional locations.
- [ ] Allow the user to add hotel and/or flight data.
  - Multiple places to stay? Multiple flights?
- [ ] Integrate the REST Countries API to pull in data for the country being visited.
- [ ] Allow the user to remove the trip.
- [ ] Use [Local Storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) to save the data so that when they close, then revisit the page, their information is still there.
- [ ] Instead of just pulling a single day forecast, pull the forecast for multiple days.
- [x] Incorporate icons into forecast.
- [ ] Allow user to Print their trip and/or export to PDF.
- [ ] Allow the user to add a todo list and/or packing list for their trip.
- [ ] Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
  - Automatically sort additional trips by countdown.
  - Move expired trips to bottom/have their style change so it’s clear it’s expired.

## License
The app is free for the personal use.

## Copyright
Coded by Natalia Petrenko, 2021.