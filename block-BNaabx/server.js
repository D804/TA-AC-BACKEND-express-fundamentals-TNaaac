const express = require('express');
let logger = require('morgan');
let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.post('/json', (req, res) => {
  res.send(req.body);
});
