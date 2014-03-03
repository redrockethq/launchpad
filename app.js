var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./config/routes');
var middleware = require('./config/middleware');

var db = require('./config/db');
var app = express();


app.set('port', process.env.PORT || 5200);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(middleware.logErrors);
app.use(middleware.handleLaunchpadError);
app.use(middleware.errorHandler);

routes(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});