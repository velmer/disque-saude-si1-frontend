(function () {
    'use strict';

    app.directive('toolbar', function (AuthService, DialogService, $state) {
        function link(scope, element, attr) {

            scope.usuarioEstaLogado = function () {
                return AuthService.usuarioEstaLogado();
            };

            scope.sair = function() {
                AuthService.sair();
                $state.go('inicio');
            };

            scope.mostraDialogDeLogin = function () {
                const dialogConfig = {
                    templateUrl: 'view/dialog/login.dialog.html',
                    controller: 'LoginDialogController',
                    controllerAs: 'loginCtrl',
                    clickOutsideToClose: false,
                    escapeToClose: false
                };

                return DialogService.personalizado(dialogConfig);
            };

        }

        return {
            restrict: 'E',
            templateUrl: './view/toolbar.html',
            link: link
        };
    });

})();