/// <reference path="lodash/lodash.d.ts" />
/// <reference path="angularjs/angular.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="chai/chai.d.ts" />
/// <reference path="angularjs/angular-mocks.d.ts" />

interface WebpackRequireEnsureCallback {
    (req: WebpackRequire): void
}

interface WebpackRequire {
    (id: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure(ids: string[], callback: WebpackRequireEnsureCallback, chunkName?: string): void;
}

declare var require: WebpackRequire;