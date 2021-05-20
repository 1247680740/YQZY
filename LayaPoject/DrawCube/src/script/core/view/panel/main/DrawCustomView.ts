import { ui } from "../../../../../ui/layaMaxUI";
import { NoficationConfig } from "../../../../config/NoficationConfig";
import AppFacade from "../../../AppFacade";
import { CustomBasePoint } from "../../../model/vo/CustomBasePoint";
import { DrawScript } from "../../../scripts/DrawScript";
import { CreateCustomLine } from "../common/CreateCustomLine";

export class DrawCustomView extends ui.dialog.CustomDialogUI {

    private isCanMove: boolean = false;
    private touchNum: number = 0;

    constructor() {
        super();
        this.x = 1102;
        this.y = 520;
        this.initData();
        this.initView();
    }

    private initData() {
        this.isCanMove = false;
        this.touchNum = 0;
    }

    private initView() {
        this.img_customBg.skin = "custom/custome_bg.png";
        this.changeBtnSkin();
        this.group_content.scaleX = 0;
        this.group_content.scaleY = 0;
        Laya.Tween.to(this.group_content, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineIn, Laya.Handler.create(this, () => {
            this.createLine();
            this.addPointTip();
        }))
        this.initListener();
    }

    private addPointTip(): void {
        this.panel_tip.removeChildren();
        let arr: Array<CustomBasePoint> = DrawScript.getInstance().getLineRoute();
        if (arr.length < 1) {
            return;
        }
        let isClose: boolean = DrawScript.getInstance().getIsClose();
        for (let j = 0; j < arr.length; j++) {
            let tip: PointTip = new PointTip();
            this.panel_tip.addChild(tip);
            tip.x = arr[j].xN;
            tip.y = arr[j].yN;
            tip.hideAni();
            if (j == arr.length - 1) {
                if (isClose == false) {
                    tip.showAni();
                }
            }
        }
    }

    private changeBtnSkin(): void {
        let roteArr: Array<CustomBasePoint> = DrawScript.getInstance().getLineRoute();
        let isCLose: boolean = DrawScript.getInstance().getIsClose();
        if (isCLose) {
            this.btn_ok.mouseEnabled = true;
            this.btn_ok.skin = "custom/ok_normal.png";
        } else {
            this.btn_ok.mouseEnabled = false;
            this.btn_ok.skin = "custom/ok_disable.png";
        }
        if (roteArr.length > 0) {
            this.btn_clean.mouseEnabled = true;
            this.btn_recall.mouseEnabled = true;
            this.btn_clean.skin = "custom/clean_normal.png";
            this.btn_recall.skin = "custom/recall_normal.png";
        } else {
            this.btn_clean.mouseEnabled = false;
            this.btn_recall.mouseEnabled = false;
            this.btn_clean.skin = "custom/clean_disable.png";
            this.btn_recall.skin = "custom/recall_disable.png";
        }
    }

    /** 初始化绘图面板画自定义图形 */
    private createLine(): void {
        let arr: Array<CustomBasePoint> = DrawScript.getInstance().getLineRoute();
        this.panel_content.removeChildren();
        if (arr.length > 0) {
            let isClose: boolean = DrawScript.getInstance().getIsClose();
            for (let j = 1; j < arr.length; j++) {
                let sp: CreateCustomLine = new CreateCustomLine();
                this.panel_content.addChild(sp);
                sp.startDraw(arr[j - 1], arr[j], isClose);
            }
            if (isClose) {
                let sp: CreateCustomLine = new CreateCustomLine();
                this.panel_content.addChild(sp);
                let startP: CustomBasePoint = arr[0];
                let endP: CustomBasePoint = arr[arr.length - 1];
                sp.startDraw(endP, startP, isClose);
            }
        }
    }

    private initListener(): void {
        this.btn_clean.on(Laya.Event.MOUSE_DOWN, this, this.downClean);
        this.btn_no.on(Laya.Event.MOUSE_DOWN, this, this.downNo);
        this.btn_ok.on(Laya.Event.MOUSE_DOWN, this, this.downOk);
        this.btn_recall.on(Laya.Event.MOUSE_DOWN, this, this.downRecall);

        this.btn_clean.on(Laya.Event.MOUSE_UP, this, this.startClean);
        this.btn_no.on(Laya.Event.MOUSE_UP, this, this.cancle);
        this.btn_ok.on(Laya.Event.MOUSE_UP, this, this.createSp);
        this.btn_recall.on(Laya.Event.MOUSE_UP, this, this.recall);

        this.img_canvas.on(Laya.Event.MOUSE_DOWN, this, this.startDraw);
        this.img_canvas.on(Laya.Event.MOUSE_MOVE, this, this.moveDraw);
        this.img_canvas.on(Laya.Event.MOUSE_UP, this, this.upDraw);
    }


    private startPoint: CustomBasePoint = null;
    private curDrawSp: CreateCustomLine = null
    private startDraw(evt: Laya.Event) {
        let isClose: boolean = DrawScript.getInstance().getIsClose();
        if (isClose) {
            return;
        }
        this.isCanMove = true;
        this.touchNum += 1;
        this.startPoint = DrawScript.getInstance().getLastPoint();
        let movePoint: CustomBasePoint = null;
        movePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
        if (!this.startPoint) {
            this.startPoint = movePoint;
            DrawScript.getInstance().pushLinePos(movePoint);
        }
        let sp: CreateCustomLine = new CreateCustomLine();
        this.panel_content.addChild(sp);
        this.curDrawSp = sp;

    }

    private moveDraw(evt: Laya.Event) {
        let isClose: boolean = DrawScript.getInstance().getIsClose();
        if (isClose) {
            return;
        }
        if (this.isCanMove && this.startPoint) {
            let movePoint: CustomBasePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
            if (movePoint) {
                this.curDrawSp.startDraw(this.startPoint, movePoint, false);
            }
        }
    }

    private upDraw(evt: Laya.Event) {
        let isClose: boolean = DrawScript.getInstance().getIsClose();
        if (isClose) {
            return;
        }
        this.isCanMove = false;
        if (this.startPoint) {
            let movePoint: CustomBasePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
            this.curDrawSp.startDraw(this.startPoint, movePoint, false);
            let isDraw: boolean = DrawScript.getInstance().judgeCurPoint(movePoint);
            if (!isDraw) {
                if (this.curDrawSp) {
                    this.curDrawSp.removeSelfL();
                }
                this.curDrawSp = null;
            } else {
                let ccc: boolean = DrawScript.getInstance().getIsClose();
                if (ccc) {
                    this.createLine();
                }
            }
        }
        this.addPointTip();
        this.startPoint = null;
        DrawScript.getInstance().setFrontPoint();
        this.changeBtnSkin();
    }

    private downClean() {
        this.btn_clean.skin = "custom/clean_down.png";
    }
    private downNo() {
        this.btn_no.skin = "custom/no_down.png";
    }
    private downOk() {
        this.btn_ok.skin = "custom/ok_down.png";
    }
    private downRecall() {
        this.btn_recall.skin = "custom/recall_down.png";
    }

    private startClean(): void {
        this.btn_clean.mouseEnabled = false;
        this.btn_clean.skin = "custom/clean_disable.png";
        this.touchNum = 0;
        DrawScript.getInstance().cleanCanvas();
        this.panel_content.removeChildren();
        this.addPointTip();
        this.changeBtnSkin();
    }

    private cancle() {
        this.startClean();
        AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
        AppFacade.getInstance().sendNotification(NoficationConfig.CANCLE_UPDATEBTN);
    }

    private createSp() {
        this.btn_ok.skin = "custom/ok_normal.png";
        AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
        AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_CUSTOMEPANEL);
    }

    private recall() {
        this.btn_recall.skin = "custom/recall_normal.png";
        DrawScript.getInstance().removeLastPoint();
        this.changeBtnSkin();
        this.createLine();
        this.addPointTip();
    }

    public onDestroy(): void {
        this.panel_content.removeChildren();
        this.panel_tip.removeChildren();
        Laya.Tween.clearAll(this);
        Laya.loader.clearTextureRes("custom/custome_bg.png");
        this.btn_clean.off(Laya.Event.MOUSE_DOWN, this, this.downClean);
        this.btn_no.off(Laya.Event.MOUSE_DOWN, this, this.downNo);
        this.btn_ok.off(Laya.Event.MOUSE_DOWN, this, this.downOk);
        this.btn_recall.off(Laya.Event.MOUSE_DOWN, this, this.downRecall);

        this.btn_clean.off(Laya.Event.MOUSE_UP, this, this.startClean);
        this.btn_no.off(Laya.Event.MOUSE_UP, this, this.cancle);
        this.btn_ok.off(Laya.Event.MOUSE_UP, this, this.createSp);
        this.btn_recall.off(Laya.Event.MOUSE_UP, this, this.recall);

        this.img_canvas.off(Laya.Event.MOUSE_DOWN, this, this.startDraw);
        this.img_canvas.off(Laya.Event.MOUSE_MOVE, this, this.moveDraw);
        this.img_canvas.off(Laya.Event.MOUSE_UP, this, this.upDraw);
    }
}

export class PointTip extends Laya.Sprite {

    private bgImg: Laya.Image = new Laya.Image();
    private topImg: Laya.Image = new Laya.Image();

    constructor() {
        super();
        this.width = 32;
        this.height = 32;
        this.pivot(this.width / 2, this.height / 2);
        this.bgImg.skin = "custom/pointTip.png";
        this.topImg.skin = "custom/pointTip.png";
        this.bgImg.width = this.bgImg.height = 16;
        this.topImg.width = this.topImg.height = 16;
        this.bgImg.centerX = this.bgImg.centerY = 0;
        this.topImg.centerX = this.topImg.centerY = 0;
        this.addChild(this.bgImg);
        this.addChild(this.topImg);
        this.bgImg.scale(1, 1);
        this.bgImg.alpha = 1;
    }

    public hideAni(): void {
        Laya.Tween.clearAll(this.bgImg);
        this.bgImg.visible = false;
    }

    public showAni(): void {
        this.bgImg.visible = true;
        Laya.Tween.to(this.bgImg, { scaleX: 2, scaleY: 2, alpha: 0.29 }, 400, null, Laya.Handler.create(this, this.onTween1));
    }

    private onTween1(): void {
        Laya.Tween.clearAll(this.bgImg);
        Laya.Tween.to(this.bgImg, { scaleX: 1, scaleY: 1, alpha: 1 }, 400, null, Laya.Handler.create(this, this.onTween2));
    }


    private onTween2(): void {
        Laya.Tween.clearAll(this.bgImg);
        Laya.Tween.to(this.bgImg, { scaleX: 2, scaleY: 2, alpha: 0.29 }, 400, null, Laya.Handler.create(this, this.onTween1));
    }


}