"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Service=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"_create_from",value:function _create_from(){return Object.create(this._prototype())}},{key:"_prototype",value:function _prototype(){return Object.getPrototypeOf(this)}},{key:"clone",value:function clone(){return Object.assign(this._create_from(),this)}},{key:"create",value:function create(a){return a.toCreate().save()}},{key:"delete",value:function _delete(a){return a["delete"]()}},{key:"model",value:function model(){return null}},{key:"parametrize",value:function parametrize(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return{limit:a.limit,page:a.page,sort:a.sort,filter:a.filter}}},{key:"fetcher",value:function fetcher(a){var b=this;return function(c){return a.params(b.parametrize(c)).get()}}},{key:"shape",value:function shape(a){return this.model().from(a)}},{key:"toList",value:function toList(){var a=this;return function(b){return a.model().params(a.parametrize(b)).get()}}},{key:"update",value:function update(a){return a.toUpdate().save()}}]),a}();exports["default"]=Service,Service.appends=[],Service.includes=[];