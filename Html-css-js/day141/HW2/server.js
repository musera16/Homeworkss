const express = require("express");
const app = express();

const songs = ["Imagine", "Bohemian Rhapsody", "Stairway to Heaven", "Hey Jude"];

// Simple route to get songs
app.get("/songs", (req, res) => res.json(songs));

// Start server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
