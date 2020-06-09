const router = require("express").Router();
const post = require("./post");

router.use("/post", post);

router.get("/", (req, res) => {
    res.status(200).json({message: "Connected!"});
});

module.exports = router;