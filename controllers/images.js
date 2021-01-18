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
        let images = [];
        for (let i = 0; i < body.length; i++) {
            const imgReq = await image.create({
                fb_id: body[i].fbId,
                fb_url: body[i].fbUrl,
                img_url: body[i].imgUrl,
                img_base64: body[i].imgBase64
            });
            console.log(body[i].fbId);
            images.push(imgReq);
        }

        res.status(201).send(images);
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
