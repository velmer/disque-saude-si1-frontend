(function () {
    'use strict';

    app.service('PrefeituraService', ['$http', 'PREFEITURA_URL', function ($http, PREFEITURA_URL) {
        const self = this;

        /**
         * Retorna a eficiência - baseada na proporção entre queixas abertas e fechadas - da
         * prefeitura de acordo com a situação da mesma.
         *
         * @return {Promise} Promise contendo a eficiência da prefeitura.
         */
        this.getEficiencia = function () {
            return $http.get(PREFEITURA_URL.EFICIENCIA);
        };

        /**
         * Altera a situação da prefeitura.
         *
         * @param novaSituacao Nova situação da prefeitura.
         * @return {Promise} Promise contento a prefeitura com a situação atualizada.
         */
        this.alteraSituacao = function (novaSituacao) {
            return $http.post(PREFEITURA_URL.SITUACAO, {situacao : novaSituacao});
        };

    }]);

})();