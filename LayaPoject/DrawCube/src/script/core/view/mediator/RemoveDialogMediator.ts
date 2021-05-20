import { NoficationConfig } from "../../../config/NoficationConfig";
import AppFacade from "../../AppFacade";
import { Processor_100_1 } from "../../controller/Processor/Processor_100_1";
import { DrawScript } from "../../scripts/DrawScript";
import { BaseMediator } from "../BaseMediator";
import { RemoveDialogView } from "../panel/main/RemoveDialogView";

export class RemoveDialogMediator extends BaseMediator {
    public static NAME: string = "RemoveDialogMediator";

    public constructor(viewComponent: any = null) {
        super(RemoveDialogMediator.NAME, viewComponent);
    }

    public listNotificationInterests(): Array<any> {
        return [
            NoficationConfig.OPEN_REMOVEDIALOG,
            NoficationConfig.CLOSE_REMOVEDIALOG
        ];
    }
    private removeDialog: RemoveDialogView = new RemoveDialogView();
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        switch (notification.getName()) {
            case NoficationConfig.OPEN_REMOVEDIALOG: {
                this.initViewData(data);
                this.showUI(this.removeDialog, false, 1920, 1080, 0);
                break;
            }
            case NoficationConfig.CLOSE_REMOVEDIALOG: {
                this.closeButtonClick();
                break;
            }
        }
    }

    private viewType: number = 0;
    public initViewData(viewType: number): void {
        this.viewType = viewType;
    }

    public initUI(): void {
        this.removeDialog.img_bg.skin = "dialog/dialog_bg.png";
        this.removeDialog.img_mask.loadImage("common/maskBg.png");
        this.removeDialog.panel_content.scale(0, 0);
        Laya.Tween.to(this.removeDialog.panel_content, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, () => {
            Laya.Tween.clearTween(this.removeDialog.panel_content);
        }));
        if (this.viewType == 0) {
            this.removeDialog.label_tip.text = "确定替换当前画板内容吗?";
        } else {
            this.removeDialog.label_tip.text = "确定重置当前画板吗?";
        }
        this.removeDialog.btn_sure.on(Laya.Event.MOUSE_DOWN, this, this.sureDown);
        this.removeDialog.btn_cancle.on(Laya.Event.MOUSE_DOWN, this, this.cancleDown);
        this.removeDialog.btn_sure.on(Laya.Event.MOUSE_UP, this, this.removeSp);
        this.removeDialog.btn_cancle.on(Laya.Event.MOUSE_UP, this, this.cancleBtn);
    }

    private sureDown(): void {
        this.removeDialog.btn_sure.skin = "dialog/btn_sure_down.png";
    }

    private cancleDown(): void {
        this.removeDialog.btn_cancle.skin = "dialog/btn_cancle_down.png";
    }

    private removeSp(): void {
        this.closeButtonClick();
        this.removeDialog.btn_sure.skin = "dialog/btn_sure_normal.png";
        if (this.viewType == 0) {
            AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_SPRITE);
        } else {
            AppFacade.getInstance().sendNotification(NoficationConfig.RESET_GAMEVIEW);
        }
    }

    private cancleBtn(): void {
        AppFacade.getInstance().sendNotification(NoficationConfig.CANCLE_UPDATEBTN);
        this.closeButtonClick();
    }

    private closeButtonClick(): void {
        Laya.loader.clearTextureRes("dialog/dialog_bg.png");
        Laya.loader.clearTextureRes("common/maskBg.png");
        this.removeDialog.btn_cancle.skin = "dialog/btn_cancle_normal.png";
        this.removeDialog.btn_sure.off(Laya.Event.MOUSE_DOWN, this, this.sureDown);
        this.removeDialog.btn_cancle.off(Laya.Event.MOUSE_DOWN, this, this.cancleDown);
        this.removeDialog.btn_sure.off(Laya.Event.MOUSE_UP, this, this.removeSp);
        this.removeDialog.btn_cancle.off(Laya.Event.MOUSE_UP, this, this.cancleBtn);
        this.closePanel(0);
    }

}