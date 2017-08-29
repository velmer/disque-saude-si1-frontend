(function () {
    'use strict';

    app.service('UnidadeSaudeService', ['$http', 'UnidadeSaude', 'UNIDADE_SAUDE_URL', function ($http, UnidadeSaude, UNIDADE_SAUDE_URL) {
        const self = this;

        self.getUnidadePorId = function (id) {
            return $http.get(UNIDADE_SAUDE_URL.BASE + '/' +id)
                .then(function (response) {
                    return {data: new UnidadeSaude(response.data)};
                });
        };

        self.getPorBairro = function (bairro) {
            return $http.get(UNIDADE_SAUDE_URL.BAIRRO, {
                params: {bairro: bairro}
            }).then(function (response) {
                const listaUnidades = response.data.map(function (unidade) {
                    return new UnidadeSaude(unidade);
                });

                return {data: listaUnidades};
            });
        };

        self.getPorEspecialidade = function (especialidade) {
            return $http.get(UNIDADE_SAUDE_URL.ESPECIALIDADE, {
                params: {especialidade: especialidade}
            }).then(function (response) {
                const listaUnidades = response.data.map(function (unidade) {
                    return new UnidadeSaude(unidade);
                });

                return {data: listaUnidades};
            });
        };

        self.salvaUnidade = function (unidade) {
            const metodo = unidade.id ? 'PUT' : 'POST';

            return $http({
                method: metodo,
                url: UNIDADE_SAUDE_URL.BASE,
                data: unidade
            }).then(function (response) {
                return {data: new UnidadeSaude(response.data)};
            });
        };

    }]);

})();