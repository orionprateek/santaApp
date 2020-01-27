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
              "text": [
                "no intent found in fulfillment text"
              ]
            }
          }
        ],
      "source": "webhook-calculator-app",
    });      
  }
  else if(intent === 'add'){
    var number1 = req.body.queryResult && req.body.queryResult.parameters.number1 ? parseInt(req.body.queryResult.parameters.number1) : "noParam"
    var number2 = req.body.queryResult && req.body.queryResult.parameters.number2 ? parseInt(req.body.queryResult.parameters.number2) : "noParam"
    speech = "The sum is " + (number1 + number2)
      
    return res.json({      
      "fulfillmentText": speech,
      "fulfillmentMessages": [
      {
        "text": {
          "text": [
            speech
          ]
        }
      }
    ],
      "source": "webhook-calculator-app"
    });     
  }
  
  else if(intent === 'subtract'){
    var number1 = req.body.queryResult && req.body.queryResult.parameters.number1 ? parseInt(req.body.queryResult.parameters.number1) : "noParam"
    var number2 = req.body.queryResult && req.body.queryResult.parameters.number2 ? parseInt(req.body.queryResult.parameters.number2) : "noParam"
    speech = "The difference is " + (number2 - number1)
      
    return res.json({      
      "fulfillmentText": speech,
      "fulfillmentMessages": [
      {
        "text": {
          "text": [
            speech
          ]
        }
      }
    ],
      "source": "webhook-calculator-app"
    });     
  }
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
