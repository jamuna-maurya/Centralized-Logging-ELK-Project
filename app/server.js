const express = require("express");
const winston = require("winston");

const app = express();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "/app/logs/app.log"
    })
  ]
});

app.get("/", (req, res) => {

  logger.info({
    level: "info",
    message: "Home Page Accessed",
    endpoint: "/",
    status: 200,
    user: "guest"
  });

  res.send("Application Running");
});

app.get("/error", (req, res) => {

  logger.error({
    level: "error",
    message: "Application Error",
    endpoint: "/error",
    status: 500,
    user: "guest"
  });

  res.status(500).send("Error Generated");
});

app.get("/warning", (req, res) => {

  logger.warn({
    level: "warning",
    message: "Warning Generated",
    endpoint: "/warning",
    status: 400,
    user: "guest"
  });

  res.send("Warning Log Generated");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
