/**
 * Created by suhas on 2/20/2017.
 */

(function () {

    angular
        .module("Sk-App")
        .controller("resumeViewController",resumeViewController);

    function resumeViewController($location, $http , PlayerService) {

        var vm = this;
        PlayerService.ReadPlayer("")
            .success(function (test1) {
                vm.test = test1;
        })
            .error(function (test1) {
                console.log("Error")
            });
    }
    
})();