const router = require('express').Router();

const userRoutes = require('./userlistRoutes');

router.use('/users', userRoutes);

module.exports = router;