var express = require('express');

var app = express();

app.set('view engine','ejs'); // setting view EJS

app.use('/assets', express.static('assets')); // serving up static files like CSS and images

// below code responds to GET req and sends strings
app.get('/', function(req, res) {
  res.render('index');
});


// sending route parameters
// app.get('/profile/:id', function(req, res) {
//   res.send("You requested profile " + req.params.id);
// });

// sending HTML pages
app.get('/index', function(req, res) {
  res.render('index');
});

app.get('/contact', (req,res) => {
  res.render('contact');
});

app.get('/aboutus', (req,res) => {
  res.render('aboutus');
});

// using EJS template
app.get('/profile/:name', function(req, res) {
  var profileData = {age: 26, job: 'MEAN Stack Dev', hobbies: ['gaming','running','singing']}; // Check test.ejs
  res.render('profile', {person: req.params.name, profileData: profileData}); // sending data to the EJS view using an object
});

app.listen(3000);
console.log("Listening to port 3000");
