function method()
{
  angular.module('myApp', [])
  .filter('nl2br', function(){
      return function(text) {
           return text ? text.replace(/\n/g, '<br>') : '';
      };
});

}
