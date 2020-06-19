const axios = require("axios");
const webhooksConfig = require("../config/webhooks.config");

async function send(post) {
    let msg = {
        username: webhooksConfig.username,
        avatar_url: webhooksConfig.avatar_url,
        embeds: getPostEmbed(post)
    }

    await sendToAllWebhooks(msg);
}

function getPostEmbed(post) {
    const date = new Date(post.posted_at).toUTCString()
    return [{
        "title": "**UPDATE** | New post",
        "type": "image",
        "description": `New image posted at: ${date}`,
        "color": 15354699,
        "url": post.fb_url,
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
        const response = error.response;
        if(response.status === 429) {
            const retry_after = response.data.retry_after;
            setTimeout(async () => await sendToWebhook(webhookUrl, msg), retry_after);
        }
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

module.exports = {
    send
};
