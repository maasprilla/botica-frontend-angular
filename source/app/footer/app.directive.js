(function(){
  angular.module('app.footer.directive',[

  ]).directive('piedepagina', piedepagina)
  .directive('piedepaginaambiental', piedepaginaambiental);

  piedepagina.$inject = [];
  function piedepagina(){
    return {
      scope:{},
      templateUrl:'app/footer/footer.html'
    };
  }

  piedepaginaambiental.$inject = [];
  function piedepaginaambiental(){
    return {
      scope:{},
      templateUrl:'app/footer/footerambiental.html'
    };
  }

})();
