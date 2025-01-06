const express = require('express');
const app = express();

app.use(express.json()); // For parsing JSON data

// Endpoint to receive data
app.post('/data', (req, res) => {
  console.log(req.body); // Log received data
  res.send("Data received!");
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
