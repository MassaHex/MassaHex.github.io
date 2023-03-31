!function(){"use strict";Polymer.IronOverlayBehaviorImpl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},alwaysOnTop:{type:Boolean},_manager:{type:Object,value:Polymer.IronOverlayManager},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Polymer.dom(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Polymer.IronFocusablesHelper.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__raf=null,this.__restoreFocusNode=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Polymer.dom(this).observeNodes(this._onNodesChange)},detached:function(){Polymer.dom(this).unobserveNodes(this._observer),this._observer=null,this.__raf&&(window.cancelAnimationFrame(this.__raf),this.__raf=null),this._manager.removeOverlay(this)},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){var t=this.fire("iron-overlay-canceled",e,{cancelable:!0});t.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__onNextAnimationFrame(this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{this._focusNode.blur(),this._focusedChild=null,this.restoreFocusOnClose&&this.__restoreFocusNode&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null;var e=this._manager.currentOverlay();e&&this!==e&&e._applyFocus()}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=Polymer.dom(e).path;t.indexOf(this)===-1?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,s=t?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===s)o=!0;else{var n=this._manager.deepActiveElement;o=n===i||n===this}o&&(e.preventDefault(),this._focusedChild=s,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__onNextAnimationFrame(this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){if(!this.__firstFocusableNode||!this.__lastFocusableNode){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]}},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__onNextAnimationFrame:function(e){this.__raf&&window.cancelAnimationFrame(this.__raf);var t=this;this.__raf=window.requestAnimationFrame(function(){t.__raf=null,e.call(t)})}},Polymer.IronOverlayBehavior=[Polymer.IronFitBehavior,Polymer.IronResizableBehavior,Polymer.IronOverlayBehaviorImpl]}();
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-25.js
