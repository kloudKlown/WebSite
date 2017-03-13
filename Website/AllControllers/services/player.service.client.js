/**
 * Created by suhas on 2/20/2017.
 */

(function () {

angular
    .module("Sk-App")
    .factory("PlayerService", PlayerService);

    function PlayerService($http) {

        var service = {
            postComment : postComment
        };

        return service;

        function postComment(n,e,c) {
            console.log("Coming here to PS");
            var obj = [
                name = n,
                email = e,
                comments = c
            ];
            $http.post("/api/contact/",obj);

        }

    }

})();