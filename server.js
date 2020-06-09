require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./app/routes");

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is up and listening on port ${port}`));