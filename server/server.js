const express = require("express");
const cors = require("cors");

const db = require("./app/models");
const routes = require('./app/routes')

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to." });
});

routes(app);

// set port, listen for requests
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});