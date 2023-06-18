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
const UserProfile = require('./models/userProfile');
const Match = require('./models/match');
const MatchResult = require('./models/matchResult');
const MatchType = require('./models/matchType');
const ScoreUpdates = require('./models/scoreUpdates');
const Poule = require('./models/poule');
const Tableau = require('./models/tableau');
const { check, validationResult } = require('express-validator');

// require the other models...

const app = express();

app.use(bodyParser.json());


app.get('/users', (req, res) => {
  // replace `Match` with the actual model, eg. `User`
  User.sync({force: false})
    .then(function() {
      return User.findAll();
    })
    .then(function(users) {
      res.send(users);
    });
});

app.post('/users', [
  check('FirstName').notEmpty(),
  check('LastName').notEmpty(),
  //... add other fields here that need validation, if needed.
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/userProfiles', (req, res) => {

UserProfile.sync({force: false})
  .then(function() {
    return UserProfile.findAll();
  })
  .then(function(userProfile) {
    res.send(userProfile);
  });
});

app.post('/userProfiles', [
  check('UserID').isInt(),
  //... add other fields here that need validation, if needed.
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  UserProfile.create(req.body)
    .then(userProfile => res.json(userProfile))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/match', (req, res) => {

  Match.sync({force: false})
  .then(function() {
    return Match.findAll();
  })
  .then(function(match) {
    res.send(match)
  });
});

app.post('/match', (req, res) => {
  Match.sync({force: false})
    .then(function() {
      return Match.create({
        UserID: req.body.UserID,
        TypeID: req.body.TypeID,
        MatchTypeID: req.body.MatchTypeID,
      });
    })
    .then(function(match) {
      res.send(match);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

// GET and POST routes for MatchResult
app.get('/matchResult', (req, res) => {
  MatchResult.sync({force: false})
    .then(() => MatchResult.findAll())
    .then(matchResult => res.send(matchResult));
});

app.post('/matchResult', (req, res) => {
  MatchResult.create(req.body)
    .then(matchResult => res.send(matchResult))
    .catch(err => res.send(err));
});

// GET and POST routes for MatchType
app.get('/matchType', (req, res) => {
  MatchType.sync({force: false})
    .then(() => MatchType.findAll())
    .then(matchType => res.send(matchType));
});

app.post('/matchType', (req, res) => {
  MatchType.create(req.body)
    .then(matchType => res.send(matchType))
    .catch(err => res.send(err));
});

// GET and POST routes for ScoreUpdates
app.get('/scoreUpdates', (req, res) => {
  ScoreUpdates.sync({force: false})
    .then(() => ScoreUpdates.findAll())
    .then(scoreUpdates => res.send(scoreUpdates));
});

app.post('/scoreUpdates', (req, res) => {
  ScoreUpdates.create(req.body)
    .then(scoreUpdates => res.send(scoreUpdates))
    .catch(err => res.send(err));
});

// GET and POST routes for Poule
app.get('/poule', (req, res) => {
  Poule.sync({force: false})
    .then(() => Poule.findAll())
    .then(poule => res.send(poule));
});

app.post('/poule', (req, res) => {
  Poule.create(req.body)
    .then(poule => res.send(poule))
    .catch(err => res.send(err));
});

// GET and POST routes for Tableau
app.get('/tableau', (req, res) => {
  Tableau.sync({force: false})
    .then(() => Tableau.findAll())
    .then(tableau => res.send(tableau));
});

app.post('/tableau', (req, res) => {
  Tableau.create(req.body)
    .then(tableau => res.send(tableau))
    .catch(err => res.send(err));
});
app.listen(3003, '127.0.0.1', () => {
  console.log(`server running on http://127.0.0.1:3003`);
});

require('./models/relationships');