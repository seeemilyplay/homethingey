var express = require('express'),
    connect = require('connect'),
    util = require('util'),
    path = require('path'),
    http = require('http');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))

var port = process.env.PORT || 8080;
// http.createServer(app).listen(8080);
http.createServer(app).listen(port);