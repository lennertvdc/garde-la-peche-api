const Webhook = require("../models").Webhook;

async function getAll(req, res) {
    try {
        const webhooks = await Webhook.findAll();
        res.status(200).send(webhooks);
    } catch (error) {
        if(process.env.NODE_ENV === "production") {
            res.status(400).json({error: "Could not get all posts."})
        } else {
            res.status(400).send(error);
        }
    }
}

async function add(req, res) {
    try {
        const webhook = await Webhook.create({
            url: req.body.url
        });

        res.status(201).send(webhook);
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
    add
};