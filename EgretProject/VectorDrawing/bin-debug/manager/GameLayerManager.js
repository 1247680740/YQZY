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
var GameLayerManager = (function (_super) {
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
        if (this.fitState == FIT_STATE.FIT_W) {
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
__reflect(GameLayerManager.prototype, "GameLayerManager");
//# sourceMappingURL=GameLayerManager.js.map