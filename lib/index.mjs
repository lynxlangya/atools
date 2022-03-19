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

var removeHTMLTag = function removeHTMLTag(str) {
  return str.replace(/<[^>]+>/g, '');
};

var average = function average(numbers) {
  return numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0) / numbers.length;
};

export { average, clearCookie, copyToClipboard, getCookie, getFromClipboard, getTypeOf, is, isBrowser, removeHTMLTag, throttle, wait };
//# sourceMappingURL=index.mjs.map
