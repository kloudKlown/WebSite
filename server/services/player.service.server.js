/**
 * Created by suhas on 2/20/2017.
 */

module.exports = function (app) {

    app.get('/api/contact',postComment);

    function  postComment(req,res) {
        console.log("Coming here to Pserver");
        // res.status(200);
    };

};