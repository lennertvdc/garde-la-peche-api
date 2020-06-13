const Post = require("../models").Post;
const webhooksJob = require("../jobs/webhooks");

async function getAll(req, res) {
    try {
        const posts = await Post.findAll();
        res.status(200).send(posts);
    } catch (error) {
        if (process.env.NODE_ENV === "production") {
            res.status(400).json({ error: "Could not get all posts." })
        } else {
            res.status(400).send(error);
        }
    }
}

async function getLatest(req, res) {
    try {
        const post = await Post.findAll({
            limit: 1,
            order: [["posted_at", "DESC"]]
        });
        res.status(200).send(post);
    } catch (error) {
        if (process.env.NODE_ENV === "production") {
            res.status(400).json({ error: "Could not get latest post." })
        } else {
            res.status(400).send(error);
        }
    }
}

async function add(req, res) {
    try {
        const post = await Post.create({
            posted_at: req.body.posted_at,
            img_url: req.body.img_url,
            fb_url: req.body.fb_url
        });

        console.log("Sending post to all webhooks");
        await webhooksJob.send(post);

        res.status(201).send(post);
    } catch (error) {
        if (process.env.NODE_ENV === "production") {
            res.status(400).json({ error: "Could not create post." })
        } else {
            res.status(400).send(error);
        }
    }
}

module.exports = {
    getAll,
    getLatest,
    add
};