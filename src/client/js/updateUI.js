const resultsSection = document.getElementById('entry-results');

const handleUI = (webData) => {
  // Remove 'display-none' class from the div container
  resultsSection.classList.remove('display-none');
  
  console.log(webData);
  
  // Select correct grammar form for 'day/days'
  webData.tripDuration === 1 ?
  document.getElementById('user-entry-results').innerHTML = `You have chosen to travel to <strong>${webData.cityInputName}</strong> (${webData.countryName}) for <strong>one day</strong>.` :
  document.getElementById('user-entry-results').innerHTML = `You have chosen to travel to <strong>${webData.cityInputName}</strong> (${webData.countryName}) for <strong>${webData.tripDuration} days</strong>.`;
  
  //--- Show the search results ---
  document.getElementById('city-image').src = webData.cityImage;
  document.getElementById('city-image').alt = `A photo of ${webData.cityName} (${webData.countryName}) from pixabay.com.`;
  
  document.getElementById('wheather-icon').src = `https://www.weatherbit.io/static/img/icons/${webData.iconImg}.png`;
  document.getElementById('weather').innerHTML = `The current weather in ${webData.cityInputName} is <strong>${webData.description.toLowerCase()}</strong>, <strong>${webData.temperature}&deg;C</strong>`;
}

export { handleUI };
window.handleUI = handleUI;