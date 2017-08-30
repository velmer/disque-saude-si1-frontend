(function () {
    'use strict';

    app.controller('LoginDialogController', function (AuthService, toastr, DialogService, $mdDialog, LOGIN_NAO_EFETUADO) {
        const self = this;

        this.usuario = {};

        this.entrar = function () {
            AuthService.entrar(self.usuario).then(function () {
                toastr.success('Seja bem-vindo!');
                _closeDialog();
            }, function (error) {
                toastr.error(LOGIN_NAO_EFETUADO.MENSAGEM, LOGIN_NAO_EFETUADO.TITULO);
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