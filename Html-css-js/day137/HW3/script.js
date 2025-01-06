const express = require('express');
const app = express();

// User page
app.get('/user', (req, res) => res.send('<h1>User Page</h1>'));

// Content page
app.get('/content', (req, res) => res.send('<h1>Content Page</h1>'));

// Admin page
app.get('/admin-page', (req, res) => res.send('<h1>Admin Page</h1>'));

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
