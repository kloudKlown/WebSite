/**
 * Created by suhas on 3/10/2017.
 */
(function () {
    angular
        .module("Sk-App")
        .controller("contactViewController",contactViewController);

        function contactViewController($location,PlayerService) {
            var vm = this;
            vm.submitPost = function () {
                console.log(vm.nameID);
                if ( vm.nameID != undefined ) {

                    PlayerService.postComment(vm.nameID, vm.emailID, vm.commentID);
                    $location.url("/index/");
                }

            }
        }

})();