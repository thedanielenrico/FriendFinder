var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function () {
    console.log("App is listening at " + PORT)
});