(function () {
    'use strict';

    app.directive('toolbar', function () {
        function link(scope, element, attr) {

        }

        return {
            restrict: 'E',
            templateUrl: './view/toolbar.html',
            link: link
        };
    });

})();