/**
 * Created by suhas on 2/23/2017.
 */


(function () {
    angular
        .module("NBA-App", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "/angular/views/nba_user/main_page.view.client.html"
                })
                .when("/blog",{
                    templateUrl: "/angular/views/nba_user/blog_post.view.client.html",
                    controller: "blogController",
                    controllerAs: "blogCon"
                })
                .when("/prediction",{
                    templateUrl : "/angular/views/nba_user/prediction.view.client.html",
                    controller : "predictionController",
                    controllerAs: "predCon"

                })
                .when("/feedback",{
                    templateUrl: "/angular/views/nba_user/feedback.view.client.html",
                    controller: "feedbackController",
                    controllerAs: "feedCon"
                })
                .when("/service",{
                    templateUrl: "/angular/views/nba_user/nba_service.view.client.html",
                    controller: "nba_serviceController",
                    controllerAs: "nbaSCon"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();