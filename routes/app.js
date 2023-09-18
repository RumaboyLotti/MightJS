require("dotenv").config();

const express = require("express");
const session = require("express-session");
const request = require("request-promise");
const path = require("path");
const router = express.Router();

const app = express();

app.use(express.static('public'));
app.use(addUser);
app.use("/", router);

app.use(
  session({
    secret: "your_secret_here",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});


app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

function addUser(req, res) {
  return (console.log("addUser"));

}
