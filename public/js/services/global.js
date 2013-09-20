window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
    var current_user = window.user;
    return {
      currentUser: function() {
        return current_user;
      },
      isSignedIn: function() {
        //!! basically is a cast to boolean
        return !!current_user;
      }
    }
  });