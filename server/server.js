var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//Coors
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 res.header('Access-Control-Expose-Headers', 'token');
 next();
});

//serve static files
app.use(express.static(__dirname + '/../client'));
app.use('scripts', express.static(__dirname + '/../node_modules'));
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'))
});

//set and run the port and server
app.set('port', process.env.PORT || 3002);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT", port, __dirname);

module.exports = app;
