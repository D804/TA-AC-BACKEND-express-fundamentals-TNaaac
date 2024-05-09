const express = require('express');
let app = express();
app.use((req, res, next) => {
  next('Error');
});
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
app.use((req, res, next) => {
  res.send('page not found');
});
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Running on port 3K');
});
