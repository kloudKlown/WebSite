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
    })

});