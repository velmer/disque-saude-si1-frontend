(function () {
    'use strict';

    const API_BASE_URL = 'http://localhost:5000/api';

    const PREFEITURA_BASE_PATH = '/prefeituras',
        PREFEITURA_BASE_URL = API_BASE_URL + PREFEITURA_BASE_PATH;

    app.constant('PREFEITURA_URL',{
        BASE: PREFEITURA_BASE_URL,
        EFICIENCIA: PREFEITURA_BASE_URL + '/eficiencia',
        SITUACAO: PREFEITURA_BASE_URL + '/situacao'
    });

})();