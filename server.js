require("dotenv").config();
const express = require("express");
const server = express();
const routes = require("./routes");

server.use("/api", routes);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is up and listening on port ${port}`));