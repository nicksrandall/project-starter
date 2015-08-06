class FeatureCtrl {
  bindMe: string;
  constructor() {
    this.bindMe = 'Hello World';
  }
}

export = function (ngModule) {
  ngModule.controller('FeatureCtrl', FeatureCtrl);
};