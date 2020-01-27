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

app.post('/getCalculator', function(req, res){
  console.log('Inside Calculator route')
    console.log('Body: ', req.body)
  var intent = req.body.queryResult && req.body.queryResult.intent.displayName ? req.body.queryResult.intent.displayName : "noIntent"
    , speech = "This is the default speech"
  console.log('Intent: ', intent)
  if(intent === 'noIntent'){
    return res.json({
      "fulfillmentText": "no intent found in fulfillment text",
      "fulfillmentMessages": [
        {
          "text": {
                "messages": [
                    {
                        "speech": "No intent found here",
                        "type": 0
                    }
                ],
          }
        }
      ],
      "source": "webhook-calculator-app",
    });      
  }
  else if(intent === 'add'){  
    console.log('Add intent')
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
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
