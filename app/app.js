var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);



myApp.controller("AppController", ['$scope', '$http', function ($scope, $http) {
    $scope.gspNo = "";

    $scope.loadCounter = function () {
        $http.get("app/api/getJackpot.php")
            .then(function (response) {
                var data = response.data;
                $('.jackpot-odometer').jOdometer({
                    increment: data.increment,
                    counterStart: data.counterStart,
                    counterEnd: false,
                    numbersImage: 'common/images/odometer.svg',
                    spaceNumbers: 3,
                    formatNumber: true,
                    widthNumber: 35,
                    heightNumber: 70
                });
            })
            .catch(function (error) {
                console.error('Error loading jackpot:', error);
            });
    };
    

    $http.get('data/gamelist.json').then(function (response) {
        $scope.gameList = response.data;
    });

    $http.get('data/promotions.json').then(function (response) {
        $scope.promotionList = response.data;
    });

    $http.get('data/gsp.json').then(function (response) {
        $scope.gspList = response.data;
    });
}]);