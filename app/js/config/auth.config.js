(function () {
    'use strict';

    app.config(['$urlRouterProvider', '$provide', '$httpProvider', function ($urlRouterProvider, $provide, $httpProvider) {
        $provide.factory('redirecionamentoInterceptor', ['$q', '$injector', 'store', function ($q, $injector, store) {
            return {
                responseError: function (rejection) {
                    if (rejection.status === 401) {
                        store.remove('token');
                        $injector.get('$state').go('inicio');
                    }
                    return $q.reject(rejection);
                }
            };
        }]);

        $provide.factory('APIInterceptor', ['store', function (store) {
            return {
                request: function (config) {
                    const token = store.get('token');
                    if (token && config.url.indexOf('/api/') !== -1) {
                        config.headers.Authorization = token;
                    }
                    return config;
                }
            };
        }]);

        $httpProvider.interceptors.push('redirecionamentoInterceptor');
        $httpProvider.interceptors.push('APIInterceptor');
    }])
        .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                const estadosAutenticados = [
                    'prefeitura',
                    'unidadesaude.inserir'
                ];

                if (!AuthService.usuarioEstaLogado() && estadosAutenticados.indexOf(toState.name) !== -1) {
                    event.preventDefault();
                    $state.go('inicio');
                }
            });
        }]);

})();