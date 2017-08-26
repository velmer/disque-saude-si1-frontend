(function () {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        const DIRETORIO_VIEW_PATH = '../view/';

        $stateProvider
            .state('inicio', {
                url: '/inicio',
                templateUrl: DIRETORIO_VIEW_PATH + 'inicio.html'
            })
            .state('prefeitura', {
                url: '/prefeitura',
                template: "<ui-view/>",
                controller: 'PrefeituraController as prefeituraCtrl'
            })
            .state('prefeitura.eficiencia', {
                url: '/eficiencia',
                templateUrl: DIRETORIO_VIEW_PATH +'prefeitura.eficiencia.html',
                controller: 'PrefeituraController as prefeituraCtrl'
            })
            .state('prefeitura.situacao', {
                url: '/situacao',
                templateUrl: DIRETORIO_VIEW_PATH +'prefeitura.situacao.html',
                controller: 'PrefeituraController as prefeituraCtrl'
            });

        $urlRouterProvider.otherwise('/inicio');
    }]);

})();