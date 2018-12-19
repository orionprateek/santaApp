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
  console.log('Inside get santa name')
    console.log('Body: ', req.body)
  var intent = req.body.queryResult.intent && req.body.queryResult.intent.displayName ? req.body.queryResult.intent.displayName : "noIntent"
    , speech = "This is the default speech"
  console.log('Intent: ', intent)
  if(intent === 'noIntent'){
    return res.json({
        speech: 'No intent was found',
        displayText: 'No intent was found',
        source: 'webhook-santa-app'
    });
  }
  else if(intent === 'santaName'){
    var personName = req.body.queryResult.parameters.personName ? req.body.queryResult.parameters.personName : 'noPerson'
    
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
          "payload": {
            "google": {
              "expectUserResponse": true,
              "richResponse": {
                "items": [
                  {
                    "simpleResponse": {
                      "textToSpeech": "this is a simple response"
                    }
                  }
                ]
              }
            }
          }
        });
    }
  }
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
