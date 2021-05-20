import { ui } from "../../../../ui/layaMaxUI";

export default class CommonCounter extends ui.common.CommonCounterUI {

    /** 算珠类型【普通算珠 or 补位算珠】 */
    private _counterType: number = 0;
    /** 算珠资源类型 */
    private _sourceType: string = "zhu1";
    /** 初始目标位置 */
    private _tagPos: number = 0;
    private _parenBox: Laya.Box = null;
    constructor() {
        super();
    }

    public initViewData(type: number, skinStr: string): void {
        this._counterType = type;
        this._sourceType = skinStr;
        this._parenBox = this.parent as Laya.Box;
        this.img_bg.loadImage("counter/" + this._sourceType + "_normal.png");
        if (this._parenBox) {
            this._tagPos = this._parenBox.height - (this._parenBox.numChildren * 37);
        }
        this.startTween(true);
    }

    /** 组件被启用后执行 */
    onEnable() {
        //设置初始速度
        this.size(72, 48);
        this.scale(0.8, 0.8);
        this.centerX = 0;
        this.y = 0;
        // this.img_bg.on(Laya.Event.MOUSE_DOWN, this, this.downImg);
        // this.img_bg.on(Laya.Event.MOUSE_UP, this, this.upImg);
    }

    private curTween: Laya.Tween = null;
    public startTween(isFirst: boolean): void {
        if (isFirst) {
            this.curTween = Laya.Tween.to(this, { y: this._tagPos }, 150, Laya.Ease.sineIn, Laya.Handler.create(this, this.toTagPos));
        } else {
            this._tagPos = -20;
            this.curTween = Laya.Tween.to(this, { y: this._tagPos, update: new Laya.Handler(this, this.onupdate) }, 300);
        }
    }

    private onupdate() {
        if (this.y < 10) {
            this.scale(0.7, 0.7);
            if (this.y <= -20) {
                if (this.curTween) {
                    Laya.Tween.clear(this.curTween);
                }
                this.removeSelf();
            }
        }
    }

    private toTagPos() {
        if (this._counterType > 0) {
            //发送事件进入下一个补位操作
            if (this.parent.parent) {
                (this.parent.parent as any).carryOut();
            }
        }
    }

    onDisable() {
        this.img_bg.off(Laya.Event.MOUSE_DOWN, this, this.downImg);
        this.img_bg.off(Laya.Event.MOUSE_UP, this, this.upImg);
        if (this.curTween) {
            Laya.Tween.clear(this.curTween);
        }
        Laya.Pool.recover("Counter", this);
    }

    /** 鼠标按下时执行 */
    downImg() {
        this.img_bg.loadImage("counter/" + this._sourceType + "_down.png");
    }

    /** 鼠标抬起时执行 */
    upImg() {
        this.img_bg.loadImage("counter/" + this._sourceType + "_normal.png");
    }
}