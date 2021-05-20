import GameBaseConfig from "./script/config/GameBaseConfig";
import { NoficationConfig } from "./script/config/NoficationConfig";
import AppFacade from "./script/core/AppFacade";
import { GameLayerManager } from "./script/manager/GameLayerManager";
class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"])
		Laya3D.init(GameBaseConfig.width, GameBaseConfig.height, null, Laya.Handler.create(this, this.initMain));
		else {
			Laya.init(GameBaseConfig.width, GameBaseConfig.height, Laya["WebGL"]);
			this.initMain();
		}
		window["gameLoading"].show();
	}
	initMain() {
		Laya.stage.addChild(GameLayerManager.gameLayer());
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameBaseConfig.scaleMode;
		Laya.stage.screenMode = GameBaseConfig.screenMode;
		Laya.stage.alignV = GameBaseConfig.alignV;
		Laya.stage.alignH = GameBaseConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameBaseConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameBaseConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameBaseConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameBaseConfig.stat) Laya.Stat.show();
		// Laya.alertGlobalError(true);
		var sourceArr: Array<any> = [
			{ url: "common/common_gameBg.png", type: Laya.Loader.IMAGE },
			{ url: "common/common_leftBg.png", type: Laya.Loader.IMAGE },
			{ url: "common/common_rightBg.png", type: Laya.Loader.IMAGE },
			{ url: "common/maskBg.png", type: Laya.Loader.IMAGE },
			{ url: "custom/custome_bg.png", type: Laya.Loader.IMAGE },
			{ url: "dialog/dialog_bg.png", type: Laya.Loader.IMAGE },
			{ url: "guide/guide_bg.png", type: Laya.Loader.IMAGE },
			{ url: "res/data/initData.json", type: Laya.Loader.JSON },
		];
		Laya.loader.load(sourceArr, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onProgress, null, false));
	}

	private onProgress(pre: number) {
		window["gameLoading"].setProgress(pre);
	}

	private onLoaded(): void {
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		let gameBg: Laya.Image = new Laya.Image();
		gameBg.skin = "common/common_gameBg.png";
		gameBg.width = Laya.stage.width;
		gameBg.height = Laya.stage.height;
		Laya.stage.addChildAt(gameBg, 0);
		AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
		AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
		AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GUIDE);
		window["gameLoading"].remove();
	}
}
//激活启动类
new Main();
