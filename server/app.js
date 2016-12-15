var PORT = 9001;
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var calculate = require('./modules/calculate');

// returning static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

// returns index file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

// adding req.body to the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// accepting post request
app.post('/', calculate);

app.listen(PORT, function() {
  console.log("It's over 9000!!! ", '( listening on port', PORT,')');
}); // end app listen
