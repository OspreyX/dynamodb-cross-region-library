/*
 * Copyright 2014 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
angular.module('DynamoDBCrossRegionReplicationDashboard')
	.directive('navigation', function($window, $log, $rootScope) {
		return {
			restrict: 'EA',
			scope: {
				active: '=',
				groups: '=',
				activeGroup: '=',
				tables: '=',
				activeTable: '='
	     	},
			templateUrl: 'views/partials/navigation.html',
			link: function(scope, element, attrs) {
				$log.debug(scope);
				$('#' + scope.active).addClass('active');
			}
		}
	});