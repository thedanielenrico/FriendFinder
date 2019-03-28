var existingUsers = require("../data/friends");
var path = require("path");
var friendsAPI = require("../data/friends")


module.exports = apiRoutes = function (router) {
    router.get("/api/friends", function (req, res) {
        res.json(friendsAPI);
    });
    router.post("/api/friends", function (req, res) {
        let newUserScores = req.body.surveyScores;

        lowestDiff = Number.MAX_SAFE_INTEGER;
        lowestID = null;

        for (let i = 0; i < existingUsers.length; i++) {
            let existingUsersScores = existingUsers[i].surveyScores;

            var sum = existingUsersScores.map(function (num, idx) {
                return Math.abs(Number(num) - Number(newUserScores[idx]));
            });


            var currentDiff = 0;

            for (var j = 0; j < sum.length; j++) {
                currentDiff += sum[j];
            }

            if(lowestDiff > currentDiff){
                lowestDiff = currentDiff;
                lowestID = i;
            }

        }
        res.json(existingUsers[lowestID])
    });
}