const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/* DB */
const createTables = require("./backend/db/Tables");

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
const productsRoute = require("./backend/routes/Products");
const adminRoute = require("./backend/routes/Admin");

app.use("/", productsRoute);
app.use("/", adminRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);

  /* TABLE CREATION */
  await createTables();
});
