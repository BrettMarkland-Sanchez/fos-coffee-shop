const router = require('express').Router();
const { Product } = require('../models');

// router.get('/', async (req, res) => {
//   Send the rendered Handlebars.js template back as the response
//   res.render('menu');
// });

// GET all products for menu page
router.get('/', async (req, res) => {
  try {
    const dbMenuData = await Product.findAll({});

    const menuItems = dbMenuData.map((menuItem) =>
      menuItem.get({ plain: true })
    );

    

    res.render('menu', {
      menuItems,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
