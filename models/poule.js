const Sequelize = require('sequelize')
const sequelize = require('../database')

const Poule = sequelize.define('Poule', {
    PouleID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    MatchID: Sequelize.INTEGER,
    RoundCompleted: Sequelize.INTEGER,
  });

  module.exports = Poule;