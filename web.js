var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer('test');

var infile = "index.html";

//load buffer with string from index.html
buf = fs.readFileSync(infile, 'utf8');

app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
