const express = require("express");
const app = express();

app.get("/api/timestamp", (req, res) => {
  const date = new Date();
  res.send({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get("/api/timestamp/:timestamp", (req, res) => {
  let { timestamp } = req.params;
  if (/^\d+$/.test(timestamp)) {
    timestamp = Number(timestamp);
  }
  const date = new Date(timestamp);
  if (isNaN(date)) {
    res.send({ error: "Invalid Date" });
  } else {
    res.send({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
});

app.listen(3000);
