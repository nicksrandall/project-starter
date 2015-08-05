/// <reference path="lodash/lodash.d.ts" />
/// <reference path="angularjs/angular.d.ts" />

/**
 * Type declarations for Webpack runtime.
 */

interface WebpackRequireEnsureCallback {
    (req: WebpackRequire): void
}

interface WebpackRequire {
    (id: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure(ids: string[], callback: WebpackRequireEnsureCallback, chunkName?: string): void;
}

declare var require: WebpackRequire;

interface NodeModule {
    exports: any;
}

declare var module: NodeModule;