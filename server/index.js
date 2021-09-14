const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Router = require('./routes/index');
require('dotenv').config();

const app = express();
const port = 3060;

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', Router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health-check', (req, res) => {
  res.send('health success');
});

app.use(function (req, res, next) {
  if(!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
    res.redirect('https://' + req.get('Host') + req.url);
  } else next();
});

app.listen(port, () => {
  console.log(`UptoDoor listening at http://localhost:${port}`);
});
