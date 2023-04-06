Polymer.IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Polymer.IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._updateItems(),this._shouldUpdateSelection||this._updateSelected(),this._addListener(this.activateEvent)},detached:function(){this._observer&&Polymer.dom(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items.indexOf(e)},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=(Number(this._valueToIndex(this.selected))-1+e)%e;this.selected=this._indexToValue(t)},selectNext:function(){var e=(Number(this._valueToIndex(this.selected))+1)%this.items.length;this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._shouldUpdateSelection&&this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Polymer.dom(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this._shouldUpdateSelection&&(this.selected=this._indexToValue(this.indexOf(this.selectedItem)))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){this._selection.select(this._valueToItem(this.selected)),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){var t=e[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)];return void 0!=t?t:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Polymer.dom(e).observeNodes(function(e){this._updateItems(),this._shouldUpdateSelection&&this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var s=i.indexOf(t);if(s>=0){var n=this._indexToValue(s);return void this._itemActivate(n,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};
//# sourceURL=https://www.cam-recorder.com/elements/wb-cam-app.32cca2d4.html-8.js