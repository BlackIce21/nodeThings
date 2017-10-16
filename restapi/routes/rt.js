/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const driver = require('../models/driver');

// Getting list of drivers from DB
router.get('/drivers', (req,res,next) =>{
driver.find({}).select('name -_id rating availability').then(function(driver){
  res.send(driver);
});
});
//adding new drivers
router.post('/drivers', (req,res,next) =>{
  driver.create(req.body).then(function(driver){
    res.send(driver);
  }).catch(next);
});

router.put('/drivers/:id', (req,res,next) =>{
  res.send({type:'PUT'});
});

router.delete('/drivers/:id', (req,res,next) =>{
  driver.findByIdAndRemove({_id: req.params.id}).then(function(driver){
    res.send(driver);
  });
});

module.exports = router;
