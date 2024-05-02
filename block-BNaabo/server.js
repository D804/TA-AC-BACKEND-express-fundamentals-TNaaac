const express = require('express');
let app = express();
app.use((req, res, next) => {
  next();
});
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname, '/public'));
app.post('/json', (req, res) => {
  console.log(req.body);
});
app.post('/contact', (req, res) => {
  console.log(req.body);
});
// app.get('')

app.listen(3000, () => {
  console.log('Running on port 3K');
});
