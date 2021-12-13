const app = require('./app');

// Designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, () => {
  // Callback to debug
  console.log(`The server is running on localhost:${port}`)
});