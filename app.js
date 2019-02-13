require('./config/config'); //Init config variables

const http = require('http');
const fs = require('fs');
const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());

// // Connecting to Database
// mongoose.connect(`mongodb://${CONFIG.db_host}${CONFIG.db_port}/contactList`);

// mongoose.connection.on('error', function(){
//     console.log('Could not connect to database');
//     // process.exit();
// });

// mongoose.connection.once('open', function(){
//     console.log('Successfully connected to database');
// });

// //Routes
// require('./routes/contactList.routes.js')(app);

//Config
// app.listen(CONFIG.port, function(){ 
//   console.log('App listening on port 3000');
// });

// var app = http.createServer(function (req, res) {

// }).listen(CONFIG.port, '0.0.0.0');

// module.exports = app;

var app = http.createServer(function (req, res) {
  if (req.url.indexOf('/img') != -1) {
    var filePath = req.url.split('/img')[1];
    fs.readFile(__dirname + '/public/img' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});
        res.write(data);
      }
      res.end();
    });
  } else if (req.url.indexOf('/controllers') != -1) {
    var filePath = req.url.split('/controllers')[1];
    fs.readFile(__dirname + '/public/controllers' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
      }
      res.end();
    });
  } else if(req.url.indexOf('/css') != -1) {
    var filePath = req.url.split('/css')[1];
    fs.readFile(__dirname + '/public/css' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
      }
      res.end();
    });
  } else {
    fs.readFile(__dirname + '/public/index.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
      }
      res.end();
    });
  }
}).listen(CONFIG.port, '0.0.0.0');

module.exports = app;