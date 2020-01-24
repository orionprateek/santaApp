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
  var intent = req.body.result && req.body.result.metadata.intentName ? req.body.result.metadata.intentName : "noIntent"
    , speech = "This is the default speech"
  console.log('Intent: ', intent)
  if(intent === 'noIntent'){
    return res.json({
      "fulfillmentText": "no intent found",
      "fulfillmentMessages": [
        {
          "text": [
            "no intent found"
          ],
        }
      ],
      "source": "webhook-calculator-app",
    });      
  }
  else if(intent === 'add'){  
    return res.json({
        speech: 'add intent was found',
        displayText: 'add intent was found',
        source: 'webhook-calculator-app'
    });    
  }
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
