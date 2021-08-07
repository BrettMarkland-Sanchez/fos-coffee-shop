const { Favorite } = require('../models');

const favoriteData = [
  {
    productId:'1',
    userId:'1',
  },
  {
    productId:'2',
    userId:'1',
  },
  {
    productId:'2',
    userId:'2',
  },
  {
    productId:'3',
    userId:'2',
  },
  {
    productId:'3',
    userId:'3',
  },
  {
    productId:'2',
    userId:'3',
  },
  {
    productId:'2',
    userId:'4',
  },
  {
    productId:'1',
    userId:'4',
  },
  
];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;
