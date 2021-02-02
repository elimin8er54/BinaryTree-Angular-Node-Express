"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var app = express();
var port = 3001;
var compression = require('compression');
app.use(compression());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("dist/BinaryTree"));
app.use(function (req, res, next) {
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "../../../../dist/BinaryTree", "index.html"));
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
