/**
 * Created by suhas on 3/27/2017.
 */
$(document).ready(function () {
    $("#expandNav").click(function () {
        console.log("here");
        if($("#Toggle").css("display") == "none")
        {
            $("#Toggle").css('display','inline')
        }
        else {
            $("#Toggle").css('display','')
        }
    });
    $(document).mousemove(function(e){
        var $width = ($(document).width())/255;
        var $height = ($(document).height())/255;
        var $pageX = parseInt(e.pageX / $width,10);
        $("#landingPage").css("background-color", "rgb("+$pageX+","+127+","+110+")");
        $("#landingHeader").css("background-color", "rgb("+$pageX+","+127+","+110+")");

    });
});