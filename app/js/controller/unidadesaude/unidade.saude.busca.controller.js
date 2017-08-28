(function () {
    'use strict';

    app.controller('UnidadeSaudeBuscaController', ['$state', function ($state) {
        const self = this;

        self.buscarUnidade = function (id) {
            $state.go('unidadesaude.detalhes', {id: id});
        };

    }]);

})();