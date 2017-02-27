/**
 * Created by suhas on 2/23/2017.
 */

(function () {
    angular
        .module("NBA-App")
        .controller("feedbackController",feedbackController);

    function feedbackController($http, nba_BlogService,$window) {

        var vm = this;
        vm.sendFeedback = function (feedback) {
            // nba_BlogService.feedBackSave(feedback);
            // vm.message = "Thank you for your feedback"
        };

    }

})();/**
 * Created by suhas on 2/27/2017.
 */
