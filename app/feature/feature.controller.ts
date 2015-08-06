/// <reference path="../../typings/tsd.d.ts" />

class FeatureCtrl {
  bindMe: string;
  constructor() {
    this.bindMe = 'Hello World';
  }
}

export = function (ngModule: ng.IModule) {
  ngModule.controller('FeatureCtrl', FeatureCtrl);
};