(function () {
    'use strict';

    app.service('AuthService', ['$http', 'store', 'LOGIN_URL', function ($http, store, LOGIN_URL) {
        const self = this;

        self.usuarioEstaLogado = function () {
            return !!_getTokenDoCache();
        };

        self.entrar = function (usuario) {
            return $http.post(LOGIN_URL, usuario)
                .then(function (response) {
                    const token = response.headers('Authorization');
                    _salvaTokenEmCache(token);
                });
        };

        self.sair = function () {
            _removeTokenDoCache();
        };

        function _salvaTokenEmCache(token) {
            store.set('token', token);
        }

        function _removeTokenDoCache() {
            store.remove('token');
        }

        function _getTokenDoCache() {
            return store.get('token');
        }

    }]);

})();