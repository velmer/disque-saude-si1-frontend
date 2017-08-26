(function () {
    'use strict';

    app.constant('API_BASE_URL', 'http://localhost:5000/api')
        .constant('SITUACAO_PREFEITURA', {
            NORMAL: 'normal',
            EXTRA: 'extra',
            CAOS: 'caos'
        });

})();