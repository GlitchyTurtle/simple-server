const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a GET route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

// Define a POST route
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  // Process the data and send back a response
  const responseData = { message: 'Data received successfully!' };
  res.json(responseData);
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
