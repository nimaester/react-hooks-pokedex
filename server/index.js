const express = require("express");
const app = express();
const port = 3000;
const db = require("../database");
const parser = require("body-parser");
const path = require("path");


app.use("/", express.static(path.join(__dirname, "../client/dist")));
app.use(parser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
