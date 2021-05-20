import { ui } from "../../../../ui/layaMaxUI";
import { NoficationConfig } from "../../../config/NoficationConfig";
import { EventManager } from "../../../manager/EventManager";
import { AppFacade } from "../../AppFacade";
import CommonButton from "../common/CommonButton";
import { SingleCounterItem } from "../common/SingleCounterItem";
import HomeMediator, { Counter } from "../mediator/HomeMediator";

export class HomeCity extends ui.main.GameViewSceneUI {

    private eventArr: Array<string> = [
        "HOMECITY_ADDCOUNTER",
        "HOMECITY_DELETECOUNTER",
        "HOMECITY_ADDNEXTCOUNTER",
        "HOMECITY_STARTRESET"
    ];

    private carryIndex: number = -1;

    public constructor() {
        super();
    }

    onEnable(): void {
        this.initEvent();
        this.initView();
    }

    private initEvent(): void {
        for (let i = 0; i < this.eventArr.length; i++) {
            EventManager.AddNotice(this.eventArr[i], this, this.listenerCom, null);
        }
    }

    public initView(): void {
        HomeMediator.getInstance().initViewData();
        let data: Counter[] = HomeMediator.getInstance().getAllCounterData();
        let startIndex: number = HomeMediator.getInstance().getCurStartIndex();
        for (let i = 0; i < data.length; i++) {
            let item: SingleCounterItem = Laya.Pool.getItemByClass("SingleCounterItem", SingleCounterItem);
            item.setData(data[i], startIndex);
            this.panel_content.addChild(item);
        }
        this.initMainBtn();
        this.resetBtnStatus();
    }

    private listenerCom(evtName: any) {
        let data: Counter[] = HomeMediator.getInstance().getAllCounterData();
        let startIndex: number = HomeMediator.getInstance().getCurStartIndex();
        if (evtName == this.eventArr[0]) { //添加算珠
            this.carryIndex = -1;
            for (let i = this.panel_content.numChildren - 1; i > -1; i--) {
                let item: SingleCounterItem = this.panel_content.getChildAt(i) as SingleCounterItem;
                if (item) {
                    item.changeItem(data[i], startIndex);
                }
            }
        } else if (evtName == this.eventArr[1]) {//删除算珠
            this.carryIndex = -1;
            for (let i = this.panel_content.numChildren - 1; i > -1; i--) {
                let item: SingleCounterItem = this.panel_content.getChildAt(i) as SingleCounterItem;
                if (item) {
                    item.changeItem(data[i], startIndex);
                }
            }
        } else if (evtName == this.eventArr[2]) {//进位算珠
            this.carryIndex = (this.carryIndex < 0) ? HomeMediator.getInstance().getCarrayIndex() : this.carryIndex;
            let carryItem: SingleCounterItem = this.panel_content.getChildAt(this.carryIndex) as SingleCounterItem;
            if (carryItem) {
                carryItem.changeItem(data[this.carryIndex], startIndex);
            }
            this.carryIndex -= 1;
        } else if (evtName == this.eventArr[3]) {
            this.resetGame();
        }
        this.resetBtnStatus();
    }

    private resetGame(): void {
        HomeMediator.getInstance().resetGame();
        this.setTouchEnable(false);
        let data: Counter[] = HomeMediator.getInstance().getAllCounterData();
        let startIndex: number = HomeMediator.getInstance().getCurStartIndex();
        for (let i = 0; i < data.length; i++) {
            let item: SingleCounterItem = this.panel_content.getChildAt(i) as SingleCounterItem;
            if (item) {
                item.changeItem(data[i], startIndex);
            }
        }
    }

    private recallGame(): void {
        HomeMediator.getInstance().recallStep();
        this.setTouchEnable(false);
        let data: Counter[] = HomeMediator.getInstance().getAllCounterData();
        let startIndex: number = HomeMediator.getInstance().getCurStartIndex();
        for (let i = 0; i < data.length; i++) {
            let item: SingleCounterItem = this.panel_content.getChildAt(i) as SingleCounterItem;
            if (item) {
                item.changeItem(data[i], startIndex);
            }
        }
    }

    private openConfirm() {
        AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_CONFIRM);
    }

    private opneGuide() {

    }

    private initMainBtn() {
        (this.btn_recall as CommonButton).initView(226, 114, "recall", "guide/");
        (this.btn_reset as CommonButton).initView(226, 114, "reset", "guide/");
        (this.btn_guide as CommonButton).initView(140, 54, "guide", "guide/");
        (this.btn_guide as CommonButton).status = true;
        (this.btn_recall as CommonButton).on(Laya.Event.CLICK, this, this.recallGame);
        (this.btn_reset as CommonButton).on(Laya.Event.CLICK, this, this.openConfirm);
        (this.btn_guide as CommonButton).on(Laya.Event.CLICK, this, this.opneGuide);
    }

    private resetBtnStatus(): void {
        let recallLen: boolean = HomeMediator.getInstance().getRecallBtnStatus();
        let resetLen: boolean = HomeMediator.getInstance().getResetBtnStatus();
        (this.btn_recall as CommonButton).mouseEnabled = recallLen;
        (this.btn_reset as CommonButton).mouseEnabled = resetLen;
        (this.btn_recall as CommonButton).status = recallLen;
        (this.btn_reset as CommonButton).status = resetLen;
    }

    private setTouchEnable(bool: boolean) {
        this.carryIndex = -1;
        (this.btn_recall as CommonButton).mouseEnabled = false;
        (this.btn_reset as CommonButton).mouseEnabled = false;
        Laya.timer.once(300, this, () => {
            this.resetBtnStatus();
        });
    }
}