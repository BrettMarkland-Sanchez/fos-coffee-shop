const { User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log("Does it work?")
    console.log(req.session.userId);
    if (!req.session.userId) {
      console.log("NO USER FOUND")
      res.render('login');
    } else {
      const dbUserData = await User.findByPk(req.session.userId);

      const user = dbUserData.get({ plain: true });

      res.render('profile', {
        ...user,
        loggedIn: req.session.loggedIn
      });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;