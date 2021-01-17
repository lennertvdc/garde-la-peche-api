const router = require('express').Router();
const images = require('./images');

router.use('/images', images)

router.get("/", (req, res) => {
    res.status(200).json({message: 'Connected!'});
});

module.exports = router;
