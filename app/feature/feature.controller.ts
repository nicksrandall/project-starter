class FeatureCtrl {
  bindMe: string;
  constructor() {
    this.bindMe = 'Hello World';
  }
}

module.exports = function (ngModule) {
  ngModule.controller('FeatureCtrl', FeatureCtrl);
};