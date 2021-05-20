export default class CommonGameBg extends Laya.Script {

    private owerSp: Laya.Sprite = null;
    private rangeW: number = 192;
    private rangeH: number = 108;

    constructor() {
        super();
    }

    onEnable() {
        this.initBgContent();
        for (let i = 0; i < 100; i++) {
            let index: number = i + 1;
            let sp: Laya.Image = Laya.Pool.getItemByClass("Image", Laya.Image);
            sp.skin = "gameBg/" + index + ".png";
            sp.x = (i % 10) * this.rangeW;
            sp.y = Math.floor(i / 10) * this.rangeH;
            this.owerSp.addChild(sp);
        }
    }

    onDestroy(): void {
        Laya.Pool.recover("Image", Laya.Image);
        this.owerSp.removeChildren();
        this.owerSp.destroy();
    }

    initBgContent(): void {
        this.owerSp = this.owner as Laya.Sprite;
        this.owerSp.removeChildren();
        this.owerSp.width = 1920;
        this.owerSp.height = 1080;
        this.owerSp.x = 0;
        this.owerSp.y = 0;
    }
}