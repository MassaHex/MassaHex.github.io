Polymer.IronFormElementBehavior={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1},_parentForm:{type:Object}},attached:function(){this.fire("iron-form-element-register")},detached:function(){this._parentForm&&this._parentForm.fire("iron-form-element-unregister",{target:this})}};
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-32.js