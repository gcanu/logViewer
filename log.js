/* global angular, Mock */

angular.module('logViewer', ['ngMaterial'])
	/**
	 * Configuration
	 */
	.config(function($mdThemingProvider) {
		$mdThemingProvider.alwaysWatchTheme(true);
		
		$mdThemingProvider.theme('ocean')
			.primaryPalette('blue')
			.accentPalette('blue-grey')
			.warnPalette('red');
			
		$mdThemingProvider.theme('sunset')
			.primaryPalette('pink')
			.accentPalette('orange')
			.warnPalette('red');
			
		$mdThemingProvider.theme('nature')
			.primaryPalette('teal')
			.accentPalette('lime')
			.warnPalette('red');
	})
	
	.controller('logController', function($scope, $http, $sce, $interval, $mdSidenav) {
		var logApp = this;
		var logMock = new Mock.logMock();
		
		// scroll is not locking by default
		$scope.lockEnabled = true;
		
		// refresh rate
		$scope.refreshRate = 10;
		
		// description des logs
		$scope.logsDescription = [
			{ title: 'XYZ', description: 'log serveur XYZ', url: null },
			{ title: 'ABC', description: 'log serveur ABC', url: null }
		];
		
		$scope.logConfiguration = angular.toJson($scope.logsDescription);
		$scope.currentLog = 0;
		$scope.logDescription = $scope.logsDescription[$scope.currentLog]; // default log
		
		
		// themes
		$scope.themes = [ 'ocean', 'sunset', 'nature' ];
		$scope.theme = $scope.themes[0];
		
		// intervalle
		$scope.interval = null;
		
		// progress
		var lastLog = null;
		$scope.progress = 0;
		
		$interval(function() {
			if(!lastLog)
				$scope.progress = 0;
			else
				$scope.progress = ((new Date()).getTime() - lastLog.getTime()) / ($scope.refreshRate * 1000) * 100;
		}, 50);
		
		/*var fnGetLogs = function() {
			$http
				.get('http://m53825:9080/LogAppender/ReadLogsProd')
				.then(
					function(response) {
						$scope.logs = response.data;
					},
					function() {
						$scope.logs = "something went wrong !";
					}
				);
		};*/
		
		var fnGetLogs = function() {
			lastLog = new Date();
			if(typeof $scope.logs !== 'string') $scope.logs = '';
			$scope.logs += logMock.getLog().replace(/\n/g, '<br/>');
			$scope.htmlLogs = $sce.trustAsHtml($scope.logs);
		};
		
		fnGetLogs();
		
		$scope.changeLog = function(n) {
			$scope.currentLog = n;
			updateLog();
		};
		
		function updateLog() {
			$scope.logDescription = $scope.logsDescription[$scope.currentLog];
			// on efface le log
			$scope.logs = "";
			// reset progress
			lastLog = null;
			
			fnGetLogs();
		}
		
		$scope.$watch('refreshRate', function(value) {
			if($scope.interval !== null)
				$interval.cancel($scope.interval);

			lastLog = new Date();
			$scope.interval = $interval(fnGetLogs, $scope.refreshRate * 1000);
		});
		
		$scope.showLeftMenu = function() {
			$mdSidenav('left').toggle();
		};
		
		$scope.validConfig = function() {
			$scope.logsDescription = angular.fromJson($scope.logConfiguration);
			updateLog();
		};
	})
	
	.directive('scrollChecker', function($interval) {
		function link(scope, element, attrs) {
			var parent = element.parent();
		
			function checkScroll() {
				// if scroll lock disabled, scroll bottom
				if(scope.lockEnabled === true)
					scrollToBottom();
			
				// check scroller existence
				var t = element.find('.to-bottom'),
					isScrollable = element.height() > parent.height() + parent.scrollTop();
			
				if(isScrollable && t.length === 0) {					
					t = $('<div class="to-bottom">Descendre</div>').appendTo(element);
					t.on('click', scrollToBottom);
				}
				else if(!isScrollable && t.length > 0) {
					t.remove();
					t.off();						
				}
			}
			
			function scrollToBottom() {
				parent.scrollTop(element.height());
			}
			
			function onParentScroll(event) {
				checkScroll();
			}
			
			parent.on('scroll', onParentScroll);
			
			// unbind all before element destruction
			element.on('$destroy', function() {
				parent.off('scroll', onParentScroll);
			});
			
			scope.$watch('logs', function(oldValue, newValue) {
				checkScroll();
			});
		}
		
		return {
			restrict: 'A',
			link: link
		};
	})
	
	.directive('logconfig', function() {
		return {
			require: 'ngModel',
			restrict: 'A',
			link: link
		};
		
		function link(scope, element, attrs, ctrl) {
			ctrl.$validators.configuration = function(modelValue, viewValue) {
				try {
					angular.fromJson(viewValue);
				}
				catch(e) {
					return false;
				}
				
				return true;
			};
		}
	})
;