var path = require('path');
var express = require('express');
var http = require('http');
const favicon = require('serve-favicon');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/dist')));

app.locals.pretty = true; // Essential to ensure the HTML is readeable
app.use(favicon(__dirname + '/app/images/favicon.ico'));

// app.use(cookie());

require('./app/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;