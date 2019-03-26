
var path = require("path");


module.exports = htmlRoutes = function (router) {
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        // res.send("Hello there")
    });
    router.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
