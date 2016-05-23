require('marko/node-require').install();

var express = require('express');
var app = express();
app.set('config', 'config');
app.set('port', (process.env.PORT || 5000));

var config = require('./config/config.json');
require('lasso').configure(config.lasso);

app.get('/', require('./src/pages/index'));

app.listen(app.get('port'), function() {
  console.log('App started on ', app.get('port'));
});
