// express boilerplate
const express = require('express');
let app = express();
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.static(__dirname + './public'));
app.use(cookieParser());
app.get('/', (req, res) => {
  res.sendFile(__dirname + './index.html');
});
app.get('/projects', (req, res) => {
  res.sendFile(__dirname + 'about.html');
});
app.use((req, res, next) => {
  res.send('Page not found');
});

app.listen(4000, (req, res) => {
  console.log('Running on port 4k');
});
