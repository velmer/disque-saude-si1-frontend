(function () {
    'use strict';

    app.factory('Prefeitura', function () {
        
        const Prefeitura = function(info) {
            this.id = info.id;
            this.situacao = info.situacao.tipo;
        };

        Prefeitura.prototype.constructor = Prefeitura;

        return Prefeitura;
    });
})();