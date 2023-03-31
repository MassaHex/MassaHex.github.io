!function(){"use strict";Polymer({is:"iron-dropdown",behaviors:[Polymer.IronControlState,Polymer.IronA11yKeysBehavior,Polymer.IronOverlayBehavior,Polymer.NeonAnimationRunnerBehavior],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1},_boundOnCaptureScroll:{type:Function,value:function(){return this._onCaptureScroll.bind(this)}}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){return Polymer.dom(this.$.content).getDistributedNodes()[0]},get _focusTarget(){return this.focusTarget||this.containedElement},ready:function(){this._scrollTop=0,this._scrollLeft=0,this._refitOnScrollRAF=null},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation(),document.removeEventListener("scroll",this._boundOnCaptureScroll),Polymer.IronDropdownScrollManager.removeScrollLock(this)},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),this._saveScrollPosition(),this.opened?(document.addEventListener("scroll",this._boundOnCaptureScroll),!this.allowOutsideScroll&&Polymer.IronDropdownScrollManager.pushScrollLock(this)):(document.removeEventListener("scroll",this._boundOnCaptureScroll),Polymer.IronDropdownScrollManager.removeScrollLock(this)),Polymer.IronOverlayBehaviorImpl._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):Polymer.IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):Polymer.IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_onCaptureScroll:function(){this.allowOutsideScroll?(this._refitOnScrollRAF&&window.cancelAnimationFrame(this._refitOnScrollRAF),this._refitOnScrollRAF=window.requestAnimationFrame(this.refit.bind(this))):this._restoreScrollPosition()},_saveScrollPosition:function(){document.scrollingElement?(this._scrollTop=document.scrollingElement.scrollTop,this._scrollLeft=document.scrollingElement.scrollLeft):(this._scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this._scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},_restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this._scrollTop,document.scrollingElement.scrollLeft=this._scrollLeft):(document.documentElement.scrollTop=this._scrollTop,document.documentElement.scrollLeft=this._scrollLeft,document.body.scrollTop=this._scrollTop,document.body.scrollLeft=this._scrollLeft)},_updateAnimationConfig:function(){for(var o=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),n=0;n<t.length;n++)t[n].node=o;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_applyFocus:function(){var o=this.focusTarget||this.containedElement;o&&this.opened&&!this.noAutoFocus?o.focus():Polymer.IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}})}();
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-76.js
