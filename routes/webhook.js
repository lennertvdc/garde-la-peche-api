const router = require("express").Router();

const webhookController = require("../controllers").webhook;

router.get("/", webhookController.getAll);
router.post("/", webhookController.add);

module.exports = router;