const calculateDays = (date1, date2) => {
  console.log('::: Running calculateDays :::', date1, date2); //for debugging

  const start = new Date(date1);
  const end = new Date(date2);

  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1; 
  console.log(diffDays + ' days'); //for debugging
  return diffDays;
};

export { calculateDays };
window.calculateDays = calculateDays;