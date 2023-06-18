const Sequelize = require('sequelize');
const sequelize = require('../database');

const UserProfile = sequelize.define('UserProfile', {
    UserProfileID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: Sequelize.INTEGER,
    Wins: Sequelize.INTEGER,
    Losses: Sequelize.INTEGER,
    Weapon: Sequelize.STRING,
    Hand: Sequelize.STRING,
    Height: Sequelize.INTEGER,
    Weight: Sequelize.INTEGER,
    ProfilePicture: Sequelize.STRING,
    MatchTime: Sequelize.TIME,
    CountryOfRepresentation: Sequelize.STRING,
    NumberOfFaults: Sequelize.INTEGER,
  });

  module.exports = UserProfile;