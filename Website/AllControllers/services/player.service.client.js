/**
 * Created by suhas on 2/20/2017.
 */

(function () {

angular
    .module("Sk-App")
    .factory("PlayerService", PlayerService);

    var key = "5149eb4e8ad83d82c9c05b95fcaffc19";

    function PlayerService($http) {

        var service = {
            postComment : postComment,
            searchPhotos: searchPhotos
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
        function  searchPhotos(searchString) {
            var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT"

            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchString);
            return( $http.get(url) );
        }

    }

})();