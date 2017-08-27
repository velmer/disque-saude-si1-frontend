(function () {
    'use strict';

    app.service('PrefeituraService', ['$http', 'PREFEITURA_URL', 'SITUACAO_PREFEITURA', 'Prefeitura', function ($http, PREFEITURA_URL, SITUACAO_PREFEITURA, Prefeitura) {
        const self = this;

        var prefeitura;

        /**
         * Retorna a prefeitura.
         *
         * @return {Prefeitura}
         */
        this.getPrefeitura = function () {
            prefeitura = _getPrefeituraDoCache();
            return prefeitura;
        };

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
        this.alterarSituacao = function (novaSituacao) {
            prefeitura.situacao = novaSituacao;
            _preSalvar();

            return $http.post(PREFEITURA_URL.SITUACAO, prefeitura.situacao)
                .then(function (response) {
                    _armazenaPrefeitura(response.data);
                });
        };

        /**
         * Busca a prefeitura do BD e armazenando a mesma.
         *
         * @return {Promise} Promise contendo a prefeitura.
         * @private
         */
        function _getPrefeitura() {
            return $http.get(PREFEITURA_URL.BASE).then(function (response) {
                return _armazenaPrefeitura(response.data);
            });
        }

        /**
         * Armazena a prefeitura que veio do BD na variável {@code prefeitura}.
         *
         * @param prefeituraResponse Prefeitura vinda do BD.
         * @return {Prefeitura} Prefeitura instanciada como factory.
         * @private
         */
        function _armazenaPrefeitura(prefeituraResponse) {
            prefeitura = new Prefeitura(prefeituraResponse);
            _salvaPrefeituraEmCache();
            return prefeitura;
        }

        /**
         * Realiza as operações necessárias antes de salvar a prefeitura.
         *
         * @private
         */
        function _preSalvar() {
            prefeitura.situacao = {tipo: prefeitura.situacao};
        }

        /**
         * Armazena a prefeitura em cache.
         *
         * @private
         */
        function _salvaPrefeituraEmCache() {
            _preSalvar();
            localStorage.setItem('prefeitura', JSON.stringify(prefeitura));
        }

        /**
         * Retorna a prefeitura que estava em cache.
         *
         * @private
         */
        function _getPrefeituraDoCache() {
            const prefeituraEmCache = localStorage.getItem('prefeitura');

            return prefeituraEmCache ? new Prefeitura(JSON.parse(prefeituraEmCache)) : undefined;
        }

        (function () {
            _getPrefeitura();
        })();

    }]);

})();