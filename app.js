
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var newAccount = require('./routes/newAccount');
var choose = require('./routes/choose');
var diary = require('./routes/entry');
var options = require('./routes/options');
var play = require('./routes/play');
var welcome = require('./routes/welcome');
var login = require('./routes/login');
var nameFriend = require('./routes/nameFriend');
var playTime = require('./routes/playTime');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', welcome.view); //TODO index.view
app.get('/diary', diary.view);
app.get('/options', options.view);
app.get('/play', play.view);
app.get('/choose', choose.view);

//app.get('/welcome', welcome.view);
app.get('/index', index.view);
app.get('/login', login.view);
app.get('/nameFriend', nameFriend.view);
app.get('/playTime', playTime.view);
app.get('/newAccount', newAccount.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
