const router = require('express').Router();

router.get('/menu', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('menu');
});

module.exports = router;
