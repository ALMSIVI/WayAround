
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

var index = require('./routes/index');
var showroute = require('./routes/showroute');
var finished = require('./routes/finished');
var actions = require('./routes/actions');
var login = require('./routes/login');
var thankyou = require('./routes/thankyou');
var api = require('./routes/api.js');
var register = require('./routes/register')
// Example route
// var user = require('./routes/user');

var app = express();

var hbs = handlebars.create({
	layoutsDir: path.join(__dirname, "/views"),
    partialsDir: path.join(__dirname, '/views/partials/')
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
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

app.get('/', index.login);
app.get('/register', register.register);
app.post('/', index.redirect);
app.get('/index', index.view);
app.get('/indexalt', index.viewAlt);
app.post('/showroute', showroute.showroute);
app.get('/done', finished.done);
app.get('/profile', actions.profile);
app.get('/login', login.login);
app.post('/thankyou', thankyou.show);
app.post('/api/:start/:dest', api.getLatLon);
app.get('/test', (req, res) => {
	res.render('test');
});
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
