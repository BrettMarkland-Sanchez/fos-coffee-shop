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
      const dbUserData = await User.findOne({ where: { id: req.session.userId} });

      console.log("Current Rewards Are:", dbUserData.rewards);
      console.log("Current Name is:", dbUserData.firstName);
      res.render('profile', {
        dbUserData,
        loggedIn: req.session.loggedIn
      });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;