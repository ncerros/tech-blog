const router = require('express').Router();
const apiRoutes = require('./api');
const homeBlogRoutes = require('./homeblog-routes.js');
const admiRoutes = require('./admi-routes.js');
router.use('/api', apiRoutes);
router.use('/', homeBlogRoutes);
router.use('/admi', admiRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
