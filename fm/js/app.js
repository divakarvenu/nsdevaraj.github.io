var app=angular.module('tamilFm', ['ionic','ngCordova.plugins.file','ngCookies'])

app.config(function($ionicConfigProvider) {
$ionicConfigProvider.tabs.position('bottom');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

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
