import { NoficationConfig } from "../../../config/NoficationConfig";
import { EventManager } from "../../../manager/EventManager";
import { BaseMediator } from "../BaseMediator";
import CommonButton from "../common/CommonButton";
import { ConfirmPanel } from "../panel/ConfirmPanel";

/**
  * 确认面板
  */
export class ConfirmMediator extends BaseMediator {
    public static NAME: string = "ConfirmMediator";

    public constructor(viewComponent: any = null) {
        super(ConfirmMediator.NAME, viewComponent);
    }

    public listNotificationInterests(): Array<any> {
        return [
            NoficationConfig.OPEN_CONFIRM,
            NoficationConfig.CLOSE_CONFIRM
        ];
    }
    private confirmPanel: ConfirmPanel = new ConfirmPanel();
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        switch (notification.getName()) {
            case NoficationConfig.OPEN_CONFIRM: {
                //显示角色面板
                this.showUI(this.confirmPanel, true, 0, 0, 1);
                break;
            }
            case NoficationConfig.CLOSE_CONFIRM: {
                this.closeButtonClick();
                break;
            }
        }
    }

    /** 初始化面板数据 */
    public initData(): void {
    }

    /** 初始化面板ui */
    public initUI(): void {
        (this.confirmPanel.btn_cancle as CommonButton).initView(220, 80, "cancle", "dialog/");
        (this.confirmPanel.btn_yes as CommonButton).initView(226, 80, "yes", "dialog/");
        (this.confirmPanel.btn_cancle as CommonButton).status = true;
        (this.confirmPanel.btn_yes as CommonButton).status = true;
        (this.confirmPanel.btn_cancle as CommonButton).on(Laya.Event.MOUSE_UP, this, this.closeButtonClick);
        (this.confirmPanel.btn_yes as CommonButton).on(Laya.Event.MOUSE_UP, this, this.startReset);
    }

    private startReset() {
        EventManager.Emit("HOMECITY_STARTRESET", null);
        this.closeButtonClick();
    }

    private closeButtonClick(): void {
        (this.confirmPanel.btn_cancle as CommonButton).off(Laya.Event.MOUSE_UP, this, this.closeButtonClick);
        (this.confirmPanel.btn_yes as CommonButton).off(Laya.Event.MOUSE_UP, this, this.startReset);
        this.closePanel(0);
    }
}