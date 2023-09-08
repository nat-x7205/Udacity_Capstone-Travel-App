# Capstone project: Travel App

## Overview
This is the fifth project of the [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.<br /><br />
![The app screenshot](src/client/images/Travel-app_Screenshot.jpg?raw=true "The app screenshot")<br /><br />
The project includes a form where the user enters the location they are traveling to, as well as the start and end dates of the trip. After clicking the 'Explore' button, the app sends a request to the Geonames API to obtain the location's coordinates, which are used to pull the location's wheather information from the Wheatherbit API. For the final touch, an image of the location entered will be displayed; for this, the app uses the Pixabay API.

## References
- The app uses data from [Geonames](http://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/), and [Pixabay](https://pixabay.com/).
- The background image by [Francesco Ungaro](https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/) from [Pexels](https://www.pexels.com/).
- [Lato](https://fonts.google.com/specimen/Lato) has been used as this project font, and was sourced from [Goggle Fonts](https://fonts.google.com/). 

## Demo
The [demo version](http://thequickwebsite.com:8081/) of the Travel App project.

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

## Prerequisites
Node 16.13.0

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

## License
The app is free for personal use with the credentials to this repository.

## Copyright
Coded by Natalia Petrenko, 2021.