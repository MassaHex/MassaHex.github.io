Polymer.IronSelection=function(e){this.selection=[],this.selectCallback=e},Polymer.IronSelection.prototype={get:function(){return this.multi?this.selection.slice():this.selection[0]},clear:function(e){this.selection.slice().forEach(function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)},this)},isSelected:function(e){return this.selection.indexOf(e)>=0},setItemSelected:function(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}},select:function(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))},toggle:function(e){this.setItemSelected(e,!this.isSelected(e))}};
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-7.js