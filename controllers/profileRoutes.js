const router = require('express').Router();

router.get('/profile', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('profile');
});

module.exports = router;
