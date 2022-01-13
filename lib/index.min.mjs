var n=function(n){return Object.prototype.toString.call(n).match(/\[object (.*)\]/)[1]},t=function(t){return"Array"===n(t)},r=function(t){return"AsyncFunction"===n(t)},e=function(t){return"Boolean"===n(t)},o=function(t){return"Date"===n(t)},u=function(t){return"Error"===n(t)},i=function(t){return"Function"===n(t)},c=function(t){return"isHTMLDocument"===n(t)},f=function(t){return"Null"===n(t)},a=function(t){return"Number"===n(t)},l=function(t){return"Object"===n(t)},s=function(t){return"RegExp"===n(t)},p=function(t){return"String"===n(t)},b=function(t){return"Symbol"===n(t)},y=function(t){return"Undefined"===n(t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function h(n,t,r,e){return new(r||(r=Promise))((function(o,u){function i(n){try{f(e.next(n))}catch(n){u(n)}}function c(n){try{f(e.throw(n))}catch(n){u(n)}}function f(n){var t;n.done?o(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,c)}f((e=e.apply(n,t||[])).next())}))}function v(n,t){var r,e,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,e=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(n,i)}catch(n){u=[6,n],e=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var d=function(n){return h(void 0,void 0,void 0,(function(){return v(this,(function(t){return[2,new Promise((function(t){return setTimeout(t,n)}))]}))}))};export{n as getTypeOf,t as isArray,r as isAsyncFunction,e as isBoolean,o as isDate,u as isError,i as isFunction,c as isHTMLDocument,f as isNull,a as isNumber,l as isObject,s as isRegExp,p as isString,b as isSymbol,y as isUndefined,d as wait};
//# sourceMappingURL=index.min.mjs.map
