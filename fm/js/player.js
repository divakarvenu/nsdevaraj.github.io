console.clear()
angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      homeTab: {
        templateUrl: 'home.html'
      }
    }
  });
  $stateProvider.state('settings', {
    url: '/settings',
    views: {
      settingsTab: {
        templateUrl: 'settings.html'
      }
    }
  });
  $stateProvider.state('favourite', {
    url: '/favourite',
    views: {
      favouriteTab: {
        templateUrl: 'favourite.html'
      }
    }
  });
  $urlRouterProvider.otherwise('/home');
})

.factory('radioService', function() {

  var fac = {};
  fac.url = 'http://50.7.70.66:8657/',
    fac.allStations = function() {
      return radioChannels;

      return {
        get: function() {
          return fav.list;
        },
        add: function(obj) {
          console.log(fav.list.length);
          fav.list.push(obj);
          console.log(fav.list.length);
        },
        delete: function(id) {
          fav.list.splice(id, 1);
        }
      }

    };

  fac.playRadio = function() {
    $("#jquery_jplayer_1").jPlayer("setMedia", {
      mp3: fac.url + ";stream/1"
    }).jPlayer("play");
  }

  return fac;

})


.controller('RadioCtrl', function($scope, radioService) {
  var url = radioService.url;
  "http://wsdownload.bbc.co.uk/tamil/css/32mp3/latest/tamilosai.mp3";

  $("#jquery_jplayer_1").jPlayer({
    ready: radioService.playRadio,
    play: function(event) {
      console.log('play')
    },
    error: function(event) {
      if (event.jPlayer.error.context.indexOf(";stream/1") != -1) {
        $(this).jPlayer("setMedia", {
          mp3: url
        }).jPlayer("play");
      }
      console.log(event.jPlayer.error.type);
    }
  });

})


.controller('HomeCtrl', function($scope, radioService) {
  $scope.items = radioService.allStations();
  $scope.changeChannel = function(radioChannel) {
    radioService.url = radioChannel.url;
    radioService.playRadio();
  }
  $scope.addFavourite = function(item) {
    radioService.favourite().add(item);
    console.log(radioService.allStations());
  }
})

.controller('FavCtrl', function($scope, radioService) {
  $scope.items = radioService.favourite().get();
  $scope.changeChannel = function(radioChannel) {
    radioService.url = radioChannel.url;
    radioService.playRadio();
  }
  $scope.deleteFavourite = function(item) {
    console.log(item);
    radioService.favourite().delete(item);
    $scope.items = radioService.favourite().get();
  }
})

.controller('SettingsCtrl', function($scope) {
  console.log('Non-cached entrance');

  $scope.$on('$ionicView.enter', function(scopes, states) {
    console.log('hi:', states.stateName);
    if (states.fromCache && states.stateName === 'settings') {
      console.log('Breaking & Entering from cache');
    }
  });
})

.controller('MyCtrl', function($scope) {
  $scope.items = [{
    title: 'Sad',
    text: "Channel 1"
  }, {
    title: '1980',
    text: '...'
  }, {
    title: 'Sad',
    text: "Channel 1"
  }, {
    title: '1980',
    text: '...'
  }];

  $scope.toggleItem = function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

});
