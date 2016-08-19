(function(){
  'use strict';
  angular
  .module('app.login.controller',[])
  .controller('LoginController',LoginController);
  LoginController.$inject = ['$mdToast', '$auth', '$location'];
  function LoginController($mdToast, $auth, $location) {
    var vm = this;

    vm.signIn = signIn;
    vm.getCurrentUser = getCurrentUser;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;
    vm.isDrog = isDrog;
    vm.getIdCurrentUser=getIdCurrentUser;


    signIn.$inject = [];
    function signIn(){
    $auth.login(vm.user)
        .then(function(){
          vm.user = {};
          console.info('Sesion Iniciada...');
          $location.url('/bienvenido');
          $mdToast.show(
              $mdToast.simple()
                  .textContent('Sesion Iniciada...')
                  .position('bottom right'));
        })
        .catch(function (error){
          $mdToast.show(
              $mdToast.simple()
                  .textContent('Error al Iniciar Sesion...')
                  .position('bottom right'));
          console.log(error.data. error.status);
        });
    }

    getCurrentUser.$inject = [];
    function getCurrentUser() {
      if (isAuthenticated()) {

      return $auth.getPayload().user;
    }else{
      return '';
    }
  }

  getIdCurrentUser.$inject = [];
  function getIdCurrentUser() {
    if (isAuthenticated()) {
    return $auth.getPayload().sub;
  }else{
    return '';
  }
}



    isAuthenticated.$inject = [];
    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    logout.$inject = [];
    function logout() {
  if (!$auth.isAuthenticated()) {
    return;
  }
  $auth.logout()
  .then(function(){
    $mdToast.show(
        $mdToast.simple()
            .textContent('Sesion Finalizada...')
            .position('bottom right'));
    console.info('Sesion Finalizada');
    $location.path('/');
  })
}

isAdmin.$inject = [];
function isAdmin() {
  if (isAuthenticated()){

    return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
  }else{
    return false;
  }

}

isUser.$inject = [];
function isUser() {
  if (isAuthenticated()){
    return $auth.getPayload().roles.indexOf('USER') !== -1;
  }else{
    return false;
  }

}

isDrog.$inject = [];
function isDrog() {
  if (isAuthenticated()){
    return $auth.getPayload().roles.indexOf('DROG') !== -1;
  }else{
    return false;
  }

}







   }
})();
