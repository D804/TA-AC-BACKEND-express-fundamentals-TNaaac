const express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});
app.get('/new', (req, res) => {
  res.render('/new.html');
});
app.post('/new', (req, res) => {
  res.send(urlencoded);
});
app.get('/user/:username', (req, res) => {
  res.send(res.params.username);
});
