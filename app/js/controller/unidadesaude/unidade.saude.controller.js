(function () {
    'use strict';

    app.controller('UnidadeSaudeController', ['unidade', 'UnidadeSaudeService', 'DialogService', 'toastr', '$mdDialog', function (unidade, UnidadeSaudeService, DialogService, toastr, $mdDialog) {
        const self = this;

        self.unidade = unidade || {};
        self.isCriacao = !self.unidade.id;

        self.salvaUnidade = function () {
            const unidadeParaSalvar = _preSalvar();

            UnidadeSaudeService.salvaUnidade(unidadeParaSalvar).then(function (response) {
                _posSalvar();
                toastr.success('Unidade salva com sucesso!');
            }, function (error) {
                DialogService.erro();
            })
        };

        self.consultarMedia = function () {
            UnidadeSaudeService.consultarMedia(self.unidade.id).then(function (response) {
                const media = response.data;

                $mdDialog.show($mdDialog.alert()
                    .title('Média de médico por paciente')
                    .textContent('A média de médico por paciente desta Unidade de Saúde é: ' + media)
                    .ok('Fechar'));
            });
        };

        function _preSalvar() {
            const unidadeTemp = angular.copy(self.unidade);

			unidadeTemp.especialidades = unidadeTemp.especialidades || [];
			
            unidadeTemp.especialidades = unidadeTemp.especialidades
                .map(function (nomeEspecialidade) {
                    return {nome: nomeEspecialidade};
                });

            return unidadeTemp;
        }

        function _posSalvar() {
            self.unidade = {};
            self.isCriacao = true;
        }

        function _transformaListaDeEspecialidadesParaStrings(unidade) {
			unidade.especialidades = unidade.especialidades || [];
			
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