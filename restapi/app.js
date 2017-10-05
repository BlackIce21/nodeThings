/* jshint esversion: 6*/
const express = require('express');
const routes = require('./routes/rt');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use('/api',routes);


app.listen(port, function(){
  console.log("ready to accept " + port);
});
