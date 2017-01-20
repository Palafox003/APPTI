angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    alert($scope.loginData.username);
    alert($scope.loginData.password);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae',icono:'ion-email', id: 1 },
    { title: 'Chill',icono:'ion-chatbubble-working', id: 2 },
    { title: 'Dubstep',icono:'ion-ios-telephone-outline', id: 3 },
    { title: 'Indie',icono:'item-icon-left', id: 4 },
    { title: 'Rap',icono:'ion-mic-a', id: 5 },
    { title: 'Cowbell',icono:'item-note', id: 6 },
    {title:'Banda',icono:'ion-email', id:7}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
