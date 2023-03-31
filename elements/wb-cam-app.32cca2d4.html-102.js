define("elements/wb-video-review.js",[],function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),i=function(){function i(){e(this,i)}return t(i,[{key:"beforeRegister",value:function(){this.is="wb-video-review",this.properties={file:{type:Object,observer:"_fileChanged"}}}},{key:"ready",value:function(){this._updateVideoState()}},{key:"share",value:function(){this.$.video.pause(),this.$.shareYoutubeDialog.open()}},{key:"download",value:function(){var e=document.createElement("a");e.setAttribute("href",this._url),e.setAttribute("download","video.webm"),e.dispatchEvent(new MouseEvent("click"))}},{key:"delete",value:function(){this.fire("wb-review-discard"),this.file=null}},{key:"_updateVideoState",value:function(){this.videoEnded=this.$.video.ended||this.$.video.paused}},{key:"_isChrome",value:function(){return!!window.chrome}},{key:"_replay",value:function(){var e=this.$.video;e.currentTime=0,e.pause(),e.play()}},{key:"_fileChanged",value:function(e){this._url&&URL.revokeObjectURL(this._url),e?(this._url=URL.createObjectURL(e),this.$.video.src=this._url,this.$.video.play(),this.$.video.paused&&this._updateVideoState()):(this.$.video.pause(),this.$.video.src="")}}]),i}();Polymer(i)});
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-102.js
