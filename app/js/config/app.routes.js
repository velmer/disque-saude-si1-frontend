(function () {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function (stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
    }]);

})();