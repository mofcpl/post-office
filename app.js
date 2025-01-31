var express = require('express');
var path = require('path');
var cors = require('cors')

var indexRouter = require('./routes/postoffice');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);

module.exports = app;
