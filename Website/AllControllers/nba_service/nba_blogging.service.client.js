/**
 * Created by suhas on 2/23/2017.
 */


(function () {
    angular.module("NBA-App")
        .factory("nba_BlogService",nba_BlogService);

        function  nba_BlogService($http) {

            var blogFunctions = {
                getBlogData : getBlogData,
                getPredictionData : getPredictionData,
                fileList : fileList,
                feedBackSave:feedBackSave
            };

            return blogFunctions;

            function getBlogData() {
                var url="/api/blog";
                // console.log( $http.get(url) )
                return $http.get(url)
            };

            function getPredictionData() {
                var url ="/api/prediction";
                // console.log($http.get(url) )
                return $http.get(url)
            };

            function fileList() {
                var url ="/api/predictionF";
                // console.log($http.get(url) )
                return $http.get(url)
            }

            function feedBackSave(feedback) {
                var url = "/api/saveFeedback";
                $http.push(url,feedback);
            }
        }
        


})();