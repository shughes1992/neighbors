var express = require('express');
// socket.io
var socket = require('socket.io');
// =========
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var mongoose = require('mongoose')
var db = require('./models');
var app = express();
require('dotenv').config();
var PORT = process.env.PORT || 8080;

// // connect to mySql db
// db.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

// socket.io
server = app.listen(8080, function(){
  console.log('server is running on port 5000')
});

io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  });
// end socket.io

// connect to mongoDb for philly-hoods data
// their api was down so I copied their database
mongoose.connect(process.env.MONGO_URI, (err, res) => {
  if (err){
    console.log('DB CONNECTION FAILED: '+err)
  }
  else{
    console.log('DB CONNECTION SUCCESS')
  }
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
