const router = require('express').Router();

const imagesController = require('../controllers').images;

router.get('/', imagesController.getAll);
router.get('/latest', imagesController.getLatest);
router.post('/', imagesController.add);

module.exports = router;
