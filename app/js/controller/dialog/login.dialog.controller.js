(function () {
    'use strict';

    app.controller('LoginDialogController', function (AuthService, toastr, DialogService, $mdDialog) {
        const self = this;

        this.usuario = {};

        this.entrar = function () {
            AuthService.entrar(self.usuario).then(function () {
                toastr.success('Seja bem-vindo!');
                _closeDialog();
            }, function (error) {
                toastr.error('Algo de errado aconteceu, tente novamente', 'Login não efetuado');
            });
        };

        this.cancelar = function () {
            _closeDialog();
        };

        function _closeDialog() {
            $mdDialog.hide();
        }
    });

})();