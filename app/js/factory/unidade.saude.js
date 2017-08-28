(function () {
    'use strict';

    app.factory('UnidadeSaude', [function () {

        const UnidadeSaude = function (info) {
            this.id = info.id;
            this.tipo = info.tipo;
            this.descricao = info.descricao;
            this.endereco = info.endereco;
            this.especialidades = info.especialidades;
            this.quantidadeMedicos = info.quantidadeMedicos;
            this.taxaDiariaAtendimentos = info.taxaDiariaAtendimentos;
            this.numeroPacientesDia = info.numeroPacientesDia;
            this.mediaMedicoPorPaciente = info.mediaMedicoPorPaciente;
        };

        UnidadeSaude.prototype.constructor = UnidadeSaude;

        return UnidadeSaude;
    }]);
})();