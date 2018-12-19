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
  var intent = req.body.result && req.body.result.metadata.intentName ? req.body.result.metadata.intentName : "noIntent"
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
    var personName = req.body.result.parameters.personName ? req.body.result.parameters.personName : 'noPerson'
    
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
            speech: 'The secret santa of Prateek is Mansi',
            displayText: 'he secret santa of Prateek is Mansi',
            source: 'webhook-santa-app'
        });
    }
     else if(personName === 'Ajay'){
      return res.json({
            speech: 'The secret santa of Ajay is Aakash',
            displayText: 'he secret santa of Ajay is Aakash',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Aakash'){
      return res.json({
            speech: 'The secret santa of Aakash is Prateek',
            displayText: 'he secret santa of Aakash is Prateek',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Mansi'){
      return res.json({
            speech: 'The secret santa of Mansi is Ajay',
            displayText: 'he secret santa of Mansi is Ajay',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Mohan'){
      return res.json({
            speech: 'The secret santa of Mohan is Sunil',
            displayText: 'he secret santa of Mohan is Sunil',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Sunil'){
      return res.json({
            speech: 'The secret santa of Sunil is Tarun',
            displayText: 'he secret santa of Sunil is Tarun',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Tarun'){
      return res.json({
            speech: 'The secret santa of Tarun is Hema',
            displayText: 'he secret santa of Tarun is Hema',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Hema'){
      return res.json({
            speech: 'The secret santa of Hema is Sheetal',
            displayText: 'he secret santa of Hema is Sheetal',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Sheetal'){
      return res.json({
            speech: 'The secret santa of Sheetal is Jaswinder',
            displayText: 'he secret santa of Sheetal is Jaswinder',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Jaswinder'){
      return res.json({
            speech: 'The secret santa of Jaswinder is Srini',
            displayText: 'he secret santa of Jaswinder is Srini',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Srini'){
      return res.json({
            speech: 'The secret santa of Srini is Mohan',
            displayText: 'he secret santa of Srini is Mohan',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Mohan'){
      return res.json({
            speech: 'The secret santa of Mohan is Sunil',
            displayText: 'he secret santa of Mohan is Sunil',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Sanju'){
      return res.json({
            speech: 'The secret santa of Sanju is Prathap',
            displayText: 'he secret santa of Sanju is Prathap',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Prathap'){
      return res.json({
            speech: 'The secret santa of Prathap is Sathish',
            displayText: 'he secret santa of Prathap is Sathish',
            source: 'webhook-santa-app'
        });
    }
       else if(personName === 'Sathish'){
      return res.json({
            speech: 'The secret santa of Sathish is Aswini',
            displayText: 'he secret santa of Sathish is Aswini',
            source: 'webhook-santa-app'
        });
    }
       else if(personName === 'Aswini'){
      return res.json({
            speech: 'The secret santa of Aswini is Manoj',
            displayText: 'he secret santa of Aswini is Manoj',
            source: 'webhook-santa-app'
        });
    }
      else if(personName === 'Manoj'){
      return res.json({
            speech: 'The secret santa of Manoj is Akila',
            displayText: 'he secret santa of Manoj is Akila',
            source: 'webhook-santa-app'
        });
    }
      
      else if(personName === 'Akila'){
      return res.json({
            speech: 'The secret santa of Akila is Ruban',
            displayText: 'he secret santa of Akila is Ruban',
            source: 'webhook-santa-app'
        });
    }
      
      else if(personName === 'Ruban'){
      return res.json({
            speech: 'The secret santa of Ruban is Sanju',
            displayText: 'he secret santa of Ruban is Sanju',
            source: 'webhook-santa-app'
        });
    }
  }
})


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
