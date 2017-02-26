var express = require('express');
var app = express();
var _ = require('lodash');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// configure a public directory to host static content
app.use(express.static(__dirname + '/Website'));

//CRUD
// var CC = "HELLOOasasOOO";
//
// app.get("/resume", function (req, res) {
//
//     res.send(CC);
//
// });

require("./server/app.js")(app);

var port = process.env.PORT || 3000;
app.listen(port);