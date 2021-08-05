const { User } = require('../models');

const userdata = [
  {
    firstName:'Peter',
    lastName:'Weigman',
    email:'pw@test.com',
    password:'Atlanta21',
  },
  {
    firstName:'Jason',
    lastName:'Kim',
    email:'jk@test.com',
    password:'Atlanta22',
  },
  {
    firstName:'Brett',
    lastName:'Markland-Sanchez',
    email:'bms@test.com',
    password:'Atlanta23',
  },
  {
    firstName:'Matthew',
    lastName:'Williams',
    email:'mw@test.com',
    password:'Atlanta24',
  },
  
];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUser;
