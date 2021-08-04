const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('favorites', { 
    });
});


module.exports = router;