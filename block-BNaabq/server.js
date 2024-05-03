const express = require('express');
const logger = require('morgan');
const cookiesParser = require('cookies-parser');
let app = express();
app.use(logger('dev'));
app.use(cookieParser());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'Deep');
  res.send('welcome to my page');
});
app.use((req, res, next) => {
  req.cookies();
});
app.get('/about', (req, res, next) => {
  res.send();
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
