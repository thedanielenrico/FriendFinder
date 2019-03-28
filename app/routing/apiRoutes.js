var existingUsers = require("../data/friends");
var path = require("path");



module.exports = apiRoutes = function (router) {
    router.get("/api/friends", function (req, res) {
        res.json(friendsAPI);
    });
    router.post("/api/friends", function (req, res) {
        let newUserScores = req.body.scores;

        // for (let i = 0; i < newUserScores.length; i++) {
        //     console.log(newUserScores[i])
        // }
        // var array1 = [1, 2, 3, 4];
        // var array2 = [5, 6, 7, 8];
        // console.log(existingUsers[0])
        for(let i = 0; i < existingUsers.length; i++){
            let existingUsersScores = existingUsers[i].surveyScores;
            
            var sum = existingUsersScores.map(function (num, idx) {
                return Number(num) + Number(newUserScores[idx]);
            });
            console.log(sum)


        }

    });
}