/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();

// Getting list of drivers from DB
router.get('/drivers', (req,res) =>{
  res.send({type:'GET'});
});

router.post('/drivers', (req,res) =>{
  res.send({type:'POST', name: req.body.name, rating: req.body.rating});
});

router.put('/drivers/:id', (req,res) =>{
  res.send({type:'PUT'});
});

router.delete('/drivers/:id', (req,res) =>{
  res.send({type:'DELETE'});
});

module.exports = router;
