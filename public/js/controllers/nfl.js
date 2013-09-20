window.angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', ['$scope', '$routeParams', 'Global', 'NFL',
    function($scope, $routeParams, Global, NFL) {
      $scope.global = Global;

      //All the NFL teams
      $scope.nflTeams = NFL.teams;
      //The team corresponding to the current path
      $scope.nflTeam = NFL.teams[$routeParams['nflTeamId']];
    }
  ]);