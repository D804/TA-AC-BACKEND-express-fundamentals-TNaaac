const express = require('express');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
app.use((req, res, next) => {
  res.cookie('username', 'Deepak');
  next();
});
let app = express();
// middlewear
app.use(express.json());
app.use(express.urelencoded({ extended: false }));
app.use((req, res, next) => {
  next('Error');
});
app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  req.params;
});
app.use((req, res, next) => {
  req.params;
});
app.get('/', (req, res) => {
  res.send(<h2>Welcome to express</h2>);
});
app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});
app.post('/about', (req, res) => {
  res.json(req.body);
});
app.post('/json', (req, res) => {
  res.json(req.body);
});
app.get('/user/:username', (req, res) => {
  let user = res.params.username;
  res.send(`<h2>${user}</h2>`);
});
app.use((req, res, next) => {
  res.send('page not found');
});
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Running on port 3K');
});
