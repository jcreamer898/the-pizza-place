#!/usr/bin/env node
var app = require('./server/index.js'),
    express = require('express'),
    path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server listening on port ' + server.address().port);
});
