const router = require('express').Router();
const userRoutes = require('./userRoutes');
const destinationRoutes = require('./destinationRoutes');

router.use('/users', userRoutes);
router.use('/destination', destinationRoutes);

module.exports = router;
