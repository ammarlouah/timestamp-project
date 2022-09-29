// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/:date?",function(req,res){
  if(typeof (req.params.date)=== 'undefined') req.date = new Date();
  else{
    if(!isNaN(req.params.date)) req.params.date=+(req.params.date);
    req.date = new Date(req.params.date);
  }
  console.log(req.date);
  res.json({
    "unix" : (req.date).getTime(),
    "utc" : (req.date).toString()
  })
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});