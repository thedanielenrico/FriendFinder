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
$("#submit").on('click', function (event) {
    event.preventDefault();
    var newUser = {
        name: $("#userName").val().trim(),
        lastName: $("#userLastName").val().trim()
    }
    console.log(newUser)
    $.post("api/friends", newUser)
        .then(function (data) {
            console.log(data)
        })

})