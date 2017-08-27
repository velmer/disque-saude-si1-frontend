(function () {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        const DIRETORIO_VIEW_PATH = '../view/';

        $stateProvider
            .state('inicio', {
                url: '/inicio',
                templateUrl: DIRETORIO_VIEW_PATH + 'inicio.html'
            })
            .state('prefeitura', {
                url: '/prefeitura',
                templateUrl: DIRETORIO_VIEW_PATH +'prefeitura.info.html',
                controller: 'PrefeituraController as prefeituraCtrl'
            });


        $urlRouterProvider.otherwise('/inicio');
    }]);

})();