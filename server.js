const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const trendsAPI = require('google-trends-api');

const app = express();
const IP = '127.0.0.1';
const PORT = 8080;

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
