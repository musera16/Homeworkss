const express = require("express");
const app = express();

const movies = ["Alien", "Avengers", "Terminator", "Ghost Buster"];

// Simple route to get movies
app.get("/movies", (req, res) => res.json(movies));

// Start server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
