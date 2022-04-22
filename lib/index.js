(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.atools = {}));
})(this, (function (exports) { 'use strict';

    var getTypeOf = function getTypeOf(param) {
      var type = Object.prototype.toString.call(param).slice(8, -1);
      return type.toLowerCase();
    };

    var is = function is(value, type) {
      return getTypeOf(value) === type.toLowerCase();
    };

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

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var wait = function wait(milliseconds) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, new Promise(function (resolve) {
            return setTimeout(resolve, milliseconds);
          })];
        });
      });
    };

    var copyToClipboard = function copyToClipboard(text) {
      return new Promise(function (resolve, reject) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.queryCommandValue('copy');
          resolve();
        } catch (err) {
          reject(err);
        }

        document.body.removeChild(textArea);
      });
    };

    var getFromClipboard = function getFromClipboard() {
      return new Promise(function (resolve, reject) {
        navigator.clipboard.readText().then(function (text) {
          resolve(text);
        })["catch"](function (err) {
          reject(err);
        });
      });
    };

    var throttle = function throttle(fn, ms) {
      if (ms === void 0) {
        ms = 1000;
      }

      var isRunning = false;
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (isRunning) return;
        isRunning = true;
        setTimeout(function () {
          fn.apply(void 0, args);
          isRunning = false;
        }, ms);
      };
    };

    var removeHTMLTag = function removeHTMLTag(str) {
      return str.replace(/<[^>]+>/g, '');
    };

    function _typeof(obj) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object';

    var getCookie = function getCookie(name) {
      if (!isBrowser) throw new Error("Non-browser environment, unavailable 'getCookie'");
      if (!document.cookie) throw new Error('No Cookie Found');

      if (name) {
        var reg = new RegExp("(^| )".concat(name, "=([^;]*)(;|$)"));
        var arr = document.cookie.match(reg);
        return arr ? arr[2] : undefined;
      }

      return document.cookie.split(';');
    };

    var clearCookie = function clearCookie() {
      if (!isBrowser) throw new Error("Non-browser environment, unavailable 'cleanCookies'");
      if (!document.cookie) throw new Error('No Cookie Found');

      for (var i = 0; i < getCookie().length; i++) {
        var element = getCookie()[i];
        document.cookie = element.replace(/^ +/, '').replace(element.match(/=(\S*)/)[1], "");
      }
    };

    var getBaseUrl = function getBaseUrl(url) {
      return url.includes('?') ? url.split('?')[0] : url;
    };

    var getUrlParams = function getUrlParams(url) {
      var params = {};
      var query = url.split('?')[1];
      if (!query) return params;
      var queryArr = query.split('&');
      queryArr.forEach(function (item) {
        var _a = item.split('='),
            key = _a[0],
            value = _a[1];

        if (params[key]) {
          if (Array.isArray(params[key])) {
            params[key].push(value);
          } else {
            params[key] = [params[key], value];
          }
        } else {
          params[key] = value;
        }
      });
      return params;
    };

    var goToTop = function goToTop() {
      var c = document.documentElement.scrollTop || document.body.scrollTop;

      if (c > 0) {
        window.requestAnimationFrame(goToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

    var average = function average(numbers) {
      return numbers.reduce(function (acc, curr) {
        return acc + curr;
      }, 0) / numbers.length;
    };

    var sum = function sum(numbers) {
      return numbers.reduce(function (acc, curr) {
        return acc + curr;
      }, 0);
    };

    var diffCount = function diffCount(a, b) {
      return a > b ? a - b : b - a;
    };

    var isMobile = function isMobile(str) {
      var reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
      return reg.test(str);
    };

    var isRegexWith = function isRegexWith(regex, str) {
      return regex.test(str);
    };

    var isEmail = function isEmail(str) {
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(str);
    };

    var isUrl = function isUrl(str) {
      var reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
      return reg.test(str);
    };

    var isChinese = function isChinese(str) {
      var reg = /^[\u4e00-\u9fa5]+$/;
      return reg.test(str);
    };

    var isIdCard = function isIdCard(str, type) {
      if (type === void 0) {
        type = 0;
      }

      var reg1 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;
      var reg2 = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
      var reg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;

      switch (type) {
        case 1:
          return reg1.test(str);

        case 2:
          return reg2.test(str);

        default:
          return reg.test(str);
      }
    };

    function diffDays(date1, date2) {
      var time1 = date1.getTime();
      var time2 = date2.getTime();
      var diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    function formatSeconds(seconds, format) {
      if (!seconds && !is(seconds, 'number')) return '00:00';
      var hh = Math.floor(seconds / 3600);
      var mm = Math.floor(seconds % 3600 / 60);
      var ss = seconds % 60;

      switch (format) {
        case 'hh:mm:ss':
          return "".concat(hh < 10 ? '0' + hh : hh, ":").concat(mm < 10 ? '0' + mm : mm, ":").concat(ss < 10 ? '0' + ss : ss);

        case 'mm:ss':
          if (hh) return "".concat(hh * 60 + mm, ":").concat(ss < 10 ? '0' + ss : ss);
          return "".concat(mm, ":").concat(ss < 10 ? '0' + ss : ss);

        default:
          if (hh) return "".concat(hh * 60 + mm, ":").concat(ss < 10 ? '0' + ss : ss);
          return "".concat(mm < 10 ? '0' + mm : mm, ":").concat(ss < 10 ? '0' + ss : ss);
      }
    }

    var randomInt = function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var randomIP = function randomIP(type) {
      if (type === void 0) {
        type = 0;
      }

      var ipv4 = randomInt(0, 255) + '.' + randomInt(0, 255) + '.' + randomInt(0, 255) + '.' + randomInt(0, 255);
      var ipv6 = randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535) + ':' + randomInt(0, 65535);
      return type ? ipv6 : ipv4;
    };

    var randomColor = function randomColor(type) {
      if (type === void 0) {
        type = 0;
      }

      var rgb = "rgb(".concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ")");
      var rgba = "rgba(".concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ", ").concat(randomInt(0, 255), ", ").concat((randomInt(0, 255) / 255.0).toFixed(2), ")");
      var hsl = "hsl(".concat(randomInt(0, 360), ", ").concat(randomInt(0, 100), "%, ").concat(randomInt(0, 100), "%)");
      var hsla = "hsla(".concat(randomInt(0, 360), ", ").concat(randomInt(0, 100), "%, ").concat(randomInt(0, 100), "%, ").concat((randomInt(0, 100) / 255.0).toFixed(1), ")");
      var hex = "#".concat(randomInt(0, 255).toString(16)).concat(randomInt(0, 255).toString(16)).concat(randomInt(0, 255).toString(16));
      return type ? type === 1 ? rgba : type === 2 ? hsl : type === 3 ? hsla : hex : rgb;
    };

    exports.average = average;
    exports.clearCookie = clearCookie;
    exports.copyToClipboard = copyToClipboard;
    exports.diffCount = diffCount;
    exports.diffDays = diffDays;
    exports.formatSeconds = formatSeconds;
    exports.getBaseUrl = getBaseUrl;
    exports.getCookie = getCookie;
    exports.getFromClipboard = getFromClipboard;
    exports.getTypeOf = getTypeOf;
    exports.getUrlParams = getUrlParams;
    exports.goToTop = goToTop;
    exports.is = is;
    exports.isBrowser = isBrowser;
    exports.isChinese = isChinese;
    exports.isEmail = isEmail;
    exports.isIdCard = isIdCard;
    exports.isMobile = isMobile;
    exports.isRegexWith = isRegexWith;
    exports.isUrl = isUrl;
    exports.randomColor = randomColor;
    exports.randomIP = randomIP;
    exports.randomInt = randomInt;
    exports.removeHTMLTag = removeHTMLTag;
    exports.sum = sum;
    exports.throttle = throttle;
    exports.wait = wait;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
