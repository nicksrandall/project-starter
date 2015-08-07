module.exports = function (angular) {
  'use strict';
  require('./_feature.scss');

  var moduleName = 'project.submodule';
  var ngModule = angular.module(moduleName, [
    // optionally inject dependencies for this feature.
  ]);

  // load module components
  require('./feature.controller.ts')(ngModule);
  require('./feature.directive.ts')(ngModule);

  return moduleName;
};
