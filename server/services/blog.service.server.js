/**
 * Created by suhas on 2/23/2017.
 */
module.exports = function (app) {
    // var connectionString ='mongodb://127.0.0.1:27017/test';

    var connectionString = 'mongodb://admin:admin@ds157509.mlab.com:57509/testdatabase_suhas'
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);
    console.log("In blog Service server");
    mongoose.Promise = global.Promise;

    var readBlog = mongoose.Schema({
        positive:{type: String},
        neutral:{type: String},
        negative:{type: String},
        blogPost:{type: String}
    });

    var readPrediction = mongoose.Schema({
        playerid: {type: String},
        team: {type: String},
        brnnC: {type: Number},
        fC: {type: Number},
        h2oC: {type: Number},
        xgbC: {type: Number},
        position: {type: String},
        salary: {type: Number},
        mp  : {type: Number},
        usageR: {type: Number},
        x6: {type: Number}
        // playerName: {type: String}
    });

    var PostBlogModel = mongoose.model("blogs",readBlog);
    var PostPredModel = mongoose.model("predictionmodels",readPrediction);


    app.get('/api/blog', returnBlogs);
    app.get('/api/prediction', returnPrediction);
    app.get('/api/predictionF', fileList);

    var fileSystem = require('fs');
    const testFolder = './Website/img/PlayerPlots';
    var fileList = []



    function returnBlogs(req,res) {
        PostBlogModel.find().then(
            function (Posts) {
                console.log(Posts)
                res.send(Posts);
            },
            function (err) {
                // console.log("Check back Later")
                res.send("Check back Later");
            }

        );
        
    }
    function returnPrediction(req,res) {

        PostPredModel.find().then(
            function (Posts) {
                // console.log(Posts)
                res.send(Posts);
            },
            function (err) {
                console.log("Check back Later")
                res.send("Check back Later");
            }

        );

    }

    function fileList(req,res) {
        fileSystem.readdir(testFolder, function(err,list){
            if(err) throw err;
            for(var i=0; i<list.length; i++)
            {
                // console.log(list[i]); //print the file
                fileList.push(list[i]);
            }
            res.send( fileList )
        });

    }

}