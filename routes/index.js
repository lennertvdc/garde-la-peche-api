const router = require("express").Router();
const post = require("./post");
const webhook = require("./webhook");

router.use("/post", post);
router.use("/webhook", webhook);

router.get("/", (req, res) => {
    res.status(200).json({message: "Connected!"});
});

module.exports = router;