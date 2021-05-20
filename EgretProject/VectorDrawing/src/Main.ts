class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        window['gameLoading'].show();
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);

        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(egret.Event.COMPLETE, this.themeComplete, this);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");

        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());
        GameLayerManager.gameLayer().setStage(this.stage);
    }

    private isTheme: boolean = false;
    private themeComplete(): void {
        this.isTheme = true;
    }

    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            if (this.isTheme) {
                this.createGameScene();
            }
            // removeLoading();
            window['gameLoading'].remove();
        }
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            // setloadPro(event.itemsLoaded, event.itemsTotal);
            window['gameLoading'].setProgress(event.itemsLoaded / event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     */
    private createGameScene(): void {
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GAMEVIEW);
    }
}

