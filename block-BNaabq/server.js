const express = require('express');
const morgon = require('morgon');
const cookiesParser = require('cookies-parser');
let app = express();
app.use(logger('dev'));
app.use(cookieParser());
app.use((req, res, next) => {
  let cookies = res.cookie('username', 'Deep');
  next();
});
app.use((req, res) => {
  let cookie = req.cookies;
});
app.get('/about', (req, res) => {
  res.send();
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
