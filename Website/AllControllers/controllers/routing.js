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
                    controller: "defaultViewController"
                })
                .when("/resume",{
                    templateUrl: "/angular/views/user/resume.view.client.html",
                    controller: "resumeViewController",
                    controllerAs: "webCon"
                })
                .when("/contact",{
                    templateUrl: "/angular/views/user/contact.view.client.html",
                    controller: "contactViewController",
                    controllerAs: "webContact"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();

