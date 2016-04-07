var Survey = require('./app/models/survey');
var mongoose   = require('mongoose');
var url = 'mongodb://localhost:27017/test';
mongoose.connect(url);

//Survey Table can be catagoried based on people


//Different Surve correspond to different table
Survey.create({ event_name: 'Basketball is interesting',comment:'Going' }, function (err, small) {
  if (err) return handleError(err);
})

Survey.create({ event_name: 'Volleball',comment:'Going' }, function (err, small) {
  if (err) return handleError(err);
})
Survey.create({ event_name: 'Shit ',comment:'Not' }, function (err, small) {
  if (err) return handleError(err);
})
