/**
 * Created by suhas on 2/23/2017.
 */

(function () {
angular
    .module("NBA-App")
    .controller("blogController",blogController);

    function blogController($http, nba_BlogService) {

        var vm = this;
        function  init() {
            console.log("in BlogScript.js");
            nba_BlogService.getBlogData()
                .success(function (blogData) {
                    vm.blogData = blogData
                })
                .error(function (blogData) {
                    console.log("Errored out")
                })

        };

        init();

    }

})();