(function () {
    'use strict';

    app.service('DialogService', function ($mdDialog) {
        const self = this;

        self.simples = function (mensagem, titulo) {
            const dialogSimples = $mdDialog.alert({
                title: titulo,
                textContent: mensagem,
                clickOutsideToClose: false,
                escapeToClose: false,
                ok: 'Entendi'
            });

            return $mdDialog.show(dialogSimples);
        };

        self.erro = function (mensagem, titulo) {
            mensagem = mensagem || 'Um erro interno ocorreu, por favor, tente novamente.';
            titulo = titulo || "Erro";

            return self.simples(mensagem, titulo);
        };

        self.confirmacao = function (mensagem, titulo, confirmar, cancelar) {
            const dialogConfirmacao = $mdDialog.confirm({
                title: titulo || 'Você tem certeza?',
                textContent: mensagem,
                clickOutsideToClose: true,
                ok: confirmar || 'Confirmar',
                cancel: cancelar || 'Cancelar'
            });

            return $mdDialog.show(dialogConfirmacao);
        };

        self.personalizado = function (data) {
            return $mdDialog.show({
                templateUrl: data.templateUrl,
                controller: data.controller,
                controllerAs: data.controllerAs,
                targetEvent: data.targetEvent,
                locals: data.locals || {},
                clickOutsideToClose: data.clickOutsideToClose,
                escapeToClose: data.escapeToClose,
                attachTo: data.attachTo || angular.element(document.body),
                parent: data.parent || angular.element(document.body)
            });
        };
    });
})();