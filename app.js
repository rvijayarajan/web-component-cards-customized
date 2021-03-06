(function () {

 	var app = angular.module("main",['wcCardsCustomized']);

	app.component("app", {
		templateUrl: 'app.html',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		$scope.config = {
			headerText: 'Header Text',
			refresh: true,
			refreshFn: refresh,
			rowClickFn: rowClick,
			// topImage: '',
			// title: 'Card title',
			// subTitle: 'Card subtitle',
			// bodyText: 'This is some text within a card body.',
			// cardLinks: [{
			// 	text: 'Card link',
			// 	href: '#'
			// },{
			// 	text: 'Another link',
			// 	href: '#'
			// }],
			cardDetails: [{
				text: 'Cras justo odio'
			},{
				text: 'Dapibus ac facilisis in'
			},{
				text: 'Vestibulum at eros'
			},{
				text: 'Cras justo odio'
			},{
				text: 'Dapibus ac facilisis in'
			},{
				text: 'Vestibulum at eros'
			},{
				text: 'Cras justo odio'
			},{
				text: 'Dapibus ac facilisis in'
			},{
				text: 'Vestibulum at eros'
			}],
			footerText: 'Footer Text',
			bottomImage: ''
		};

		function refresh() {
			alert("Card Refreshed");
		}

		function rowClick(rowDetail) {
			alert("Row Clicked "+rowDetail.text);
		}
		
	}

})();
