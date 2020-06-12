const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

// const url = "https://discordapp.com/api/webhooks/719348401338056735/nSSTUdqyKsJTmIozO3jsRaJKzMeO2rUsG30zvbjeINty59cAG88T0KLcP7GN_7RRcqXk";

// let msg = new FormData();
// msg.append("content", "This a test")
// msg.append("file", fs.createReadStream("./image.png"))

// const headers = {
//     "content-type": "multipart/form-data"
// }

// // axios.post(url, msg, {
// //     headers: headers
// // }).then((response) => {
// //     console.log(response);
// // }).catch((error) => {
// //     console.log(error);
// // }) 

// msg.submit(url, (err, res) => {
//     res.resume();
// })

async function getAllWebhooks() {
    try {
       const request = await axios.get("http://localhost:5000/api/webhooks");
       return request.data;
    } catch (error) {
        console.log("Could not get all webhooks.");
        console.log(error);
    }
}

async function test() {
    const webhooks = await getAllWebhooks();

    console.log(webhooks);
}

test()

module.exports = {
    
};
