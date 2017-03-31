(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        

        $scope.result = function() {
            if(!$scope.lunch) {
                $scope.message = 'Please enter data first';
                $scope.flash = 'danger'
            } else {
                var lunch = $scope.lunch;
                
                var spl = lunch.toString().split(',').length;
                

                if(spl > 3) {
                    $scope.message = 'Too much!';
                    $scope.flash = 'warning'
                } else if (spl > 0) {
                    $scope.message = 'Enjoy!';
                    $scope.flash = 'success'
                } else {
                    $scope.message = ' ';
                }

            }

        }

    }

})();
