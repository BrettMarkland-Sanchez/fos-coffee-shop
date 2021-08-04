const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('rewards', { 
    });

});

module.exports = router;