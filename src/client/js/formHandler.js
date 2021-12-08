const handleExplore = (event) => {
  event.preventDefault();

  console.log('::: Button EXPLORE clicked :::');

  // User input values
  let formDestination = document.getElementById('destination').value;
  let startDay = document.getElementById('date-start').value;
  let endDay = document.getElementById('date-end').value;
  
  console.log(formDestination, startDay, endDay); // for debugging
  
  // Ask to fill all text fields
  if (formDestination == '' || startDay == '' || endDay =='') {
    alert('Fill all fields please.');
    return;
  }
  
  // Calculate trip duration
  const tripDuration = calculateDays(startDay, endDay);
  console.log(tripDuration); // for debugging

  // Check if the startDay later than the endDay OR earlier than present date
  if (tripDuration < 0 || new Date(startDay) < new Date()) {
    alert('Sorry, we don\'t offer time travel here.');
    return;
  }

  // Fetch data from the server
  fetch('http://localhost:8080/data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({destination: formDestination, tripDuration: tripDuration})       
  })
  .then(res => res.json())
  .then(res => {
    console.log(res); // for debugging

    // Update UI
    handleUI(res);

  })
}

// Event listener for the 'Explore' button
document.getElementById('explore-button').addEventListener('click', handleExplore);

/*
// Event listener for the 'Clear' button
document.getElementById('clear-results').addEventListener('click', () => {
  // Clear user inputs
  let formDestination = document.getElementById('destination').value;
  let startDay = document.getElementById('date-start').value;
  let endDay = document.getElementById('date-end').value;
  formDestination = '';
  startDay = '';
  endDay = '';

  // Add 'display-none' class from the div container
  document.getElementById('entry-results').classList.add('display-none');
});
*/

export { handleExplore };
window.handleExplore = handleExplore;