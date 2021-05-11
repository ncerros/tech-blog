const { User } = require('../models');

const userData = 

[
  {
    "name": "Thor",
    "password": "password4646"
  },
  {
    "name": "Superman",
    "password": "password360"
  },
  {
    "name": "Batman",
    "password": "password1212"
  }
  ];

  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;
