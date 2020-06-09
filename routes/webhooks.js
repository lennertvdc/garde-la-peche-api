const router = require("express").Router();

const webhooksController = require("../controllers").webhooks;

router.get("/", webhooksController.getAll);
router.post("/", webhooksController.add);

module.exports = router;