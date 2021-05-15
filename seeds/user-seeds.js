const { User } = require('../models');

const userData = 

[
  {
    "name": "Thor",
    "password": "thor"
  },
  {
    "name": "Superman",
    "password": "superman"
  },
  {
    "name": "Batman",
    "password": "batman"
  }
  ];

  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;



