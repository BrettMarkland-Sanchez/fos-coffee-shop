const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('checkout', { 
    });

});

module.exports = router;