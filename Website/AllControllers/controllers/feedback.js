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

            vm.searchPhotos = function (text) {

                PlayerService
                    .searchPhotos(text)
                    .then(function(response) {
                        data = response.data.replace("jsonFlickrApi(","");
                        data = data.substring(0,data.length - 1);
                        data = JSON.parse(data);
                        vm.photos = data.photos;
                        console.log(vm.photos);
                    });
            }
        }

})();