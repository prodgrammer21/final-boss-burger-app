const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/* Services */
const useProductsService = require("./backend/services/Products");

const { create, retrive, update, delete } = useProductsService();

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
const appRoute = require("./backend/routes/App");

app.use("/", appRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);
  await retrive();
});
