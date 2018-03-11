var app = angular.module('customDirectiveApp', []);

app.controller('customDirectiveCtrl', ['$scope', function($scope){

}]);

app.directive('myInfoMsg', function(){
	return {
		template: '<strong>Welcome to custom directives</strong>'
	};
})