var path = require("path");
var friendsAPI = require("../data/friends");

module.exports = apiRoutes = function (router) {
    router.get("/api/friends", function (req, res) {
        res.json(friendsAPI);
    });
    router.post("/api/friends", function (req, res) {

        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });
}
