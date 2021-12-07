const resultsSection = document.getElementById('entry-results');
// const clearResults = document.getElementById('clear-results');
let formDestination = document.getElementById('destination').value;
let startDay = document.getElementById('date-start').value;
let endDay = document.getElementById('date-end').value;

const handleClear = () => {
  console.log('::: Button CLEAR clicked :::');
  
  //--- Clear user inputs ---
  formDestination = '';
  startDay = '';
  endDay = '';
  console.log(formDestination, startDay, endDay);

  // Add 'display-none' class from the div container
  resultsSection.classList.add('display-none');

}

// Event listener for the 'Clear' button
document.getElementById('clear-results').addEventListener('click', handleClear);

export { handleClear };
window.handleClear = handleClear;