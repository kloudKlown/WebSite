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
                .otherwise({
                    redirectTo: "/"
                });
        });
})();