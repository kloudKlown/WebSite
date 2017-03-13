var express = require('express');
var app = express();
var _ = require('lodash');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/Website'));

require("./server/app.js")(app);

var port = process.env.PORT || 3004;
app.listen(port);