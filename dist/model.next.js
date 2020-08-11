"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Model=function(){function a(b){_classCallCheck(this,a),Object.assign.apply(Object,[this].concat(_toConsumableArray(b)))}return _createClass(a,[{key:"_create_from",value:function _create_from(){return Object.create(this._prototype())}},{key:"_prototype",value:function _prototype(){return Object.getPrototypeOf(this)}},{key:"attach",value:function attach(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.request({method:"post",url:this.fullUrl(),data:a})}},{key:"baseUrl",value:function baseUrl(){return"http://localhost/"}},{key:"blob",value:function blob(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.request({responseType:"blob",method:"get",url:this.fullUrl(),data:a})}},{key:"clone",value:function clone(){return Object.assign(this._create_from(),this)}},{key:"delete",value:function _delete(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.request({method:"delete",url:this.fullUrl(),data:a})}},{key:"form",value:function form(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],c=new FormData;return b.forEach(function(b){c.append(b,a.prop(b))}),c}},{key:"from",value:function from(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new this(a)}},{key:"fullUrl",value:function fullUrl(){return"".concat(this.baseUrl(),"/").concat(this.resource(),"/").concat(this.identity())}},{key:"get",value:function get(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.request({method:"get",url:this.fullUrl(),data:a})}},{key:"hunt",value:function hunt(a,b){return"object"===_typeof(a)&&null!==a?a[b]:void 0}},{key:"identifier",value:function identifier(){return"id"}},{key:"identity",value:function identity(){return this.prop(this.identifier(),"")}},{key:"many",value:function many(){return""}},{key:"one",value:function one(){return""}},{key:"prop",value:function prop(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",c=a.split("."),d=c.reduce(this.hunt,this),e=d?d:b;return e}},{key:"reduce",value:function reduce(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=this.clone(),c={};return a.forEach(function(a){c[a]=""}),Object.keys(b).forEach(function(a){c[a]||delete b[a]}),b}},{key:"replace",value:function replace(){return this.request({method:"patch",url:this.fullUrl(),data:data})}},{key:"resource",value:function resource(){return""}},{key:"save",value:function save(){return this.request({method:"post",url:this.fullUrl(),data:data})}},{key:"sync",value:function sync(){return this.request({method:"put",url:this.fullUrl(),data:data})}},{key:"toCreate",value:function toCreate(){return this.reduce([])}},{key:"toUpdate",value:function toUpdate(){return this.reduce(["id"])}}]),a}();exports["default"]=Model;