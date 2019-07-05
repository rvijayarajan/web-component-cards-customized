(function () {

 	var app = angular.module("wcCardsCustomized",["wcCardsSimple"]);

	app.component("wcCardsCustomized", {
		templateUrl: "cards-customized.html",
		bindings: {
			config: "<cardsConfig"
		},
		controller: "CardsCustomizedController"
	});

	app.controller("CardsCustomizedController", CardsCustomizedControllerFn);

	CardsCustomizedControllerFn.$inject = ["$scope"];

	function CardsCustomizedControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
