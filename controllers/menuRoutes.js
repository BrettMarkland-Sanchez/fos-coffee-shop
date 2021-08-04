const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('menu', { 
    });

});

module.exports = router;