module.exports = function (angular) {
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