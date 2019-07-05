(function () {

 	var app = angular.module("wcCardsCustomized",[]);

	app.component("wcCardsCustomized", {
		templateUrl: "cards-customized.html",
		bindings: {
			config: "<cardsConfig",
			onRefresh: "&"
		},
		transclude: true,
		controller: "CardsCustomizedController"
	});

	app.controller("CardsCustomizedController", CardsCustomizedControllerFn);

	CardsCustomizedControllerFn.$inject = ["$scope"];

	function CardsCustomizedControllerFn($scope) {

		var vm = $scope.$ctrl;
		
		vm.refresh = function() {
			if(angular.isFunction(vm.config.refreshFn)) {
				vm.config.refreshFn();
			}
		};
	}

})();
