import GameConfig from "../../GameConfig";

/**
  * 游戏容器类
  */
export class GameLayerManager extends Laya.View {
    //背景图片
    public gameBgImg: Laya.Image = new Laya.Image();
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
        this.width = GameConfig.width;
        this.height = GameConfig.height;
        // this.addGameBg();
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
        Laya.stage.on(Laya.Event.RESIZE, this, this.changeStageSize);
        this.changeStageSize();
    }

    private fitScale: number = 1;
    private fitState: FIT_STATE = FIT_STATE.FIT_H;// 1 适配宽，2 适配高

    private changeStageSize() {
        this.stageAdapter();
        this.stageResize();
        this.changeBgSize();
    }

    private stageAdapter() {
        let stageRate: number = Laya.stage.height / Laya.stage.width;
        let designRate: number = GameConfig.height / GameConfig.width;
        if (stageRate > designRate) { //舞台宽度小于舞台高度
            this.fitState = FIT_STATE.FIT_W;
        } else {
            this.fitState = FIT_STATE.FIT_H;
        }
    }

    private stageResize() {
        if (this.fitState == FIT_STATE.FIT_W) {
            this.fitScale = Laya.stage.width / GameConfig.width;
        } else {
            this.fitScale = Laya.stage.height / GameConfig.height;
        }
        this.scale(this.fitScale, this.fitScale);
        this.centerX = 0;
        this.centerY = 0;
    }

    private changeBgSize() {
        this.gameBgImg.size(Laya.stage.width, Laya.stage.height);
    }

    addGameBg(): void {
        this.gameBgImg = new Laya.Image();
        this.gameBgImg.skin = "common/common_gameBg.png";
        this.gameBgImg.width = Laya.stage.width;
        this.gameBgImg.height = Laya.stage.height;
        Laya.stage.addChildAt(this.gameBgImg, 0);
    }
}

enum FIT_STATE {
    FIT_NULL, FIT_W, FIT_H
}

