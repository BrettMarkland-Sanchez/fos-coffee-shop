// import dependency
const router = require('express').Router();

// support
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

// router pathing
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/userRoutes', userRoutes);
router.use('/productRoutes', productRoutes);

// failure return
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;