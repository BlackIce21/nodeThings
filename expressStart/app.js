/* jshint esversion : 6*/
var exp = require('express');

var app = exp();

var parser = require('body-parser');
var urlencodedParser = parser.urlencoded({extended: false}); // requesting POST method

app.set('view engine','ejs'); // setting view EJS

app.use('/assets', exp.static('assets')); // serving up static files like CSS and images

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
  res.render('contact', {qString: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
res.render('contact-success', {successData: req.body});
});

app.get('/aboutus', (req,res) => {
  res.render('aboutus');
});

// using EJS template
app.get('/profile/:name', function(req, res) {
  var profileData = {age: 26, job: 'MEAN Stack Dev', hobbies: ['gaming','running','singing'], gender: 'Male', allergies: ['peanuts','penicillin','mushrooms']}; // Check test.ejs
  res.render('profile', {person: req.params.name, profileData: profileData}); // sending data to the EJS view using an object
});

app.listen(3000);
console.log("Listening to port 3000");
