(function () {
    'use strict';

    app.controller('QueixaBuscaController', ['$state', function ($state) {
        const self = this;

        self.buscarQueixar = function (id) {
            $state.go('queixa.detalhes', {id: id});
        };

    }]);

})();