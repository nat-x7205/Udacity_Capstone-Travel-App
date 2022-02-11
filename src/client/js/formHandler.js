const handleExplore = (event) => {
  event.preventDefault();

  console.log('::: Button EXPLORE clicked :::'); //for debugging

  // User input values
  let formDestination = document.getElementById('destination').value;
  let startDay = document.getElementById('date-start').value;
  let endDay = document.getElementById('date-end').value;
  console.log(formDestination, startDay, endDay); // for debugging
  
  // Ask to fill all text fields
  if (formDestination == '' || startDay == '' || endDay == '') {
    alert('Fill all fields please.');
    return;
  }
  
  // Calculate trip duration
  const tripDuration = Client.calculateDays(startDay, endDay);
  console.log(tripDuration); // for debugging

  // Check if the startDay later than the endDay OR earlier than present date

  
  if (tripDuration < 0 || new Date(startDay) < new Date()) {
    alert('Sorry, we don\'t offer time travel here.');
    return;
  }

  // Fetch data from the server
  fetch('http://localhost:8081/data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({destination: formDestination, tripDuration: tripDuration})       
  })
  .then(res => res.json())
  .then(res => {
    console.log(res); // for debugging

    // Update UI
    Client.handleUI(res);
  })
  .then(() => {
    document.getElementById('user-entry-results').scrollIntoView({behavior: "smooth"});
  })
}

// Event listener for the 'Explore' button
document.getElementById('explore-button').addEventListener('click', handleExplore);

export { handleExplore };
window.handleExplore = handleExplore;