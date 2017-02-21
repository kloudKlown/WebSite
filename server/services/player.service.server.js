/**
 * Created by suhas on 2/20/2017.
 */

module.exports = function (app) {
    console.log("User server");

    var CC = "From PlayerServer";
    var C1 = [
        {Title:"A", pID:"RIGHT RIGHT"}
    ];

    app.get('/api/resume',findplayer);

    function  findplayer(req,res) {

        var pp = req.query;
        console.log(pp);

        if (pp.Title){
            findbyTitle(req,res);
        }
        // console.log(req);
        // res.send(C1);
    }

    function  findbyTitle(req,res) {
        var Ti = req.query.Title;
        for (var v in C1){
            if(C1[v].Title  == Ti){
                res.send(C1[v].pID);
                return;

            }
        }
        res.send("Not Found");
    }

}