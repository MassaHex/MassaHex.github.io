define("components/w69b-es6/pausable-timer.js",["exports"],function(t){"use strict";function e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function t(e,i,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,n)}if("value"in r)return r.value;var o=r.get;if(void 0!==o)return o.call(n)},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){n(this,t),this.reset()}return s(t,[{key:"_now",value:function(){return Date.now()/1e3}},{key:"start",value:function(){this.reset(),this._firstTimestamp=this._now()}},{key:"reset",value:function(){this._firstTimestamp=-1,this._pausedAtTimestamp=-1,this._offset=0}},{key:"pause",value:function(){this.paused||(this._pausedAtTimestamp=this._now())}},{key:"resume",value:function(){if(!this.paused)throw new Error;this._offset-=this._now()-this._pausedAtTimestamp,this._pausedAtTimestamp=-1}},{key:"time",get:function(){return this.started?this.paused?this._pausedAtTimestamp-this._firstTimestamp+this._offset:this._now()-this._firstTimestamp+this._offset:0}},{key:"started",get:function(){return this._firstTimestamp>=0}},{key:"paused",get:function(){return this._pausedAtTimestamp>=0}}]),t}(),a=function(t){function o(t,i){n(this,o);var r=e(this,Object.getPrototypeOf(o).call(this));return r._interval=i,r._listener=t,r}return i(o,t),s(o,[{key:"_fireChange",value:function(){this._listener&&this._listener(this.time)}},{key:"_startInterval",value:function(){this._listener&&this._interval&&(this._intervalId=setInterval(this._fireChange.bind(this),this._interval))}},{key:"_stopInterval",value:function(){this._intervalId&&clearInterval(this._intervalId),this._intervalId=0,this._fireChange()}},{key:"reset",value:function(){r(Object.getPrototypeOf(o.prototype),"reset",this).call(this),this._stopInterval()}},{key:"start",value:function(){r(Object.getPrototypeOf(o.prototype),"start",this).call(this),this._startInterval()}},{key:"pause",value:function(){r(Object.getPrototypeOf(o.prototype),"pause",this).call(this),this._stopInterval()}},{key:"resume",value:function(){r(Object.getPrototypeOf(o.prototype),"resume",this).call(this),this._startInterval()}}]),o}(o);t.default=o,t.PausableTriggeringTimer=a,t.PausableTimer=o});
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-57.js