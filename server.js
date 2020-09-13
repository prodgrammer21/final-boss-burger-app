const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/* Frontend */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));
/* Serve Static Files */
app.use("/static", express.static(path.join(__dirname, "frontend/static")));

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
const appRoute = require("./backend/routes/app");

app.use("/", appRoute);

const PORT = process.env.PORT || 8080;

const mysql = require("mysql");
const pool = mysql.createPool({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b7c212e08dd222",
  password: "a01ec5c3",
  database: "heroku_24fe9c09a6dc6ce",
});

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
