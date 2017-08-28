(function () {
    'use strict';

    app.service('AuthService', ['$http', function ($http) {
        const self = this;

        var token;

        self.usuarioEstaLogado = function () {
            return angular.isDefined(token);
        };

        self.entrar = function (usuario) {
            return $http.post('http://localhost:5000/api/login', usuario)
                .then(function (response) {
                    token = response.headers('Authorization');
                    _salvaTokenEmCache();
                });
        };

        self.sair = function () {
            token = undefined;
            _removeTokenDoCache();
        };

        function _salvaTokenEmCache() {
            localStorage.setItem('token', JSON.stringify(token));
        }

        function _removeTokenDoCache() {
            localStorage.removeItem('token');
        }

        function _getTokenDoCache() {
            const tokenEmCache = localStorage.getItem('token');

            return tokenEmCache ? JSON.parse(tokenEmCache) : undefined;
        }

        (function () {
            token = _getTokenDoCache();
        })();


    }]);

})();