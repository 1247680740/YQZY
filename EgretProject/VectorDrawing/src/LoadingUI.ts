class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;
    private content: eui.Group = null;
    private createView(): void {
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.x = 0;
        this.y = 0;

        this.content = new eui.Group();
        this.addChild(this.content);
        this.content.width = 406;
        this.content.height = 400;

        this.content.x = (this.width - this.content.width) / 2;
        this.content.y = 324;

        this.createAnimation();
        this.createProbar();
        this.createLabelTip();
    }

    private role: egret.MovieClip = null;
    private createAnimation(): void {
        let txtr = RES.getRes("loading_png");
        let data = RES.getRes("loading_json");
        var macDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.role = new egret.MovieClip(macDataFactory.generateMovieClipData("loading"));
        this.content.addChild(this.role);
        this.role.play(-1);
        this.role.x = (this.content.width - this.role.width) / 2 - 20;
        this.role.y = 0;

        egret.Tween.removeTweens(this.role);
        egret.Tween.get(this.role).to({ y: -25 }, 350).call(this.ontween1, this);
    }

    private ontween1(): void {
        egret.Tween.get(this.role).to({ y: 0 }, 350).call(this.ontween2, this);
    }

    private ontween2(): void {
        egret.Tween.get(this.role).to({ y: -25 }, 350).call(this.ontween1, this).call(this.tweenOver, this);
    }

    private tweenOver(): void {
        egret.Tween.get(this.role).to({ y: 0 }, 350).call(() => {
            egret.Tween.removeTweens(this.role);
        }, this)
    }

    private proBg: eui.Image = null;
    private progress: eui.Image = null;
    private createProbar(): void {
        this.proBg = new eui.Image();
        this.proBg.source = RES.getRes("progress1_png");
        this.content.addChild(this.proBg);
        this.progress = new eui.Image();
        this.progress.source = RES.getRes("progress2_png");
        this.content.addChild(this.progress);
        this.proBg.x = 0;
        this.proBg.y = this.role.height + 54;
        this.progress.x = this.proBg.x + 3;
        this.progress.y = this.proBg.y + 3;
        this.progress.width = 0;
    }

    private createLabelTip(): void {
        this.textField = new egret.TextField();
        this.content.addChild(this.textField);
        this.textField.width = 406;
        this.textField.textColor = 0xffffff;
        this.textField.fontFamily = "lan";//"SimHei";
        this.textField.textAlign = "center";
        this.textField.text = "正在加载中...";
        this.textField.size = 40;
        this.textField.x = (this.content.width - this.textField.width) / 2;
        this.textField.y = this.content.height - this.textField.height;
    }

    public onProgress(current: number, total: number): void {
        this.progress.width = 400 * (current / total);
    }
}
