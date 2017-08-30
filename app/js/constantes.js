(function () {
    'use strict';

    app
        .constant('SITUACAO_PREFEITURA', {
            NORMAL: 'normal',
            EXTRA: 'extra',
            CAOS: 'caos'
        })
        .constant('QUEIXA_NAO_ENCONTRADA', {
            TITULO: 'Queixa não encontrada',
            MENSAGEM: 'Por favor, insira um identificar válido'
        })
        .constant('LOGIN_NAO_EFETUADO', {
            TITULO: 'Login não efetuado',
            MENSAGEM: 'Verifique suas credenciais e tente novamente'
        });

})();