require('dotenv').config();
const express = require("express");
const { database } = require('./services/database')
const app = express();
const port = 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = database({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
})

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected')
})


app.get("/", (req, res) => {
    db.query("SELECT * FROM productlist", function (err, data) {
        if(err) return err;
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});