const Sequelize = require('sequelize')
const sequelize = require('../database')

const MatchType = sequelize.define('MatchType', {
    TypeID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    TypeName: Sequelize.STRING,
  });

  module.exports = MatchType;