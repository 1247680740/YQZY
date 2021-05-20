import { ui } from "../../../../ui/layaMaxUI";
import { EventManager } from "../../../manager/EventManager";
import HomeMediator, { Counter } from "../mediator/HomeMediator";
import CommonButton from "./CommonButton";
import CommonCounter from "./CommonCounter";

export class SingleCounterItem extends ui.common.SingleCounterItemUI {

    private _counterData: Counter = null;
    private delteNum: number = 0;
    constructor() {
        super();
    }

    public setLabelShow(showNum: number): void {
        this.label_num.visible = (showNum < 0) ? false : true;
        if (showNum > -1) {
            this.label_num.text = showNum + "";
        }
    }

    private setBtnTouch(): void {
        (this.btn_unit as CommonButton).mouseEnabled = this._counterData.canTouch;
        (this.btn_unit as CommonButton).status = this._counterData.canTouch;
    }

    private changeHasCounter(): void {
        if (this._counterData.curStatus > 0) {
            switch (this._counterData.curStatus) {
                case 1://添加
                    let addNum: number = this._counterData.counterNum - this.box_zhu.numChildren;
                    let bool: boolean = HomeMediator.getInstance().getTouchStatus();
                    if (bool == false) {
                        HomeMediator.getInstance().setTouchStatus(true, 200);
                    }
                    if (addNum < 2) {
                        this.addCounter(0);
                    } else {
                        for (let i = 0; i < addNum; i++) {
                            Laya.timer.once(i * 40, this, this.addCounter, [0], false);
                        }
                    }
                    break;
                case 2://删除
                    let deleteNum: number = this.box_zhu.numChildren - this._counterData.counterNum;
                    this.deleteCounter(deleteNum);
                    break;
                case 3://进位
                    this.addCounter(1);
                    break;
            }
        }
    }

    public setData(data: Counter, startIndex: number): void {
        this._counterData = data;
        this.x = data.posX;
        this.y = data.posY;
        this.img_top.skin = "counter/" + this._counterData.counterSkin + "_bg.png";
        (this.btn_unit as CommonButton).initView(134, 98, this._counterData.sourceStr, "button/");
        this.setLabelShow(this._counterData.counterNum);
        // if (this._counterData.counterId >= startIndex) {
        //     this.setLabelShow(this._counterData.counterNum);
        // } else {
        //     this.setLabelShow(-1);
        // }
        this.setBtnTouch();
        this.changeHasCounter();
        (this.btn_unit as CommonButton).on(Laya.Event.CLICK, this, this.addAllCounterData);
    }

    public changeItem(data: Counter, startIndex: number): void {
        this._counterData = data;
        this.setLabelShow(this._counterData.counterNum);
        // if (this._counterData.counterId >= startIndex) {
        //     this.setLabelShow(this._counterData.counterNum);
        // } else {
        //     this.setLabelShow(-1);
        // }
        this.setBtnTouch();
        this.changeHasCounter();
    }

    private addAllCounterData(evt: Laya.Event): void {
        let isCanTouch: boolean = HomeMediator.getInstance().getTouchStatus();
        if (isCanTouch) {
            HomeMediator.getInstance().setTouchStatus(false, 0);
            HomeMediator.getInstance().addCounterData(this._counterData);
            let carryIndex: number = HomeMediator.getInstance().getCarrayIndex();
            if (carryIndex < 0) {
                EventManager.Emit("HOMECITY_ADDCOUNTER", null);
            } else {
                EventManager.Emit("HOMECITY_ADDNEXTCOUNTER", null);
            }
        }
    }

    /**
     * 
     * @param delNum:从盒子里删除固定数量的算珠
     * @type number
     */
    public deleteCounter(delNum: number): void {
        let bool: boolean = HomeMediator.getInstance().getTouchStatus();
        let startNum: number = 0;
        let allTime: number = 0;
        for (let i = this.box_zhu.numChildren - 1; i > -1; i--) {
            if (startNum < delNum) {
                let sp: CommonCounter = this.box_zhu.getChildAt(i) as CommonCounter;
                if (sp) {
                    allTime += (i * 40);
                    Laya.timer.once(i * 40, this, this.startDelete, [sp], false);
                }
                startNum += 1;
            }
        }
        if (bool == false) {
            allTime += (delNum * 150);
            HomeMediator.getInstance().setTouchStatus(true, allTime);
        }
    }

    private startDelete(sp: CommonCounter): void {
        sp.startTween(false);
    }
    /** 
     * @param addType:0:普通添加 ||  1:进位添加，需要掉落后的回调
     */
    public addCounter(addType: number): void {
        let scriptCounter: CommonCounter = new CommonCounter();
        this.box_zhu.addChild(scriptCounter);
        var numChild: number = this.box_zhu.numChildren;
        scriptCounter.name = "counter" + numChild;
        scriptCounter.initViewData(addType, this._counterData.counterSkin);
        scriptCounter.on(Laya.Event.MOUSE_DOWN, this, this.checkDownCounter);
        scriptCounter.on(Laya.Event.MOUSE_UP, this, this.checkUpCounter);
    }


    public checkDownCounter(evt: Laya.Event) {
        let status: boolean = HomeMediator.getInstance().getTouchStatus();
        if (status) {
            //不包含点击目标自身
            let nameStr: string = evt.currentTarget.name;
            let len: number = parseInt(nameStr.substr(nameStr.length - 1, 1));
            this.delteNum = this.box_zhu.numChildren - (len - 1);
            for (let i = this.box_zhu.numChildren - 1; i >= len - 1; i--) {
                let counter: CommonCounter = this.box_zhu.getChildAt(i) as CommonCounter;
                if (counter) {
                    counter.downImg();
                }
            }
        }
    }

    public checkUpCounter() {
        let status: boolean = HomeMediator.getInstance().getTouchStatus();
        if (status) {
            HomeMediator.getInstance().setTouchStatus(false, 0);
            for (let i = 0; i < this.box_zhu.numChildren; i++) {
                let counter: CommonCounter = this.box_zhu.getChildAt(i) as CommonCounter;
                if (counter) {
                    counter.upImg();
                }
            }
            HomeMediator.getInstance().deletCounterData(this._counterData, this.delteNum);
            EventManager.Emit("HOMECITY_DELETECOUNTER", null);
        }
    }

    /** 进位消失 */
    public carryOut(): void {
        Laya.Tween.to(this.box_zhu, { alpha: 0 }, 300, null, Laya.Handler.create(this, this.carryOut1));
    }

    private carryOut1(): void {
        Laya.Tween.to(this.box_zhu, { alpha: 1 }, 300, null, Laya.Handler.create(this, this.carryOut2));
    }

    private carryOut2(): void {
        this.box_zhu.removeChildren();
        EventManager.Emit("HOMECITY_ADDNEXTCOUNTER", null);
    }
}