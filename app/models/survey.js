//San Diego Schema
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var survey_schema = new Schema({
  event_name:  String,
  comment: String
});

module.exports = mongoose.model('Survey', survey_schema);
