(globalThis["rspackChunkqianchuan_hot_insight"] = globalThis["rspackChunkqianchuan_hot_insight"] || []).push([["page"], {
"./node_modules/.pnpm/@rspack+core@2.1.10_@swc+helpers@0.5.23/node_modules/@rspack/core/hot/lazy-compilation-web.js?http%3A%2F%2F127.0.0.1%3A8080%2F_rspack%2Flazy%2Ftrigger"(__webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
var __resourceQuery = "?http%3A%2F%2F127.0.0.1%3A8080%2F_rspack%2Flazy%2Ftrigger";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  activate: () => (activate)
});
if (typeof XMLHttpRequest === 'undefined') {
  throw new Error(
    "Environment doesn't support lazy compilation (requires XMLHttpRequest)",
  );
}

var urlBase = decodeURIComponent(__resourceQuery.slice(1));
var compiling = new Set();
var errorHandlers = new Set();

/** @type {XMLHttpRequest | undefined} */
var pendingXhr;
/** @type {boolean} */
var hasPendingUpdate = false;

var sendRequest = function sendRequest() {
  if (compiling.size === 0) {
    hasPendingUpdate = false;
    return;
  }

  var modules = Array.from(compiling);
  var data = modules.join('\n');

  var xhr = new XMLHttpRequest();
  pendingXhr = xhr;
  xhr.open('POST', urlBase, true);
  // text/plain Content-Type is simple request header
  xhr.setRequestHeader('Content-Type', 'text/plain');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      pendingXhr = undefined;
      if (xhr.status < 200 || xhr.status >= 300) {
        var error = new Error(
          'Problem communicating active modules to the server: HTTP ' +
            xhr.status,
        );
        errorHandlers.forEach(function (onError) {
          onError(error);
        });
      }
      if (hasPendingUpdate) {
        hasPendingUpdate = false;
        sendRequest();
      }
    }
  };

  xhr.onerror = function () {
    pendingXhr = undefined;
    var error = new Error('Problem communicating active modules to the server');
    errorHandlers.forEach(function (onError) {
      onError(error);
    });
  };

  xhr.send(data);
};

function sendActiveRequest() {
  hasPendingUpdate = true;

  // If no request is pending, start one
  if (!pendingXhr) {
    hasPendingUpdate = false;
    sendRequest();
  }
}

/**
 * @param {{ data: string, onError: (err: Error) => void, active: boolean, module: module }} options options
 * @returns {() => void} function to destroy response
 */
const activate = function (options) {
  var data = options.data;
  var onError = options.onError;
  var active = options.active;
  errorHandlers.add(onError);

  if (!compiling.has(data)) {
    compiling.add(data);
    sendActiveRequest();
  }

  if (!active && !__webpack_module__.hot) {}

  return function () {
    errorHandlers.delete(onError);
    compiling.delete(data);
    sendActiveRequest();
  };
};


},
"./src/routes/page.tsx!lazy-compilation-proxy"(module, __unused_rspack_exports, __webpack_require__) {
var client = __webpack_require__("./node_modules/.pnpm/@rspack+core@2.1.10_@swc+helpers@0.5.23/node_modules/@rspack/core/hot/lazy-compilation-web.js?http%3A%2F%2F127.0.0.1%3A8080%2F_rspack%2Flazy%2Ftrigger");
var data = "lazy-compilation-proxy|/workspace/iris_c45bc703-ee30-4245-b102-353d435974ac/qianchuan-hot-insight/node_modules/.pnpm/@rdservices+aime-code-inspector-webpack@1.0.22_react-dom@19.2.8_react@19.2.8__react@19.2.8_supports-color@9.3.1/node_modules/@rdservices/aime-code-inspector-webpack/dist/inject-loader.js??ruleSet[1].rules[17].use[0]!builtin:react-refresh-loader!builtin:swc-loader??ruleSet[1].rules[3].oneOf[2].use[0]!/workspace/iris_c45bc703-ee30-4245-b102-353d435974ac/qianchuan-hot-insight/node_modules/.pnpm/@rdservices+aime-code-inspector-webpack@1.0.22_react-dom@19.2.8_react@19.2.8__react@19.2.8_supports-color@9.3.1/node_modules/@rdservices/aime-code-inspector-webpack/dist/loader.js??ruleSet[1].rules[16].use[0]!/workspace/iris_c45bc703-ee30-4245-b102-353d435974ac/qianchuan-hot-insight/src/routes/page.tsx";
        var resolveSelf, onError;
        module.exports = new Promise(function(resolve, reject) { resolveSelf = resolve; onError = reject; });
        if (module.hot) {
          module.hot.accept();
          if (module.hot.data && module.hot.data.resolveSelf) module.hot.data.resolveSelf(module.exports);
          module.hot.dispose(function(data) { data.resolveSelf = resolveSelf; dispose(data); });
        }
        var dispose = client.activate({ data: data, active: false, module: module, onError: onError })
      

},

}]);
//# sourceMappingURL=page.js.map