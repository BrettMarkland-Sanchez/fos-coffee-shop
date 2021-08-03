// import dependency
const router = require('express').Router();

// support
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const menuRoutes = require('./menuRoutes');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const checkoutRoutes = require('./checkoutRoutes');

// router pathing
router.use('/', homeRoutes);
router.use('/profile', userRoutes);
router.use('/menu', menuRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/checkout', checkoutRoutes);

// failure return
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;