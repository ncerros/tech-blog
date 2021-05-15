const { User } = require('../models');

const userData = 

[
  {
    "name": "Thor",
    "password": "thor4646"
  },
  {
    "name": "Superman",
    "password": "super360"
  },
  {
    "name": "Batman",
    "password": "bat1212"
  }
  ];

  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;



