const sequelize = require('../config/connection');
const seedProduct = require('./productSeeds');
const seedUser = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProduct();

  await seedUser();

  process.exit(0);
};

seedAll();
