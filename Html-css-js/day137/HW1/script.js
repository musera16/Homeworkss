const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern-development')
  .then(() => console.log("Connected"))
  .catch(err => console.log("Error", err));

const Resource = mongoose.model('Resource', { name: String });

new Resource({ name: "Example" }).save()
  .then(() => console.log("Saved"))
  .catch(err => console.log("Save Error", err));
