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
app.use(express.urlencoded({ extended: false }));
app.use('/', Router);

app.get('/', (req, res) => {
  console.log("접속")
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`UptoDoor listening port at ${port}`);
});
