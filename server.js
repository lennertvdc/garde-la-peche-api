require("dotenv").config();
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

//Set up body-parser with JSON
server.use(bodyParser.json({limit: '1000mb'}));

server.use("/api", routes);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is up and listening on port ${port}`));

module.exports = server;
