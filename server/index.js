const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Router = require("./routes/index");
const { logger } = require("./config/winston");
require("dotenv").config();

const app = express();
const port = 3060;

app.use(
  cors({
    origin: "https://uptodoor.shop",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", Router);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/health-check", (req, res) => {
  res.send("health check success");
});

app.listen(port, () => {
  logger.info(`UptoDoor listening port at ${port}`);
});
