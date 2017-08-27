(function () {
    'use strict';

    app.controller('PrefeituraController', ['PrefeituraService', 'DialogService', 'toastr', function (PrefeituraService, DialogService, toastr) {
        const self = this;

        self.prefeitura = PrefeituraService.getPrefeitura();
        self.isEdicao = false;

        /**
         * Altera a situaçao da prefeitura.
         */
        self.alterarSituacao = function () {
            PrefeituraService.alterarSituacao(self.prefeitura.situacao).then(
                function (response) {
                    self.toggleEdicao();
                    toastr.success('Situação alterada com sucesso!');
                },function (error) {
                    DialogService.erro();
                }
            );
        };

        /**
         * Altera o modo edição.
         */
        self.toggleEdicao = function () {
            self.isEdicao = !self.isEdicao;
        };

        (function getEficiencia() {
            PrefeituraService.getEficiencia().then(function (response) {
                self.eficiencia = response.data;
            });
        })();

    }]);

})();