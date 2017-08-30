(function () {
    'use strict';

    const API_BASE_URL = 'https://disque-saude-backend-si1.herokuapp.com/api';

    const PREFEITURA_BASE_PATH = '/prefeituras',
        PREFEITURA_BASE_URL = API_BASE_URL + PREFEITURA_BASE_PATH;

    const UNIDADE_SAUDE_BASE_PATH = '/unidadesaude',
        UNIDADE_SAUDE_BASE_URL = API_BASE_URL + UNIDADE_SAUDE_BASE_PATH;

    const QUEIXA_BASE_PATH = '/queixas',
        QUEIXA_BASE_URL = API_BASE_URL + QUEIXA_BASE_PATH;

    app
        .constant('LOGIN_URL', API_BASE_URL + '/login')
        .constant('PREFEITURA_URL',{
            BASE: PREFEITURA_BASE_URL,
            EFICIENCIA: PREFEITURA_BASE_URL + '/eficiencia',
            SITUACAO: PREFEITURA_BASE_URL + '/situacao'
        })
        .constant('UNIDADE_SAUDE_URL',{
            BASE: UNIDADE_SAUDE_BASE_URL,
            BAIRRO: UNIDADE_SAUDE_BASE_URL + '/bairro',
            ESPECIALIDADE: UNIDADE_SAUDE_BASE_URL + '/especialidade'
        })
        .constant('QUEIXA_URL', {
            BASE: QUEIXA_BASE_URL
        });

})();