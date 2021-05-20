import GameBaseConfig from "../config/GameBaseConfig";
import { GameLayerManager } from "../manager/GameLayerManager";

export class TipUtil {

    private static tipImg: Laya.Image = new Laya.Image();
    constructor() {

    }

    //从里到外
    static showTipsFromCenter(): void {
        if (GameLayerManager.gameLayer().effectLayer.contains(this.tipImg)) {
            return;
        }
        GameLayerManager.gameLayer().effectLayer.addChild(this.tipImg);
        this.tipImg.skin = "common/img_tip.png";
        this.tipImg.alpha = 0;
        let rateNum: number = GameBaseConfig.width / Laya.stage.width;
        this.tipImg.x = (Laya.stage.width / 3 + this.tipImg.width) * rateNum;
        this.tipImg.y = Laya.stage.height - this.tipImg.height * 2.5;
        Laya.Tween.to(this.tipImg, { alpha: 1 }, 300, Laya.Ease.sineIn);
    }

    static hideTipsFromCenter(): void {
        GameLayerManager.gameLayer().effectLayer.removeChildren();
    }
}