(function () {
    'use strict';

    app.controller('QueixaBuscaController', ['$state', 'QueixaService', 'toastr', 'QUEIXA_NAO_ENCONTRADA', function ($state, QueixaService, toastr, QUEIXA_NAO_ENCONTRADA) {
        const self = this;

        self.buscarQueixar = function (id) {
            QueixaService.getQueixaPorId(id).then(function () {
                $state.go('queixa.detalhes', {id: id});
            }, function () {
                toastr.error(QUEIXA_NAO_ENCONTRADA.MENSAGEM, QUEIXA_NAO_ENCONTRADA.TITULO);
            })
        };

    }]);

})();