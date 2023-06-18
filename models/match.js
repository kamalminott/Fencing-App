const Sequelize = require('sequelize')
const sequelize = require('../database')

const Match = sequelize.define('Match', {
    MatchID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: Sequelize.INTEGER,
    TypeID: Sequelize.INTEGER,
    MatchTypeID: Sequelize.INTEGER,
  });

  module.exports = Match;