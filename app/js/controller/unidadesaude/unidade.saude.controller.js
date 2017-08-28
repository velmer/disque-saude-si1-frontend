(function () {
    'use strict';

    app.controller('UnidadeSaudeController', ['unidade', 'UnidadeSaudeService', 'DialogService', 'toastr', function (unidade, UnidadeSaudeService, DialogService, toastr) {
        const self = this;

        self.unidade = unidade || {};
        self.isCriacao = !self.unidade.id;

        self.salvaUnidade = function () {
            const unidadeParaSalvar = _preSalvar();

            UnidadeSaudeService.salvaUnidade(unidadeParaSalvar).then(function (response) {
                _posSalvar(response.data);
                toastr.success('Unidade salva com sucesso!');
            }, function (error) {
                DialogService.erro();
            })
        };

        function _preSalvar() {
            const unidadeTemp = angular.copy(self.unidade);

            unidadeTemp.especialidades = unidadeTemp.especialidades
                .map(function (nomeEspecialidade) {
                    return {nome: nomeEspecialidade};
                });

            return unidadeTemp;
        }

        function _posSalvar(unidadeSalva) {
            _transformaListaDeEspecialidadesParaStrings(unidadeSalva);

            self.unidade = unidadeSalva;
            self.isCriacao = false;
        }

        function _transformaListaDeEspecialidadesParaStrings(unidade) {
            self.unidade.especialidades = unidade.especialidades
                .map(function (especialidade) {
                    return especialidade.nome;
                });
        }

        (function () {
            if (unidade)
                _transformaListaDeEspecialidadesParaStrings(unidade);
        })();

    }]);

})();