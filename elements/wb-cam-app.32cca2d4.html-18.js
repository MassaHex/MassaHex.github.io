Polymer({is:"paper-button",behaviors:[Polymer.PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this):this._setElevation(0)}});
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-18.js
