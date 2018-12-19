'use strict';

const express = require('express')
    , bodyParser = require('body-parser')
    , app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res){
  console.log('Default route hit');
  res.send('Working Properly')
})

app.post('/getSantaName', function(req, res){
  var intent = req.body.result && req.body.result.metadata.intentName ? req.body.result.metadata.intentName : "noIntent"
    , speech = "This is the default speech"

  if(intent === 'noIntent'){
    return res.json({
        speech: 'No intent was found',
        displayText: 'No intent was found',
        source: 'webhook-santa-app'
    });
  }
  else if(intent === 'santaName'){
    var personName = req.body.result.parameters.personName ? req.body.result.parameters.personName : 'noPerson'
    console.log('Result: ', req.body.result)
    console.log('Person Name : ', personName)
    if(personName === 'noPerson'){
      return res.json({
          speech: 'Please provide a valid person name',
          displayText: 'Please provide a valid person name',
          source: 'webhook-santa-app'
      });
    }
    else if(personName === 'Prateek'){
      return res.json({
          speech: 'Please provide a valid person name',
          displayText: 'Please provide a valid person name',
          source: 'webhook-santa-app'
      });
    }
    else if(personName === 'Ajay'){
      return res.json({
          speech: 'Please provide a valid person name',
          displayText: 'Please provide a valid person name',
          source: 'webhook-santa-app'
      });
    }
    else if(personName === 'Mansi'){
      return res.json({
          speech: 'Please provide a valid person name',
          displayText: 'Please provide a valid person name',
          source: 'webhook-santa-app'
      });
    }
    else if(personName === 'Akash'){
      return res.json({
          speech: 'Please provide a valid person name',
          displayText: 'Please provide a valid person name',
          source: 'webhook-santa-app'
      });
    }
  }
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
