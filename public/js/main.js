angular.module("alurapic",["bootNg", "ngAnimate", "ngRoute"])
.config(function($locationProvider, $routeProvider){

  $locationProvider.html5Mode(true);
  // $locationProvider.html5Mode({
  // enabled: true,
  // requireBase: false
  // });

  $routeProvider.when("/",{
    templateUrl: "partials/fotos.html",
    controller: "FotosController"
  });

  $routeProvider.when("/cadastro/foto",{
    templateUrl: "partials/foto.html",
    controller: "CadastroController"
  });

  $routeProvider.otherwise({redirectTo: "/"});

});
