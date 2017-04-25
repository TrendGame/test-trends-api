const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const googleTrends = require('google-trends-api');

const app = express();
const IP = '127.0.0.1';
const PORT = 8080;

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const searchOptions = {
  keyword: 'Hillary Clinton', // search string or array of strings,
  startTime: new Date(2015, 4, 11), // default is 1/1/2004
  endTime: new Date(2015, 4, 19), // default is current date
};

app.get('/', (req, res) => {
  googleTrends.interestOverTime(searchOptions)
  .then((result) => {
    // console.log(result);
    res.send(result);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
});

// googleTrends.interestOverTime(searchOptions)
// .then((result) => {
//   // console.log(result);
//   res.send(res.body);
// })
// .catch((err) => {
//   console.error('Error:', err);
// });
