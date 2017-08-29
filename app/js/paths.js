(function () {
    'use strict';

    const API_BASE_URL = 'http://localhost:5000/api';

    const PREFEITURA_BASE_PATH = '/prefeituras',
        PREFEITURA_BASE_URL = API_BASE_URL + PREFEITURA_BASE_PATH;

    const UNIDADE_SAUDE_BASE_PATH = '/unidadesaude',
        UNIDADE_SAUDE_BASE_URL = API_BASE_URL + UNIDADE_SAUDE_BASE_PATH;

    const QUEIXA_BASE_PATH = '/queixas',
        QUEIXA_BASE_URL = API_BASE_URL + QUEIXA_BASE_PATH;

    app
        .constant('PREFEITURA_URL',{
            BASE: PREFEITURA_BASE_URL,
            EFICIENCIA: PREFEITURA_BASE_URL + '/eficiencia',
            SITUACAO: PREFEITURA_BASE_URL + '/situacao'
        })
        .constant('UNIDADE_SAUDE_URL',{
            BASE: UNIDADE_SAUDE_BASE_URL,
            BAIRRO: UNIDADE_SAUDE_BASE_URL + '/eficiencia',
            ESPECIALIDADE: UNIDADE_SAUDE_BASE_URL + '/situacao'
        })
        .constant('QUEIXA_URL', {
            BASE: QUEIXA_BASE_URL
        });

})();