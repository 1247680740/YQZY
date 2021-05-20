import { NoficationConfig } from "../../../config/NoficationConfig";
import { BaseMediator } from "../BaseMediator";
import { PlayerGuideView } from "../panel/PlayerGuideView";

/**
  * 新手引导面板
  */
export class PlayerGuideMediator extends BaseMediator {
    public static NAME: string = "PlayerGuideMediator";

    public constructor(viewComponent: any = null) {
        super(PlayerGuideMediator.NAME, viewComponent);
    }

    public listNotificationInterests(): Array<any> {
        return [
            NoficationConfig.OPEN_GUIDE,
            NoficationConfig.CLOSE_GUIDE
        ];
    }
    private guidePanel: PlayerGuideView = new PlayerGuideView();
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        switch (notification.getName()) {
            case NoficationConfig.OPEN_GUIDE: {
                //显示角色面板
                this.showUI(this.guidePanel, false, 0, 0, 0);
                break;
            }
            case NoficationConfig.CLOSE_GUIDE: {
                this.closePanel(0);
                break;
            }
        }
    }

    private startIndex: number = 0;
    private videoLen: number = 0;
    private videoPlay: Laya.Video = null;
    private maskSP: Laya.Sprite = null;
    private curTween: Laya.Tween = null;
    /** 初始化面板数据 */
    public initData(): void {
        this.startIndex = 1;
        this.videoLen = 3;
    }

    /** 初始化面板ui */
    public initUI(): void {
        this.initBtnShow();
        this.initPoint();
        this.initVideo();
        this.initAni();
        this.guidePanel.btn_left.on(Laya.Event.MOUSE_UP, this, this.upLeft);
        this.guidePanel.btn_right.on(Laya.Event.MOUSE_UP, this, this.upRight);
        this.guidePanel.btn_left.on(Laya.Event.MOUSE_DOWN, this, this.downLeft);
        this.guidePanel.btn_right.on(Laya.Event.MOUSE_DOWN, this, this.downRight);
        this.guidePanel.btn_close.on(Laya.Event.CLICK, this, this.closeButtonClick);
    }

    private initBtnShow() {
        if (this.videoLen > 1) {
            this.guidePanel.btn_left.visible = true;
            if (this.startIndex == 1) {
                this.guidePanel.btn_left.visible = false;
                this.guidePanel.btn_right.loadImage("guide/next_normal.png");
            } else if (this.startIndex == this.videoLen) {
                this.guidePanel.btn_left.loadImage("guide/pre_normal.png");
                this.guidePanel.btn_right.loadImage("guide/finish_normal.png");
            } else {
                this.guidePanel.btn_left.loadImage("guide/pre_normal.png");
                this.guidePanel.btn_right.loadImage("guide/next_normal.png");
            }
        } else {
            this.guidePanel.btn_left.visible = false;
            this.guidePanel.btn_right.visible = true;
            this.guidePanel.btn_right.loadImage("guide/finish_normal.png");
        }
    }

    private initPoint() {
        if (this.guidePanel.box_point.numChildren > 0) {
            for (let i: number = 0; i < this.guidePanel.box_point.numChildren; i++) {
                let img: Laya.Sprite = this.guidePanel.box_point.getChildAt(i) as Laya.Sprite;
                if ((i + 1) == this.startIndex) {
                    img.loadImage("guide/point_yes.png");
                } else {
                    img.loadImage("guide/point_no.png");
                }
            }
        } else {
            for (let i: number = 1; i < this.videoLen + 1; i++) {
                let pointImg: Laya.Sprite = Laya.Pool.getItemByClass("Sprite", Laya.Sprite);
                if (i == this.startIndex) {
                    pointImg.loadImage("guide/point_yes.png");
                } else {
                    pointImg.loadImage("guide/point_no.png");
                }
                pointImg.x = (i - 1) * 28;
                this.guidePanel.box_point.addChild(pointImg);
            }
        }
    }

    private initVideo() {
        if (!this.videoPlay) {
            this.videoPlay = new Laya.Video();
            this.guidePanel.box_gif.addChild(this.videoPlay);
            this.videoPlay.width = 750;
            this.videoPlay.height = 440;
            this.videoPlay.loop = true;
            this.videoPlay.muted = true;
            this.videoPlay.preload = "auto";
            this.addMaskSP();
        }
        this.videoPlay.pause();
        this.videoPlay.load("res/gif/gif" + this.startIndex + ".mp4");
        this.videoPlay.reload();
        this.videoPlay.play();
    }

    private initAni() {
        this.guidePanel.panel_content.scale(0, 0);
        this.curTween = Laya.Tween.to(this.guidePanel.panel_content, { scaleX: 1, scaleY: 1 }, 500);
    }

    private addMaskSP(): void {
        if (!this.maskSP) {
            this.maskSP = new Laya.Sprite();
            this.guidePanel.panel_content.addChildAt(this.maskSP, 0);
        }
        //自定义路径
        let chaX: number = 10;
        let wNum: number = 750;
        let hNum: number = 440;
        let chaW: number = wNum - chaX;
        let chaH: number = hNum - chaX;
        let path: any[] = [
            ["moveTo", chaX, 0],
            ["arcTo", wNum, 0, wNum, chaX, 10],
            ["arcTo", wNum, hNum, chaW, hNum, 10],
            ["arcTo", 0, hNum, 0, chaH, 10],
            ["arcTo", 0, 0, chaX, 0, 10],
        ];
        this.maskSP.graphics.drawPath(0, 0, path, { fillStyle: "#00ffff" });
        this.guidePanel.box_gif.mask = this.maskSP;
    }

    private upLeft() {
        if (this.startIndex == 1) {
            return;
        } else {
            this.startIndex -= 1;
            this.initBtnShow();
            this.initPoint();
            this.initVideo();
        }
    }

    private upRight() {
        if (this.startIndex + 1 > this.videoLen) {
            this.closeButtonClick();
        } else {
            this.startIndex += 1;
            this.initBtnShow();
            this.initPoint();
            this.initVideo();
        }
    }

    private downLeft() {
        this.guidePanel.btn_left.loadImage("guide/pre_down.png");
    }

    private downRight() {
        if (this.startIndex == this.videoLen) {
            this.guidePanel.btn_right.loadImage("guide/finish_down.png");
        } else {
            this.guidePanel.btn_right.loadImage("guide/next_down.png");
        }
    }


    private closeButtonClick(): void {
        Laya.Tween.clear(this.curTween);
        if (this.videoPlay) {
            this.videoPlay.pause();
            this.videoPlay.destroy();
        }
        this.videoPlay = null;
        this.maskSP.graphics.clear();
        this.maskSP.destroy();
        this.maskSP = null;
        this.guidePanel.box_gif.removeChildren();
        this.guidePanel.box_gif.mask = null;
        Laya.Pool.recover("Sprite", Laya.Sprite);
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_UP, this, this.upLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_UP, this, this.upRight);
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_DOWN, this, this.downLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_DOWN, this, this.downRight);
        this.guidePanel.btn_close.off(Laya.Event.CLICK, this, this.closeButtonClick);
        this.closePanel(0);
    }
}