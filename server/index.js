const express = require("express");
const app = express();
const port = 3060;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3060, () => {
  console.log(`UptoDoor listening at http://localhost:${port}`);
});
