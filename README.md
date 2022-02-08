# Capstone project: Travel App

## Overview
This is the fifth project of the [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.
![The app screenshot](src/client/images/Travel-app_Screenshot.jpg?raw=true "The app screenshot")
The project includes a form where the user enters the location they are traveling to, as well as the start and end dates of the trip. After clicking the 'Explore' button, the app sends a request to the Geonames API to obtain the location's coordinates, which are used to pull the location's wheather information from the Wheatherbit API. For the final touch, an image of the location entered will be displayed; for this, the app uses the Pixabay API.

## References
The app uses data from [Geonames](http://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/), and [Pixabay](https://pixabay.com/).

## Demo
The [demo version]() of the app.

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

## Get started
1. Fork the repo and clone the forked repo to you local computer.
2. In the Terminal window navigate to the local app directory and run `npm install` command to install all dependencies from `package.json` file (make sure you have node installed).
3. Create `.env` file in the root directory to store the following API keys:
- GEONAMES_KEY (use your username for this site)
- WEATHERBIT_API
- PIXABAY_API
![.env variables sample](src/client/images/env_variables_sample.png?raw=true ".env variables sample")
4. For the **development mode** run `npm run build-dev` command – the app will be opened in your default browser tab running on `localhost:8080`.
5. For the **production mode** run `npm run build-prod` and then `npm start`. Then you can open the app in a browser tab with the `localhost:8081` in the IP address field.

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
The app is free for personal use with the credentials to this repository.

## Copyright
Coded by Natalia Petrenko, 2021.