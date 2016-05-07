angular.module("alurapic")
.controller("CadastroController", function($scope, $http, $location){

  $scope.submete = function(){

      //Verifico antes de enviar, ou seja, se estiver errado nem envia
      if ($scope.formCadFoto.$valid) {
        $http.post('/v1/fotos', $scope.foto)
          .success(function(dados){
            $scope.msg = dados.msg;
            $scope.fotos = dados;
            $location.path('/')
          })
          .error(function(erro){
            $scope.msg = "Erro from server";
            console.error(erro);
          });
      }
    }


});
