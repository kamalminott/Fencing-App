const Sequelize = require('sequelize')
const sequelize = require('../database')

const Tableau = sequelize.define('Tableau', {
    TableauID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    MatchID: Sequelize.INTEGER,
    RoundCompleted: Sequelize.INTEGER,
  });

  module.exports = Tableau;