const sequelize = require('../database');
const User = require('../models/user');

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