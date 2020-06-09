const router = require("express").Router();

const postController = require("../controllers").post;

router.get("/", postController.getAll);
router.get("/latest", postController.getLatest);
router.post("/add", postController.add)

module.exports = router;