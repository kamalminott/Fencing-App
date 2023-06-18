const sequelize = require('../database');
const User = require('../models/user');
const UserProfile = require('../models/userProfile');
const Match = require('../models/match');
const MatchResult = require('../models/matchResult');
const MatchType = require('../models/matchType');
const ScoreUpdates = require('../models/scoreUpdates');
const Poule = require('../models/poule');
const Tableau = require('../models/tableau');

User.sync({ force: false })
    .then(function() {
        // Create a new user
        return User.create({
            FirstName: 'Kamal',
            LastName: 'Minott',
            HomeAddress: '52 Hawthorn Ave',
            PhoneNumber: '07507112478',
            Postcode: 'RM139AT',
            Email:'kamalminott@gmail.com',
            DOB: 25-10-1997,
            UserName: 'kamalminott',
            Password: 'password123',
            Country: 'UK'
    })
})
.then(function(user) {
    // Log the created user
    console.log(user);

    // Fetch all users
    return User.findAll();
  })
  .then(function(users) {
    // Log all users
    console.log(users);
  })
  .catch(function(error) {
    // If an error occurs, log it
    console.log(error);
  });

  // Testing UserProfile model
UserProfile.sync({ force: false })
.then(function() {
    // Create a new user profile
    return UserProfile.create({
        // Fill in the data you want to test
        UserID: 1,
        Wins: 10,
        Losses: 5,
        Weapon: 'Foil',
        Hand: 'Right',
        Height: 180,
        Weight: 75,
        ProfilePicture: 'url-to-picture',
        MatchTime: '12:00:00',
        CountryOfRepresentation: 'UK',
        NumberOfFaults: 2,
    });
})
.then(function(userProfile) {
    // Log the created user profile
    console.log(userProfile);

    // Fetch all user profiles
    return UserProfile.findAll();
})
.then(function(userProfiles) {
    // Log all user profiles
    console.log(userProfiles);
})
.catch(function(error) {
    // If an error occurs, log it
    console.log(error);
});

// Match test
Match.sync({ force: false })
    .then(() => {
        return Match.create({
            UserID: 1,
            TypeID: 1,
            MatchTypeID: 1
        });
    })
    .then(match => {
        console.log(match);
        return Match.findAll();
    })
    .then(matches => {
        console.log(matches);
    })
    .catch(error => {
        console.log(error);
    });

    MatchResult.sync({ force: false })
    .then(() => {
        return MatchResult.create({
            MatchID: 1,
            Participant1: 'John Doe',
            Participant2: 'Jane Smith',
            Participant1Score: 5,
            Participant2Score: 3,
            Winner: 'John Doe',
            Loser: 'Jane Smith',
        });
    })
    .then(matchResult => {
        console.log(matchResult);
        return MatchResult.findAll();
    })
    .then(matchResults => {
        console.log(matchResults);
    })
    .catch(error => {
        console.log(error);
    });

    MatchType.sync({ force: false })
    .then(() => {
        return MatchType.create({
            TypeName: 'Type A',
        });
    })
    .then(matchType => {
        console.log(matchType);
        return MatchType.findAll();
    })
    .then(matchTypes => {
        console.log(matchTypes);
    })
    .catch(error => {
        console.log(error);
    });

    ScoreUpdates.sync({ force: false })
    .then(() => {
        return ScoreUpdates.create({
            MatchID: 1,
            ScoreUpdate: 'John Doe scores a point',
        });
    })
    .then(scoreUpdate => {
        console.log(scoreUpdate);
        return ScoreUpdates.findAll();
    })
    .then(scoreUpdates => {
        console.log(scoreUpdates);
    })
    .catch(error => {
        console.log(error);
    });

    Poule.sync({ force: false })
    .then(() => {
        return Poule.create({
            MatchID: 1,
            RoundCompleted: 2,
        });
    })
    .then(poule => {
        console.log(poule);
        return Poule.findAll();
    })
    .then(poules => {
        console.log(poules);
    })
    .catch(error => {
        console.log(error);
    });

    Tableau.sync({ force: false })
    .then(() => {
        return Tableau.create({
            MatchID: 1,
            RoundCompleted: 3,
        });
    })
    .then(tableau => {
        console.log(tableau);
        return Tableau.findAll();
    })
    .then(tableaus => {
        console.log(tableaus);
    })
    .catch(error => {
        console.log(error);
    });
