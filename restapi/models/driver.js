/* jshint esversion :6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema
const DriverSchema = new Schema({
  name :{
    type: String,
    required: [true, 'Name field is necessary']
  },
  rating:{
    type: String
  },
  availability: {
    type: Boolean,
    default: false
  }
  // TODO add geolocation for the drivers
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
