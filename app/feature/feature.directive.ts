/// <reference path="../../typings/tsd.d.ts" />

interface FeatureNameScope extends ng.IScope {
  bindMe: string;
}

export = function (ngModule: ng.IModule) {
  ngModule.directive('featureName', function ($timeout:ng.ITimeoutService) {
    return {
      restrict: 'EA',
      template: require('./feature.template.html'),
      link: function(scope:FeatureNameScope, element:JQuery, attrs:ng.IAttributes) {
        // link logic
        scope.bindMe = 'hello world';
      }
    };
  });
};