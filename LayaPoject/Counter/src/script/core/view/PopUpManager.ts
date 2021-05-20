import GameConfig from "../../../GameConfig";
import { GameLayerManager } from "../../manager/GameLayerManager";

/**
  * 面板弹出管理类
  */
export class PopUpManager {

	private darkSprite: Laya.Sprite;
	private curPanel: any = null;
	private static _instance: PopUpManager = null;

	public static getInstance(): PopUpManager {
		if (!this._instance) {
			this._instance = new PopUpManager();
		}
		return this._instance;
	}

	/**
	* 添加面板方法
	* panel       		面板
	* dark        		背景是否变黑
	* popUpWidth      	指定弹窗宽度，定位使用
	* popUpHeight      	指定弹窗高度，定位使用
	* effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
	*/
	public addPopUp(panel, dark: boolean = false, popUpWidth: number = 0, popUpHeight: number = 0, effectType: number = 0, isAlert: boolean = false): void {
		if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {//判断是否包含panel
			return;
		}

		panel.scaleX = 1;
		panel.scaleY = 1;
		panel.pivot(panel.width / 2, panel.height / 2);
		panel.x = GameConfig.width / 2;
		panel.y = GameConfig.height / 2;
		panel.alpha = 1;

		if (dark) {
			this.darkSprite = new Laya.Sprite();
			this.darkSprite.graphics.clear();
			this.darkSprite.alpha = 0.5;
			this.darkSprite.graphics.drawRect(0, 0, GameConfig.width, GameConfig.height, 0x000000);
			this.darkSprite.width = GameConfig.width;
			this.darkSprite.height = GameConfig.height;
			if (!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
				GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
			}
		}

		GameLayerManager.gameLayer().panelLayer.addChild(panel);
		this.curPanel = panel;
		switch (effectType) {
			case 0:
				break;
			case 1:
				panel.scaleX = 0.5;
				panel.scaleY = 0.5;
				Laya.Tween.to(panel, {scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut);
				break;
			default:
				break;
		}

	}

	/**
	* 移除面板方法
	* panel       		面板
	* effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
	*/
	public removePopUp(panel, effectType: number = 0): void {

		var onComplete: Function = function () {
			if (GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
				GameLayerManager.gameLayer().panelLayer.removeChild(this.darkSprite);
			}
		};
		if (this.darkSprite) {
			Laya.Tween.to(this.darkSprite, { alpha: 0 }, 100, null, Laya.Handler.create(this, onComplete));
		}

		//以下是弹窗动画
		switch (effectType) {
			case 0:
				break;
			case 1:
				Laya.Tween.to(panel, { alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
				break;
			case 2:
				break;
			case 3:
				Laya.Tween.to(panel, { x: panel.width }, 500, Laya.Ease.cubicOut);
				break;
			case 4:
				Laya.Tween.to(panel, { x: -panel.width }, 500, Laya.Ease.cubicOut);
				break;
			case 5:
				Laya.Tween.to(panel, { y: panel.height }, 500, Laya.Ease.cubicOut);
				break;
			case 6:
				Laya.Tween.to(panel, { y: -panel.height }, 500, Laya.Ease.cubicOut);
				break;
			default:
				break;
		}

		var waitTime = 500;
		if (effectType == 0) {
			waitTime = 0;
		}
		let outNum = setTimeout(() => {
			if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {//判断是否包含panel
				GameLayerManager.gameLayer().panelLayer.removeChild(panel);
			}
			clearTimeout(outNum);
		}, waitTime);
	}

}


