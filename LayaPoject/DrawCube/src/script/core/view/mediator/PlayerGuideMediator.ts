import { NoficationConfig } from "../../../config/NoficationConfig";
import { BaseMediator } from "../BaseMediator";
import { PlayerGuideView } from "../panel/main/PlayerGuideView";

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
                this.showUI(this.guidePanel, false, 1920, 1080, 0);
                break;
            }
            case NoficationConfig.CLOSE_GUIDE: {
                this.closeButtonClick();
                break;
            }
        }
    }

    private curIndex: number = 1;
    private videoLen: number = 3;
    private videoPlay: Laya.Video = null;
    public initData(): void {
        this.curIndex = 1;
        this.videoLen = 3;
    }

    /**
     * 初始化面板ui
     */
    public initUI(): void {
        this.guidePanel.img_mask.loadImage("common/maskBg.png");
        this.initBtnShow();
        this.initPoint();
        this.initVideo();
        this.setGroupAni();
        this.guidePanel.btn_left.on(Laya.Event.MOUSE_UP, this, this.upLeft);
        this.guidePanel.btn_right.on(Laya.Event.MOUSE_UP, this, this.upRight);
        this.guidePanel.btn_left.on(Laya.Event.MOUSE_DOWN, this, this.downLeft);
        this.guidePanel.btn_right.on(Laya.Event.MOUSE_DOWN, this, this.downRight);
        this.guidePanel.btn_close.on(Laya.Event.CLICK, this, this.closeButtonClick);
    }

    private curTween: Laya.Tween = null;
    setGroupAni() {
        this.guidePanel.panel_content.scale(0, 0);
        this.curTween = Laya.Tween.to(this.guidePanel.panel_content, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineIn);
    }

    private downLeft() {
        this.guidePanel.left_img.skin = "guide/pre_down.png";
    }

    private downRight() {
        if (this.curIndex == this.videoLen) {
            this.guidePanel.right_img.skin = "guide/finish_down.png";
        } else {
            this.guidePanel.right_img.skin = "guide/next_down.png";
        }
    }

    private upLeft() {
        if (this.curIndex == 1) {
            return;
        } else {
            this.curIndex -= 1;
            this.initBtnShow();
            this.initPoint();
            this.initVideo();
        }
    }

    private upRight() {
        if (this.curIndex + 1 > this.videoLen) {
            this.closeButtonClick();
        } else {
            this.curIndex += 1;
            this.initBtnShow();
            this.initPoint();
            this.initVideo();
        }
    }

    private initBtnShow() {
        if (this.videoLen > 1) {
            this.guidePanel.btn_left.visible = true;
            if (this.curIndex == 1) {
                this.guidePanel.btn_left.visible = false;
                this.guidePanel.right_img.skin = "guide/next_normal.png";
            } else if (this.curIndex == this.videoLen) {
                this.guidePanel.left_img.skin = "guide/pre_normal.png";
                this.guidePanel.right_img.skin = "guide/finish_normal.png";
            } else {
                this.guidePanel.left_img.skin = "guide/pre_normal.png";
                this.guidePanel.right_img.skin = "guide/next_normal.png";
            }
        } else {
            this.guidePanel.btn_left.visible = false;
            this.guidePanel.right_img.skin = "guide/finish_normal.png";
        }
    }

    private initPoint(): void {
        if (this.guidePanel.box_point.numChildren > 0) {
            for (let i: number = 0; i < this.guidePanel.box_point.numChildren; i++) {
                let img: Laya.Image = this.guidePanel.box_point.getChildAt(i) as Laya.Image;
                if ((i + 1) == this.curIndex) {
                    img.skin = "guide/point_yes.png";
                } else {
                    img.skin = "guide/point_no.png";
                }
            }
        } else {
            for (let i: number = 1; i < this.videoLen + 1; i++) {
                let pointImg: Laya.Image = new Laya.Image();
                if (i == this.curIndex) {
                    pointImg.skin = "guide/point_yes.png";
                } else {
                    pointImg.skin = "guide/point_no.png";
                }
                pointImg.x = (i - 1) * 28;
                this.guidePanel.box_point.addChild(pointImg);
            }
        }
    }

    private maskSP: Laya.Sprite = null;
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

    private initVideo(): void {
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
        this.videoPlay.load("res/gif/gif" + this.curIndex + ".mp4");
        this.videoPlay.reload();
        this.videoPlay.play();
    }


    private closeButtonClick(): void {
        Laya.Tween.clear(this.curTween);
        Laya.loader.clearTextureRes("common/maskBg.png");
        if (this.videoPlay) {
            this.videoPlay.pause();
            this.videoPlay.destroy();
        }
        this.maskSP.graphics.clear();
        this.maskSP.destroy();
        this.guidePanel.box_gif.mask = null;
        this.guidePanel.box_gif.removeChildren();
        this.guidePanel.box_point.removeChildren();
        this.videoPlay = null;
        this.maskSP = null;
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_UP, this, this.upLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_UP, this, this.upRight);
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_DOWN, this, this.downLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_DOWN, this, this.downRight);
        this.guidePanel.btn_close.off(Laya.Event.CLICK, this, this.closeButtonClick);
        this.closePanel(0);
    }
}