const router = require("express").Router();
const posts = require("./posts");
const webhooks = require("./webhooks");

router.use("/posts", posts);
router.use("/webhooks", webhooks);

router.get("/", (req, res) => {
    res.status(200).json({message: "Connected!"});
});

module.exports = router;