const handleClear = () => {
  console.log('::: Button CLEAR clicked :::');
  
  //--- Clear user inputs ---
  document.getElementById('destination').value = '';
  document.getElementById('date-start').value = '';
  document.getElementById('date-end').value = '';
  // console.log(formDestination, startDay, endDay);

  // Add 'display-none' class from the div container
  document.getElementById('entry-results').classList.add('display-none');
}

// Event listener for the 'Clear' button
document.getElementById('clear-results').addEventListener('click', handleClear);

export { handleClear };
window.handleClear = handleClear;