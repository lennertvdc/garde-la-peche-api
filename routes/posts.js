const router = require("express").Router();

const postsController = require("../controllers").posts;

router.get("/", postsController.getAll);
router.get("/latest", postsController.getLatest);
router.post("/add", postsController.add);

module.exports = router;