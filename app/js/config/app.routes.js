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
            })
            .state('queixa', {
                url: '/queixa',
                template: '<ui-view/>',
                abstract: true
            })
            .state('queixa.registrar', {
                url: '/registrar',
                templateUrl: DIRETORIO_VIEW_PATH + 'visualizar.queixa.html',
                controller: 'QueixaVisualizacaoController as queixaVisCtrl',
                resolve: {
                    queixa: function () {
                        return undefined;
                    }
                }
            })
            .state('queixa.detalhes', {
                url: '/detalhes/:id',
                templateUrl: DIRETORIO_VIEW_PATH + 'visualizar.queixa.html',
                controller: 'QueixaVisualizacaoController as queixaVisCtrl',
                resolve: {
                    queixa: function ($stateParams, QueixaService) {
                        return QueixaService.getQueixaPorId($stateParams.id)
                            .then(function (response) {
                                return response.data;
                            });
                    }
                }
            })
            .state('queixa.buscar', {
                url: '/buscar',
                templateUrl: DIRETORIO_VIEW_PATH + 'buscar.queixa.html',
                controller: 'QueixaBuscaController as queixaBuscaCtrl'
            });


        $urlRouterProvider.otherwise('/inicio');
    }]);

})();