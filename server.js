var express = require('express'),
    connect = require('connect'),
    util = require('util'),
    path = require('path'),
    http = require('http');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res, next) {
    if (req.url.indexOf('/openapi.etsy.com')===0) {
      var options = {
        host: 'openapi.etsy.com',
        path: req.url.substring(17),
        method: 'GET'
      };

      callback = function(response) {
        response.on('data', function (chunk) {
          res.write(chunk);
        });
      }

      var etsyreq = http.request(options, callback);
      etsyreq.end();
      res
    }
    res
  })

var port = process.env.PORT || 8888;
// http.createServer(app).listen(8080);
http.createServer(app).listen(port);