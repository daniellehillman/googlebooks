const router = require('express').Router()

router.use('/api', require('./googleRoutes.js'))
router.use('/api', require('./savedRoutes.js'))

module.exports = router
