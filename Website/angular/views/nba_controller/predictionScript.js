/**
 * Created by suhas on 2/23/2017.
 */

(function () {
    angular
        .module("NBA-App")
        .controller("predictionController",predictionController);

    function predictionController($http, nba_BlogService,$scope) {

        var vm = this;
        vm.sortType ='playerid';
        vm.sortType = false;

        function  init() {
            // console.log("in predictionScript.js");
            nba_BlogService.getPredictionData()
                .success(function (predictionData) {
                    vm.predictionData = predictionData

                })
                .error(function (predictionData) {
                    console.log("Errored out")
                });

            nba_BlogService.fileList()
                .success( function (fileData) {
                    vm.FileList = fileData
                })
                .error( function (fileData) {
                    console.log("File not loaded")
                });

            // $scope.sortType = vm.predictionData.playerid;

        };


        init();
        // vm.loadImages = loadImages();

        vm.loadImages = function(name) {
                // console.log(name);
                var fileNames =[];
                // if (fileNames.length == 0) {
                    for (var i = 0; i < vm.FileList.length; i++) {
                        var tempList = vm.FileList[i].split("-");

                        for (var j = 0; j < 5; j++) {
                            if (name.includes(tempList[j])) {
                                if( fileNames.includes("img/PlayerPlots/"+vm.FileList[i]) ){
                                    break
                                }
                                console.log(tempList[j]);
                                // console.log(vm.FileList[i]);
                                fileNames.push("img/PlayerPlots/"+vm.FileList[i]);
                                break
                            }
                        }
                    }
                // }


            vm.predictionImages = fileNames;
        }


    }

})();/**
 * Created by suhas on 2/24/2017.
 */
