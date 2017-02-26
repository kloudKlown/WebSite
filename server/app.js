/**
 * Created by suhas on 2/20/2017.
 */

module.exports = function(app){
       // require("./services/player.service.server.js")(app);
        require("./services/blog.service.server.js")(app);

    console.log("Hello Servver");

}
