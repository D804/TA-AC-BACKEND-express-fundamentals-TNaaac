const express = require('express');
let app = require(express);
app.use('/admin', (req, res, next) => {
  next('Unauthorized');
});
app.get('/', (req, res) => {
  res.send('Welcome to homepage');
});
app.get('/about', (req, res) => {
  res.send('This is About page');
});
app.listen(3000, () => {
  console.log('Running on port 3K');
});
app.use((req, res, next) => {
  res.send('Page not found');
});
app.use((err, req, res, next) => {
  res.send(err);
});
