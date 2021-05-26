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
    private curTween: Laya.Tween = null;
    /** 初始化面板数据 */
    public initData(): void {
        this.startIndex = 1;
        this.videoLen = 2;
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
                this.guidePanel.btn_right.loadImage("guideView/next_normal.png");
            } else if (this.startIndex == this.videoLen) {
                this.guidePanel.btn_left.loadImage("guideView/pre_normal.png");
                this.guidePanel.btn_right.loadImage("guideView/finish_normal.png");
            } else {
                this.guidePanel.btn_left.loadImage("guideView/pre_normal.png");
                this.guidePanel.btn_right.loadImage("guideView/next_normal.png");
            }
        } else {
            this.guidePanel.btn_left.visible = false;
            this.guidePanel.btn_right.visible = true;
            this.guidePanel.btn_right.loadImage("guideView/finish_normal.png");
        }
    }

    private initPoint() {
        if (this.guidePanel.box_point.numChildren > 0) {
            for (let i: number = 0; i < this.guidePanel.box_point.numChildren; i++) {
                let img: Laya.Sprite = this.guidePanel.box_point.getChildAt(i) as Laya.Sprite;
                if ((i + 1) == this.startIndex) {
                    img.loadImage("guideView/point_yes.png");
                } else {
                    img.loadImage("guideView/point_no.png");
                }
            }
        } else {
            for (let i: number = 1; i < this.videoLen + 1; i++) {
                let pointImg: Laya.Sprite = Laya.Pool.getItemByClass("Sprite", Laya.Sprite);
                if (i == this.startIndex) {
                    pointImg.loadImage("guideView/point_yes.png");
                } else {
                    pointImg.loadImage("guideView/point_no.png");
                }
                pointImg.x = (i - 1) * 28;
                this.guidePanel.box_point.addChild(pointImg);
            }
        }
    }

    private initVideo() {
        this.guidePanel.box_gif.loadImage("common/gif" + this.startIndex + ".png");
    }

    private initAni() {
        this.guidePanel.panel_content.scale(0, 0);
        this.curTween = Laya.Tween.to(this.guidePanel.panel_content, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.sineIn);
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
        this.guidePanel.btn_left.loadImage("guideView/pre_down.png");
    }

    private downRight() {
        if (this.startIndex == this.videoLen) {
            this.guidePanel.btn_right.loadImage("guideView/finish_down.png");
        } else {
            this.guidePanel.btn_right.loadImage("guideView/next_down.png");
        }
    }


    private closeButtonClick(): void {
        Laya.Tween.clear(this.curTween);
        Laya.Pool.recover("Sprite", Laya.Sprite);
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_UP, this, this.upLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_UP, this, this.upRight);
        this.guidePanel.btn_left.off(Laya.Event.MOUSE_DOWN, this, this.downLeft);
        this.guidePanel.btn_right.off(Laya.Event.MOUSE_DOWN, this, this.downRight);
        this.guidePanel.btn_close.off(Laya.Event.CLICK, this, this.closeButtonClick);
        this.closePanel(0);
    }
}