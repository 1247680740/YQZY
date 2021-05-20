class GameCheckFLuView extends eui.Component {
    public group_content: eui.Group;
    public group_size: eui.Group;
    public group_color: eui.Group;

    private curType: number = 0;

    private sizeArr: Array<any> = [{ "type": 1, "size": 4 }, { "type": 1, "size": 10 }, { "type": 1, "size": 20 }];
    private colorArr: Array<any> = [{ "type": 2, "color": 0xFF443A, "source": "flu_red_png" },
    { "type": 2, "color": 0xFFA000, "source": "flu_oriange_png" },
    { "type": 2, "color": 0x1398FF, "source": "flu_blue_png" },
    { "type": 2, "color": 0x231F56, "source": "flu_black_png" },
    { "type": 2, "color": 0x08BA72, "source": "flu_green_png" },
    { "type": 2, "color": 0xFDF829, "source": "flu_yellow_png" }];


    private _sizeCheck: number = 0;
    private _colorCheck: number = 0;

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        this.skinName = "GameCheckFLuSkin";
    }

    public createCompleteEvent(event: eui.UIEvent): void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
    }

    public partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    public initView(): void {
        this.right = -100;
        this.bottom = 200;
        this.group_content.scaleX = 0;
        this.group_content.scaleY = 0;
        this.curType = GlobalData.paintVO.typeNum;
        egret.Tween.get(this.group_content).to({ scaleX: 1, scaleY: 1 }, 400);
        if (this.curType == drawType.painting) {
            this._sizeCheck = GlobalData.paintVO.paintSize;
            this._colorCheck = GlobalData.paintVO.paintColor;
        } else {
            this._sizeCheck = GlobalData.paintVO.fluSize;
            this._colorCheck = GlobalData.paintVO.fluColor;
        }
        for (let i: number = 0; i < this.group_size.numChildren; i++) {
            let flu: CommonCheckBtn = this.group_size.getChildAt(i) as CommonCheckBtn;
            let data = this.sizeArr[i];
            flu.initData(data, i);
            flu.setShow(this._sizeCheck);
        }
        for (let j: number = 0; j < this.group_color.numChildren; j++) {
            let flu1: CommonCheckBtn = this.group_color.getChildAt(j) as CommonCheckBtn;
            let data1 = this.colorArr[j];
            flu1.initData(data1, j);
            flu1.setShow(this._colorCheck);
        }
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    }

    public resetSize(index: number): void {
        this._sizeCheck = index;
        for (let i: number = 0; i < this.group_size.numChildren; i++) {
            let flu: CommonCheckBtn = this.group_size.getChildAt(i) as CommonCheckBtn;
            flu.setShow(this._sizeCheck);
        }
    }

    public resetColor(index: number): void {
        this._colorCheck = index;
        for (let j: number = 0; j < this.group_color.numChildren; j++) {
            let flu1: CommonCheckBtn = this.group_color.getChildAt(j) as CommonCheckBtn;
            flu1.setShow(this._colorCheck);
        }
    }

    private removed(evt: egret.Event): void {
        egret.Tween.removeTweens(this.group_content);
        let sizeData: any = this.sizeArr[this._sizeCheck];
        let colorData: any = this.colorArr[this._colorCheck];
        if (this.curType == drawType.painting) {
            GlobalData.paintVO.paintSize = this._sizeCheck;
            GlobalData.paintVO.paintColor = this._colorCheck;
        } else {
            GlobalData.paintVO.fluSize = this._sizeCheck;
            GlobalData.paintVO.fluColor = this._colorCheck;
        }
        GlobalData.paintVO.setStype([{ "weightNum": sizeData.size }, { "colorNum": colorData.color }]);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    }

    public getTypeNum(): number {
        return this.curType;
    }
}