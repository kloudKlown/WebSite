/**
 * Created by suhas on 2/9/2017.
 */
(function(){
    angular
        .module("Sk-App", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "/angular/views/user/default.view.client.html",
                    controller: "resumeViewController"
                })
                .when("/resume",{
                    templateUrl: "/angular/views/user/resume.view.client.html",
                    controller: "resumeViewController",
                    controllerAs: "webCon"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();

