'use strict';

angular.module('siraBugTrackerApp')
  .controller('RegistrationCtrl', function ($scope, $http, setting) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var url = setting.apiurl + '/register';
    $scope.submit = function()
    {
      var data = $scope.register;
      var sendData = {
        "username": data.username,
        "email": data.email
      };
      console.log(data);
      console.log(sendData);
      $http.post(url, data)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
    };    
  })
  .directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                  var v = elem.val()===$(firstPassword).val();
                  ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}]);