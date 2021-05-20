var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoadingUI = (function (_super) {
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
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map