(function(){
  angular.module('app.footer.directive',[

  ]).directive('piedepagina', piedepagina)
  .directive('piedepaginaambiental', piedepaginaambiental);

  function piedepagina(){
    return {
      scope:{},
      templateUrl:'app/footer/footer.html'
    };
  }

  function piedepaginaambiental(){
    return {
      scope:{},
      templateUrl:'app/footer/footerambiental.html'
    };
  }

})();
