(function () {
    'use strict';

    app.factory('Queixa', [function () {

        const Queixa = function (info) {
            this.id = info.id;
            this.tipo = info.tipo;
            this.comentario = info.comentario;
            this.descricao = info.descricao;
            this.endereco = info.endereco;
            this.status = info.status;
            this.solicitante = info.solicitante;
            this.estabelecimento = info.estabelecimento;
            this.tipoAnimal = info.tipoAnimal;
        };

        Queixa.prototype.constructor = Queixa;

        return Queixa;
    }]);
})();