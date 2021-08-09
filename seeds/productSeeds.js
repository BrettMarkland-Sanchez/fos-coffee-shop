const { Product } = require('../models');

const productdata = [
  {
    name:'Hot Coffee',
    filename:'hot-coffee',
    price:'3.25',
    category:'Hot Items',
    type:'Coffee',
    description:'Standard hot coffee',
    imageUrl:'',
  },
  {
    name:'Bacon Egg Cheese Sandwich',
    filename:'bacon-egg-cheese-sandwich',
    price:'5.75',
    category:'Hot Items',
    type:'Food',
    description:'Crispy bacon, fried egg, and cheddar cheese on a bagel',
    imageUrl:'',
  },
  {
    name:'Bottled Water',
    filename:'bottled-water',
    price:'2.50',
    category:'Cold Items',
    type:'Other Beverages',
    description:'A bottle of water',
    imageUrl:'',
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
