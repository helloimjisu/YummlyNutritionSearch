(function() {
  var app = angular.module('nutritionApp', []);
  var app_id =  //insert app ID here//;
  var app_key = //insert app key here//;

  app.controller('SearchController', function ($scope, $http) {		
    $scope.results = [];
    $scope.searchTerm = "";

    //advanced search nutrition attributes
    $scope.minKCal = "";
    $scope.maxKCal = "";
    $scope.minProtein = "";
    $scope.minCHO = "";
    $scope.minFiber = "";
    $scope.minK = "";
    $scope.minCa = "";
    $scope.minFe = "";

    $scope.maxSugar = "";
    $scope.maxNa = "";
    $scope.maxSatfat = "";
    $scope.maxTransfat = "";
    $scope.maxChol = "";

		$scope.search = function ($event) {
      var url = 'http://api.yummly.com/v1/api/recipes?_app_id=' 
              + app_id
              + '&_app_key=' 
              + app_key
              + '&q='
              + $scope.searchTerm
              + "&nutrition.ENERC_KCAL.min="
              + $scope.minKCal
              + "&nutrition.ENERC_KCAL.max="
              + $scope.maxKCal
              + "&nutrition.PROCNT.min="
              + $scope.minProtein
              + "&nutrition.CHOCDF.min="
              + $scope.minCHO
              + "&nutrition.FIBTG.min="
              + $scope.minFiber
              // + "&nutrition.K.min="
              // + $scope.minK
              + "&nutrition.CA.min="
              + $scope.minCa
              // + "&nutrition.FE.min="
              // + $scope.minFe
              + "&nutrition.SUGAR.max="
              + $scope.maxSugar
              // + "&nutrition.NA.max="
              // + $scope.maxNa
              + "&nutrition.FASAT.max="
              + $scope.maxSatfat
              + "&nutrition.FATRN.max="
              + $scope.maxTransfat
              + "&nutrition.CHOLE.max="
              + $scope.maxChol
              + "&maxResult=30&start=1"
              + '&callback=JSON_CALLBACK';
			
			$http.jsonp(url)
        .success(function(data) {
          $scope.results = data;
        })
        .error(function(error) {
        });
		};
  });

  //make new AJAX call on click of specific recipe

  app.controller('GetRecipeController', function ($scope, $http) {
    $scope.get = function($event){
      var url = 'http://api.yummly.com/v1/api/recipe/' 
              + result.id
              + '?_app_id=' 
              + app_id
              + '&_app_key='
              + app_key;

      $http.jsonp(url)
        .success(function(data) {
          console.log(recipeID);
        })
        .error(function(error) {
        }); 
    }
  });
})();

