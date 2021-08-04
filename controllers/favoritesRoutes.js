const router = require('express').Router();

router.get('/favorites', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('favorites');
});

module.exports = router;
