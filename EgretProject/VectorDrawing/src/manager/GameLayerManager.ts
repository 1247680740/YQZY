/**
  * 游戏容器类
  * 
  */
enum FIT_STATE { FIT_NULL, FIT_W, FIT_H }

class GameLayerManager extends eui.UILayer {

    // 场景层 
    public sceneLayer: eui.UILayer = new eui.UILayer();
    // 主UI层 如 底部功能栏
    public mainLayer: eui.UILayer = new eui.UILayer();
    // 弹窗层 如 设置、背包、装备之类的
    public panelLayer: eui.UILayer = new eui.UILayer();
    // 特效层 如 闪烁、飘字之类的
    public effectLayer: eui.UILayer = new eui.UILayer();
    // 通讯遮罩层 和服务器通讯UI
    public maskLayer: eui.UILayer = new eui.UILayer();
    // 加载遮罩层 场景切换的时候加载资源UI
    public loadLayer: eui.UILayer = new eui.UILayer();

    private static _instance: GameLayerManager;

    //构造方法
    public constructor() {
        super();
        this.init();
    }

    //游戏容器管理器单例
    public static gameLayer(): GameLayerManager {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    }

    //初始化场景类
    public init(): void {
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
    }

    private mStage: egret.Stage = null;
    public setStage(stage: egret.Stage): void {
        this.mStage = stage;
        this.mStage.orientation = egret.OrientationMode.LANDSCAPE;
        // 监听尺寸变更
        this.mStage.scaleMode = egret.StageScaleMode.FIXED_WIDE;
        this.mStage.addEventListener(egret.Event.RESIZE, this.resizeChange, this);
        this.autoFit();
    }

    private resizeChange() {
        this.checkFitState();
        this.changeFitScene();
    }

    private fitScale: number = 1;
    private fitState: FIT_STATE = FIT_STATE.FIT_NULL;// 1 适配宽，2 适配高

    private autoFit() {
        if (this.mStage == null) {
            console.log('error ===== not found stage !!! ');
            return;
        }
        this.mStage.scaleMode = egret.StageScaleMode.SHOW_ALL; //FIXED_WIDE
        this.mStage.setContentSize(GlobalData.designWidth, GlobalData.designHeigh);
        this.checkFitState();

    }
    private checkFitState() {
        GlobalData.stageWidth = this.mStage.stageWidth;
        let designRate = GlobalData.designHeigh / GlobalData.designWidth;
        let stageRate = this.mStage.stageHeight / this.mStage.stageWidth; // 设计分辨率宽高比

        if (stageRate > designRate) {
            this.fitState = FIT_STATE.FIT_W;
        } else {
            this.fitState = FIT_STATE.FIT_H;
        }
    }

    private changeFitScene() {
        if (this.fitState == FIT_STATE.FIT_W) {// x 超出，缩放x至屏幕大小，调整y坐标居中
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
    }
}

