"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("./types");
var express = require('express');
var app = express();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get('/', function (req, res) {
    console.log("deux");
    res.send('test');
});
app.listen(port, function () {
    console.log('server running on port ' + port);
});
