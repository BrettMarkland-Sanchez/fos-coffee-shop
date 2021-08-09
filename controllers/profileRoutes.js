const { User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log("Does it work?")
    const dbUserData = await User.findOne({ where: { id: req.session.userId} });
    
    console.log("Current Rewards Are:", dbUserData.rewards);
    console.log("Current Name is:", dbUserData.firstName);
    if (dbUserData) {
      res.render('profile', {
        dbUserData,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.render('login');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;