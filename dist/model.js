"use strict";var _vueApiQuery=require("vue-api-query");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var _default=function(a){function b(){return _classCallCheck(this,b),c.apply(this,arguments)}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"_create_from",value:function _create_from(){return Object.create(this._prototype())}},{key:"_prototype",value:function _prototype(){return Object.getPrototypeOf(this)}},{key:"clone",value:function clone(){return Object.assign(this._create_from(),this)}},{key:"blob",value:function blob(a){var b=a.url,c=a.data;return this.request({requestType:"blob",method:"get",url:b,data:c})}},{key:"excel",value:function excel(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"excel",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=this.fullURL().concat("/".concat(a));return this.blob({url:c,data:b})}},{key:"file",value:function file(a,b){return function(c){var d=document.createElement("a"),e=URL.createObjectURL(c.data);d.href=e,d.download=a.concat(".").concat(b),d.click()}}},{key:"formData",value:function(){for(var a=this,b=new FormData,c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return d.forEach(function(c){b.append(c,a.getProperty(c))}),b}},{key:"fullURL",value:function fullURL(){return[this.baseURL(),this.resource(),this.primaryValue()].join("/")}},{key:"getProperty",value:function getProperty(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(a){return a};return c(a.split(".").reduce(this.reduceHasProperty,this)||b)}},{key:"hasOne",value:function hasOne(a){return this.setPrimaryKey("".concat(new a().resource()))}},{key:"on",value:function on(a,b){new EventSource(this.fullURL().concat(".json")).addEventListener(a,b)}},{key:"patch",value:function patch(){return this.request({method:"patch",url:this.fullURL(),data:this.toData()})}},{key:"pdf",value:function pdf(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"pdf";return this.request({responseType:"blob",method:"GET",url:this.fullURL().concat("/").concat(a)})}},{key:"primaryValue",value:function primaryValue(){return this[this.primaryKey()]}},{key:"reduce",value:function reduce(){for(var a=this.clone(),b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];var e=[].concat(c);return Object.keys(a).forEach(function(b){e.some(function(a){return a===b})||delete a[b]}),a}},{key:"reduceHasProperty",value:function reduceHasProperty(a,b){return"object"===_typeof(a)&&null!==a?a[b]:void 0}},{key:"replace",value:function replace(a){return this.$http.request({method:"patch",url:this._fromResource,data:a})}},{key:"request",value:function request(a){return this.$http.request(a)}},{key:"toCreate",value:function toCreate(){return this.reduce([])}},{key:"toData",value:function toData(){return JSON.parse(this.toJSONData())}},{key:"toFormData",value:function toFormData(){for(var a=this,b=new FormData,c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return d.forEach(function(c){b.append(c,a.getProperty(c))}),b}},{key:"toJSONData",value:function toJSONData(){return JSON.stringify(_objectSpread({},this))}},{key:"toUpdate",value:function toUpdate(){return this.reduce([])}},{key:"transfer",value:function transfer(a){return this.request({url:this._fromResource,method:"post",headers:{"Content-Type":"multipart/form-data"},data:a})}}]),b}(_vueApiQuery.Model);exports["default"]=_default;