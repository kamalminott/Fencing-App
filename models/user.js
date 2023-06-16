const Sequelize = require('sequelize');
const sequelize = require('../database');

const Users = sequelize.define('Users', {
    UserID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    FirstName: Sequelize.STRING,
    LastName: Sequelize.STRING,
    HomeAddress: Sequelize.STRING,
    PhoneNumber: Sequelize.STRING,
    Postcode: Sequelize.STRING,
    Email: Sequelize.STRING,
    DOB: Sequelize.DATE,
    Username: Sequelize.STRING,
    Password: Sequelize.STRING,
    Country: Sequelize.STRING,
  });

  module.exports = Users;