var express = require('express');
var server = express();

server.use('/scripts', express.static(__dirname +
  '/scripts'));
server.use('/css', express.static(__dirname +
  '/css'));
server.use(express.static(__dirname));

server.listen(3001);