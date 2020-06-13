const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const webhooksConfig = require("../config/webhooks.config");

// const url = "https://discordapp.com/api/webhooks/719348401338056735/nSSTUdqyKsJTmIozO3jsRaJKzMeO2rUsG30zvbjeINty59cAG88T0KLcP7GN_7RRcqXk";

// let msg = new FormData();
// msg.append("content", "This a test")
// msg.append("file", fs.createReadStream("./image.png"))



// msg.submit(url, (err, res) => {
//     res.resume();
// })

async function send(post) {
    let msg = {
        username: webhooksConfig.username,
        avatar_url: webhooksConfig.avatar_url,
        embeds: getPostEmbed(post)
    }

    await sendToAllWebhooks(msg);
}

function getPostEmbed(post) {
    return [{
        "title": "New post",
        "type": "image",
        "timestamp": new Date(post.posted_at).toISOString(),
        "image": {
            "url": post.img_url
        }
    }]

}

async function sendToAllWebhooks(msg) {
    const webhooks = await getAllWebhooks();
    webhooks.forEach(async (webhook) => {
        await sendToWebhook(webhook.url, msg);
    });
}

async function sendToWebhook(webhookUrl, msg) {
    try {
        await axios.post(webhookUrl, msg, {
            headers: webhooksConfig.headers
        });
    } catch (error) {
        console.log(error);
    }
}

async function getAllWebhooks() {
    try {
        const request = await axios.get("http://localhost:5000/api/webhooks");
        return request.data;
    } catch (error) {
        console.log("Could not get all webhooks.");
        console.log(error);
    }
}

const post = {
    "id": 1,
    "posted_at": "2016-03-18T12:59:00.000Z",
    "img_url": "https://scontent.fbru1-1.fna.fbcdn.net/v/t1.0-9/1931113_10206876102719802_607116194129647729_n.jpg?_nc_cat=100&_nc_sid=ca434c&_nc_ohc=mF5llbaojSgAX_CEYAO&_nc_ht=scontent.fbru1-1.fna&oh=6fc0744597d18d81a438425ac9e8be53&oe=5EFEF7F4",
    "fb_url": "https://www.facebook.com/photo.php?fbid=10206876102719802&set=g.956842611031123&type=1&theater&ifg=1"
}
send(post);

module.exports = {
    send
};
