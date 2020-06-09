const Post = require("../models").Post;

module.exports = {
    getAll: async (req, res) => {
        try {
            const posts = await Post.findAll();
            res.status(200).send(posts);
        } catch (error) {
            if(process.env.NODE_ENV === "production") {
                res.status(400).json({error: "Could not get all posts."})
            } else {
                res.status(400).send(error);
            }
        }
    },
    getLatest: async (req, res) => {
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
    },
    add: async (req, res) => {
        try {
            const post = await Post.create({
                posted_at: req.body.posted_at,
                img_url: req.body.img_url,
                fb_url: req.body.fb_url
            });

            res.status(201).send(post);
        } catch (error) {
            if (process.env.NODE_ENV === "production") {
                res.status(400).json({ error: "Could not create post." })
            } else {
                res.status(400).send(error);
            }
        }
    }
};