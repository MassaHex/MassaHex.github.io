Polymer.IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:Number},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){if(e.target===this)this._setFocused("focus"===e.type);else if(!this.shadowRoot){var t=Polymer.dom(e).localTarget;this.isLightDescendant(t)||this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})}},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.tabIndex,this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(this.tabIndex=this._oldTabIndex)},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-13.js
