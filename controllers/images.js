const image = require('../models').image;

async function getAll(req, res) {
    try {
        const images = await image.findAll();
        res.status(200).send(images);
    } catch (error) {
        if (process.env.NODE_ENV === 'production') {
            res.status(400).json({error: 'Could not get all images.'})
        } else {
            res.status(400).send(error.toString());
        }
    }
}

async function getLatest(req, res) {
    try {
        const imageReq = await image.findAll({
            limit: 1,
            order: [['id', 'DESC']]
        });
        res.status(200).send(imageReq);
    } catch (error) {
        if (process.env.NODE_ENV === 'production') {
            res.status(400).json({error: 'Could not get latest image.'})
        } else {
            res.status(400).send(error.toString());
        }
    }
}

async function add(req, res) {
    try {
        const body = req.body;

        const imgReq = await image.create({
            fb_id: body.fbId,
            fb_url: body.fbUrl,
            img_url: body.imgUrl,
            img_base64: body.imgBase64
        });

        //TODO Send img to discord bot

        res.status(201).send(imgReq);
    } catch (error) {
        if (process.env.NODE_ENV === 'production') {
            res.status(400).json({error: 'Could not create image(s).'})
        } else {
            res.status(400).send({error: error.toString()});
        }
    }
}

module.exports = {
    getAll,
    getLatest,
    add
};
