/// <reference path="../../typings/tsd.d.ts" />

var expect = chai.expect;
var module = angular.mock.module;

describe('feature', function () {
  beforeEach(module('project'));

  it('angular to exist', function () {
    chai.expect(angular).to.exist;
  });
  
  it('should pass this test', function () {
    chai.expect(true).to.be.true;
  });
});