// import dependency
const router = require('express').Router();

// support
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const menuRoutes = require('./menuRoutes');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const checkoutRoutes = require('./checkoutRoutes');
const rewardRoutes = require('./rewardRoutes');

// router pathing
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/menu', menuRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/rewards', rewardRoutes);

// failure return
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;