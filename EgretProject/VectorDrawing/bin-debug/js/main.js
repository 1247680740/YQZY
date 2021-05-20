

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
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
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.content = null;
        _this.role = null;
        _this.proBg = null;
        _this.progress = null;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.x = 0;
        this.y = 0;
        this.content = new eui.Group();
        this.addChild(this.content);
        this.content.width = 406;
        this.content.height = 400;
        this.content.x = (this.width - this.content.width) / 2;
        this.content.y = 324;
        this.createAnimation();
        this.createProbar();
        this.createLabelTip();
    };
    LoadingUI.prototype.createAnimation = function () {
        var txtr = RES.getRes("loading_png");
        var data = RES.getRes("loading_json");
        var macDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.role = new egret.MovieClip(macDataFactory.generateMovieClipData("loading"));
        this.content.addChild(this.role);
        this.role.play(-1);
        this.role.x = (this.content.width - this.role.width) / 2 - 20;
        this.role.y = 0;
        egret.Tween.removeTweens(this.role);
        egret.Tween.get(this.role).to({ y: -25 }, 350).call(this.ontween1, this);
    };
    LoadingUI.prototype.ontween1 = function () {
        egret.Tween.get(this.role).to({ y: 0 }, 350).call(this.ontween2, this);
    };
    LoadingUI.prototype.ontween2 = function () {
        egret.Tween.get(this.role).to({ y: -25 }, 350).call(this.ontween1, this).call(this.tweenOver, this);
    };
    LoadingUI.prototype.tweenOver = function () {
        var _this = this;
        egret.Tween.get(this.role).to({ y: 0 }, 350).call(function () {
            egret.Tween.removeTweens(_this.role);
        }, this);
    };
    LoadingUI.prototype.createProbar = function () {
        this.proBg = new eui.Image();
        this.proBg.source = RES.getRes("progress1_png");
        this.content.addChild(this.proBg);
        this.progress = new eui.Image();
        this.progress.source = RES.getRes("progress2_png");
        this.content.addChild(this.progress);
        this.proBg.x = 0;
        this.proBg.y = this.role.height + 54;
        this.progress.x = this.proBg.x + 3;
        this.progress.y = this.proBg.y + 3;
        this.progress.width = 0;
    };
    LoadingUI.prototype.createLabelTip = function () {
        this.textField = new egret.TextField();
        this.content.addChild(this.textField);
        this.textField.width = 406;
        this.textField.textColor = 0xffffff;
        this.textField.fontFamily = "lan"; //"SimHei";
        this.textField.textAlign = "center";
        this.textField.text = "正在加载中...";
        this.textField.size = 40;
        this.textField.x = (this.content.width - this.textField.width) / 2;
        this.textField.y = this.content.height - this.textField.height;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.progress.width = 400 * (current / total);
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/config/GameConfig.ts");
__webpack_require__("./src/core/model/vo/PaintVO.ts");
__webpack_require__("./src/config/GlobalData.ts");
__webpack_require__("./src/config/NoficationConfig.ts");
__webpack_require__("./src/config/ProtobufConfig.ts");
__webpack_require__("./src/core/AppFacade.ts");
__webpack_require__("./src/core/controller/ControllerPrepCommand.ts");
__webpack_require__("./src/core/controller/GameScript.ts");
__webpack_require__("./src/core/controller/ModelPrepCommand.ts");
__webpack_require__("./src/core/controller/Processor/Processor_100_1.ts");
__webpack_require__("./src/core/controller/StartupCommand.ts");
__webpack_require__("./src/core/controller/ViewPrepCommand.ts");
__webpack_require__("./src/core/model/P.ts");
__webpack_require__("./src/core/model/ResourceProxyBase.ts");
__webpack_require__("./src/core/model/proxy/GameProxy.ts");
__webpack_require__("./src/core/model/proxy/TemplateProxy.ts");
__webpack_require__("./src/core/model/vo/GameVO.ts");
__webpack_require__("./src/core/view/main/CommonButton.ts");
__webpack_require__("./src/core/view/main/CommonCheckBtn.ts");
__webpack_require__("./src/core/view/main/CommonMoveTip.ts");
__webpack_require__("./src/core/view/main/CommonSubBtn.ts");
__webpack_require__("./src/core/view/main/CommonTool.ts");
__webpack_require__("./src/core/view/main/GameCheckFLuView.ts");
__webpack_require__("./src/core/view/main/LowGradeComponent.ts");
__webpack_require__("./src/core/view/main/MainUI.ts");
__webpack_require__("./src/core/view/main/PaintBrush.ts");
__webpack_require__("./src/core/view/main/SeniorComponent.ts");
__webpack_require__("./src/core/view/main/ShapeUnit.ts");
__webpack_require__("./src/core/view/panel/BaseMediator.ts");
__webpack_require__("./src/core/view/panel/BrushInterface.ts");
__webpack_require__("./src/core/view/panel/PopUpManager.ts");
__webpack_require__("./src/core/view/panel/mediator/GameResetMediator.ts");
__webpack_require__("./src/core/view/panel/mediator/GameViewMediator.ts");
__webpack_require__("./src/core/view/panel/panel/GameResetPanel.ts");
__webpack_require__("./src/core/view/panel/panel/GameViewPanel.ts");
__webpack_require__("./src/manager/GameLayerManager.ts");
__webpack_require__("./src/manager/MainManager.ts");
__webpack_require__("./src/manager/SceneManager.ts");
__webpack_require__("./src/utils/BitmapBlink.ts");
__webpack_require__("./src/utils/EffectUtils.ts");
__webpack_require__("./src/utils/Global.ts");
__webpack_require__("./src/utils/PoolUtil.ts");
__webpack_require__("./src/utils/TipsUtils.ts");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTheme = false;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        window['gameLoading'].show();
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(egret.Event.COMPLETE, this.themeComplete, this);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());
        GameLayerManager.gameLayer().setStage(this.stage);
    };
    Main.prototype.themeComplete = function () {
        this.isTheme = true;
    };
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            if (this.isTheme) {
                this.createGameScene();
            }
            // removeLoading();
            window['gameLoading'].remove();
        }
    };
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            // setloadPro(event.itemsLoaded, event.itemsTotal);
            window['gameLoading'].setProgress(event.itemsLoaded / event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     */
    Main.prototype.createGameScene = function () {
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GAMEVIEW);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param compFunc 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param errorFunc 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, compFunc, errorFunc, thisObject) {
        function onGetRes(e) {
            compFunc.call(thisObject, e);
        }
        function onError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
                errorFunc.call(thisObject);
            }
        }
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
        RES.getResByUrl(url, onGetRes, this, RES.ResourceItem.TYPE_TEXT);
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/config/GameConfig.ts":
/***/ (function(module, exports) {

var GameConfig = window['GameConfig']; 
/**
  * 游戏配置文件
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var GameConfig;
(function (GameConfig) {
    //是否在线
    GameConfig.isOnLine = navigator.onLine;
    //全局字体颜色表--可以扩展
    GameConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GameConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    //是不是微信浏览
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (microStr == "null") {
            return false;
        }
        else if (microStr == "micromessenger") {
            return true;
        }
    }
    GameConfig.isWeiXin = isWeiXin;
    //是不是大屏
    function isBigScreen() {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }
    GameConfig.isBigScreen = isBigScreen;
    //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    function systemType() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (("" + ua.match(/windows nt/i)) == "windows nt") {
            return "windows";
        }
        else if (("" + ua.match(/iphone/i)) == "iphone") {
            return "ios";
        }
        else if (("" + ua.match(/android/i)) == "android") {
            return "android";
        }
        else if (("" + ua.match(/ipad/i)) == "ipad") {
            return "ipad";
        }
        else if (("" + ua.match(/linux/i)) == "linux") {
            return "linux";
        }
        else if (("" + ua.match(/mac/i)) == "mac") {
            return "mac";
        }
        else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
            return "ucbrower";
        }
        else {
            console.log("未知系统类型");
        }
    }
    GameConfig.systemType = systemType;
    //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    function platformType() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
            return "micromessenger";
        }
        else if (("" + ua.match(/qzone/i)) == "qzone") {
            return "qzone";
        }
        else if (("" + ua.match(/weibo/i)) == "weibo") {
            return "weibo";
        }
        else if (("" + ua.match(/qq/i)) == "qq") {
            return "qq";
        }
        else if (("" + ua.match(/renren/i)) == "renren") {
            return "renren";
        }
        else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
            return "txmicroblog";
        }
        else if (("" + ua.match(/douban/i)) == "douban") {
            return "douban";
        }
        else {
            return "other";
        }
    }
    GameConfig.platformType = platformType;
    //当前舞台
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    GameConfig.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    GameConfig.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    GameConfig.curHeight = curHeight;
})(GameConfig || (GameConfig = {}));
window["GameConfig"] = GameConfig;


/***/ }),

/***/ "./src/config/GlobalData.ts":
/***/ (function(module, exports) {

var GlobalData = window['GlobalData']; 
/**
  * 全局数据存储
  */
var GlobalData;
(function (GlobalData) {
    //游戏名称
    GlobalData.myName = "vectorDrawing";
    GlobalData.paintVO = new PaintVO();
    GlobalData.designWidth = 1920;
    GlobalData.designHeigh = 1080;
    GlobalData.stageWidth = 0;
    GlobalData.stageHeight = 0;
    GlobalData.canvasWid = 0;
    GlobalData.canvasHei = 0;
    GlobalData.canvasLeft = 62;
    GlobalData.canvasTop = 76;
    GlobalData.curPaintName = "";
})(GlobalData || (GlobalData = {}));
window["GlobalData"] = GlobalData;


/***/ }),

/***/ "./src/config/NoficationConfig.ts":
/***/ (function(module, exports) {

/**
 * 消息队列配置信息
 */
var NoficationConfig = /** @class */ (function () {
    function NoficationConfig() {
    }
    //服务器连接成功
    NoficationConfig.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    //服务器返回数据
    NoficationConfig.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    //打开主界面UI
    NoficationConfig.OPEN_MAIN = "MainNotify_OPEN_MAIN";
    //关闭主界面UI
    NoficationConfig.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
    //打开游戏界面
    NoficationConfig.OPEN_GAMEVIEW = "MainNotify_OPEN_GAMEVIEW";
    //打开重置确认面板
    NoficationConfig.OPEN_RESETVIEW = "MainNotify_OPEN_RESETVIEW";
    //关闭重置确认面板
    NoficationConfig.CLOSE_RESETVIEW = "MainNotify_CLOSE_RESETVIEW";
    //打开分段面板
    NoficationConfig.OPEN_SUBVIEW = "MainNotify_OPEN_SUBVIEW";
    //关闭分段面板
    NoficationConfig.CLOSE_SUBVIEW = "MainNotify_CLOSE_SUBVIEW";
    //关闭游戏界面
    NoficationConfig.CLOSE_GAMEVIEW = "MainNotify_CLOSE_GAMEVIEW";
    //打开荧光笔选择界面
    NoficationConfig.OPEN_FLUPAINT = "MainNotify_OPEN_FLUPAINT";
    //关闭荧光笔选择界面
    NoficationConfig.CLOSE_FLUPAINT = "MainNotify_CLOSE_FLUPAINT";
    //创建一个画笔
    NoficationConfig.CREATE_BRUSH = "FUNCTION_CREATE_BRUSH";
    //移除当前正在绘制的画笔
    NoficationConfig.REMOVED_BRUSH = "FUNCTION_REMOVED_BRUSH";
    //恢复其他画笔选中状态
    NoficationConfig.RESET_CHECKBRUSH = "FUNCTION_RESET_CHECKBRUSH";
    //撤回操作
    NoficationConfig.RECALL_BRUSH = "FUNCTION_RECALL_BRUSH";
    //重置操作
    NoficationConfig.RESET_BRUSH = "FUNCTION_RESET_BRUSH";
    //复制线段
    NoficationConfig.COPY_BRUSH = "FUNCTION_COPY_BRUSH";
    //创建拖动图形
    NoficationConfig.CREAT_MOVEBRUSH = "FUNCTION_CREAT_MOVEBRUSH";
    //打开移动提示
    NoficationConfig.OPEN_MOVETIP = "FUNCTION_OPEN_MOVETIP";
    //设置撤回按钮的点击显示状态
    NoficationConfig.SETSTATUSL_RECAL = "FUNCTION_SETSTATUSL_RECAL";
    //测试
    NoficationConfig.TEST_MESSAGE = "TEST_MESSAGE";
    return NoficationConfig;
}());
window["NoficationConfig"] = NoficationConfig;
__reflect(NoficationConfig.prototype,"NoficationConfig",[]); 


/***/ }),

/***/ "./src/config/ProtobufConfig.ts":
/***/ (function(module, exports) {

/**
 * 协议名称配置文件
 */
var ProtobufConfig = /** @class */ (function () {
    function ProtobufConfig() {
    }
    ProtobufConfig.TEMPLATE_USER_LOGIN = "template_user_login";
    return ProtobufConfig;
}());
window["ProtobufConfig"] = ProtobufConfig;
__reflect(ProtobufConfig.prototype,"ProtobufConfig",[]); 


/***/ }),

/***/ "./src/core/AppFacade.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var AppFacade = /** @class */ (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            return _super.call(this) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
        };
        AppFacade.STARTUP = "startup";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
    __reflect(AppFacade.prototype,"game.AppFacade",["puremvc.IFacade"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/ControllerPrepCommand.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 注册controller
  */
var game;
(function (game) {
    var ControllerPrepCommand = /** @class */ (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super.call(this) || this;
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            (new game.SceneManager()).register();
            (new game.MainManager()).register();
            //服务器返回command
            (new game.Processor_100_1()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype,"game.ControllerPrepCommand",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/GameScript.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var GameScript = /** @class */ (function () {
        function GameScript() {
            this._brushArr = [];
            this.xArr = [];
            this.yArr = [];
            this._curBrushName = "";
            this._isRecord = false;
            this.canMove = true;
        }
        GameScript.getInstance = function () {
            if (!this.instance) {
                this.instance = new GameScript();
            }
            return this.instance;
        };
        GameScript.prototype.initGame = function () {
            GlobalData.paintVO.initVo();
            this.initPointArr();
            this._brushArr = [];
            this._isRecord = false;
            this.canMove = true;
            GlobalData.paintVO.setStype([{ "gradeType": 1 }, { "typeNum": 0 }, { "alphauUm": 1 }, { "isCheck": false }, { "canvasW": GlobalData.canvasWid }, { "canvasH": GlobalData.canvasHei }]);
        };
        GameScript.prototype.setTouchSize = function (widNum, heiNum) {
            GlobalData.canvasWid = widNum;
            GlobalData.canvasHei = heiNum;
        };
        GameScript.prototype.onPanBegin = function (evt) {
            this._isRecord = true;
            this.resetBrushStatus();
            var vo = new SenVO();
            var pt = new egret.Point();
            pt.x = evt.stageX;
            pt.y = evt.stageY;
            vo.pt = pt;
            vo.isChild = false;
            return vo;
        };
        GameScript.prototype.onPanMove = function (evt) {
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            var paintType = Global.checkArr([3, 4, 5, 6, 8], curBrush.brushType);
            if (paintType) {
                curBrush.onPanMove(evt);
            }
            else {
                if (this._isRecord) {
                    switch (GlobalData.paintVO.typeNum) {
                        case drawType.drawSegment:
                            curBrush.onPanMove(evt);
                            break;
                        case drawType.drawLineSegment:
                            curBrush.onPanMove(evt);
                            break;
                    }
                }
            }
        };
        GameScript.prototype.onPanEnd = function (evt) {
            this._isRecord = false;
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            if (curBrush.brushType == drawType.painting) {
                curBrush.onPanEnd(evt);
            }
            else {
                switch (GlobalData.paintVO.typeNum) {
                    case drawType.drawSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.drawLineSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.drawArrow:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.lineSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.boxSelect:
                        curBrush.onPanEnd(evt);
                        break;
                }
            }
        };
        GameScript.prototype.onPanOut = function (evt) {
            this._isRecord = false;
            this.removeBox();
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.drawSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.drawLineSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.drawArrow:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.lineSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.painting:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanEnd(evt);
                    break;
            }
        };
        GameScript.prototype.onMoveChild = function (evt) {
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.subSection:
                    curBrush.onPanMove(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanMove(evt);
                    break;
                case drawType.flupaint:
                    curBrush.onPanMove(evt);
                    break;
            }
        };
        GameScript.prototype.onEndChild = function (evt) {
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.subSection:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.flupaint:
                    curBrush.onPanEnd(evt);
                    break;
            }
        };
        GameScript.prototype.recall = function () {
            var brush = this._brushArr[this._brushArr.length - 1];
            if (brush) {
                brush.destorySelf();
            }
            this.canMove = true;
            this._brushArr.pop();
            this.sendStatus();
        };
        GameScript.prototype.resetPaint = function () {
            for (var index = 0; index < this._brushArr.length; index++) {
                var brush = this._brushArr[index];
                if (brush && brush.parent) {
                    brush.destorySelf();
                }
            }
            this.initGame();
            this.sendStatus();
        };
        GameScript.prototype.removeCheckBrush = function (box) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush && brush.parent) {
                    if (brush.brushType == drawType.painting) {
                        var sp = new egret.Sprite();
                        sp.x = brush.xNum;
                        sp.y = brush.yNum;
                        sp.width = Math.abs(brush.xEndNum - brush.xNum);
                        sp.height = Math.abs(brush.yEndNum - brush.yNum);
                        var isHit = Global.hitTest(sp, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    }
                    else {
                        var isHit = Global.hitTest(brush, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    }
                }
                else {
                    brush.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
            if (box) {
                box.destorySelf();
            }
            for (var j = 0; j < this._brushArr.length; j++) {
                if (this._brushArr[j].brushType == drawType.boxSelect) {
                    this._brushArr.splice(j, 1);
                    j--;
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.removeBox = function () {
            for (var i = 0; i < this._brushArr.length; i++) {
                var box = this._brushArr[i];
                if (box.brushType == drawType.boxSelect) {
                    box.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
        };
        GameScript.prototype.removeTouchBrush = function (brushName) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var curBrush = this._brushArr[i];
                if (curBrush.brushName == brushName) {
                    if (curBrush) {
                        curBrush.destorySelf();
                    }
                    this._brushArr.splice(i, 1);
                    i = 0;
                }
            }
            for (var n = 0; n < this._brushArr.length; n++) {
                var bool = Global.checkArr([2, 3, 7], this._brushArr[n].brushType);
                if (bool) {
                    if (this._brushArr[n].brushName.length < 1 || this._brushArr[n].parentBrush == null) {
                        this._brushArr.splice(n, 1);
                        n--;
                    }
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.resetBrushStatus = function (data) {
            this.canMove = true;
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush) {
                    var bool = Global.checkArr([0, 1, 3], brush.brushType);
                    if (bool) {
                        brush.removeBrackMask();
                    }
                    if (data) {
                        if (brush.brushName.indexOf(data.brushName) == -1) {
                            brush.resetMaskLight();
                        }
                    }
                    else {
                        brush.resetMaskLight();
                    }
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.subBrush = function (subNum) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush.brushType == drawType.subSection) {
                    if (brush.parent.brushName == GlobalData.paintVO.curCheckBrush) {
                        brush.destorySelf();
                        this._brushArr.splice(i, 1);
                        i--;
                    }
                }
            }
            var curBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return;
            for (var n = 0; n < subNum - 1; n++) {
                var vo = new PaintVO();
                vo.typeNum = drawType.subSection;
                var brush = new game.PaintBrush(vo);
                brush.parentBrush = curBrush;
                curBrush.addChild(brush);
                this._brushArr.push(brush);
                this._curBrushName = brush.brushName;
                brush.subsection(curBrush, subNum, n + 1);
            }
            this.sendStatus();
        };
        GameScript.prototype.copyBrush = function () {
            var curBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return null;
            //判断后边是否有图，创建新线段
            var rect = new egret.Sprite();
            var stoneX = curBrush.x;
            var stoneY = curBrush.y;
            rect.width = curBrush.width;
            rect.height = curBrush.height;
            var bool1 = false;
            if (GlobalData.canvasWid - (curBrush.width + curBrush.x) < curBrush.width) {
                if (GlobalData.canvasHei - (stoneY + rect.height) < rect.height) {
                    TipsUtils.showTipsFromCenter("tip3");
                    return null;
                }
                rect.x = stoneX;
                rect.y = stoneY + rect.height + 6;
                var ppp = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                rect.y = ppp.y - 60;
                bool1 = this.hitSegment(rect);
                if (bool1) {
                    TipsUtils.showTipsFromCenter("tip2");
                    return null;
                }
                else {
                    var vo = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    var brush = new game.PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this._curBrushName = brush.brushName;
                    var returnObj = { "createObj": brush, "copyObj": curBrush };
                    this.sendStatus();
                    return returnObj;
                }
            }
            else {
                rect.x = stoneX + curBrush.width;
                rect.y = stoneY;
                bool1 = this.hitSegment(rect);
                if (bool1) {
                    if (GlobalData.canvasHei - (stoneY + rect.height) < rect.height) {
                        TipsUtils.showTipsFromCenter("tip3");
                        return null;
                    }
                    rect.x = stoneX;
                    rect.y = stoneY + rect.height + 6;
                    var ppp = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                    rect.y = ppp.y - 60;
                    bool1 = false;
                    bool1 = this.hitSegment(rect);
                    if (bool1) {
                        TipsUtils.showTipsFromCenter("tip2");
                        return null;
                    }
                    else {
                        var vo = new PaintVO();
                        vo.typeNum = drawType.drawSegment;
                        var brush = new game.PaintBrush(vo);
                        brush.x = rect.x;
                        brush.y = rect.y;
                        this._brushArr.push(brush);
                        this.sendStatus();
                        this._curBrushName = brush.brushName;
                        var returnObj = { "createObj": brush, "copyObj": curBrush };
                        return returnObj;
                    }
                }
                else {
                    var vo = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    var brush = new game.PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this.sendStatus();
                    this._curBrushName = brush.brushName;
                    var returnObj = { "createObj": brush, "copyObj": curBrush };
                    return returnObj;
                }
            }
        };
        GameScript.prototype.hitSegment = function (sp) {
            var bool = false;
            for (var n = 0; n < this._brushArr.length; n++) {
                var boom = this._brushArr[n];
                var intoArr = Global.checkArr([0, 1, 2, 3, 7], boom.brushType);
                if (intoArr) {
                    if (boom.brushName == GlobalData.paintVO.curCheckBrush) {
                        continue;
                    }
                    if (Global.hitTest(boom, sp)) {
                        bool = true;
                    }
                }
            }
            return bool;
        };
        GameScript.prototype.judgeBrushHit = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment || ori.brushType == drawType.drawLineSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = 2;
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.getMinPoint = function (oriPoint) {
            var hitObj = { "isHit": false, "point": oriPoint };
            for (var i = 0; i < this._brushArr.length; i++) {
                var curBrush = this._brushArr[i];
                var bool = Global.checkArr([0, 1], curBrush.brushType);
                if (bool) {
                    var x1 = curBrush.x + curBrush.width + 2;
                    var y1 = curBrush.y;
                    var len = Math.sqrt(Math.pow((oriPoint.x - x1), 2) + Math.pow((oriPoint.y - y1), 2));
                    if (len < 100) {
                        oriPoint.x = x1;
                        oriPoint.y = y1 + 50;
                        hitObj.isHit = true;
                        return hitObj;
                    }
                }
            }
            return hitObj;
        };
        GameScript.prototype.judgeLinePos = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (Global.hitTest(oriBrush, ori)) {
                    var hasInto = Global.checkArr([0, 1], ori.brushType);
                    if (hasInto) {
                        if (oriBrush.x > ori.x) { //生成在后方
                            if (GlobalData.canvasWid - (ori.width + ori.x) < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            }
                            else {
                                hitType = ori;
                                for (var j = 0; j < this._brushArr.length; j++) {
                                    var cons2 = this._brushArr[j];
                                    if (cons2.brushType == drawType.drawSegment || cons2.brushType == drawType.drawLineSegment) {
                                        if (cons2.brushName == ori.brushName) {
                                            continue;
                                        }
                                        if (cons2.x > ori.x) {
                                            if (Math.abs(cons2.y - ori.y) < 10 && Math.abs(cons2.x - (ori.x + ori.width)) < 10) {
                                                hitType = 2;
                                            }
                                        }
                                    }
                                }
                                return hitType;
                            }
                        }
                        else {
                            if (ori.x < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            }
                            else {
                                hitType = ori;
                                for (var n = 0; n < this._brushArr.length; n++) {
                                    var cons3 = this._brushArr[n];
                                    if (cons3.brushType == drawType.drawSegment || cons3.brushType == drawType.drawLineSegment) {
                                        if (cons3.brushName == ori.brushName || cons3.brushName == oriBrush.brushName) {
                                            continue;
                                        }
                                        if (cons3.x < ori.x) {
                                            if (Math.abs(cons3.y - ori.y) < 10 && Math.abs(cons3.x - (ori.x + ori.width)) < 10) {
                                                hitType = 2;
                                            }
                                        }
                                    }
                                }
                                return hitType;
                            }
                        }
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.judgeSubHit = function (oriBrush) {
            var hitType = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = ori;
                        return hitType;
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.judgeBrackHit = function (oriBrush) {
            var bool = false;
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.bracket) {
                    if (ori.parentBrush && oriBrush.parentBrush) {
                        if (ori.parentBrush.brushName === oriBrush.parentBrush.brushName) {
                            if (Global.hitTest(oriBrush, ori)) {
                                bool = true;
                            }
                        }
                    }
                }
            }
            return bool;
        };
        GameScript.prototype.judgeBrackHit2 = function (oriBrush) {
            var hitType = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment || ori.brushType == drawType.drawLineSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = ori;
                        return hitType;
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.judgeBrackHit3 = function (childBrush, parentBrush, sp) {
            var isHit = false;
            for (var i = 0; i < parentBrush.numChildren; i++) {
                var child = parentBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        if (Global.hitTest(childBrush, child) && child.shapeScale == sp._scaleNum) {
                            isHit = true;
                        }
                    }
                }
            }
            return isHit;
        };
        GameScript.prototype.getBrackWid = function (priBrush, point) {
            var x = point.x - priBrush.x;
            var startMinX = 1000;
            var endMinX = 10000;
            var sp = new RectVO();
            sp._xNum = x;
            sp._xEndNum = x;
            for (var i = 0; i < priBrush.numChildren; i++) {
                var child = priBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        var curX = child.x + child.width / 2;
                        var chaX = Math.abs(curX - x);
                        if (chaX < startMinX && curX <= x) {
                            sp._xNum = curX;
                            startMinX = chaX;
                        }
                        if (chaX < endMinX && curX >= x) {
                            sp._xEndNum = curX;
                            endMinX = chaX;
                        }
                    }
                }
            }
            if (x < startMinX) {
                sp._xNum = 0;
            }
            if (priBrush.width - x < endMinX) {
                sp._xEndNum = priBrush.width;
            }
            if (point.y >= priBrush.y + priBrush.height / 2) {
                sp._yNum = priBrush.height / 2 + 20;
                sp._scaleNum = 1;
            }
            else {
                sp._yNum = 0;
                sp._scaleNum = -1;
            }
            sp._wNum = Math.abs(sp._xEndNum - sp._xNum);
            return sp;
        };
        GameScript.prototype.judgeDefaltHit = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == oriBrush.brushType) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = 2;
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.isHasChild = function (brush) {
            var isHas = false;
            for (var i = 0; i < brush.numChildren; i++) {
                var child = brush.getChildAt(i);
                if (child && child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        isHas = true;
                    }
                }
            }
            return isHas;
        };
        GameScript.prototype.pushBrush = function (bru) {
            this._brushArr.push(bru);
            this._curBrushName = bru.brushName;
            this.sendStatus();
        };
        GameScript.prototype.getCurBrush = function (nameStr) {
            var searchName = "";
            if (nameStr) {
                searchName = nameStr;
            }
            else {
                searchName = this._curBrushName;
            }
            if (this._brushArr.length < 0)
                return null;
            for (var i = 0; i < this._brushArr.length; i++) {
                if (this._brushArr[i].brushName.indexOf(searchName) != -1) {
                    return this._brushArr[i];
                }
            }
            return null;
        };
        GameScript.prototype.getInArr = function (arr, num) {
            if (arr.indexOf(num) != -1) {
                return true;
            }
            else {
                return false;
            }
        };
        GameScript.prototype.getLightBrush = function () {
            var brush = null;
            for (var i = 0; i < this._brushArr.length; i++) {
                var curB = this._brushArr[i];
                if (curB.getCurShape().isLight) {
                    brush = curB;
                }
            }
            return brush;
        };
        GameScript.prototype.setBrackPos = function (xNum, parBrush) {
            var posX = xNum;
            if (xNum < 50) {
                posX = 0;
                return posX;
            }
            if (xNum > parBrush.width - 50) {
                posX = parBrush.width;
                return posX;
            }
            for (var i = 0; i < parBrush.numChildren; i++) {
                var child = parBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        if (Math.abs((child.x + child.width / 2) - xNum) < 50) {
                            posX = child.x + child.width / 2;
                            return posX;
                        }
                    }
                }
            }
            return posX;
        };
        GameScript.prototype.checkHitBrack = function (x1, y1) {
            this.removeAllMask();
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush.brushType == drawType.drawSegment || brush.brushType == drawType.drawLineSegment) {
                    if (Global.hitTestPoint(brush, x1, y1)) {
                        if (y1 < brush.y + brush.height / 2) {
                            brush.drawBrakMask(0);
                        }
                        else {
                            brush.drawBrakMask(1);
                        }
                    }
                }
            }
        };
        GameScript.prototype.removeAllMask = function () {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                brush.removeBrackMask();
            }
        };
        GameScript.prototype.sendStatus = function () {
            if (this._brushArr.length < 1) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, false);
            }
            else {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, true);
            }
        };
        GameScript.prototype.setCanMove = function (bool) {
            this.canMove = bool;
        };
        GameScript.prototype.getCanMove = function () {
            return this.canMove;
        };
        GameScript.prototype.distance = function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        GameScript.prototype.initPointArr = function () {
            this.xArr = [];
            this.yArr = [];
            var startX = 0;
            var startY = 0;
            for (var j = 0; j < 21; j++) { //x坐标
                startX = 68 * j + 74;
                this.xArr.push(startX);
            }
            for (var i = 0; i < 5; i++) { //y坐标
                startY = 156 * i + 178;
                this.yArr.push(startY);
            }
        };
        GameScript.prototype.getMinPoit = function (x1, y1, isStart) {
            var point = new egret.Point();
            var minX = 10000;
            var minY = 10000;
            for (var i = 0; i < this.xArr.length; i++) {
                if (Math.abs(this.xArr[i] - x1) < minX) {
                    point.x = this.xArr[i];
                    minX = Math.abs(this.xArr[i] - x1);
                }
            }
            for (var j = 0; j < this.yArr.length; j++) {
                if (Math.abs(this.yArr[j] - y1) < minY) {
                    point.y = this.yArr[j] - 20;
                    minY = Math.abs(this.yArr[j] - y1);
                }
            }
            if (isStart) {
                // let len: number = this.distance(x1, y1, point.x, point.y);
                if (minY > 20) {
                    point = null;
                }
            }
            return point;
        };
        Object.defineProperty(GameScript.prototype, "isRecord", {
            get: function () {
                return this._isRecord;
            },
            set: function (bool) {
                this._isRecord = bool;
            },
            enumerable: false,
            configurable: true
        });
        GameScript.instance = null;
        return GameScript;
    }());
    game.GameScript = GameScript;
    __reflect(GameScript.prototype,"game.GameScript",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/ModelPrepCommand.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 注册注册proxy
  */
var game;
(function (game) {
    var ModelPrepCommand = /** @class */ (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            return _super.call(this) || this;
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            //excel数据
            this.facade.registerProxy(new TemplateProxy());
            //游戏其他需要存储数据
            this.facade.registerProxy(new GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype,"game.ModelPrepCommand",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/Processor/Processor_100_1.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 服务器命令返回(注册监听服务器响应)
  */
var game;
(function (game) {
    var Processor_100_1 = /** @class */ (function (_super) {
        __extends(Processor_100_1, _super);
        function Processor_100_1() {
            return _super.call(this) || this;
        }
        /** 注册消息 */
        Processor_100_1.prototype.register = function () {
            this.facade.registerCommand(ProtobufConfig.TEMPLATE_USER_LOGIN, Processor_100_1);
        };
        Processor_100_1.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            switch (notification.getName()) {
                case ProtobufConfig.TEMPLATE_USER_LOGIN:
                    // this.sendNotification(NoficationConfig.UPDATE_DATA,data);
                    break;
                default:
                    break;
            }
        };
        Processor_100_1.NAME = ProtobufConfig.TEMPLATE_USER_LOGIN;
        return Processor_100_1;
    }(puremvc.SimpleCommand));
    game.Processor_100_1 = Processor_100_1;
    __reflect(Processor_100_1.prototype,"game.Processor_100_1",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/StartupCommand.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 初始化mvc controller
  */
var game;
(function (game) {
    var StartupCommand = /** @class */ (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    game.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype,"game.StartupCommand",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/controller/ViewPrepCommand.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 注册mediator
  */
var game;
(function (game) {
    var ViewPrepCommand = /** @class */ (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super.call(this) || this;
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            var main = GameLayerManager.gameLayer().panelLayer;
            this.facade.registerMediator(new game.GameViewMediator());
            this.facade.registerMediator(new game.GameResetMediator);
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
    __reflect(ViewPrepCommand.prototype,"game.ViewPrepCommand",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/model/P.ts":
/***/ (function(module, exports) {

var P = window['P']; 
/**
  * 通过excel名称获得excel数据proxy
  */
var P;
(function (P) {
    //=========================excel数据=============================
    /**
     * 这个是一个读取excel数据的例子
     */
    function getTemplateDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }
    P.getTemplateDataProxy = getTemplateDataProxy;
    //=========================游戏其他数据数据=============================
    /**
     * 这个是一个读取游戏数据的例子
     */
    function getGameDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
    P.getGameDataProxy = getGameDataProxy;
})(P || (P = {}));
window["P"] = P;


/***/ }),

/***/ "./src/core/model/ResourceProxyBase.ts":
/***/ (function(module, exports) {

/**
  * 数据读取基类
  */
var ResourceProxyBase = /** @class */ (function (_super) {
    __extends(ResourceProxyBase, _super);
    function ResourceProxyBase(proxyName) {
        if (proxyName === void 0) { proxyName = ""; }
        var _this = _super.call(this, proxyName) || this;
        _this._dataMap = new Array(); //存储excel数据
        _this._proxyName = ""; //excel名称
        _this._proxyName = proxyName;
        return _this;
    }
    /**
     * 开发状态：json可读
     * TODO
     * 上线状态：加载bin文件，在这里解密【文件小，加密】
     * 是预加载json文件还是到时候使用到再加载
     */
    ResourceProxyBase.prototype.getData = function () {
        var jsonData = RES.getRes(this._proxyName);
        return jsonData;
    };
    return ResourceProxyBase;
}(puremvc.Proxy));
window["ResourceProxyBase"] = ResourceProxyBase;
__reflect(ResourceProxyBase.prototype,"ResourceProxyBase",["puremvc.IProxy"]); 


/***/ }),

/***/ "./src/core/model/proxy/GameProxy.ts":
/***/ (function(module, exports) {

/**
  * 游戏数据读取模板
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
var GameProxy = /** @class */ (function (_super) {
    __extends(GameProxy, _super);
    function GameProxy() {
        var _this = _super.call(this, GameProxy.NAME) || this;
        _this.vo = new GameVO();
        return _this;
    }
    /**
     * 获取游戏名称
     */
    GameProxy.prototype.getGameName = function () {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    };
    /**
     * 设置游戏名称
     */
    GameProxy.prototype.setGameName = function (name) {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    };
    GameProxy.NAME = "GameProxy"; //必须和excel导出文件一致
    return GameProxy;
}(ResourceProxyBase));
window["GameProxy"] = GameProxy;
__reflect(GameProxy.prototype,"GameProxy",[]); 


/***/ }),

/***/ "./src/core/model/proxy/TemplateProxy.ts":
/***/ (function(module, exports) {

/**
  * 数据读取模板
  */
var TemplateProxy = /** @class */ (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        return _super.call(this, TemplateProxy.NAME) || this;
    }
    /**
     * 获取excel数据
     */
    TemplateProxy.prototype.getGameData = function () {
        return this.getData();
    };
    TemplateProxy.NAME = "template"; //必须和excel导出文件一致
    return TemplateProxy;
}(ResourceProxyBase));
window["TemplateProxy"] = TemplateProxy;
__reflect(TemplateProxy.prototype,"TemplateProxy",[]); 


/***/ }),

/***/ "./src/core/model/vo/GameVO.ts":
/***/ (function(module, exports) {

/**
  * 游戏数据存储vo
  */
var GameVO = /** @class */ (function () {
    function GameVO() {
        /**
         * 框架名称
        */
        this.gameName = "PureMvc";
    }
    return GameVO;
}());
window["GameVO"] = GameVO;
__reflect(GameVO.prototype,"GameVO",[]); 
var SenVO = /** @class */ (function () {
    function SenVO() {
        this.brushType = 0;
        this.brushPos = null;
        this.brush = null;
        this.pt = null;
        this.isChild = false;
    }
    return SenVO;
}());
window["SenVO"] = SenVO;
__reflect(SenVO.prototype,"SenVO",[]); 
var RectVO = /** @class */ (function () {
    function RectVO() {
        this._xNum = 0;
        this._yNum = 0;
        this._xEndNum = 0;
        this._yEndNum = 0;
        this._wNum = 0;
        this._hNum = 0;
        this._scaleNum = 1;
    }
    return RectVO;
}());
window["RectVO"] = RectVO;
__reflect(RectVO.prototype,"RectVO",[]); 


/***/ }),

/***/ "./src/core/model/vo/PaintVO.ts":
/***/ (function(module, exports) {

var PaintVO = /** @class */ (function () {
    function PaintVO() {
        //高年级还是低年级
        this.gradeType = 1;
        /** 画笔绘制类型
         * @param 0:绘制直线段
         * @param 1:绘制虚线段
         * @param 2:分段
         * @param 3:括号
         * @param 4:箭头
         * @param 5:虚线
         * @param 6:画笔
         * @param 7:荧光笔
         */
        this.typeNum = 1;
        /** 画布宽度 */
        this.canvasW = 0;
        /** 画布高度 */
        this.canvasH = 0;
        /** 画笔颜色 */
        this.colorNum = 0x000000;
        /** 画笔宽度 */
        this.weightNum = 8;
        /** 画笔透明度 */
        this.alphauUm = 1;
        /** 指定是否提示笔触采用完整像素 */
        this.pixelHinting = true;
        /** 指定要使用的比例模式 */
        this.scaleMode = "normal";
        /**  用于指定线条末端处端点类型的 CapsStyle 类的值*/
        this.caps = egret.CapsStyle.ROUND;
        /**  指定用于拐角的连接外观的类型*/
        this.joints = egret.JointStyle.ROUND;
        /**  用于表示剪切斜接的极限值的数字*/
        this.miterLimit = 2;
        /**  当前高亮选中的画笔 */
        this.curCheckBrush = "";
        /** 画笔当前选择的大小 */
        this.paintSize = 1;
        /** 画笔当前选择的颜色 */
        this.paintColor = 0;
        /** 荧光笔当前选择的大小 */
        this.fluSize = 0;
        /** 荧光笔当前选择的颜色 */
        this.fluColor = 0;
        /** 当前移动的按钮 */
        this.moveBtn = null;
    }
    /**  设置虚线样式*/
    // public lineDash: number[] = [];
    /** 是否为可选状态 */
    // public isCheck: boolean = false;
    /** 当前绘制对象 */
    // public curShape: egret.Shape = null;
    PaintVO.prototype.setStype = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var arr = args[0];
        if (!arr || arr.length < 1) {
            return;
        }
        for (var index = 0; index < arr.length; index++) {
            var obj = arr[index];
            for (var key in obj) {
                if (this.hasOwnProperty(key)) {
                    this[key] = obj[key];
                }
            }
        }
    };
    PaintVO.prototype.initVo = function () {
        this.typeNum = 1;
        this.colorNum = 0x000000;
        this.weightNum = 4;
        this.alphauUm = 1;
        this.pixelHinting = true;
        this.scaleMode = "normal";
        this.caps = egret.CapsStyle.ROUND;
        this.joints = egret.JointStyle.ROUND;
        this.miterLimit = 2;
        this.curCheckBrush = "";
        this.paintSize = 1;
        this.paintColor = 0;
        this.fluSize = 0;
        this.fluColor = 0;
    };
    PaintVO.prototype.setGradeNum = function (grade) {
        this.gradeType = grade;
    };
    // public setLineStyle(typeNum: number): void {
    //     this.typeNum = typeNum;
    //     let commonLine = [{ "typeNum": typeNum }, { "colorNum": 0x000000 }, { "weightNum": 8 }, { "alphauUm": 1 }];
    //     switch (typeNum) {
    //         case drawType.drawSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.drawLineSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.subSection:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.bracket:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.drawArrow:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.lineSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.painting:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.flupaint:
    //             let flupaintStype = [{ "typeNum": typeNum }, { "colorNum": 0xF8673E }, { "weightNum": 20 }, { "alphauUm": 0.5 }];
    //             this.setStype(flupaintStype);
    //             break;
    //     }
    // }
    PaintVO.prototype.setPaintType = function (typeNum) {
        this.typeNum = typeNum;
    };
    return PaintVO;
}());
window["PaintVO"] = PaintVO;
__reflect(PaintVO.prototype,"PaintVO",[]); 


/***/ }),

/***/ "./src/core/view/main/CommonButton.ts":
/***/ (function(module, exports) {

var CommonButton = /** @class */ (function (_super) {
    __extends(CommonButton, _super);
    function CommonButton() {
        var _this = _super.call(this) || this;
        _this._imgSource = "";
        _this._btnType = 0;
        _this._curenState = "";
        _this.PointX = 100; //吸附点坐标X
        _this.PointY = 100; //吸附点坐标Y
        _this.isCanCreate = false;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonButtonSkin";
        return _this;
    }
    CommonButton.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonButton.prototype.changeStatus = function () {
        for (var i = 0; i < this.parent.numChildren; i++) {
            var btn = this.parent.getChildAt(i);
            if (btn) {
                if (btn.btnType == GlobalData.paintVO.typeNum) {
                    btn.setStatus("down");
                }
                else {
                    btn.setStatus("normal");
                }
            }
        }
    };
    CommonButton.prototype.setStatus = function (status) {
        this._curenState = status;
        var bgImg = this.bgGroup.getChildAt(0);
        bgImg.source = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
    };
    CommonButton.prototype.setBtnType = function (typeNum, sourceName) {
        this._btnType = typeNum;
        this._imgSource = sourceName;
        this.createImg();
    };
    Object.defineProperty(CommonButton.prototype, "btnType", {
        get: function () {
            return this._btnType;
        },
        enumerable: false,
        configurable: true
    });
    CommonButton.prototype.brginButton = function (evt) {
        var oriType = GlobalData.paintVO.typeNum;
        GlobalData.paintVO.setPaintType(this.btnType);
        //想办法记录鼠标移动的记录的坐标
        this.XTouch = evt.stageX;
        this.YTouch = evt.stageY;
        this.isCanCreate = true;
        this.changeStatus();
        if (this._btnType == drawType.flupaint || this._btnType == drawType.painting) {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, true);
        }
        else {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, false);
            // this.testCreate(evt);
        }
    };
    CommonButton.prototype.testCreate = function (evt) {
        if (this.isCanCreate == false) {
            return;
        }
        this.createImg();
        this.storeX = this.curMoveGroup.x;
        this.storeY = this.curMoveGroup.y;
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
    };
    CommonButton.prototype.moveButton = function (e) {
        if (!this.curMoveGroup && Math.abs(e.stageX - this.XTouch) > 10) {
            this.testCreate(e);
        }
        var bool = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
        if (this.btnType != GlobalData.paintVO.typeNum || bool) {
            return;
        }
        if (this.curMoveGroup) {
            this.curMoveGroup.x = this.storeX + (e.stageX - this.XTouch);
            this.curMoveGroup.y = this.storeY + (e.stageY - this.YTouch);
            if (this._btnType == drawType.bracket) {
                var x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
                var y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
                game.GameScript.getInstance().checkHitBrack(x, y);
            }
        }
    };
    CommonButton.prototype.endButton = function (e) {
        game.GameScript.getInstance().removeAllMask();
        var endX = 0;
        var bool = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
        GlobalData.paintVO.moveBtn = null;
        if (this.btnType != GlobalData.paintVO.typeNum || bool) {
            return;
        }
        if (this.curMoveGroup) {
            endX = this.curMoveGroup.x;
            this.removeChild(this.curMoveGroup);
        }
        this.isCanCreate = false;
        this.curMoveGroup = null;
        if (Math.abs(endX) < this.bgGroup.width) {
            return;
        }
        var maxX = GlobalData.canvasWid + GlobalData.canvasLeft;
        var maxY = GlobalData.canvasHei + GlobalData.canvasTop;
        if (e.stageX < GlobalData.canvasLeft || e.stageX > maxX || e.stageY < GlobalData.canvasTop || e.stageY > maxY) {
            TipsUtils.showTipsFromCenter("tip1");
            return;
        }
        var point = new egret.Point();
        point.x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
        point.y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
        var sendVO = new SenVO();
        sendVO.brushType = this._btnType;
        sendVO.brushPos = point;
        game.AppFacade.getInstance().sendNotification(NoficationConfig.CREAT_MOVEBRUSH, sendVO);
    };
    CommonButton.prototype.createImg = function () {
        var bgGroup = new eui.Group();
        this.addChild(bgGroup);
        bgGroup.x = 0;
        bgGroup.y = 0;
        var showImg = new eui.Image();
        showImg.horizontalCenter = 0;
        showImg.verticalCenter = 0;
        bgGroup.addChild(showImg);
        this.bgGroup = (this.getChildAt(0)) ? this.getChildAt(0) : new eui.Group();
        if (this.bgGroup && this.bgGroup.getChildAt(0)) {
            var setBg = this.bgGroup.getChildAt(0);
            setBg = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
        }
        this.curMoveGroup = null;
        if (this.numChildren > 1) {
            this.curMoveGroup = this.getChildAt(1);
            GlobalData.paintVO.moveBtn = this;
        }
        if (this.curMoveGroup) {
            this.curMoveGroup.width = this.bgGroup.width;
            this.curMoveGroup.height = this.bgGroup.height;
            var setmove = this.curMoveGroup.getChildAt(0);
            if (GlobalData.paintVO.gradeType != 1) {
                var sourceStr = this._imgSource.substring(4, this._imgSource.length);
                setmove.source = RES.getRes(sourceStr + "_move_png");
            }
            else {
                setmove.source = RES.getRes(this._imgSource + "_move_png");
            }
            setmove.verticalCenter = 0;
            setmove.horizontalCenter = 0;
            if (this._btnType == drawType.subSection) {
                setmove.scaleX = 2;
                setmove.scaleY = 2;
            }
        }
        bgGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.brginButton, this);
        if (this._btnType != drawType.painting && this._btnType != drawType.flupaint) {
            bgGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveButton, this);
            bgGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.endButton, this);
        }
    };
    return CommonButton;
}(eui.Component));
window["CommonButton"] = CommonButton;
__reflect(CommonButton.prototype,"CommonButton",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/CommonCheckBtn.ts":
/***/ (function(module, exports) {

var CommonCheckBtn = /** @class */ (function (_super) {
    __extends(CommonCheckBtn, _super);
    function CommonCheckBtn() {
        var _this = _super.call(this) || this;
        _this._typeNum = 0;
        _this._index = 0;
        _this._sizeNum = 0;
        _this._colorNum = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonCheckBtnSkin";
        return _this;
    }
    CommonCheckBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonCheckBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonCheckBtn.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonCheckBtn.prototype.initData = function (data, index) {
        this._typeNum = data.type;
        this._index = index;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startCheck, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
        switch (this._typeNum) {
            case 1:
                this._sizeNum = data.size;
                this.img_normal.source = RES.getRes("flu_point_png");
                this.img_check.source = RES.getRes("flu_circle_png");
                if (index == 0) {
                    this.img_normal.height = this.img_normal.width = 12;
                    this.img_check.height = this.img_check.width = 26;
                }
                else if (index == 1) {
                    this.img_normal.height = this.img_normal.width = 16;
                    this.img_check.height = this.img_check.width = 34;
                }
                else if (index == 2) {
                    this.img_normal.height = this.img_normal.width = 28;
                    this.img_check.height = this.img_check.width = 44;
                }
                break;
            case 2:
                this.width = 76;
                this.height = 76;
                this.img_bg.width = this.width;
                this.img_bg.height = this.height;
                this.img_normal.width = 56;
                this.img_normal.height = 56;
                this.img_check.width = 40;
                this.img_check.height = 40;
                this._colorNum = data.color;
                this.img_bg.source = RES.getRes("flu_colorBg_png");
                this.img_normal.source = RES.getRes(data.source);
                this.img_check.source = RES.getRes("flu_sure_png");
                break;
        }
    };
    CommonCheckBtn.prototype.setShow = function (checkNum) {
        switch (this._typeNum) {
            case 1:
                if (this._index == checkNum) {
                    this.img_check.visible = true;
                }
                else {
                    this.img_check.visible = false;
                }
                break;
            case 2:
                if (this._index == checkNum) {
                    this.img_check.visible = true;
                    this.img_bg.visible = true;
                    // this.img_normal.scaleX = this.img_normal.scaleY = 0.9;
                }
                else {
                    this.img_check.visible = false;
                    this.img_bg.visible = false;
                    // this.img_normal.scaleX = this.img_normal.scaleY = 1;
                }
                break;
        }
    };
    CommonCheckBtn.prototype.startCheck = function (evt) {
        if (this && this.parent && this.parent.parent.parent) {
            if (this._typeNum == 1) {
                this.parent.parent.parent.resetSize(this._index);
            }
            else {
                this.parent.parent.parent.resetColor(this._index);
            }
        }
    };
    Object.defineProperty(CommonCheckBtn.prototype, "indexNum", {
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    CommonCheckBtn.prototype.removed = function (evt) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startCheck, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    return CommonCheckBtn;
}(eui.Component));
window["CommonCheckBtn"] = CommonCheckBtn;
__reflect(CommonCheckBtn.prototype,"CommonCheckBtn",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/CommonMoveTip.ts":
/***/ (function(module, exports) {

var CommonMoveTip = /** @class */ (function (_super) {
    __extends(CommonMoveTip, _super);
    function CommonMoveTip() {
        var _this = _super.call(this) || this;
        _this.personY = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonMoveTipSkin";
        return _this;
    }
    CommonMoveTip.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonMoveTip.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonMoveTip.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonMoveTip.prototype.initY = function (x1, y1, num) {
        this.personY = y1 - 10;
        this.x = x1 + this.width / 2;
        this.y = this.personY;
    };
    CommonMoveTip.prototype.changeView = function (x1, y1, num) {
        this.x = x1 + this.width / 3;
        this.y = this.personY;
        this.label_tip.text = "已拖动" + num + "格";
    };
    return CommonMoveTip;
}(eui.Component));
window["CommonMoveTip"] = CommonMoveTip;
__reflect(CommonMoveTip.prototype,"CommonMoveTip",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/CommonSubBtn.ts":
/***/ (function(module, exports) {

var CommonSubBtn = /** @class */ (function (_super) {
    __extends(CommonSubBtn, _super);
    function CommonSubBtn() {
        var _this = _super.call(this) || this;
        _this.dataArr = [];
        _this.selectIndex = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonSubBtnSkin";
        return _this;
    }
    CommonSubBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonSubBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonSubBtn.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonSubBtn.prototype.initData = function (pX, pY, pW, pH) {
        this.lable_tip1.fontFamily = "fzltch";
        this.label_tip2.fontFamily = "fzltch";
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        if (GlobalData.canvasHei - (pY + pH) < this.height) { //在顶部显示
            this.top = pY - this.height;
            this.btn_sub.top = 180;
            this.btn_copy.top = 180;
            this.group_panel.top = 0;
        }
        else { //在底部显示
            this.top = pY + pH;
            this.btn_sub.top = 0;
            this.btn_copy.top = 0;
            this.group_panel.top = 100;
        }
        if (pX > 260 && pX < this.parent.width - 260) {
            this.right = this.parent.width - (pX + pW);
            this.group_panel.left = 0;
        }
        else {
            if (pX <= 260) {
                this.right = this.parent.width - pX - this.width + 290;
                this.group_panel.left = 290;
            }
            else {
                this.right = this.parent.width - (pX + pW);
                this.group_panel.left = 0;
            }
        }
        this.group_panel.visible = false;
        this.btn_copy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.copy, this);
        this.btn_sub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sub, this);
        this.btn_cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    CommonSubBtn.prototype.copy = function (evt) {
        evt.stopPropagation();
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        this.removeSelf();
        game.AppFacade.getInstance().sendNotification(NoficationConfig.COPY_BRUSH);
    };
    CommonSubBtn.prototype.sub = function (evt) {
        evt.stopPropagation();
        this.btn_sub.source = RES.getRes("btn_range_select_png");
        this.group_panel.visible = true;
        this.initList();
    };
    CommonSubBtn.prototype.cancle = function (evt) {
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        this.group_panel.visible = false;
    };
    CommonSubBtn.prototype.confirm = function (evt) {
        var data = this.dataArr[this.selectIndex];
        if (data < 2) {
            this.removeSelf();
            return;
        }
        game.GameScript.getInstance().subBrush(data);
        this.removeSelf();
    };
    CommonSubBtn.prototype.initList = function () {
        this.dataArr = [9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
        for (var i = 0; i < this.dataArr.length; i++) {
            var label_a = new eui.Label();
            this.group_content.addChild(label_a);
            label_a.fontFamily = "lan";
            label_a.size = 40;
            label_a.width = 118;
            label_a.height = 40;
            label_a.textAlign = "center";
            if (i == 2) {
                label_a.textColor = 0xffffff;
            }
            else {
                label_a.textColor = 0xeeeeee;
            }
            label_a.text = this.dataArr[i] + "";
        }
        this.selectIndex = 0;
        this.eui_scroller.viewport.scrollV = 60;
        this.eui_scroller.throwSpeed = 0;
        this.eui_scroller.addEventListener(eui.UIEvent.CHANGE, this.moveing, this);
        this.eui_scroller.addEventListener(eui.UIEvent.CHANGE_END, this.ending, this);
    };
    CommonSubBtn.prototype.moveing = function (e) {
        if (this.eui_scroller.viewport.scrollV > 422) {
            this.eui_scroller.viewport.scrollV = 19;
        }
        if (this.eui_scroller.viewport.scrollV < 19) {
            this.eui_scroller.viewport.scrollV = 422;
        }
    };
    CommonSubBtn.prototype.ending = function (e) {
        this.selectIndex = Math.round(this.eui_scroller.viewport.scrollV / 40);
        var num = this.selectIndex * 40 - 18;
        egret.Tween.get(this.eui_scroller.viewport).to({ "scrollV": num }, 200);
        for (var i = 0; i < this.group_content.numChildren; i++) {
            var lb = this.group_content.getChildAt(i);
            if (i == this.selectIndex) {
                lb.textColor = 0xFFFFFF;
            }
            else {
                lb.textColor = 0xEEEEEE;
            }
        }
    };
    CommonSubBtn.prototype.removed = function (evt) {
        egret.Tween.removeTweens(this.eui_scroller.viewport);
        this.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.copy, this);
        this.btn_sub.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sub, this);
        this.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
        this.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        this.eui_scroller.removeEventListener(eui.UIEvent.CHANGE_END, this.moveing, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    CommonSubBtn.prototype.removeSelf = function () {
        // this.eui_list.dataProvider = null;
        this.group_content.removeChildren();
        this.dataArr = [];
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    return CommonSubBtn;
}(eui.Component));
window["CommonSubBtn"] = CommonSubBtn;
__reflect(CommonSubBtn.prototype,"CommonSubBtn",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/CommonTool.ts":
/***/ (function(module, exports) {

var CommonTool = /** @class */ (function (_super) {
    __extends(CommonTool, _super);
    function CommonTool() {
        var _this = _super.call(this) || this;
        _this.shapeUtils = null;
        _this.toolType = 0;
        _this.PointX = 100; //吸附点坐标X
        _this.PointY = 100; //吸附点坐标Y
        return _this;
    }
    CommonTool.prototype.initView = function (type, point) {
        this.toolType = type;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moved, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.movedEnd, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.removed, this);
        switch (this.toolType) {
            case drawType.drawSegment:
                this.width = 200;
                this.height = 120;
                this.anchorOffsetX = this.width / 2;
                this.anchorOffsetY = this.height / 2;
                this.x = point.x;
                this.y = point.y;
                //Obj对象的坐标
                this.storeX = this.x;
                this.storeY = this.y;
                //想办法记录鼠标移动的记录的坐标
                this.XTouch = point.x;
                this.YTouch = point.y;
                this.drawTool();
                break;
            default:
                break;
        }
    };
    CommonTool.prototype.drawTool = function () {
        if (!this.shapeUtils) {
            this.shapeUtils = new egret.Shape();
            this.addChild(this.shapeUtils);
        }
        switch (this.toolType) {
            case drawType.drawSegment:
                this.shapeUtils.graphics.clear();
                this.shapeUtils.graphics.lineStyle(4, 0x000000, 1);
                this.shapeUtils.graphics.moveTo(0, this.height / 2 - 10);
                this.shapeUtils.graphics.lineTo(0, this.height / 2 + 10);
                this.shapeUtils.graphics.lineTo(this.width, this.height / 2 + 10);
                this.shapeUtils.graphics.lineTo(this.width, this.height / 2 - 10);
                this.shapeUtils.graphics.endFill();
                break;
            default:
                break;
        }
    };
    CommonTool.prototype.beginMove = function (e) {
        this.storeX = this.x;
        this.storeY = this.y;
        //想办法记录鼠标移动的记录的坐标
        this.XTouch = e.stageX;
        this.YTouch = e.stageY;
    };
    CommonTool.prototype.moved = function (e) {
        this.x = this.storeX + (e.stageX - this.XTouch);
        this.y = this.storeY + (e.stageY - this.YTouch);
    };
    CommonTool.prototype.movedEnd = function (e) {
        console.log("移动结束");
        this.removed(e);
    };
    CommonTool.prototype.removed = function (evt) {
        if (this.shapeUtils) {
            this.shapeUtils.graphics.clear();
        }
        this.shapeUtils = null;
        this.removeChildren();
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moved, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.movedEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.movedEnd, this);
        this.removeEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.removed, this);
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    return CommonTool;
}(eui.Component));
window["CommonTool"] = CommonTool;
__reflect(CommonTool.prototype,"CommonTool",[]); 


/***/ }),

/***/ "./src/core/view/main/GameCheckFLuView.ts":
/***/ (function(module, exports) {

var GameCheckFLuView = /** @class */ (function (_super) {
    __extends(GameCheckFLuView, _super);
    function GameCheckFLuView() {
        var _this = _super.call(this) || this;
        _this.curType = 0;
        _this.sizeArr = [{ "type": 1, "size": 4 }, { "type": 1, "size": 10 }, { "type": 1, "size": 20 }];
        _this.colorArr = [{ "type": 2, "color": 0xFF443A, "source": "flu_red_png" },
            { "type": 2, "color": 0xFFA000, "source": "flu_oriange_png" },
            { "type": 2, "color": 0x1398FF, "source": "flu_blue_png" },
            { "type": 2, "color": 0x231F56, "source": "flu_black_png" },
            { "type": 2, "color": 0x08BA72, "source": "flu_green_png" },
            { "type": 2, "color": 0xFDF829, "source": "flu_yellow_png" }];
        _this._sizeCheck = 0;
        _this._colorCheck = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
        _this.skinName = "GameCheckFLuSkin";
        return _this;
    }
    GameCheckFLuView.prototype.createCompleteEvent = function (event) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
    };
    GameCheckFLuView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameCheckFLuView.prototype.initView = function () {
        this.right = -100;
        this.bottom = 200;
        this.group_content.scaleX = 0;
        this.group_content.scaleY = 0;
        this.curType = GlobalData.paintVO.typeNum;
        egret.Tween.get(this.group_content).to({ scaleX: 1, scaleY: 1 }, 400);
        if (this.curType == drawType.painting) {
            this._sizeCheck = GlobalData.paintVO.paintSize;
            this._colorCheck = GlobalData.paintVO.paintColor;
        }
        else {
            this._sizeCheck = GlobalData.paintVO.fluSize;
            this._colorCheck = GlobalData.paintVO.fluColor;
        }
        for (var i = 0; i < this.group_size.numChildren; i++) {
            var flu = this.group_size.getChildAt(i);
            var data = this.sizeArr[i];
            flu.initData(data, i);
            flu.setShow(this._sizeCheck);
        }
        for (var j = 0; j < this.group_color.numChildren; j++) {
            var flu1 = this.group_color.getChildAt(j);
            var data1 = this.colorArr[j];
            flu1.initData(data1, j);
            flu1.setShow(this._colorCheck);
        }
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    GameCheckFLuView.prototype.resetSize = function (index) {
        this._sizeCheck = index;
        for (var i = 0; i < this.group_size.numChildren; i++) {
            var flu = this.group_size.getChildAt(i);
            flu.setShow(this._sizeCheck);
        }
    };
    GameCheckFLuView.prototype.resetColor = function (index) {
        this._colorCheck = index;
        for (var j = 0; j < this.group_color.numChildren; j++) {
            var flu1 = this.group_color.getChildAt(j);
            flu1.setShow(this._colorCheck);
        }
    };
    GameCheckFLuView.prototype.removed = function (evt) {
        egret.Tween.removeTweens(this.group_content);
        var sizeData = this.sizeArr[this._sizeCheck];
        var colorData = this.colorArr[this._colorCheck];
        if (this.curType == drawType.painting) {
            GlobalData.paintVO.paintSize = this._sizeCheck;
            GlobalData.paintVO.paintColor = this._colorCheck;
        }
        else {
            GlobalData.paintVO.fluSize = this._sizeCheck;
            GlobalData.paintVO.fluColor = this._colorCheck;
        }
        GlobalData.paintVO.setStype([{ "weightNum": sizeData.size }, { "colorNum": colorData.color }]);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    GameCheckFLuView.prototype.getTypeNum = function () {
        return this.curType;
    };
    return GameCheckFLuView;
}(eui.Component));
window["GameCheckFLuView"] = GameCheckFLuView;
__reflect(GameCheckFLuView.prototype,"GameCheckFLuView",[]); 


/***/ }),

/***/ "./src/core/view/main/LowGradeComponent.ts":
/***/ (function(module, exports) {

var LowGradeComponent = /** @class */ (function (_super) {
    __extends(LowGradeComponent, _super);
    function LowGradeComponent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "LowGradeComponentSkin";
        return _this;
    }
    LowGradeComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LowGradeComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    LowGradeComponent.prototype.loadComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    LowGradeComponent.prototype.initShow = function () {
        this.segment.setBtnType(drawType.drawSegment, "btn_segment");
        this.subSection.setBtnType(drawType.subSection, "btn_subSection");
        this.bracket.setBtnType(drawType.bracket, "btn_bracket");
        this.painting.setBtnType(drawType.painting, "painting");
        this.flupaint.setBtnType(drawType.flupaint, "flupaint");
        this.btn_boxSelect.setBtnType(drawType.boxSelect, "btn_boxSelect");
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
        this.btn_recall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.recall, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
    };
    LowGradeComponent.prototype.recall = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.RECALL_BRUSH);
    };
    LowGradeComponent.prototype.reset = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESETVIEW);
    };
    LowGradeComponent.prototype.setRestStatus = function (bool) {
        this.btn_recall.enabled = bool;
    };
    LowGradeComponent.prototype.resetShow = function () {
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
    };
    return LowGradeComponent;
}(eui.Component));
window["LowGradeComponent"] = LowGradeComponent;
__reflect(LowGradeComponent.prototype,"LowGradeComponent",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/MainUI.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
 * 主界面
 */
var game;
(function (game) {
    var MainUI = /** @class */ (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            _this.isHide = false;
            _this.skinName = "";
            return _this;
        }
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype,"game.MainUI",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/main/PaintBrush.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var PaintBrush = /** @class */ (function (_super) {
        __extends(PaintBrush, _super);
        function PaintBrush(vo) {
            var _this = _super.call(this) || this;
            _this.paintType = null;
            _this._brushName = "";
            _this._brushType = 0;
            _this._xNum = 0;
            _this._yNum = 0;
            _this._xEndNum = 0;
            _this._yEndNum = 0;
            _this._xMaxNum = 0;
            _this._yMaxNum = 0;
            _this.rateNum_x = 0;
            _this.rateNum_w = 0;
            _this._parentBrush = null;
            _this.pointArr = [];
            _this.stoneW = 0; // 原始宽度
            _this.PointX = 100; //吸附点坐标X
            _this.PointY = 100; //吸附点坐标Y
            _this._beginTouchX = 0;
            _this._beginTouchY = 0;
            _this._endTouchX = 0;
            _this._endTOuchY = 0;
            _this.onceTouch = 0;
            _this.curShape = null;
            _this.isMoveLine = false;
            _this.isMoveLeft = false;
            _this.testSp = new egret.Sprite();
            _this.paintType = vo;
            _this._brushType = vo.typeNum;
            _this.touchThrough = false;
            _this._brushName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + _this.paintType.typeNum + "";
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.beginBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.movedBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.endedBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.outSideBrush, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.destorySelf, _this);
            return _this;
        }
        PaintBrush.prototype.beginBrush = function (evt) {
            evt.stopPropagation();
            if (GlobalData.paintVO.typeNum == drawType.boxSelect) {
                game.GameScript.getInstance().removeTouchBrush(this._brushName);
                return;
            }
            this.isTouch = true;
            var bool = false;
            switch (this.brushType) {
                case drawType.drawSegment:
                    //高亮  线段 虚线段 
                    //画图  分段 括号  箭头  虚线 画笔 荧光笔
                    bool = Global.checkArr([drawType.drawSegment, drawType.drawLineSegment, drawType.boxSelect], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.setMaskLight(evt);
                    }
                    else {
                        //分段 括号 荧光笔
                        var bool1 = Global.checkArr([drawType.subSection, drawType.bracket, drawType.flupaint], GlobalData.paintVO.typeNum);
                        if (bool1) {
                            this.childBrush(evt, true);
                        }
                        else {
                            this.childBrush(evt, false);
                        }
                    }
                    break;
                case drawType.drawLineSegment:
                    //高亮  线段 虚线段 分段 荧光笔
                    //画图  括号  箭头  虚线 画笔
                    bool = Global.checkArr([0, 1, 2, 7], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.setMaskLight(evt);
                    }
                    else {
                        //括号
                        if (GlobalData.paintVO.typeNum == drawType.bracket) {
                            this.childBrush(evt, true);
                        }
                        else {
                            this.childBrush(evt, false);
                        }
                    }
                    break;
                case drawType.subSection:
                    //画图  箭头  虚线 画笔 
                    //高亮  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                    }
                    else {
                        this.setMaskLight(evt);
                    }
                    break;
                case drawType.bracket:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    else {
                        this.setMaskLight(evt);
                    }
                    break;
                case drawType.drawArrow:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.lineSegment:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.painting:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.flupaint:
                    //返回  线段 虚线段  荧光笔  分段 括号
                    //画图  箭头  虚线 画笔 
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                    }
                    break;
            }
        };
        PaintBrush.prototype.movedBrush = function (evt) {
            evt.stopPropagation();
            var paintType = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanMove(evt);
            }
            else {
                var curLightShap = game.GameScript.getInstance().getLightBrush();
                if (curLightShap && curLightShap.brushType == drawType.bracket) {
                    curLightShap.judgeChangeBrack(evt);
                }
                else {
                    if (!this.isTouch) {
                        return;
                    }
                    switch (this._brushType) {
                        case drawType.drawSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                                this.judgeChangeType(evt);
                            }
                            else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.drawLineSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                                || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                                this.judgeChangeType(evt);
                            }
                            else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.subSection:
                            var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                            if (typeIn) {
                                return;
                            }
                            if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                                this.x = 10;
                            }
                            else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                                this.x = this.parent.width - this.width;
                            }
                            else {
                                this.x = this.storeX + (evt.stageX - this.XTouch);
                            }
                            break;
                        case drawType.bracket:
                            // 箭头  虚线 画笔 
                            var bool = game.GameScript.getInstance().getInArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], this.brushType);
                            if (!bool) {
                                this.judgeChangeBrack(evt);
                            }
                            break;
                    }
                }
            }
        };
        PaintBrush.prototype.endedBrush = function (evt) {
            evt.stopPropagation();
            var paintType = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanEnd(evt);
            }
            else {
                this.isTouch = false;
                switch (this.brushType) {
                    case drawType.drawSegment:
                        if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                            this.judgeChangeType(evt);
                        }
                        else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.drawLineSegment:
                        var bool = Global.checkArr([0, 1, 2, 7], GlobalData.paintVO.typeNum);
                        if (bool) {
                            this.judgeChangeType(evt);
                        }
                        else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.subSection:
                        var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                        if (typeIn) {
                            return;
                        }
                        if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                            this.x = 10;
                        }
                        else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                            this.x = this.parent.width - this.width;
                        }
                        else {
                            this.x = this.storeX + (evt.stageX - this.XTouch);
                        }
                        break;
                    case drawType.bracket:
                        this.judgeChangeBrack(evt);
                        break;
                }
            }
        };
        PaintBrush.prototype.outSideBrush = function (evt) {
            this.isTouch = false;
            evt.stopPropagation();
            switch (this._brushType) {
                case drawType.drawSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                        this.judgeChangeType(evt);
                    }
                    else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.drawLineSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                        || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                        this.judgeChangeType(evt);
                    }
                    else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.subSection:
                    var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                    if (typeIn) {
                        return;
                    }
                    if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                        this.x = 10;
                    }
                    else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                        this.x = this.parent.width - this.width;
                    }
                    else {
                        this.x = this.storeX + (evt.stageX - this.XTouch);
                    }
                    break;
                case drawType.bracket:
                    this.judgeChangeBrack(evt);
                    break;
            }
        };
        PaintBrush.prototype.onPanBegin = function (pt, brush) {
            this.createShape();
            this._xNum = pt.x;
            this._yNum = pt.y;
            this._yEndNum = pt.y;
            var ppp1 = null;
            switch (this.brushType) {
                case drawType.drawSegment: //画直线段
                    ppp1 = game.GameScript.getInstance().getMinPoint(pt);
                    if (ppp1.isHit) {
                        var ppp2 = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    }
                    else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip4");
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                            return;
                        }
                    }
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    break;
                case drawType.drawLineSegment: //画虚线段
                    ppp1 = game.GameScript.getInstance().getMinPoint(pt);
                    if (ppp1.isHit) {
                        var ppp2 = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    }
                    else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip5");
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                            return;
                        }
                    }
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    break;
                case drawType.subSection: //分段
                    if (!brush) {
                        return;
                    }
                    this._xNum = pt.x;
                    this._xEndNum = pt.x + 10;
                    this._yNum = brush.height / 2 - 10;
                    this._yEndNum = brush.height / 2 + 10;
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = 8;
                    this.height = 20;
                    this.curShape.drwaChart(this.brushType, false);
                    break;
                case drawType.bracket: //括号
                    if (!brush) {
                        return;
                    }
                    this._xNum = game.GameScript.getInstance().setBrackPos(pt.x, this.parent);
                    if (pt.y > brush.height / 2) { //底部
                        this.curShape.scaleYNum = 1;
                        this._yNum = brush.height / 2 + 20;
                    }
                    else { //顶部
                        this.curShape.scaleYNum = -1;
                        this._yNum = 0;
                    }
                    this.x = this._xNum;
                    this.y = this.yNum;
                    this.height = 40;
                    this.XTouch = this.parent.x + this.x;
                    this.curShape.drawBrackMask(true, this.parent);
                    break;
                case drawType.drawArrow: //箭头
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(8, 0xFF443A, 1);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.lineSegment: //虚线
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(6, 0x44BDFC, 1.0, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [20, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.painting: //画笔
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(this.paintType.weightNum, this.paintType.colorNum, this.paintType.alphauUm, this.paintType.pixelHinting, this.paintType.scaleMode, this.paintType.caps, this.paintType.joints, this.paintType.miterLimit);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.flupaint: //荧光笔
                    if (!brush) {
                        return;
                    }
                    this.touchEnabled = false;
                    this._xNum = game.GameScript.getInstance().setBrackPos(pt.x, this.parent);
                    this._yNum = brush.height / 2 - 10 - this.paintType.weightNum;
                    this._xMaxNum = brush.width;
                    this._yEndNum = brush.height / 2 + 10;
                    this.curShape.graphics.lineStyle(this.paintType.weightNum, this.paintType.colorNum, this.paintType.alphauUm);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.boxSelect:
                    this.touchEnabled = false;
                    this.storeX = this._xNum;
                    this.storeY = this._yNum;
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.onPanMove = function (evt) {
            if (!this.curShape || this.curShape.isDrawFinish) {
                return;
            }
            switch (this._brushType) {
                case drawType.drawSegment: //画直线段
                    var brush = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush) {
                        return;
                    }
                    var geNum = Math.round((evt.localX - this._xNum) / 68);
                    var sendData = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum };
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, sendData);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    this.curShape.graphics.lineTo(evt.localX, this._yNum + 20);
                    this._xEndNum = evt.localX;
                    break;
                case drawType.drawLineSegment: //画虚线段
                    var brush1 = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush1) {
                        return;
                    }
                    var geNum1 = Math.round((evt.localX - this._xNum) / 68);
                    var sendData1 = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum1 };
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, sendData1);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    this.curShape.graphics.lineTo(evt.localX, this._yNum + 20);
                    this._xEndNum = evt.localX;
                    break;
                case drawType.subSection: //分段
                    if (!this._parentBrush || !this.curShape) {
                        return;
                    }
                    this.curShape.drwaChart(this.brushType, false);
                    break;
                case drawType.bracket: //括号
                    var len = 0;
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    this.width = len;
                    var fen = len / 6;
                    this.curShape.fenNum = fen;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow: //箭头
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) < Math.abs(this._yNum - this._yEndNum)) {
                        return;
                    }
                    this.curShape.graphics.lineTo(this._xNum, evt.stageY - GlobalData.canvasTop);
                    this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    break;
                case drawType.lineSegment: //虚线
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) < Math.abs(this._yNum - this._yEndNum)) {
                        return;
                    }
                    this.curShape.graphics.lineTo(this._xNum, evt.stageY - GlobalData.canvasTop);
                    this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    break;
                case drawType.painting: //画笔
                    this.drawPaint(evt);
                    break;
                case drawType.flupaint: //荧光笔
                    this.curShape.graphics.clear();
                    this.curShape.graphics.beginFill(this.paintType.colorNum, 0.3);
                    this._xEndNum = evt.localX;
                    if (evt.localX > this._xMaxNum) {
                        this._xEndNum = this._xMaxNum;
                    }
                    this.curShape.graphics.drawRect(this._xNum, this._yNum, this._xEndNum - this._xNum, this._yEndNum - this._yNum);
                    break;
                case drawType.boxSelect:
                    this._xEndNum = evt.localX;
                    this._yEndNum = evt.localY;
                    if (evt.localX < this.storeX) {
                        this._xNum = evt.localX;
                        this._xEndNum = this.storeX;
                    }
                    if (evt.localY < this.storeY) {
                        this._yNum = evt.localY;
                        this._yEndNum = this.storeY;
                    }
                    var wNum = Math.abs(this._xEndNum - this._xNum);
                    var hNum = Math.abs(this._yEndNum - this._yNum);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.beginFill(0xE6F3FA, 0);
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    this.curShape.graphics.drawRect(this._xNum, this._yNum, wNum, hNum);
                    this.curShape.graphics.endFill();
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.onPanEnd = function (evt) {
            if (!this.curShape)
                return;
            switch (this._brushType) {
                case drawType.drawSegment: //画直线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    var brush = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    var hitType = game.GameScript.getInstance().judgeBrushHit(this);
                    if (hitType == 1 || hitType == 2 || this.width < 68) {
                        if (this.width < 68) {
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip" + hitType);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    var chaX = evt.stageX - GlobalData.canvasLeft;
                    var ppp = game.GameScript.getInstance().getMinPoit(chaX, this._yNum, false);
                    if (ppp) {
                        this._xEndNum = ppp.x;
                        this.width = this._xEndNum - this._xNum;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.drawLineSegment: //画虚线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    var brush1 = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush1) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    var hitTypeLine = game.GameScript.getInstance().judgeBrushHit(this);
                    if (this.width < 68 || hitTypeLine == 1 || hitTypeLine == 2) {
                        if (hitTypeLine == 1 || hitTypeLine == 2) {
                            TipsUtils.showTipsFromCenter("tip" + hitTypeLine);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    var ppp1 = game.GameScript.getInstance().getMinPoit(this._xEndNum, this._yNum, false);
                    if (ppp1) {
                        this._xEndNum = ppp1.x;
                        this.width = this._xEndNum - this._xNum;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.subSection: //分段
                    if (!this._parentBrush || !this.curShape) {
                        return;
                    }
                    this.rateNum_x = this.x / this.parent.width;
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.bracket: //括号
                    var len = 0;
                    this.curShape.drawBrackMask(false, this.parent);
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    if (len < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.width = len;
                    var fen = len / 6;
                    this.curShape.fenNum = fen;
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow: //箭头
                    this.x = this._xNum - 20;
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) >= Math.abs(this._yNum - this._yEndNum)) {
                        this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    }
                    if (this._yNum < this._yEndNum) { //向下
                        this.y = this._yNum;
                    }
                    else {
                        // this.x = this._xNum - 20;
                        this.y = this._yEndNum;
                    }
                    this.width = 40;
                    this.height = Math.abs(this._yNum - this._yEndNum);
                    if (this.height < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.curShape.drawArrow(this._xNum, this._yNum, this._xNum, this._yEndNum);
                    break;
                case drawType.lineSegment: //虚线
                    this.x = this._xNum;
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) >= Math.abs(this._yNum - this._yEndNum)) {
                        this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    }
                    if (this._yNum < this._yEndNum) {
                        this.y = this._yNum;
                    }
                    else {
                        this.y = this._yEndNum;
                    }
                    this.width = 6;
                    this.height = Math.abs(this._yNum - this._yEndNum);
                    if (this.height < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.painting: //画笔
                    this.drawPaint(evt);
                    break;
                case drawType.flupaint: //荧光笔
                    this._xEndNum = game.GameScript.getInstance().setBrackPos(evt.localX, this.parent);
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = this._xEndNum - this._xNum;
                    this.height = this.yEndNum - this._yNum;
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(1, this.paintType.colorNum, 0.3);
                    this.curShape.graphics.beginFill(this.paintType.colorNum, 0.3);
                    this.curShape.graphics.drawRect(0, 0, this.width, this.height);
                    this.curShape.graphics.endFill();
                    break;
                case drawType.boxSelect:
                    this._xEndNum = evt.localX;
                    this._yEndNum = evt.localY;
                    if (evt.localX < this.storeX) {
                        this._xNum = evt.localX;
                        this._xEndNum = this.storeX;
                    }
                    if (evt.localY < this.storeY) {
                        this._yNum = evt.localY;
                        this._yEndNum = this.storeY;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = Math.abs(this._xEndNum - this._xNum);
                    this.height = Math.abs(this._yEndNum - this._yNum);
                    game.GameScript.getInstance().removeCheckBrush(this);
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.judgeChangeType = function (evt) {
            if (Math.abs(evt.stageX - this.XTouch) < 5) {
                return;
            }
            if (this.isMoveLine) {
                this.moveLinePos(evt);
            }
            else {
                if (this.brushType == drawType.drawSegment) {
                    var isHas = game.GameScript.getInstance().isHasChild(this);
                    if (isHas) {
                        return;
                    }
                }
                this.tractionLine(evt);
            }
        };
        PaintBrush.prototype.judgeChangeBrack = function (evt) {
            if (this.isMoveLine) {
                this.moveBrack(evt);
            }
            else {
                this.tractionBrack(evt);
            }
        };
        PaintBrush.prototype.tractionLine = function (evt) {
            var addNum = 0;
            if (!this.curShape)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    var baiX = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                }
                else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
            }
            else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                }
                else {
                    this.testSp.width += addNum;
                }
            }
            var bool = game.GameScript.getInstance().hitSegment(this.testSp);
            if (bool) {
                return;
            }
            else {
                this.width = this.testSp.width;
                this.x = this.testSp.x;
                if (!this.isTouch) {
                    var startX = this.x;
                    var endX = this.x + this.width;
                    var ppp = null;
                    var chaL = 0;
                    if (this.isMoveLeft) {
                        ppp = game.GameScript.getInstance().getMinPoit(startX, this.y + 60, false);
                        chaL = startX - ppp.x;
                        this.width += chaL;
                        this.x = ppp.x;
                    }
                    else {
                        ppp = game.GameScript.getInstance().getMinPoit(endX, this.y + 60, false);
                        chaL = ppp.x - endX;
                        this.width += chaL;
                    }
                }
                this.curShape.drwaChart(this._brushType, false);
                this.tractionChild();
            }
        };
        PaintBrush.prototype.tractionChild = function () {
            for (var i = 0; i < this.numChildren; i++) {
                var pain = this.getChildAt(i);
                if (pain.hasOwnProperty("_brushType")) {
                    if (pain._brushType == drawType.subSection) {
                        pain.x = this.width * pain.rateNum_x;
                    }
                    var bool = Global.checkArr([3, 7], pain._brushType);
                    if (bool) {
                        pain.x = this.width * pain.rateNum_x;
                        pain.width = this.width * pain.rateNum_w;
                        if (pain._brushType == drawType.flupaint) {
                            pain.curShape.drwaChart(pain._brushType, false);
                        }
                        else {
                            pain.curShape.drawBrack();
                        }
                    }
                }
            }
        };
        PaintBrush.prototype.moveLinePos = function (evt) {
            if (game.GameScript.getInstance().getCanMove()) {
                this.x = this.storeX + (evt.stageX - this.XTouch);
                this.y = this.storeY + (evt.stageY - this.YTouch);
                if (!this.isTouch) {
                    var bool = Global.checkArr([0, 1], this._brushType);
                    if (bool) {
                        var reObj = game.GameScript.getInstance().judgeLinePos(this);
                        if (typeof (reObj) == "number") {
                            if (reObj == 1 || reObj == 2) {
                                if (Math.abs(this.x - this.storeX) > 20) {
                                    TipsUtils.showTipsFromCenter("tip" + reObj);
                                }
                                this.x = this.storeX;
                                this.y = this.storeY;
                            }
                            else {
                                var ppp = game.GameScript.getInstance().getMinPoit(this.x, this.y + 60, false);
                                this.x = ppp.x;
                                this.y = ppp.y - 60 + 10;
                            }
                        }
                        else {
                            if (this.x > reObj.x) {
                                this.x = reObj.x + reObj.width;
                                this.y = reObj.y;
                            }
                            else {
                                this.x = reObj.x - this.width;
                                this.y = reObj.y;
                            }
                        }
                    }
                }
            }
        };
        PaintBrush.prototype.moveBrack = function (evt) {
            if (!this.curShape)
                return;
            this.x = this.storeX + (evt.stageX - this.XTouch);
            this.y = this.storeY + (evt.stageY - this.YTouch);
            var maxX = GlobalData.canvasWid - this.parent.x - this.width - 10;
            if (this.y < 0) {
                this.y = 0;
            }
            if (this.y > this.parent.height - this.height) {
                this.y = this.parent.height / 2 + 20;
            }
            if (this.x < -this.parent.x + 10) {
                this.x = -this.parent.x + 10;
            }
            if (this.x > maxX) {
                this.x = maxX;
            }
            if (this.isTouch == false) {
                var bool = game.GameScript.getInstance().judgeBrackHit(this);
                if (bool) {
                    this.x = this.storeX;
                    this.y = this.storeY;
                }
                else {
                    if (this.y > this.parent.height / 2) {
                        this.y = this.parent.height / 2 + 20;
                        this.curShape.scaleYNum = 1;
                    }
                    else {
                        this.y = 0;
                        this.curShape.scaleYNum = -1;
                    }
                    this.curShape.drawBrack();
                }
            }
        };
        PaintBrush.prototype.tractionBrack = function (evt) {
            if (!this.isTouch || !this.curShape || this.isMoveLine == true)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            var addNum = 0;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    var baiX = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                }
                else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
                var minX = this.parent.x - 10;
                if (this.testSp.x < 0 && Math.abs(this.testSp.x) > minX) {
                    return;
                }
            }
            else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                }
                else {
                    this.testSp.width += addNum;
                }
                if (this.testSp.x + this.parent.x + this.testSp.width > GlobalData.canvasWid) {
                    return;
                }
            }
            this.x = this.testSp.x;
            this.width = this.testSp.width;
            this.curShape.fenNum = this.width / 6;
            this.curShape.drawBrack();
        };
        PaintBrush.prototype.drawPaint = function (evt) {
            var curX = evt.stageX - GlobalData.canvasLeft;
            var curY = evt.stageY - GlobalData.canvasTop;
            if (curX < GlobalData.canvasLeft) {
                curX = GlobalData.canvasLeft;
            }
            if (curX > GlobalData.canvasWid + GlobalData.canvasLeft) {
                curX = GlobalData.canvasWid + GlobalData.canvasLeft;
            }
            if (curY < GlobalData.canvasTop) {
                curY = GlobalData.canvasTop;
            }
            if (curY > GlobalData.canvasHei + GlobalData.canvasTop) {
                curY = GlobalData.canvasHei + GlobalData.canvasTop;
            }
            this.setPaintRext(curX, curY);
            this.curShape.graphics.lineTo(curX, curY);
        };
        PaintBrush.prototype.resetPos = function () {
            this.x = this.storeX;
            this.y = this.storeY;
        };
        PaintBrush.prototype.childBrush = function (evt, isAdd) {
            var vo = new SenVO();
            var pt = new egret.Point();
            pt.x = (isAdd) ? evt.localX : evt.stageX;
            pt.y = (isAdd) ? evt.localY : evt.stageY;
            vo.brush = this;
            vo.pt = pt;
            vo.isChild = isAdd;
            game.AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_BRUSH, vo);
        };
        PaintBrush.prototype.subsection = function (parentBrush, fenNum, index) {
            this.createShape();
            var fen = parentBrush.width / fenNum;
            this._xNum = fen * index - 4;
            this._yNum = parentBrush.height / 2 - 10;
            this.x = this._xNum;
            this.y = this._yNum;
            this.width = 8;
            this.height = 20;
            this.rateNum_x = this.x / this.parent.width;
            this.curShape.drwaChart(this._brushType, false);
        };
        PaintBrush.prototype.copySegment = function (brush) {
            this.createShape();
            this.width = brush.width;
            this.height = 120;
            if (this.width < 100) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                return;
            }
            this.curShape.drwaChart(this._brushType, true);
        };
        PaintBrush.prototype.setMaskLight = function (evt) {
            //记录起始坐标
            this.stoneW = this.width;
            this.storeX = this.x;
            this.storeY = this.y;
            //记录移动坐标
            this.XTouch = parseInt(evt.stageX + "");
            this.YTouch = evt.stageY;
            this._beginTouchX = evt.localX;
            this._beginTouchY = evt.localY;
            this._endTouchX = evt.localX;
            this._endTOuchY = evt.localY;
            this.curShape.isLight = true;
            GlobalData.paintVO.setStype([{ "curCheckBrush": this._brushName }]);
            game.AppFacade.getInstance().sendNotification(NoficationConfig.RESET_CHECKBRUSH, this);
            switch (this.brushType) {
                case drawType.drawSegment:
                    var recVo = new RectVO();
                    recVo._xNum = this.x;
                    recVo._yNum = this.y;
                    recVo._wNum = this.width;
                    recVo._hNum = this.height;
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    if (egret.getTimer() - this.onceTouch < 300) {
                        if (this.curShape) {
                            this.curShape.showclickShow();
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_SUBVIEW, recVo);
                    }
                    this.onceTouch = egret.getTimer();
                    break;
                case drawType.drawLineSegment:
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
                case drawType.bracket:
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        var curX = this.parent.x + this.x;
                        if (targeX <= curX + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
            }
        };
        PaintBrush.prototype.resetMaskLight = function () {
            if (this.curShape) {
                this.curShape.isLight = false;
            }
        };
        PaintBrush.prototype.removeBrackMask = function () {
            if (this.curShape) {
                this.curShape.drawBrackMask(false);
            }
        };
        PaintBrush.prototype.drawBrakMask = function (row) {
            if (this.curShape) {
                this.curShape.drawBrackMoveMask(row, this);
            }
        };
        Object.defineProperty(PaintBrush.prototype, "shapeScale", {
            get: function () {
                return this.curShape.scaleYNum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "brushName", {
            get: function () {
                return this._brushName;
            },
            set: function (str) {
                this._brushName = "";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "xNum", {
            get: function () {
                return this._xNum;
            },
            set: function (num) {
                this._xNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "yNum", {
            get: function () {
                return this._yNum;
            },
            set: function (num) {
                this._yNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "xEndNum", {
            get: function () {
                return this._xEndNum;
            },
            set: function (num) {
                this._xEndNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "yEndNum", {
            get: function () {
                return this._yEndNum;
            },
            set: function (num) {
                this._yEndNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "parentBrush", {
            get: function () {
                return this._parentBrush;
            },
            set: function (vo) {
                this._parentBrush = vo;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "brushType", {
            get: function () {
                return this._brushType;
            },
            enumerable: false,
            configurable: true
        });
        PaintBrush.prototype.getCurShape = function () {
            return this.curShape;
        };
        PaintBrush.prototype.destorySelf = function () {
            if (this.curShape && this.curShape.parent) {
                this.curShape.removeImg();
                this.curShape.graphics.clear();
                this.curShape.parent.removeChild(this.curShape);
            }
            this.curShape = null;
            this.paintType = null;
            this._brushName = "";
            this.removeChildren();
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.movedBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.endedBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outSideBrush, this);
            this.removeEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.destorySelf, this);
            if (this && this.parent) {
                this.parent.removeChild(this);
            }
        };
        PaintBrush.prototype.createShape = function () {
            this.curShape = new game.ShapeUnit();
            this.curShape.curName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + this.paintType.typeNum + "";
            this.curShape.drawType = this._brushType;
            this.curShape.isDrawFinish = false;
            this.curShape.isLight = false;
            this.curShape.color = this.paintType.colorNum;
            this.addChild(this.curShape);
        };
        PaintBrush.prototype.drawChart = function (type, rec) {
            this.createShape();
            switch (type) {
                case drawType.drawSegment:
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.drawLineSegment:
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.subSection:
                    this.rateNum_x = this.x / this.parent.width;
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.bracket:
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.scaleYNum = rec._scaleNum;
                    this.curShape.fenNum = rec._wNum / 6;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow:
                    this.curShape.drawArrow(this._xNum, this._yNum, this._xNum, this._yEndNum);
                    break;
                case drawType.lineSegment:
                    this.curShape.drwaChart(type, false);
                    break;
            }
        };
        PaintBrush.prototype.setPaintRext = function (xNum, yNum) {
            if (xNum < this._xNum) {
                this._xNum = xNum;
            }
            if (xNum > this._xEndNum) {
                this._xEndNum = xNum;
            }
            if (yNum < this._yNum) {
                this._yNum = yNum;
            }
            if (yNum > this._yEndNum) {
                this._yEndNum = yNum;
            }
        };
        return PaintBrush;
    }(eui.Group));
    game.PaintBrush = PaintBrush;
    __reflect(PaintBrush.prototype,"game.PaintBrush",["BrushInterface"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/main/SeniorComponent.ts":
/***/ (function(module, exports) {

var SeniorComponent = /** @class */ (function (_super) {
    __extends(SeniorComponent, _super);
    function SeniorComponent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "SeniorComponentSkin";
        return _this;
    }
    SeniorComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SeniorComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SeniorComponent.prototype.loadComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    SeniorComponent.prototype.initShow = function () {
        this.segment.setBtnType(drawType.drawSegment, "segment");
        this.lineSegment.setBtnType(drawType.drawLineSegment, "lineSegment");
        this.subSection.setBtnType(drawType.subSection, "subSection");
        this.bracket.setBtnType(drawType.bracket, "bracket");
        this.arrow.setBtnType(drawType.drawArrow, "arrow");
        this.dottedLine.setBtnType(drawType.lineSegment, "dottedLine");
        this.painting.setBtnType(drawType.painting, "painting");
        this.flupaint.setBtnType(drawType.flupaint, "flupaint");
        this.btn_boxSelect.setBtnType(drawType.boxSelect, "btn_boxSelect");
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
        this.btn_recall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.recall, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
    };
    SeniorComponent.prototype.recall = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.RECALL_BRUSH);
    };
    SeniorComponent.prototype.reset = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESETVIEW);
    };
    SeniorComponent.prototype.setRestStatus = function (bool) {
        this.btn_recall.enabled = bool;
    };
    SeniorComponent.prototype.resetShow = function () {
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
    };
    return SeniorComponent;
}(eui.Component));
window["SeniorComponent"] = SeniorComponent;
__reflect(SeniorComponent.prototype,"SeniorComponent",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/core/view/main/ShapeUnit.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var ShapeUnit = /** @class */ (function (_super) {
        __extends(ShapeUnit, _super);
        function ShapeUnit() {
            var _this = _super.call(this) || this;
            _this._startX = 0;
            _this._startY = 0;
            _this._endX = 0;
            _this._endY = 0;
            _this._maxX = 0;
            _this._widthNum = 0;
            _this._heightNum = 0;
            _this._fenNum = 0;
            _this._curName = "";
            _this._drawType = 0;
            _this._scalexY = 0;
            /** 是否绘制完成 */
            _this._isDrawFinish = false;
            /** 是否高亮选中 */
            _this._isLight = false;
            /** 绘制高亮画笔 */
            _this.maskLight = null;
            _this.brackMask = null;
            _this.rangeImg = null;
            _this.cirArr = [];
            _this.drawColor = 0;
            _this.isCheckColor = 0x241E56;
            _this.outNum = -1;
            return _this;
        }
        Object.defineProperty(ShapeUnit.prototype, "curName", {
            get: function () {
                return this._curName;
            },
            set: function (str) {
                this._curName = str;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startPos", {
            set: function (point) {
                this._startX = point.x;
                this._startY = point.y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endPos", {
            set: function (point) {
                this._endX = point.x;
                this._endY = point.y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startX", {
            get: function () {
                return this._startX;
            },
            set: function (num) {
                this._startX = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startY", {
            get: function () {
                return this._startY;
            },
            set: function (num) {
                this._startY = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endX", {
            get: function () {
                return this._endX;
            },
            set: function (num) {
                this._endX = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endY", {
            get: function () {
                return this._endY;
            },
            set: function (num) {
                this._endY = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "maxX", {
            get: function () {
                return this._maxX;
            },
            set: function (num) {
                this._maxX = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "widthNum", {
            get: function () {
                return this._widthNum;
            },
            set: function (num) {
                this._widthNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "heiNum", {
            get: function () {
                return this._heightNum;
            },
            set: function (num) {
                this._heightNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "drawType", {
            get: function () {
                return this._drawType;
            },
            set: function (type) {
                this._drawType = type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "isDrawFinish", {
            get: function () {
                return this._isDrawFinish;
            },
            set: function (bool) {
                this._isDrawFinish = bool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "isLight", {
            get: function () {
                return this._isLight;
            },
            set: function (bool) {
                this._isLight = bool;
                this.setMaskLight();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "scaleYNum", {
            get: function () {
                return this._scalexY;
            },
            set: function (num) {
                this._scalexY = num;
            },
            enumerable: false,
            configurable: true
        });
        ShapeUnit.prototype.drwaChart = function (typeNum, isLight) {
            var _this = this;
            switch (typeNum) {
                case drawType.drawSegment:
                    this.graphics.clear();
                    if (isLight) {
                        this.graphics.lineStyle(10, 0x028DFF, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                        this.outNum = egret.setTimeout(function () {
                            egret.clearTimeout(_this.outNum);
                            _this.graphics.clear();
                            _this.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                            _this.graphics.moveTo(0, _this.parent.height / 2 - 10);
                            _this.graphics.lineTo(0, _this.parent.height / 2 + 10);
                            _this.graphics.lineTo(_this.parent.width, _this.parent.height / 2 + 10);
                            _this.graphics.lineTo(_this.parent.width, _this.parent.height / 2 - 10);
                            _this.graphics.endFill();
                        }, this, 300);
                    }
                    else {
                        this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    }
                    this.graphics.moveTo(0, this.parent.height / 2 - 10);
                    this.graphics.lineTo(0, this.parent.height / 2 + 10);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 + 10);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 - 10);
                    this.graphics.endFill();
                    this.resetLightSize();
                    break;
                case drawType.drawLineSegment:
                    this.graphics.clear();
                    this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.graphics.moveTo(0, this.parent.height / 2 - 10);
                    this.graphics.lineTo(0, this.parent.height / 2 + 10);
                    this.graphics.lineStyle(10, this.isCheckColor, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 + 10);
                    this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 - 10);
                    this.graphics.endFill();
                    this.resetLightSize();
                    break;
                case drawType.subSection:
                    this.graphics.clear();
                    this.graphics.beginFill(0x241E56, 1);
                    this.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                    this.graphics.endFill();
                    break;
                case drawType.lineSegment:
                    this.graphics.clear();
                    this.graphics.lineStyle(6, 0x44BDFC, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [20, 6]);
                    this.graphics.moveTo(0, 0);
                    this.graphics.lineTo(0, this.parent.height);
                    this.graphics.endFill();
                    break;
                case drawType.flupaint:
                    this.graphics.clear();
                    this.graphics.beginFill(this.drawColor, 0.3);
                    this.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                    this.graphics.endFill();
                    break;
                default:
                    break;
            }
        };
        ShapeUnit.prototype.drawBrack = function () {
            this._fenNum = this.parent.width / 6;
            this.graphics.clear();
            this.graphics.lineStyle(4, 0x000000, 1);
            var startY = 0;
            var endY = 0;
            if (this.parent.width < 200) {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = 20;
            }
            else {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = (this.scaleYNum < 0) ? 0 : this.parent.height;
            }
            this.graphics.moveTo(0, startY);
            this.graphics.cubicCurveTo(0, endY, //1
            this._fenNum * 3 - this._fenNum / 2, startY, //2
            this._fenNum * 3, endY);
            this.graphics.moveTo(this._fenNum * 3, endY);
            this.graphics.cubicCurveTo(this._fenNum * 4 - this._fenNum / 2, startY, //b
            this._fenNum * 6, endY, //a
            this._fenNum * 6, startY);
            this.graphics.endFill();
            this.resetLightSize();
        };
        ShapeUnit.prototype.drawBrackMask = function (isShow, brush) {
            if (isShow) {
                if (!this.brackMask) {
                    this.brackMask = new egret.Shape();
                    brush.addChild(this.brackMask);
                }
                this.brackMask.graphics.clear();
                this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
                this.brackMask.graphics.drawRect(0, this.parent.y, brush.width, 40);
                this.brackMask.graphics.endFill();
            }
            else {
                if (this.brackMask) {
                    this.brackMask.graphics.clear();
                    if (this.brackMask.parent) {
                        this.brackMask.parent.removeChild(this.brackMask);
                    }
                }
                this.brackMask = null;
            }
        };
        ShapeUnit.prototype.drawBrackMoveMask = function (row, brush) {
            if (!this.brackMask) {
                this.brackMask = new egret.Shape();
                brush.addChild(this.brackMask);
            }
            this.brackMask.graphics.clear();
            this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
            if (row == 0) {
                this.brackMask.graphics.drawRect(0, 0, brush.width, 40);
            }
            else {
                this.brackMask.graphics.drawRect(0, brush.height / 2 + 22, brush.width, 40);
            }
            this.brackMask.graphics.endFill();
        };
        ShapeUnit.prototype.drawArrow = function (x1, y1, x2, y2) {
            this.graphics.clear();
            this.graphics.lineStyle(8, 0xFF443A, 1);
            if (y1 < y2) { //向下
                this.createRang(1);
                this.graphics.moveTo(20, 0);
                this.graphics.lineTo(20, this.parent.height - this.rangeImg.height);
                this.graphics.endFill();
            }
            else {
                this.createRang(0);
                this.graphics.moveTo(20, this.parent.height);
                this.graphics.lineTo(20, this.rangeImg.height);
                this.graphics.endFill();
            }
        };
        ShapeUnit.prototype.createRang = function (row) {
            if (!this.rangeImg) {
                this.rangeImg = new eui.Image();
            }
            this.parent.addChild(this.rangeImg);
            this.rangeImg.source = RES.getRes("flu_range_png");
            this.rangeImg.anchorOffsetX = this.rangeImg.width / 2;
            this.rangeImg.anchorOffsetY = this.rangeImg.height / 2;
            if (row == 1) { //向下
                this.rangeImg.rotation = 180;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.parent.height - this.rangeImg.height / 2;
            }
            else { //向上
                this.rangeImg.rotation = 0;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.rangeImg.height / 2;
            }
        };
        ShapeUnit.prototype.setMaskLight = function () {
            var into = Global.checkArr([0, 1], this._drawType);
            if (this._isLight) {
                if (this.maskLight) {
                    return;
                }
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                var into_1 = Global.checkArr([0, 1, 3], this._drawType);
                if (into_1) {
                    this.createCir();
                }
                if (into_1) {
                    this.isCheckColor = 0x028DFF;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
            }
            else {
                if (into) {
                    this.isCheckColor = 0x241E56;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
                this.removeCir();
                if (this.maskLight && this.maskLight.parent) {
                    this.maskLight.graphics.clear();
                    this.maskLight.parent.removeChild(this.maskLight);
                }
                this.maskLight = null;
            }
        };
        ShapeUnit.prototype.resetLightSize = function () {
            if (this.maskLight) {
                this.maskLight.graphics.clear();
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                this.setCirPos();
            }
        };
        ShapeUnit.prototype.createCir = function () {
            this.cirArr = [];
            for (var i = 0; i < 6; i++) {
                var cir = new eui.Image();
                cir.source = RES.getRes("flu_cir_png");
                this.parent.addChild(cir);
                this.cirArr.push(cir);
            }
            this.setCirPos();
        };
        ShapeUnit.prototype.setCirPos = function () {
            for (var i = 0; i < this.cirArr.length; i++) {
                var img = this.cirArr[i];
                if (img) {
                    switch (i) {
                        case 0:
                            img.x = -10;
                            img.y = -10;
                            break;
                        case 1:
                            img.x = -10;
                            img.y = this.parent.height / 2 - 10;
                            break;
                        case 2:
                            img.x = -10;
                            img.y = this.parent.height - 10;
                            break;
                        case 3:
                            img.x = this.parent.width - 10;
                            img.y = -10;
                            break;
                        case 4:
                            img.x = this.parent.width - 10;
                            img.y = this.parent.height / 2 - 10;
                            break;
                        case 5:
                            img.x = this.parent.width - 10;
                            img.y = this.parent.height - 10;
                            break;
                    }
                }
            }
        };
        ShapeUnit.prototype.removeCir = function () {
            for (var i = 0; i < this.cirArr.length; i++) {
                var img = this.cirArr[i];
                if (img && img.parent) {
                    img.parent.removeChild(img);
                }
            }
            this.cirArr = [];
        };
        ShapeUnit.prototype.showclickShow = function () {
            this.removeCir();
            if (!this.maskLight) {
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
            }
            this.maskLight.graphics.clear();
            this.maskLight.graphics.beginFill(0xD1F2FE, 0.5);
            this.maskLight.graphics.drawRect(-10, 0, this.parent.width + 20, this.parent.height);
            this.maskLight.graphics.endFill();
        };
        Object.defineProperty(ShapeUnit.prototype, "fenNum", {
            set: function (num) {
                this._fenNum = num;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "color", {
            set: function (coloNum) {
                this.drawColor = coloNum;
            },
            enumerable: false,
            configurable: true
        });
        ShapeUnit.prototype.removeImg = function () {
            if (this.rangeImg && this.rangeImg.parent) {
                this.rangeImg.parent.removeChild(this.rangeImg);
            }
            this.rangeImg = null;
        };
        return ShapeUnit;
    }(egret.Shape));
    game.ShapeUnit = ShapeUnit;
    __reflect(ShapeUnit.prototype,"game.ShapeUnit",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/panel/BaseMediator.ts":
/***/ (function(module, exports) {

/**
  * 面板mediator基类
  * todo:面板特效，全屏+非全屏蒙层
  */
var BaseMediator = /** @class */ (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ""; }
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.isInitialized = false; //是否初始化
        _this.isPopUp = false; //是否已经显示
        _this.ui = null; //UI容器
        _this.w = 0;
        _this.h = 0;
        _this.w = GameConfig.curWidth();
        _this.h = GameConfig.curHeight();
        return _this;
    }
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BaseMediator.prototype.showUI = function (ui, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
    };
    /**
     * 面板弹出之前处理
     */
    BaseMediator.prototype.beforShow = function () {
    };
    /**
     * 初始化面板ui
     */
    BaseMediator.prototype.initUI = function () {
    };
    /**
     * 初始化面板数据
     */
    BaseMediator.prototype.initData = function () {
    };
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BaseMediator.prototype.closePanel = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    };
    /**
     * 面板关闭后需要销毁的对象
     */
    BaseMediator.prototype.destroy = function () {
    };
    /**
     * 面板是否弹出状态
     */
    BaseMediator.prototype.getIsPopUp = function () {
        return this.isPopUp;
    };
    /**
     * 面板是否初始化完毕
     */
    BaseMediator.prototype.getIsInit = function () {
        return this.isInitialized;
    };
    // 获取面板宽度
    BaseMediator.prototype.getWidth = function () {
        return this.ui.width;
    };
    // 获取面板高度
    BaseMediator.prototype.getHeight = function () {
        return this.ui.height;
    };
    return BaseMediator;
}(puremvc.Mediator));
window["BaseMediator"] = BaseMediator;
__reflect(BaseMediator.prototype,"BaseMediator",["puremvc.IMediator"]); 


/***/ }),

/***/ "./src/core/view/panel/BrushInterface.ts":
/***/ (function(module, exports) {

var drawType;
(function (drawType) {
    drawType[drawType["drawSegment"] = 0] = "drawSegment";
    drawType[drawType["drawLineSegment"] = 1] = "drawLineSegment";
    drawType[drawType["subSection"] = 2] = "subSection";
    drawType[drawType["bracket"] = 3] = "bracket";
    drawType[drawType["drawArrow"] = 4] = "drawArrow";
    drawType[drawType["lineSegment"] = 5] = "lineSegment";
    drawType[drawType["painting"] = 6] = "painting";
    drawType[drawType["flupaint"] = 7] = "flupaint";
    drawType[drawType["boxSelect"] = 8] = "boxSelect";
})(drawType || (drawType = {}));
window["drawType"] = drawType;


/***/ }),

/***/ "./src/core/view/panel/PopUpManager.ts":
/***/ (function(module, exports) {

var PopUpManager = window['PopUpManager']; 
/**
  * 面板弹出管理类
  */
var PopUpManager;
(function (PopUpManager) {
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function addPopUp(panel, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        if (GameLayerManager.gameLayer().panelLayer.contains(panel)) { //判断是否包含panel
            return;
        }
        panel.scaleX = 1;
        panel.scaleY = 1;
        panel.x = 0;
        panel.y = 0;
        panel.alpha = 1;
        if (dark) {
            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.3);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth();
            this.darkSprite.height = GameConfig.curHeight();
            if (!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
            }
            this.darkSprite.touchEnabled = true;
            egret.Tween.get(this.darkSprite).to({ alpha: 1 }, 150);
            this.darkSprite.visible = true;
        }
        GameLayerManager.gameLayer().panelLayer.addChild(panel);
        GameConfig.curPanel = panel;
        if (popUpWidth != 0) {
            panel.x = GameConfig.curWidth() / 2 - popUpWidth / 2;
            panel.y = GameConfig.curHeight() / 2 - popUpHeight / 2;
        }
        else {
            popUpWidth = panel.width;
            popUpHeight = panel.height;
        }
        //以下是弹窗动画
        var leftX = GameConfig.curWidth() / 2 - popUpWidth / 2;
        var upY = GameConfig.curHeight() / 2 - popUpHeight / 2;
        switch (effectType) {
            case 0:
                break;
            case 1:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 300, egret.Ease.backOut);
                break;
            case 2:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                if (isAlert) {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 4:
                if (isAlert) {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 5:
                if (isAlert) {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 6:
                if (isAlert) {
                    panel.y = GameConfig.curHeight();
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            default:
                break;
        }
    }
    PopUpManager.addPopUp = addPopUp;
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function removePopUp(panel, effectType) {
        if (effectType === void 0) { effectType = 0; }
        var onComplete = function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                GameLayerManager.gameLayer().panelLayer.removeChild(this.darkSprite);
            }
        };
        if (this.darkSprite) {
            egret.Tween.get(this.darkSprite).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        //以下是弹窗动画
        switch (effectType) {
            case 0:
                break;
            case 1:
                egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                break;
            case 2:
                break;
            case 3:
                egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 4:
                egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 5:
                egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicOut);
                break;
            case 6:
                egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                break;
            default:
                break;
        }
        var waitTime = 500;
        if (effectType == 0) {
            waitTime = 0;
        }
        egret.setTimeout(function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(panel)) { //判断是否包含panel
                GameLayerManager.gameLayer().panelLayer.removeChild(panel);
            }
        }, this, waitTime);
    }
    PopUpManager.removePopUp = removePopUp;
})(PopUpManager || (PopUpManager = {}));
window["PopUpManager"] = PopUpManager;


/***/ }),

/***/ "./src/core/view/panel/mediator/GameResetMediator.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 重置面板
  */
var game;
(function (game) {
    var GameResetMediator = /** @class */ (function (_super) {
        __extends(GameResetMediator, _super);
        function GameResetMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameResetMediator.NAME, viewComponent) || this;
            _this.gameResetPanel = new game.GameResetPanel();
            return _this;
        }
        GameResetMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_RESETVIEW,
                NoficationConfig.CLOSE_RESETVIEW
            ];
        };
        GameResetMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_RESETVIEW: {
                    this.showUI(this.gameResetPanel, true, 576, 276, 1);
                    break;
                }
                case NoficationConfig.CLOSE_RESETVIEW: {
                    this.closeButtonClick();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        GameResetMediator.prototype.initUI = function () {
            this.gameResetPanel.label_tip.fontFamily = "fzltch";
            this.gameResetPanel.btn_cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        };
        /**
         * 初始化面板数据
         */
        GameResetMediator.prototype.initData = function () {
        };
        GameResetMediator.prototype.cancle = function () {
            this.closeButtonClick();
        };
        GameResetMediator.prototype.confirm = function () {
            this.closeButtonClick();
            game.AppFacade.getInstance().sendNotification(NoficationConfig.RESET_BRUSH);
        };
        GameResetMediator.prototype.closeButtonClick = function () {
            this.gameResetPanel.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
            this.closePanel(1);
        };
        GameResetMediator.NAME = "GameResetMediator";
        return GameResetMediator;
    }(BaseMediator));
    game.GameResetMediator = GameResetMediator;
    __reflect(GameResetMediator.prototype,"game.GameResetMediator",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/panel/mediator/GameViewMediator.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 游戏主面板
  */
var game;
(function (game) {
    var GameViewMediator = /** @class */ (function (_super) {
        __extends(GameViewMediator, _super);
        function GameViewMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameViewMediator.NAME, viewComponent) || this;
            _this.gameviewPanel = new game.GameViewPanel();
            _this.rightView = null;
            _this.checkBtn = null;
            _this.fluCheck = null;
            _this.moveTip = null;
            return _this;
        }
        GameViewMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_GAMEVIEW,
                NoficationConfig.CLOSE_GAMEVIEW,
                NoficationConfig.CREATE_BRUSH,
                NoficationConfig.REMOVED_BRUSH,
                NoficationConfig.RECALL_BRUSH,
                NoficationConfig.RESET_BRUSH,
                NoficationConfig.RESET_CHECKBRUSH,
                NoficationConfig.OPEN_SUBVIEW,
                NoficationConfig.OPEN_FLUPAINT,
                NoficationConfig.COPY_BRUSH,
                NoficationConfig.CREAT_MOVEBRUSH,
                NoficationConfig.SETSTATUSL_RECAL,
                NoficationConfig.OPEN_MOVETIP
            ];
        };
        GameViewMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_GAMEVIEW: {
                    this.showUI(this.gameviewPanel, false, 0, 0, 0);
                    break;
                }
                case NoficationConfig.CLOSE_GAMEVIEW: {
                    this.closeButtonClick();
                    break;
                }
                case NoficationConfig.CREATE_BRUSH: {
                    this.createBrush(data);
                    break;
                }
                case NoficationConfig.REMOVED_BRUSH: {
                    this.recall();
                    break;
                }
                case NoficationConfig.RECALL_BRUSH: {
                    this.recall();
                    break;
                }
                case NoficationConfig.RESET_BRUSH: {
                    this.resetPaint();
                    break;
                }
                case NoficationConfig.RESET_CHECKBRUSH: {
                    this.resetBrushStatus(data);
                    break;
                }
                case NoficationConfig.OPEN_SUBVIEW: {
                    this.createSubView(data);
                    break;
                }
                case NoficationConfig.OPEN_FLUPAINT: {
                    this.createFLuView(data);
                    break;
                }
                case NoficationConfig.OPEN_MOVETIP: {
                    this.createMoveTip(data);
                    break;
                }
                case NoficationConfig.COPY_BRUSH: {
                    this.copyBrush();
                    break;
                }
                case NoficationConfig.CREAT_MOVEBRUSH: {
                    this.creatMoveBrush(data);
                    break;
                }
                case NoficationConfig.SETSTATUSL_RECAL: {
                    this.setRecall(data);
                    break;
                }
            }
        };
        GameViewMediator.prototype.initUI = function () {
            var wid = this.gameviewPanel.middleLayer.width;
            var hei = this.gameviewPanel.middleLayer.height;
            game.GameScript.getInstance().setTouchSize(wid, hei);
            game.GameScript.getInstance().initGame();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            if (GlobalData.paintVO.gradeType == 1) {
                var senior = new SeniorComponent();
                this.gameviewPanel.group_right.addChild(senior);
                senior.initShow();
                this.rightView = senior;
            }
            else {
                var lowGrade = new LowGradeComponent();
                this.gameviewPanel.group_right.addChild(lowGrade);
                lowGrade.initShow();
                this.rightView = lowGrade;
            }
            this.setRecall(false);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
        };
        GameViewMediator.prototype.initData = function () {
        };
        GameViewMediator.prototype.onPanBegin = function (evt) {
            var vo = game.GameScript.getInstance().onPanBegin(evt);
            this.createBrush(vo);
        };
        GameViewMediator.prototype.onPanMove = function (evt) {
            var brush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                var into = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    }
                    else {
                        brush.judgeChangeType(evt);
                    }
                }
                else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.moveButton(evt);
                    }
                    else {
                        game.GameScript.getInstance().onPanMove(evt);
                    }
                }
            }
            else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.moveButton(evt);
                }
                else {
                    game.GameScript.getInstance().onPanMove(evt);
                }
            }
        };
        /** 不需要载体直接绘制 */
        GameViewMediator.prototype.onPanEnd = function (evt) {
            var brush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                var into = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    }
                    else {
                        brush.judgeChangeType(evt);
                    }
                }
                else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.endButton(evt);
                    }
                    else {
                        game.GameScript.getInstance().onPanEnd(evt);
                    }
                }
            }
            else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.endButton(evt);
                }
                else {
                    game.GameScript.getInstance().onPanEnd(evt);
                }
            }
        };
        GameViewMediator.prototype.onPanOut = function (evt) {
            game.GameScript.getInstance().onPanOut(evt);
        };
        GameViewMediator.prototype.createBrush = function (vo) {
            this.resetBrushStatus();
            var pVo = Global.clonePaintVo(GlobalData.paintVO);
            var brush = new game.PaintBrush(pVo);
            var point = new egret.Point;
            GlobalData.curPaintName = brush.brushName;
            if (vo.isChild) {
                brush.parentBrush = vo.brush;
                point.x = vo.pt.x;
                point.y = vo.pt.y;
                if (pVo.typeNum == drawType.flupaint) {
                    brush.parentBrush.addChildAt(brush, 0);
                }
                else {
                    brush.parentBrush.addChildAt(brush, 1);
                }
            }
            else {
                point.x = vo.pt.x - GlobalData.canvasLeft;
                point.y = vo.pt.y - GlobalData.canvasTop;
                this.gameviewPanel.middleLayer.addChild(brush);
            }
            game.GameScript.getInstance().pushBrush(brush);
            brush.onPanBegin(point, brush.parentBrush);
        };
        /** 撤回 */
        GameViewMediator.prototype.recall = function () {
            game.GameScript.getInstance().recall();
            this.gameviewPanel.topLayer.removeChildren();
        };
        /** 重置 */
        GameViewMediator.prototype.resetPaint = function () {
            game.GameScript.getInstance().resetPaint();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.topLayer.removeChildren();
            if (GlobalData.paintVO.gradeType == 0) {
                var low = this.gameviewPanel.group_right.getChildAt(0);
                if (low) {
                    low.resetShow();
                }
            }
            else {
                var sen = this.gameviewPanel.group_right.getChildAt(0);
                if (sen) {
                    sen.resetShow();
                }
            }
        };
        GameViewMediator.prototype.createSubView = function (vo) {
            this.gameviewPanel.topLayer.removeChildren();
            if (this.gameviewPanel.topLayer.contains(this.checkBtn)) {
                return;
            }
            this.checkBtn = new CommonSubBtn();
            this.gameviewPanel.topLayer.addChild(this.checkBtn);
            this.checkBtn.initData(vo._xNum, vo._yNum, vo._wNum, vo._hNum);
            game.GameScript.getInstance().setCanMove(false);
        };
        GameViewMediator.prototype.createFLuView = function (isShow) {
            var _this = this;
            game.GameScript.getInstance().resetBrushStatus();
            if (isShow) {
                if (this.fluCheck) {
                    var typeNum = this.fluCheck.getTypeNum();
                    if (typeNum == GlobalData.paintVO.typeNum) {
                        this.fluCheck.group_content.alpha = 1;
                        egret.Tween.get(this.fluCheck.group_content).to({ alpha: 0 }, 300).call(function () {
                            _this.gameviewPanel.topLayer.removeChildren();
                            _this.fluCheck = null;
                        }, this);
                        ;
                    }
                    else {
                        this.gameviewPanel.topLayer.removeChildren();
                        this.fluCheck = null;
                        this.fluCheck = new GameCheckFLuView();
                        this.gameviewPanel.topLayer.addChild(this.fluCheck);
                        this.fluCheck.initView();
                    }
                }
                else {
                    this.gameviewPanel.topLayer.removeChildren();
                    this.fluCheck = null;
                    this.fluCheck = new GameCheckFLuView();
                    this.gameviewPanel.topLayer.addChild(this.fluCheck);
                    this.fluCheck.initView();
                }
                game.GameScript.getInstance().setCanMove(false);
            }
            else {
                if (this.fluCheck) {
                    egret.Tween.get(this.fluCheck.group_content).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn).call(function () {
                        _this.gameviewPanel.topLayer.removeChildren();
                        _this.fluCheck = null;
                    }, this);
                    ;
                }
            }
        };
        GameViewMediator.prototype.createMoveTip = function (data) {
            if (data.isShow) {
                if (!this.moveTip) {
                    this.moveTip = new CommonMoveTip();
                    GameLayerManager.gameLayer().loadLayer.addChild(this.moveTip);
                    this.moveTip.initY(data.xN, data.yN, data.num);
                }
                else {
                    this.moveTip.changeView(data.xN, data.yN, data.num);
                }
            }
            else {
                if (this.moveTip && this.moveTip.parent) {
                    this.moveTip.parent.removeChild(this.moveTip);
                }
                this.moveTip = null;
            }
        };
        GameViewMediator.prototype.copyBrush = function () {
            var brushObj = game.GameScript.getInstance().copyBrush();
            if (brushObj) {
                var brush = brushObj.createObj;
                var curBrush = brushObj.copyObj;
                this.gameviewPanel.middleLayer.addChild(brush);
                brush.copySegment(curBrush);
                for (var i = 0; i < curBrush.numChildren; i++) {
                    var sub = curBrush.getChildAt(i);
                    if (sub && sub.brushType == drawType.subSection) {
                        var vo = new PaintVO();
                        vo.typeNum = drawType.subSection;
                        var subBrush = new game.PaintBrush(vo);
                        subBrush.x = sub.x;
                        subBrush.y = sub.y;
                        subBrush.width = sub.width;
                        subBrush.height = sub.height;
                        brush.addChild(subBrush);
                        subBrush.parentBrush = brush;
                        subBrush.drawChart(drawType.subSection);
                        game.GameScript.getInstance().pushBrush(subBrush);
                    }
                }
            }
        };
        GameViewMediator.prototype.creatMoveBrush = function (vo) {
            var pVo = Global.clonePaintVo(GlobalData.paintVO);
            var brush = new game.PaintBrush(pVo);
            switch (vo.brushType) {
                case drawType.drawSegment:
                    brush.width = 68;
                    brush.height = 120;
                    var ppp = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp.x;
                    brush.y = ppp.y - 60 + 5;
                    var hitTypeNum = game.GameScript.getInstance().judgeBrushHit(brush);
                    if (hitTypeNum != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + hitTypeNum);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.drawLineSegment:
                    brush.width = 68;
                    brush.height = 120;
                    var ppp1 = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp1.x;
                    brush.y = ppp1.y - 60 + 5;
                    var reObj = game.GameScript.getInstance().judgeLinePos(brush);
                    if (typeof (reObj) == "number") {
                        if (reObj == 1 || reObj == 2) {
                            brush = null;
                            TipsUtils.showTipsFromCenter("tip" + reObj);
                        }
                        else {
                            this.gameviewPanel.middleLayer.addChild(brush);
                            game.GameScript.getInstance().pushBrush(brush);
                            brush.drawChart(vo.brushType);
                        }
                    }
                    else {
                        brush.x = reObj.x + reObj.width;
                        brush.y = reObj.y;
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.subSection:
                    brush.width = 8;
                    brush.height = 20;
                    brush.x = vo.brushPos.x - 4;
                    brush.y = vo.brushPos.y - 10;
                    var subHit = game.GameScript.getInstance().judgeSubHit(brush);
                    if (!subHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (subHit) == "number") {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + subHit);
                    }
                    else {
                        brush.parentBrush = subHit;
                        brush.x = brush.x - subHit.x;
                        brush.y = subHit.height / 2 - 10;
                        subHit.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.bracket:
                    brush.x = vo.brushPos.x;
                    brush.y = vo.brushPos.y;
                    brush.width = 100;
                    brush.height = 40;
                    var brackHit = game.GameScript.getInstance().judgeBrackHit2(brush);
                    if (!brackHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (brackHit) == "number") {
                        TipsUtils.showTipsFromCenter("tip" + brackHit);
                    }
                    else {
                        var sp = game.GameScript.getInstance().getBrackWid(brackHit, vo.brushPos);
                        brush.x = sp._xNum;
                        brush.y = sp._yNum;
                        brush.width = Math.abs(sp._xEndNum - sp._xNum);
                        brush.height = 40;
                        var isHit = game.GameScript.getInstance().judgeBrackHit3(brush, brackHit, sp);
                        if (isHit) {
                            brush = null;
                            sp = null;
                            TipsUtils.showTipsFromCenter("tip2");
                        }
                        else {
                            brush.xNum = sp._xNum;
                            brush.yNum = sp._yNum;
                            brush.xEndNum = sp._xEndNum;
                            brush.parentBrush = brackHit;
                            brackHit.addChild(brush);
                            game.GameScript.getInstance().pushBrush(brush);
                            brush.drawChart(vo.brushType, sp);
                        }
                    }
                    break;
                case drawType.drawArrow:
                    brush.width = 40;
                    brush.height = 100;
                    brush.x = vo.brushPos.x - 20;
                    brush.y = vo.brushPos.y - 20;
                    brush.xNum = vo.brushPos.x;
                    brush.yNum = brush.y + 100;
                    brush.yEndNum = brush.y;
                    var arrowHit = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (arrowHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + arrowHit);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.lineSegment:
                    brush.x = vo.brushPos.x;
                    brush.y = vo.brushPos.y - 30;
                    brush.width = 6;
                    brush.height = 100;
                    brush.xNum = vo.brushPos.x;
                    brush.yNum = vo.brushPos.y;
                    brush.yEndNum = vo.brushPos.y + 100;
                    var lineHit = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (lineHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + lineHit);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
            }
        };
        GameViewMediator.prototype.resetBrushStatus = function (data) {
            this.gameviewPanel.topLayer.removeChildren();
            game.GameScript.getInstance().resetBrushStatus(data);
        };
        GameViewMediator.prototype.closeButtonClick = function () {
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            this.closePanel(0);
        };
        GameViewMediator.prototype.setRecall = function (bool) {
            this.rightView.setRestStatus(bool);
        };
        GameViewMediator.NAME = "GameViewMediator";
        return GameViewMediator;
    }(BaseMediator));
    game.GameViewMediator = GameViewMediator;
    __reflect(GameViewMediator.prototype,"game.GameViewMediator",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/panel/panel/GameResetPanel.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var GameResetPanel = /** @class */ (function (_super) {
        __extends(GameResetPanel, _super);
        function GameResetPanel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.skinName = "GameResetSkin";
            return _this;
        }
        GameResetPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        };
        GameResetPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return GameResetPanel;
    }(eui.Component));
    game.GameResetPanel = GameResetPanel;
    __reflect(GameResetPanel.prototype,"game.GameResetPanel",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/core/view/panel/panel/GameViewPanel.ts":
/***/ (function(module, exports) {

var game = window['game']; 
var game;
(function (game) {
    var GameViewPanel = /** @class */ (function (_super) {
        __extends(GameViewPanel, _super);
        function GameViewPanel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.skinName = "GameViewSKin";
            return _this;
        }
        GameViewPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        };
        GameViewPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return GameViewPanel;
    }(eui.Component));
    game.GameViewPanel = GameViewPanel;
    __reflect(GameViewPanel.prototype,"game.GameViewPanel",[]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/manager/GameLayerManager.ts":
/***/ (function(module, exports) {

/**
  * 游戏容器类
  *
  */
var FIT_STATE;
(function (FIT_STATE) {
    FIT_STATE[FIT_STATE["FIT_NULL"] = 0] = "FIT_NULL";
    FIT_STATE[FIT_STATE["FIT_W"] = 1] = "FIT_W";
    FIT_STATE[FIT_STATE["FIT_H"] = 2] = "FIT_H";
})(FIT_STATE || (FIT_STATE = {}));
window["FIT_STATE"] = FIT_STATE;
var GameLayerManager = /** @class */ (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        var _this = _super.call(this) || this;
        // 场景层 
        _this.sceneLayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        _this.mainLayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        _this.panelLayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        _this.effectLayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        _this.maskLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.loadLayer = new eui.UILayer();
        _this.mStage = null;
        _this.fitScale = 1;
        _this.fitState = FIT_STATE.FIT_NULL; // 1 适配宽，2 适配高
        _this.init();
        return _this;
    }
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    GameLayerManager.prototype.init = function () {
        this.touchThrough = true;
        this.sceneLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    };
    GameLayerManager.prototype.setStage = function (stage) {
        this.mStage = stage;
        this.mStage.orientation = egret.OrientationMode.LANDSCAPE;
        // 监听尺寸变更
        this.mStage.scaleMode = egret.StageScaleMode.FIXED_WIDE;
        this.mStage.addEventListener(egret.Event.RESIZE, this.resizeChange, this);
        this.autoFit();
    };
    GameLayerManager.prototype.resizeChange = function () {
        this.checkFitState();
        this.changeFitScene();
    };
    GameLayerManager.prototype.autoFit = function () {
        if (this.mStage == null) {
            console.log('error ===== not found stage !!! ');
            return;
        }
        this.mStage.scaleMode = egret.StageScaleMode.SHOW_ALL; //FIXED_WIDE
        this.mStage.setContentSize(GlobalData.designWidth, GlobalData.designHeigh);
        this.checkFitState();
    };
    GameLayerManager.prototype.checkFitState = function () {
        GlobalData.stageWidth = this.mStage.stageWidth;
        var designRate = GlobalData.designHeigh / GlobalData.designWidth;
        var stageRate = this.mStage.stageHeight / this.mStage.stageWidth; // 设计分辨率宽高比
        if (stageRate > designRate) {
            this.fitState = FIT_STATE.FIT_W;
        }
        else {
            this.fitState = FIT_STATE.FIT_H;
        }
    };
    GameLayerManager.prototype.changeFitScene = function () {
        if (this.fitState == FIT_STATE.FIT_W) { // x 超出，缩放x至屏幕大小，调整y坐标居中
            this.fitScale = this.mStage.stageWidth / GlobalData.designWidth;
            if (this) {
                this.scaleX = this.fitScale;
                this.scaleY = this.fitScale;
                this.x = 0;
                this.y = GlobalData.designHeigh * (1 - this.fitScale) / 2;
            }
        }
        else if (this.fitState == FIT_STATE.FIT_H) {
            this.fitScale = this.mStage.stageHeight / GlobalData.designHeigh;
            if (this) {
                this.scaleX = this.fitScale;
                this.scaleY = this.fitScale;
                this.x = GlobalData.designWidth * (1 - this.fitScale) / 2;
                this.y = 0;
            }
        }
    };
    return GameLayerManager;
}(eui.UILayer));
window["GameLayerManager"] = GameLayerManager;
__reflect(GameLayerManager.prototype,"GameLayerManager",[]); 


/***/ }),

/***/ "./src/manager/MainManager.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 主界面管理类
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var MainManager = /** @class */ (function (_super) {
        __extends(MainManager, _super);
        function MainManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        MainManager.prototype.register = function () {
            this.facade.registerCommand(NoficationConfig.OPEN_MAIN, MainManager);
            this.facade.registerCommand(NoficationConfig.CLOSE_MAIN, MainManager);
        };
        MainManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case NoficationConfig.OPEN_MAIN: {
                    if (this.mainUI == null) {
                        this.mainUI = new game.MainUI();
                        panelCon.addChild(this.mainUI);
                    }
                    break;
                }
                case NoficationConfig.CLOSE_MAIN: {
                    if (this.mainUI != null) {
                        panelCon.removeChild(this.mainUI);
                        this.mainUI = null;
                    }
                    break;
                }
            }
        };
        MainManager.NAME = "MainManager";
        return MainManager;
    }(puremvc.SimpleCommand));
    game.MainManager = MainManager;
    __reflect(MainManager.prototype,"game.MainManager",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/manager/SceneManager.ts":
/***/ (function(module, exports) {

var game = window['game']; 
/**
  * 场景管理类
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var SceneManager = /** @class */ (function (_super) {
        __extends(SceneManager, _super);
        function SceneManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        SceneManager.prototype.register = function () {
        };
        SceneManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch (notification.getName()) {
                case "":
                    break;
            }
        };
        SceneManager.NAME = "SceneManager";
        return SceneManager;
    }(puremvc.SimpleCommand));
    game.SceneManager = SceneManager;
    __reflect(SceneManager.prototype,"game.SceneManager",["puremvc.ICommand"]); 
})(game || (game = {}));
window["game"] = game;


/***/ }),

/***/ "./src/utils/BitmapBlink.ts":
/***/ (function(module, exports) {

var BitmapBlink = /** @class */ (function (_super) {
    __extends(BitmapBlink, _super);
    /*** @param target 目标位图
    * @param time 闪啊闪的时间
    * @isAuto 是否立即执行，默认是ture，也可以设置false，外部调用start方法
    */
    function BitmapBlink(target, time, isAuto) {
        if (isAuto === void 0) { isAuto = true; }
        var _this = _super.call(this) || this;
        _this._target = target;
        _this._time = time;
        if (isAuto) {
            _this.start();
        }
        return _this;
    }
    BitmapBlink.prototype.start = function () {
        this._currTime = egret.getTimer();
        this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
    };
    BitmapBlink.prototype.runDown = function (e) {
        this._target.alpha -= 0.045;
        if (this.checkOver()) {
            return;
        }
        if (this._target.alpha <= 0.6) {
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
            this._target.addEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
        }
    };
    BitmapBlink.prototype.runUp = function (e) {
        this._target.alpha += 0.045;
        if (this.checkOver()) {
            return;
        }
        if (this._target.alpha >= 1) {
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
            this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
        }
    };
    BitmapBlink.prototype.checkOver = function () {
        var nowTime = egret.getTimer();
        if (nowTime - this._currTime >= this._time) {
            this.destroy();
            return true;
        }
        return false;
    };
    BitmapBlink.prototype.destroy = function () {
        this._target.alpha = 1;
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
        this.dispatchEventWith(egret.Event.COMPLETE, false, this._target);
        this._target = null;
    };
    return BitmapBlink;
}(egret.EventDispatcher));
window["BitmapBlink"] = BitmapBlink;
__reflect(BitmapBlink.prototype,"BitmapBlink",[]); 


/***/ }),

/***/ "./src/utils/EffectUtils.ts":
/***/ (function(module, exports) {

/**
  * 游戏特效汇总
  * 使用方法如：EffectUtils.rotationEffect()
  */
var EffectUtils = window['EffectUtils']; 
var EffectUtils;
(function (EffectUtils) {
    // 存储旋转对象
    var rotationArr = [];
    //对象旋转特效
    //obj   旋转对象
    //time  旋转一周用时，毫秒
    function rotationEffect(obj, time) {
        if (time === void 0) { time = 1000; }
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        if (this.rotationArr[obj.hashCode]) {
            return;
        }
        if ((this.rotationArr[obj.hashCode] == null) || !this.rotationArr[obj.hashCode]) {
            this.rotationArr[obj.hashCode] = true;
        }
        var onComplete1 = function () {
            if (this.rotationArr[obj.hashCode] && (obj != null)) {
                obj.rotation = 0;
                egret.Tween.get(obj).to({ rotation: 360 }, time).call(onComplete1, this);
            }
        };
        obj.rotation = 0;
        egret.Tween.get(obj).to({ rotation: 360 }, time).call(onComplete1, this);
    }
    EffectUtils.rotationEffect = rotationEffect;
    //取消对象旋转
    //obj    旋转对象
    function removeRotationEffect(obj) {
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        this.rotationArr[obj.hashCode] = false;
    }
    EffectUtils.removeRotationEffect = removeRotationEffect;
    //对象闪烁特效
    //obj         闪烁对象
    //interval    闪烁总工时间
    function blinkEffect(obj, interval) {
        if (interval === void 0) { interval = 1000; }
        new BitmapBlink(obj, interval);
    }
    EffectUtils.blinkEffect = blinkEffect;
    //抖动对象特效
    //类似ios密码输入错误的特效
    function shakeObj(obj) {
        var shakeNum = GlobalData.canvasTop;
        var oldX = obj.x;
        egret.Tween.get(obj).to({ x: obj.x - 10 }, shakeNum);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
        }, this, shakeNum * 2);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x - 20 }, shakeNum);
        }, this, shakeNum * 3);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
        }, this, shakeNum * 4);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: oldX }, shakeNum);
        }, this, shakeNum * 5);
    }
    EffectUtils.shakeObj = shakeObj;
    //抖动对象特效
    // 1：抖动  2：震动
    function shakeScreen(effectType) {
        if (effectType === void 0) { effectType = 1; }
        var panel = GameConfig.curPanel;
        var shakeNum = 40;
        var oldX = panel.x;
        var oldY = panel.y;
        if (effectType == 1) {
            egret.Tween.get(panel).to({ x: panel.x - 10 }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x - 20 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX }, shakeNum);
            }, this, shakeNum * 5);
        }
        else {
            egret.Tween.get(panel).to({ x: panel.x - 10, y: panel.y }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20, y: panel.y }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 15 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y - 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 10 }, shakeNum);
            }, this, shakeNum * 5);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX, y: oldY }, shakeNum);
            }, this, shakeNum * 6);
        }
    }
    EffectUtils.shakeScreen = shakeScreen;
    /**
    * str             提示内容
    * effectType      动画类型 1：从下到上弹出 2：从左至右弹出 3：从右至左弹出 4：从中间弹出渐渐消失 5：从大变小 等等
    * isWarning       是否是警告，警告是红色
    */
    function showTips(str, effectType, isWarning) {
        if (str === void 0) { str = ""; }
        if (effectType === void 0) { effectType = 1; }
        if (isWarning === void 0) { isWarning = false; }
        switch (effectType) {
            case 1: {
                TipsUtils.showTipsDownToUp(str, isWarning);
                break;
            }
            case 2: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, true);
                break;
            }
            case 3: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, false);
                break;
            }
            case 4: {
                TipsUtils.showTipsFromCenter(str, isWarning);
                break;
            }
            case 5: {
                TipsUtils.showTipsBigToSmall(str, isWarning);
                break;
            }
            default: {
                // TODO: Implemente default case
            }
        }
    }
    EffectUtils.showTips = showTips;
    //========================== a lot of effect will coming! ============================
    var isPlayEffectPlay = false;
    /**
    * 给显示对象增加特效
    * obj           对象
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    */
    function playEffect(obj, cartoonType) {
        if (cartoonType === void 0) { cartoonType = 1; }
        if (this.isPlayEffectPlay) {
            return;
        }
        this.isPlayEffectPlay = true;
        var onComplete2 = function () {
            this.isPlayEffectPlay = false;
        };
        var onComplete1 = function () {
            if (cartoonType == 1) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.elasticOut).call(onComplete2, this);
            }
            else if (cartoonType == 2) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.backOut).call(onComplete2, this);
            }
            else if (cartoonType == 3) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 100).call(onComplete2, this);
            }
        };
        egret.Tween.get(obj).to({ scaleX: 0.5, scaleY: 0.5, x: obj.x + obj.width / 4, y: obj.y + obj.height / 4 }, 100, egret.Ease.sineIn).call(onComplete1, this);
    }
    EffectUtils.playEffect = playEffect;
    /**
    * 给显示对象增加持续放大特效
    * obj           对象
    */
    function playScaleEffect(obj) {
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    obj.scaleX = 1;
                    obj.scaleY = 1;
                    egret.Tween.get(obj).to({ alpha: 1 }, 1000).call(onComplete1, self);
                };
                obj.alpha = 1;
                egret.Tween.get(obj).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 1000).call(onComplete2, self);
            }
        };
        onComplete1();
    }
    EffectUtils.playScaleEffect = playScaleEffect;
    /**
    * 显示对象上线浮动特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         浮动高度
    * todo          多个对象跳动
    */
    function flyObj(obj, time, space) {
        if (space === void 0) { space = 50; }
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ y: obj.y - space }, time).call(onComplete1, this);
                };
                egret.Tween.get(obj).to({ y: obj.y + space }, time).call(onComplete2, this);
            }
        };
        onComplete1();
    }
    EffectUtils.flyObj = flyObj;
    /**
    * 显示对象摇头特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         摇头幅度
    * todo          多个对象摇头
    * 注意：需要将对象的注册点位置：0.5,1
    */
    function rockObj(obj, time, space) {
        if (space === void 0) { space = 20; }
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ rotation: -space }, time).call(onComplete1, this);
                };
                egret.Tween.get(obj).to({ rotation: space }, time).call(onComplete2, this);
            }
        };
        onComplete1();
    }
    EffectUtils.rockObj = rockObj;
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    function typerEffect(obj, content, interval) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
            }, i, interval * i);
        }
    }
    EffectUtils.typerEffect = typerEffect;
})(EffectUtils || (EffectUtils = {}));
window["EffectUtils"] = EffectUtils;


/***/ }),

/***/ "./src/utils/Global.ts":
/***/ (function(module, exports) {

/**
  * 游戏公用方法汇总
  */
var Global = window['Global']; 
var Global;
(function (Global) {
    function isInPolygon(checkPoint, polygonPoints) {
        var counter = 0;
        var i;
        var xinters;
        var p1, p2;
        var pointCount = polygonPoints.length;
        p1 = polygonPoints[0];
        for (i = 1; i <= pointCount; i++) {
            p2 = polygonPoints[i % pointCount];
            if (checkPoint[0] > Math.min(p1[0], p2[0]) &&
                checkPoint[0] <= Math.max(p1[0], p2[0])) {
                if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
                    if (p1[0] != p2[0]) {
                        xinters =
                            (checkPoint[0] - p1[0]) *
                                (p2[1] - p1[1]) /
                                (p2[0] - p1[0]) +
                                p1[1];
                        if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
                            counter++;
                        }
                    }
                }
            }
            p1 = p2;
        }
        if (counter % 2 == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    Global.isInPolygon = isInPolygon;
    function checkArr(arr, curnum) {
        if (arr.indexOf(curnum) != -1) {
            return true;
        }
        return false;
    }
    Global.checkArr = checkArr;
    function hitTest(obj1, obj2) {
        var l1 = { x: obj1.x, y: obj1.y };
        var r1 = { x: obj1.x + obj1.width, y: obj1.y + obj1.height };
        var l2 = { x: obj2.x, y: obj2.y };
        var r2 = { x: obj2.x + obj2.width, y: obj2.y + obj2.height };
        if (l1.x > r2.x ||
            l2.x > r1.x ||
            l1.y > r2.y ||
            l2.y > r1.y)
            return false;
        return true;
    }
    Global.hitTest = hitTest;
    function hitTestPoint(obj1, x1, y1) {
        var l1 = obj1.x;
        var r1 = obj1.y;
        var l2 = obj1.x + obj1.width;
        var r2 = obj1.y + obj1.height;
        if (x1 < l1 || x1 > l2 || y1 < r1 || y1 > r2)
            return false;
        return true;
    }
    Global.hitTestPoint = hitTestPoint;
    function clonePaintVo(obj) {
        try {
            var retunObj = JSON.parse(JSON.stringify(obj));
            return retunObj;
        }
        catch (error) {
            var returnObj = {};
            return returnObj;
        }
    }
    Global.clonePaintVo = clonePaintVo;
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new CommonMoveTip();
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
})(Global || (Global = {}));
window["Global"] = Global;


/***/ }),

/***/ "./src/utils/PoolUtil.ts":
/***/ (function(module, exports) {

// 对象池
var PoolUtil = /** @class */ (function () {
    function PoolUtil() {
        this.pool = {};
    }
    PoolUtil.getInstance = function () {
        if (!this.instance) {
            this.instance = new PoolUtil();
        }
        return this.instance;
    };
    /**
     * 获取对象
     * @className 对象类名
     * @args 构造函数传参
     */
    PoolUtil.prototype.pop = function (className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.pool[className] == null) {
            this.pool[className] = [];
        }
        var list = this.pool[className];
        if (list.length > 0) {
            return list.pop();
        }
        else {
            var argsLen = args.length;
            var clz = egret.getDefinitionByName(className);
            var obj;
            switch (argsLen) {
                case 0:
                    obj = new clz();
                    break;
                case 1:
                    obj = new clz(args[0]);
                    break;
                case 2:
                    obj = new clz(args[0], args[1]);
                    break;
                case 3:
                    obj = new clz(args[0], args[1], args[2]);
                    break;
                case 4:
                    obj = new clz(args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    obj = new clz(args[0], args[1], args[2], args[3], args[4]);
                    break;
            }
            obj.className = className;
        }
        return obj;
    };
    /**
     * 回收对象
    * @obj 需要回收的对象
    */
    PoolUtil.prototype.push = function (obj) {
        var className = obj.className;
        if (this.pool[className] == null) {
            console.log("回收对象的数组不存在");
            return;
        }
        this.pool[className].push(obj);
    };
    /**
     * 创建对象(用于将要大量使用前，预先创建，防止使用时大量创建卡顿)
     * @className 对象类定义
     * @num 创建数量
     * @args 构造函数传参
     */
    PoolUtil.prototype.create = function (className, num) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var list = [];
        for (var i = 0; i < num; i++) {
            list.push(this.pop.apply(this, __spreadArrays([className], args)));
        }
        for (i = 0; i < num; i++) {
            this.push(list.pop());
        }
    };
    /**
     * 获取对象池对象数量
     * @className 对象类定义
     * @return 对象数量
     */
    PoolUtil.prototype.getLen = function (className) {
        if (this.pool[className]) {
            return this.pool[className].length;
        }
        return 0;
    };
    /**
     * 清理对象
     * @className 对象类定义
    * @funName 清理前执行指定函数
     */
    PoolUtil.prototype.clear = function (className, funName) {
        if (funName === void 0) { funName = null; }
        if (this.pool[className]) {
            funName && this.dealFun(className, funName);
            this.pool[className] = null;
            delete this.pool[className];
        }
    };
    /**
     * 对象池所有对象执行指定函数
     * @className 对象类定义
     * @funName 函数名
     */
    PoolUtil.prototype.dealFun = function (className, funName) {
        if (this.pool[className]) {
            var list = this.pool[className];
            var len = list.length;
            for (var i = 0; i < len; i++) {
                list[i][funName] && list[i][funName]();
            }
        }
    };
    return PoolUtil;
}());
window["PoolUtil"] = PoolUtil;
__reflect(PoolUtil.prototype,"PoolUtil",[]); 


/***/ }),

/***/ "./src/utils/TipsUtils.ts":
/***/ (function(module, exports) {

/**
  * tips特效汇总
  * TipsUtils.showTipsDownToUp()
  */
var TipsUtils = window['TipsUtils']; 
var TipsUtils;
(function (TipsUtils) {
    //从下到上弹出
    function showTipsDownToUp(str, isWarning) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        var effectTips = new egret.TextField();
        effectTips.size = 40;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth() / 2 - effectTips.width / 2;
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        };
        var onComplete1 = function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({ y: effectTips.y - 120, alpha: 1 }, 800, egret.Ease.backOut).call(onComplete1, this);
    }
    TipsUtils.showTipsDownToUp = showTipsDownToUp;
    //从左至右 或者 从右至左
    function showTipsLeftOrRight(str, isWarning, isFromeLeft) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        if (isFromeLeft === void 0) { isFromeLeft = true; }
        var effectTips = new egret.TextField();
        effectTips.size = 24;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        if (isFromeLeft) {
            effectTips.x = -effectTips.width;
        }
        else {
            effectTips.x = GameConfig.curWidth();
        }
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        if (isFromeLeft) {
            egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() / 2 - effectTips.width / 2 - 50, alpha: 1 }, 300, egret.Ease.sineInOut);
        }
        else {
            egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() / 2 - effectTips.width / 2 + 50, alpha: 1 }, 300, egret.Ease.sineInOut);
        }
        egret.setTimeout(function () {
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: effectTips.x + 100 }, 500);
            }
            else {
                egret.Tween.get(effectTips).to({ x: effectTips.x - 100 }, 500);
            }
        }, this, 300);
        egret.setTimeout(function () {
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() }, 300, egret.Ease.sineIn);
            }
            else {
                egret.Tween.get(effectTips).to({ x: -effectTips.width }, 300, egret.Ease.sineIn);
            }
        }, this, 800);
        egret.setTimeout(function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        }, this, 1100);
    }
    TipsUtils.showTipsLeftOrRight = showTipsLeftOrRight;
    //从里到外
    function showTipsFromCenter(str, isWarning) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        var effectTips = new eui.Image();
        effectTips.source = RES.getRes(str + "_png");
        effectTips.right = 260;
        effectTips.top = 152;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        // effectTips.anchorOffsetX = effectTips.width / 2;
        // effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.scaleX = 0;
        effectTips.scaleY = 0;
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 400);
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        }, this, 1000);
    }
    TipsUtils.showTipsFromCenter = showTipsFromCenter;
    //从外到里
    function showTipsBigToSmall(str, isWarning) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        var effectTips = new egret.TextField();
        effectTips.size = 24;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth() / 2;
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        effectTips.anchorOffsetX = effectTips.width / 2;
        effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.scaleX = 4;
        effectTips.scaleY = 4;
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        }, this, 1000);
    }
    TipsUtils.showTipsBigToSmall = showTipsBigToSmall;
})(TipsUtils || (TipsUtils = {}));
window["TipsUtils"] = TipsUtils;


/***/ })

/******/ });