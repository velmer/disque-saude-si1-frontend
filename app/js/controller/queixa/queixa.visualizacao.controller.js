(function () {
    'use strict';

    app.controller('QueixaVisualizacaoController', ['queixa', 'AuthService', 'QueixaService', 'DialogService', 'toastr', function (queixa, AuthService, QueixaService, DialogService, toastr) {
        const self = this;

        self.queixa = queixa || {};
        self.queixaBackup = angular.copy(self.queixa);
        self.isEdicao;

        self.usuarioEstaLogado = function () {
            return AuthService.usuarioEstaLogado();
        };

        self.salvaQueixa = function () {
            if (self.queixa.id)
                _atualizaQueixa();
            else
                _insereQueixa();
        };

        self.habilitarEdicao = function () {
            self.queixa = angular.copy(self.queixaBackup);
            self.isEdicao = true;
        };

        self.descartaForm = function () {
            self.queixa = angular.copy(self.queixaBackup);
            self.isEdicao = false;
        };

        self.isCriacao = function () {
            return self.queixa && angular.isUndefined(self.queixa.id);
        };

        function _atualizaQueixa() {
            QueixaService.salvaQueixa(self.queixa).then(function (response) {
                _posSalvar(response.data);
                toastr.success('Queixa atualizada com sucesso!');
            }, function (error) {
                DialogService.erro();
            });
        }
        
        function _insereQueixa() {
            QueixaService.salvaQueixa(self.queixa).then(function (response) {
                _posSalvar(response.data);

                const mensagem = 'Você pode consultar, a qualquer momento, as informações sobre esta queixa ' +
                    'através do identificador: ' + response.data.id,
                    titulo = 'Queixa registrada com sucesso!';

                DialogService.simples(mensagem, titulo);
            }, function (error) {
                DialogService.erro();
            });
        }

        function _posSalvar(queixaSalva) {
            if (self.isCriacao()) {
                self.descartaForm();
            } else {
                self.queixa = angular.copy(queixaSalva);
                self.isEdicao = false;
            }

            self.queixaBackup = angular.copy(self.queixa);
        }

        (function () {
            self.isEdicao = self.isCriacao();
        })();
    }]);

})();