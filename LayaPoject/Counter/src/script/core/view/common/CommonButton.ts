import { ui } from "../../../../ui/layaMaxUI";

export default class CommonButton extends ui.common.CommonButtonUI {
    private _sourceName: string = "";
    private _sourceRoute: string = "";
    constructor() {
        super();
    }

    public initView(wN: number, hN: number, sourceName: string, route: string): void {
        this.width = wN;
        this.height = hN;
        this._sourceName = sourceName;
        this._sourceRoute = route;
        this.img_normal.on(Laya.Event.MOUSE_DOWN, this, this.downImg);
        this.img_normal.on(Laya.Event.MOUSE_UP, this, this.upImg);
        this.img_normal.on(Laya.Event.MOUSE_OUT, this, this.upImg);
    }

    public set isHasBg(bool: boolean) {
        if (this.isHasBg) {
            this.img_bg.skin = this._sourceRoute + "img_btnBg.png";
            this.img_bg.width = this.width;
            this.img_bg.height = this.height;
        }
    }

    public set status(bool: boolean) {
        this.mouseEnabled = bool;
        this.img_normal.mouseEnabled = bool;
        if (bool) {
            this.img_normal.skin = this._sourceRoute + this._sourceName + "_normal.png";
        } else {
            this.img_normal.skin = this._sourceRoute + this._sourceName + "_disable.png";
        }
    }

    private downImg(evt: Laya.Event) {
        this.img_normal.skin = this._sourceRoute + this._sourceName + "_down.png";
    }

    private upImg() {
        this.img_normal.skin = this._sourceRoute + this._sourceName + "_normal.png";
    }
}