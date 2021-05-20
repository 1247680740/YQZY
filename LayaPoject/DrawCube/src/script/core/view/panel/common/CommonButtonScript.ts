import { ui } from "../../../../../ui/layaMaxUI"
import { NoficationConfig } from "../../../../config/NoficationConfig";
import AppFacade from "../../../AppFacade";
import { ButtonStyleVO } from "../../../model/vo/ButtonStyleVO";
import { DrawScript } from "../../../scripts/DrawScript";

export class CommonButtonScript extends ui.common.CommonButtonUI {

    private data: ButtonStyleVO = null;

    constructor() {
        super();
    }

    onEnable() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.checkBtn);
        this.on(Laya.Event.CLICK, this, this.leaveBt);
    }

    public initView(btnDta: ButtonStyleVO) {
        this.data = btnDta;
        this.width = this.data.width;
        this.height = this.data.height;
        this.img_normal.skin = this.data.sourceUrl + this.data.source + "_normal.png";
        this.img_down.skin = this.data.sourceUrl + this.data.source + "_down.png";
        if (this.data.canSelect) {
            this.img_check.skin = this.data.sourceUrl + this.data.source + "_select.png";
        }
        if (this.data.bgSource.length > 0) {
            this.img_bg.skin = this.data.sourceUrl + this.data.bgSource + ".png";
        }
        this.img_normal.visible = true;
        this.img_check.visible = false;
        this.img_down.visible = false;
    }

    public setCheckImg(bool: boolean): void {
        this.img_down.visible = false;
        if (bool) {
            this.img_normal.visible = false;
            this.img_check.visible = true;
        } else {
            this.img_normal.visible = true;
            this.img_check.visible = false;
        }
    }

    private checkBtn(): void {
        let curBtn: number = DrawScript.getInstance().getCurCheckBtn();
        if (this.data.btnType == curBtn) {
            return;
        }
        this.img_normal.visible = false;
        this.img_check.visible = false;
        this.img_down.visible = true;
    }

    private leaveBt(): void {
        let curBtn: number = DrawScript.getInstance().getCurCheckBtn();
        if (this.data.btnType == curBtn) {
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            AppFacade.getInstance().sendNotification(NoficationConfig.RESET_GAMEVIEW);
            return;
        }
        this.img_check.visible = true;
        this.img_down.visible = false;
        this.img_normal.visible = false;
        DrawScript.getInstance().setCurCheckBtn(this.data.btnType);
        AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
        AppFacade.getInstance().sendNotification(NoficationConfig.UPDATE_FUNBTN);

    }

    onDestroy(): void {
        this.off(Laya.Event.MOUSE_DOWN, this, this.checkBtn);
        this.off(Laya.Event.MOUSE_UP, this, this.leaveBt);
    }
}