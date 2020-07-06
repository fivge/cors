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

//#region heroes

let HEROES = [
  {
    id: 11,
    name: "Dr Nice",
  },
  {
    id: 12,
    name: "Narco",
  },
  {
    id: 13,
    name: "Bombasto",
  },
  {
    id: 14,
    name: "Celeritas",
  },
  {
    id: 15,
    name: "Magneta",
  },
  {
    id: 16,
    name: "RubberMan",
  },
  {
    id: 17,
    name: "Dynama",
  },
  {
    id: 18,
    name: "Dr IQ",
  },
  {
    id: 19,
    name: "Magma",
  },
  {
    id: 20,
    name: "Tornado",
  },
];

app.get("/api/heroes", (req, res) => res.json(HEROES));

app.get("/api/heroes/:id", (req, res) => {
  res.json(HEROES.find((hero) => hero.id == req.params.id));
});

//#endregion

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
