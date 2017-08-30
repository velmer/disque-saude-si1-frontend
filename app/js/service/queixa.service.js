(function () {
    'use strict';

    app.service('QueixaService', ['$http', 'Queixa', 'QUEIXA_URL', function ($http, Queixa, QUEIXA_URL) {
        const self = this;

        self.getQueixaPorId = function (id) {
            return $http.get(QUEIXA_URL.BASE + id)
                .then(function (response) {
                    return {data: new Queixa(response.data)};
                });
        };

        self.salvaQueixa = function (queixa) {
            const metodoHttp = queixa.id ? 'PUT' : 'POST';

            return $http({
                method: metodoHttp,
                url: QUEIXA_URL.BASE,
                data: queixa
            }).then(function (response) {
                return {data: new Queixa(response.data)};
            });
        };

    }]);

})();