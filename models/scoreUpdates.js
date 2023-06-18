const Sequelize = require('sequelize')
const sequelize = require('../database')

const ScoreUpdates = sequelize.define('ScoreUpdates', {
    UpdateID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    MatchID: Sequelize.INTEGER,
    ScoreUpdate: Sequelize.STRING,
  });

  module.exports = ScoreUpdates;