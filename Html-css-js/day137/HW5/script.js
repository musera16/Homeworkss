const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/new-database');

const Page = mongoose.model('Page', { name: String, content: String });

app.use(express.json());

app.get('/', (req, res) => res.send('Home Page'));
app.get('/user', (req, res) => res.send('User Page'));

app.post('/content', (req, res) => {
  new Page(req.body).save();
  res.send('Content Saved!');
});

app.get('/admin', (req, res) => res.send('Admin Page'));

app.listen(3000, () => console.log("Server running"));
