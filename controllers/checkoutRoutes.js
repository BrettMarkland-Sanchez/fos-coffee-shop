const router = require('express').Router();

router.get('/checkout', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('checkout');
});

module.exports = router;