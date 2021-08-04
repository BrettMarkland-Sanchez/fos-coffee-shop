const router = require('express').Router();

router.get('/signup', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('signup');
});

module.exports = router;
