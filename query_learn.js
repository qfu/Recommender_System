var Survey = require('./app/models/survey');
var mongoose   = require('mongoose');
var url = 'mongodb://localhost:27017/test';
mongoose.connect(url);
var bayes = require('bayes')
var classifier = bayes()



Survey.find(function (err, instance) {
  if (err) return handleError(err);
  instance.map(function(ele){
    classifier.learn(ele.event_name,ele.comment);
  })
  console.log(classifier.categorize("Basketball"));
})



// now ask it to categorize a document it has never seen before
