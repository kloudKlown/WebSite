/**
 * Created by suhas on 2/23/2017.
 */
module.exports = function (app) {
    // var connectionString ='mongodb://127.0.0.1:27017/test';

    var connectionString = 'mongodb://SuhasKabinna:ilovepanda123@ds157509.mlab.com:57509/testdatabase_suhas'
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);
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

    var fB = mongoose.Schema({
       feedB: {type: String}
    });

    var PostBlogModel = mongoose.model("blogs",readBlog);
    var PostPredModel = mongoose.model("predictionmodels",readPrediction);

    var FeedbackModel = mongoose.model("feedbackmodels",fB);

    app.get('/api/blog', returnBlogs);
    app.get('/api/prediction', returnPrediction);
    app.get('/api/predictionF', fileList);

    app.get('/api/saveFeedback',FeedbackModel);

    app.post('/api/contact/',postComment);

    function  postComment(req,res) {
        console.log("Coming here to BS",req.body);
        res.status(200);
    };

    var fileSystem = require('fs');
    const testFolder = './Website/img/PlayerPlots';
    var fileList = [];


    function FeedbackModel(req,res) {
        console.log("HELLOOS");
        console.log(req.body);
    }

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