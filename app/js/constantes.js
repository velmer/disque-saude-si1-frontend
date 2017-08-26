(function () {
    'use strict';

    app.constant('SITUACAO_PREFEITURA', {
            NORMAL: 'normal',
            EXTRA: 'extra',
            CAOS: 'caos'
        })
        .constant('API_BASE_URL', 'http://localhost:5000/api');

})();