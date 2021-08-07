const User = require('./User');
const Product = require('./Product');
const Favorite = require('./Favorite');


//db relationships go here if we add rewards, cart, etc
User.belongsToMany(Product, {
    through:Favorite,
});

Product.belongsToMany(User, {
    through:Favorite,
})

module.exports = { User, Product, Favorite };