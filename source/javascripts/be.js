//Initialize App
angular.module('Be', ['Be.controllers']).
  config(['$routeProvider', '$interpolateProvider', function($routeProvider, $interpolateProvider){
    $routeProvider.when('/', {controller:'ProjectsCtrl'})

    //Change the Angular delimiters, since there's a conflict with Jekyll ( http://goo.gl/KdPBV6 )
    $interpolateProvider.startSymbol('[[')
    $interpolateProvider.endSymbol(']]')
  }]);

//Controllers
angular.module('Be.controllers', []).
  controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http){

    //Get projects from Behance API
    $http.jsonp("http://www.behance.net/v2/users/zachalig/projects/3904829?api_key=6zxglcuMDFus9cGZcPtWCRdGm9qzhGK7&callback=JSON_CALLBACK").
      success(function(data){
        $scope.projects = data.projects
      })

  }])