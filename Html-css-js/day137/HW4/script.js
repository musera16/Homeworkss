const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => res.send(`User: ${req.body.name}`));
app.post('/content', (req, res) => res.send(`Content: ${req.body.content}`));
app.post('/admin-page', (req, res) => res.send(`Admin: ${req.body.admin}`));

app.listen(3000, () => console.log("Server running"));
