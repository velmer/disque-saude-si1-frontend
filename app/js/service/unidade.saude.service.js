(function () {
    'use strict';

    app.service('UnidadeSaudeService', ['$http', 'UnidadeSaude', function ($http, UnidadeSaude) {
        const self = this;

        self.getUnidadePorId = function (id) {
            return $http.get('http://localhost:5000/api/unidadesaude/' + id)
                .then(function (response) {
                    return {data: new UnidadeSaude(response.data)};
                });
        };

        self.getPorBairro = function (bairro) {
            bairro = angular.isObject(bairro) ? bairro.bairro : bairro;

            return $http.get('http://localhost:5000/api/unidadesaude/bairro', {
                params: {bairro: bairro}
            }).then(function (response) {
                const listaUnidades = response.data.map(function (unidade) {
                    return new UnidadeSaude(unidade);
                });

                return listaUnidades;
            });
        };

        self.getPorEspecialidade = function (especialidade) {
            especialidade = angular.isObject(especialidade) ? especialidade : {nome: especialidade};

            return $http.get('http://localhost:5000/api/unidadesaude/especialidade', {
                params: {especialidade: especialidade}
            }).then(function (response) {
                const listaUnidades = response.data.map(function (unidade) {
                    return new UnidadeSaude(unidade);
                });

                return listaUnidades;
            });
        };

        self.salvaUnidade = function (unidade) {
            const metodo = unidade.id ? 'PUT' : 'POST';

            return $http({
                method: metodo,
                url: 'http://localhost:5000/api/unidadesaude',
                data: unidade
            }).then(function (response) {
                return {data: new UnidadeSaude(response.data)};
            });
        };

    }]);

})();