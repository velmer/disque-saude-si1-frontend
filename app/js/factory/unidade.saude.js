(function () {
    'use strict';

    app.factory('UnidadeSaude', [function () {

        const TIPO_HOSPITAL = 'Hospital',
            TIPO_POSTO_SAUDE = 'Posto de Saúde';

        const UnidadeSaude = function (info) {
            this.id = info.id;
            this.tipo = info.tipo;
            this.descricao = info.descricao;
            this.endereco = info.endereco;
            this.especialidades = info.especialidades;
            this.quantidadeMedicos = info.quantidadeMedicos;
            this.taxaPacientesPorDia = info.taxaPacientesPorDia;
            this.numeroPacientesDia = info.numeroPacientesDia;
            this.mediaMedicoPorPaciente = info.mediaMedicoPorPaciente;
        };

        UnidadeSaude.prototype.getTipoFormatado = function () {
            if (this.tipo === 'hospital') return TIPO_HOSPITAL;

            return TIPO_POSTO_SAUDE;
        };

        UnidadeSaude.prototype.constructor = UnidadeSaude;

        return UnidadeSaude;
    }]);
})();