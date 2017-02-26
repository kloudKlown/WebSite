/**
 * Created by suhas on 2/20/2017.
 */

(function () {

angular
    .module("Sk-App")
    .factory("PlayerService", PlayerService);

    function PlayerService($http) {

        var service = {
            // TestPlayer: TestPlayer,

            ReadPlayer : ReadPlayer

            // WritePlayer : WritePlayer


        };

        return service;

        function ReadPlayer(callback) {
            var url = '/api/resume?Title=A';
            return $http.get(url)

        }


    }

})();