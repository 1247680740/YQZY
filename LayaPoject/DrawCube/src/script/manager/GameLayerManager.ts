/**
  * 游戏容器类
  * 
  */

enum FIT_STATE {
    FIT_NULL, FIT_W, FIT_H
}

export class GameLayerManager extends Laya.View {

    // 场景层 如 战场、主城、副本战场之类的
    public sceneLayer: Laya.View = new Laya.View();
    // 主UI层 如 底部功能栏
    public mainLayer: Laya.View = new Laya.View();
    // 弹窗层 如 设置、背包、装备之类的
    public panelLayer: Laya.View = new Laya.View();
    // 特效层 如 闪烁、飘字之类的
    public effectLayer: Laya.View = new Laya.View();
    // 通讯遮罩层 和服务器通讯UI
    public maskLayer: Laya.View = new Laya.View();
    // 加载遮罩层 场景切换的时候加载资源UI
    public loadLayer: Laya.View = new Laya.View();

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
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
        this.listenResize();
    }

    private listenResize() {
        Laya.stage.on(Laya.Event.RESIZE, this, this.resizeChange);
        this.autoFit();
    }

    private resizeChange() {
        this.checkFitState();
        this.changeFitScene();
    }

    private fitScale: number = 1;
    private fitState: FIT_STATE = FIT_STATE.FIT_H;// 1 适配宽，2 适配高

    private autoFit() {
        Laya.stage.screenMode = "horizontal";
        Laya.stage.scaleMode = "fixedheight";
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        Laya.stage.size(1920, 1080);
        this.checkFitState();
    }

    private checkFitState() {
        let designRate = 1080 / 1920;// 设计分辨率宽高比
        let stageRate = Laya.stage.height / Laya.stage.width;

        if (stageRate > designRate) {
            this.fitState = FIT_STATE.FIT_W;
        } else {
            this.fitState = FIT_STATE.FIT_H;
        }
    }

    private changeFitScene() {
        if (this.fitState == FIT_STATE.FIT_W) {// x 超出，缩放x至屏幕大小，调整y坐标居中
            this.fitScale = Laya.stage.width / 1920;
            if (this) {
                this.scaleX = this.fitScale;
                this.scaleY = this.fitScale;
                this.x = 0;
                this.y = 1080 * (1 - this.fitScale) / 2;
            }
        }
        else if (this.fitState == FIT_STATE.FIT_H) {
            this.fitScale = Laya.stage.height / 1080;
            if (this) {
                this.scaleX = this.fitScale;
                this.scaleY = this.fitScale;
                this.x = (Laya.stage.width - 1920) / 2;//GameBaseConfig.width * (1 - this.fitScale) / 2;
                this.y = 0;
            }
        }
    }

}

