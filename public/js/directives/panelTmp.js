angular.module("bootNg", [])
.directive("panelTmp", function(){

  var ddo = {}
  ddo.templateUrl="js/templates/panelTmp.html"
  ddo.restrict="AE"
  ddo.transclude=true
  ddo.scope={
      titulo:"@",
      foto:"=fotoatual"
  }
  return ddo
})

.directive("minhaFoto", function(){

  var ddo2 = {}
  ddo2.templateUrl="js/templates/minhaFoto.html"
  ddo2.restrict="E"
  ddo2.transclude=true
  ddo2.scope={
      titulo:"@",
      url:"@url",
      nome:"@"
  }
  return ddo2
})
