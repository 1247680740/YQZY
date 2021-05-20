class CommonMoveTip extends eui.Component implements eui.UIComponent {
    public label_tip: eui.Label;

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.skinName = "CommonMoveTipSkin";
    }

    private loadComplete(evt: eui.UIEvent): void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private personY: number = 0;
    public initY(x1, y1, num: number): void {
        this.personY = y1 - 10;
        this.x = x1 + this.width / 2;
        this.y = this.personY;
    }

    public changeView(x1, y1, num: number): void {
        this.x = x1 + this.width / 3;
        this.y = this.personY;
        this.label_tip.text = "已拖动" + num + "格";
    }
}