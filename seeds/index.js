const sequelize = require('../config/connection');
const seedProduct = require('./productSeeds');
const seedUser = require('./userSeeds');
const seedFavorite = require('./favoriteSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProduct();

  await seedUser();

  await seedFavorite();

  process.exit(0);
};

seedAll();
