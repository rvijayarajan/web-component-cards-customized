angular.module('wcCardsCustomizedTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cards-customized.html',
    "<div class=\"card\">\r" +
    "\n" +
    "	<div class=\"card-header\" ng-if=\"$ctrl.config.headerText\">\r" +
    "\n" +
    "		<div class=\"justify-content-between d-flex\">\r" +
    "\n" +
    "			<div>\r" +
    "\n" +
    "				{{$ctrl.config.headerText}}\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div>\r" +
    "\n" +
    "				<i class=\"ion-md-refresh icon\" style=\"cursor: pointer;\" ng-if=\"$ctrl.config.refresh\" ng-click=\"$ctrl.refresh()\"></i>\r" +
    "\n" +
    "			</div>	\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "  	<div class=\"card-body\" style=\"max-height: 350px; overflow-y: scroll;\">\r" +
    "\n" +
    "	  	<ng-transclude></ng-transclude>\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "  	<div class=\"card-footer text-muted\" ng-if=\"$ctrl.config.footerText\">\r" +
    "\n" +
    "    	{{$ctrl.config.footerText}}\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcCardsCustomized",["wcCardsCustomizedTemplates"]);

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
