/// <reference path="../typings/tsd.d.ts" />

var angular = require('angular');
var $ = require('jquery');
var _ = require('lodash');

// require common scss
require('./common/scss');

// main module
angular.module('project', [
  require('./feature')(angular)
  // more features go here. 
]);
