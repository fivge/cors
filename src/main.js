const express = require("express");
const app = express();
const port = 3000;

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Max-Age", "1728000");
  res.header("Content-Type", "application/json;charset=utf-8");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/", (req, res) => res.json({ foo: "bar" }));

app.get("/close", (req, res) => {
  res.header("Connection", "close");
  res.json({ foo: "bar" });
});

app.get("/close", (req, res) => {
  req.headers("Connection", "close");
  console.log(req.headers);
  console.log("get data");
  res.header("Connection", "close");
  res.json({ foo: "bar" });
});

app.post("/", (req, res) => res.json({ foo: "bar" }));

app.put("/", (req, res) => {
  res.header("Connection", "close");
  res.json({ foo: "bar" });
});

app.delete("/", (req, res) => {
  res.header("Connection", "close");
  res.json({ foo: "bar" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
