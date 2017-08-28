(function () {
    'use strict';

    app.service('QueixaService', ['$http', 'Queixa', function ($http, Queixa) {
        const self = this;

        self.getQueixaPorId = function (id) {
            return $http.get('http://localhost:5000/api/queixas/' + id);
        };

        self.salvaQueixa = function (queixa) {
            const metodoHttp = queixa.id ? 'PUT' : 'POST';

            return $http({
                method: metodoHttp,
                url: 'http://localhost:5000/api/queixas',
                data: queixa
            }).then(function (response) {
                return {data: new Queixa(response.data)};
            });
        };

    }]);

})();