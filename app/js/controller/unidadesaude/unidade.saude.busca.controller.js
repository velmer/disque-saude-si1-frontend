(function () {
    'use strict';

    app.controller('UnidadeSaudeBuscaController', ['$state', 'UnidadeSaudeService', function ($state, UnidadeSaudeService) {
        const self = this;

        self.unidades = [];
        self.isResultadoPesquisa = false;

        self.buscarUnidades = function (textoPesquisa) {
            _preBusca();

            if (self.filtroPesquisa === 'bairro') {
                _buscarPorBairro(textoPesquisa);
            } else {
                _buscarPorEspecialidade(textoPesquisa);
            }
        };

        self.verDetalhes = function (unidade) {
            $state.go('unidadesaude.detalhes', {id: unidade.id});
        };

        function _preBusca() {
            self.unidades = [];
            self.isResultadoPesquisa = false;
        }

        function _buscarPorBairro(bairro) {
            UnidadeSaudeService.getPorBairro(bairro).then(function (response) {
                self.unidades = response.data;
                self.isResultadoPesquisa = true;
            }, function () {
                self.isResultadoPesquisa = true;
            });
        }

        function _buscarPorEspecialidade(especialidade) {
            UnidadeSaudeService.getPorEspecialidade(especialidade).then(function (response) {
                self.unidades = response.data;
                self.isResultadoPesquisa = true;
            });
        }

    }]);

})();