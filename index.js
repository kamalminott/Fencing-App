/*
username = kamalminott
password = u1Lf0s3d6nGKiEphl8RYvA
host = fencingdb-8369.8nj.cockroachlabs.cloud
Database = defaultdb
Port = 26257
*/


// index.js

const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./database');
const User = require('./models/user');

// require the other models...

const app = express();

app.use(bodyParser.json());


app.get('/list', (req, res) => {
  // replace `Match` with the actual model, eg. `User`
  User.sync({force: false})
    .then(function() {
      return User.findAll();
    })
    .then(function(users) {
      res.send(users);
    });
});

app.listen(3003, '127.0.0.1', () => {
  console.log(`server running on http://127.0.0.1:3003`);
});
