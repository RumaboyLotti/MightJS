const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();
const port = 3000;

// Set up a PostgreSQL client
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Xylophobia",
  database: "Might-Auth",
});

app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static files (e.g., HTML, CSS, client-side JS)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Home", (req, res) => {
  res.sendFile(__dirname + "/Home.html");
});

function addUser() {
  event.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(document.querySelector("form"));

  fetch("/submitForm", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Form submission response:", data);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
}

app.post("/submitForm", (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  client.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const sql = `INSERT INTO users (UserName, FirstName, LastName, Email, UserPassword) 
                 VALUES ($1, $2, $3, $4, $5)`;
    const values = [username, firstName, lastName, email, password];

    client.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Form submitted successfully");
      }

      client.end();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

require("dotenv").config();
