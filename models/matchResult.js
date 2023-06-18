const Sequelize = require('sequelize')
const sequelize = require('../database')

const MatchResult = sequelize.define('MatchResult', {
    ResultID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    MatchID: Sequelize.INTEGER,
    Participant1: Sequelize.STRING,
    Participant2: Sequelize.STRING,
    Participant1Score: Sequelize.INTEGER,
    Participant2Score: Sequelize.INTEGER,
    Winner: Sequelize.STRING,
    Loser: Sequelize.STRING,
  });

  module.exports = MatchResult;