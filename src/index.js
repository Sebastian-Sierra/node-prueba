var express = require('express');
var app = express();
var path = require('path');

// SETTINGS
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

// ROUTES
app.use(require('./routes'));

// STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

// SERVER
app.listen(app.get('port'), function () {
  console.log('Server on http://127.0.0.1:'+app.get('port'));
});