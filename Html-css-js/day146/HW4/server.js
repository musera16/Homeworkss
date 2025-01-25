const express = require("express");
const app = express();
app.use(express.json());

// მონაცემები
const users = [
  { name: "John Doe", email: "john@example.com", profilePicture: "https://example.com/john.jpg" },
  { name: "Jane Smith", email: "jane@example.com", profilePicture: "https://example.com/jane.jpg" }
];
const brands = ["Nike", "Adidas", "Puma"];

// როუტები
app.get("/users", (req, res) => res.json(users));
app.get("/brands", (req, res) => res.json(brands));

// სერვერის გაშვება
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
