var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);



myApp.controller("AppController", ['$scope', '$http', function ($scope, $http) {
    $scope.gspNo = "";
    $scope.activeLink = null;

    $scope.setActiveLink = function (linkName) {
        $scope.activeLink = linkName;
    }

    $scope.loadCounter = function () {
        $http.get("/app/api/getJackpot.php")
            .then(function (response) {
                var data = response.data;
                $('.jackpot-odometer').jOdometer({
                    increment: data.increment,
                    counterStart: data.counterStart,
                    counterEnd: false,
                    numbersImage: 'common/images/mobile-odometer.svg',
                    spaceNumbers: -1,
                    formatNumber: true,
                    widthNumber: 20,
                    heightNumber: 50,
                });
            })
            .catch(function (error) {
                console.error('Error loading jackpot:', error);
            });
    };
    

    $scope.clickButton = function () {
        Swal.fire({
            title: "Coming Soon!",
            text: "Stay tuned...",
            icon: "info",
            customClass: {
                popup: 'custom-popup',
                confirmButton: 'custom-swal-button',
                icon: 'custom-swal-icon'
            }
        });
    }


    $scope.setAOSDelayGSP = function (index) {
        var delay = index * 100;
        angular.element(document.querySelectorAll('.gsp-image'))[index].setAttribute('data-aos-delay', delay);
    };


    $http.get('data/gamelist.json').then(function (response) {
        $scope.gameList = response.data;
    });

    $http.get('/data/promotions.json').then(function (response) {
        $scope.promotionList = response.data;
    });

    $http.get('/data/gsp.json').then(function (response) {
        $scope.gspList = response.data;
    });


}]);