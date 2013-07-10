var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(2596);  
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
      response.write(data);
   });  

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
