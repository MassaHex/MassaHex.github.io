define("components/w69b-es6/promise-tool.js",["exports","./q.js"],function(e,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(r),o={};o.wrapChromeError=function(e,r){return function(){var n=Array.prototype.slice.call(arguments,0),o=t.default.defer();return n.push(function(e){chrome.runtime.lastError?o.reject(chrome.runtime.lastError):o.resolve(e)}),e.apply(r,n),o.promise}},o.wrapCallbacks=function(e,r){return function(){var n=Array.prototype.slice.call(arguments,0),o=t.default.defer();return n.push(o.resolve.bind(o)),n.push(o.reject.bind(o)),e.apply(r,n),o.promise}},o.serializer=function(){var e=null;return function(r){var n=t.default.defer();return(e||t.default.when()).finally(function(){var e=r.call();n.resolve(e)}),e=n.promise,e.finally(function(){e=null}),n.promise}},o.withTimeout=function(e,r,n){n||(n=angular.noop);var o=t.default.defer(),l=$timeout(function(){var e=n();angular.isDefined(e)?o.resolve(e):o.reject("timeout"),o=null},r),u=e(),i=o.promise;return u.finally(function(){$timeout.cancel(l),l=null}),u.then(function(){o&&o.resolve.apply(o,arguments)},function(){o&&o.reject.apply(o,arguments)}),i},e.default=o});
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-64.js
