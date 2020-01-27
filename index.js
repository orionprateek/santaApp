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
//     console.log('Body: ', req.body)
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
    var sum =  number1 + number2
    speech = "The sum is " + sum
      
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
    
  else if(intent === 'multiply'){
    var number1 = req.body.queryResult && req.body.queryResult.parameters.number1 ? parseInt(req.body.queryResult.parameters.number1) : "noParam"
    var number2 = req.body.queryResult && req.body.queryResult.parameters.number2 ? parseInt(req.body.queryResult.parameters.number2) : "noParam"
    speech = "The product is " + (number2 * number1)
      
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
    
  else if(intent === 'square'){
//     var number1 = req.body.queryResult && req.body.queryResult.parameters.number1 ? parseInt(req.body.queryResult.parameters.number1) : "noParam"
//     var number2 = req.body.queryResult && req.body.queryResult.parameters.number2 ? parseInt(req.body.queryResult.parameters.number2) : "noParam"
//     speech = "The product is " + (number2 * number1)
      console.log(req.body.queryResult.outputContexts)
      var contextNumber1 = req.body.queryResult && req.body.queryResult.outputContexts[0]['parameters']['number1'] ? req.body.queryResult.outputContexts[0]['parameters']['number1'] : 'noContext',
      var contextNumber2 = req.body.queryResult && req.body.queryResult.outputContexts[0]['parameters']['number2'] ? req.body.queryResult.outputContexts[0]['parameters']['number2'] : 'noContext'    
      var square = (contextNumber1 + contextNumber2) * (contextNumber1 + contextNumber2)
      speech = "The square is " + square
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
