const { User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log("Does it work?")
    const dbUserData = await User.findOne({ where: { id: req.session.userId} });
    console.log(dbUserData)
    console.log("Does it work?")
    res.render('profile')
    console.log("Does it work?")
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;