class SeniorComponent extends eui.Component implements eui.UIComponent {
	public group_panel: eui.Group;
	public segment: CommonButton;
	public lineSegment: CommonButton;
	public subSection: CommonButton;
	public bracket: CommonButton;
	public arrow: CommonButton;
	public dottedLine: CommonButton;
	public painting: CommonButton;
	public flupaint: CommonButton;
	public btn_boxSelect: CommonButton;
	public btn_recall: eui.Button;
	public btn_reset: eui.Button;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.skinName = "SeniorComponentSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
	}

	public initShow() {
		this.segment.setBtnType(drawType.drawSegment, "segment");
		this.lineSegment.setBtnType(drawType.drawLineSegment, "lineSegment");
		this.subSection.setBtnType(drawType.subSection, "subSection");
		this.bracket.setBtnType(drawType.bracket, "bracket");
		this.arrow.setBtnType(drawType.drawArrow, "arrow");
		this.dottedLine.setBtnType(drawType.lineSegment, "dottedLine");
		this.painting.setBtnType(drawType.painting, "painting");
		this.flupaint.setBtnType(drawType.flupaint, "flupaint");
		this.btn_boxSelect.setBtnType(drawType.boxSelect, "btn_boxSelect");
		for (let i = 0; i < this.group_panel.numChildren; i++) {
			let btn: CommonButton = this.group_panel.getChildAt(i) as CommonButton;
			if (btn.btnType == GlobalData.paintVO.typeNum) {
				btn.setStatus("down");
			} else {
				btn.setStatus("normal");
			}
		}
		this.btn_recall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.recall, this);
		this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
	}
	private recall(evt: egret.TouchEvent): void {
		game.AppFacade.getInstance().sendNotification(NoficationConfig.RECALL_BRUSH);
	}

	private reset(evt: egret.TouchEvent): void {
		game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESETVIEW);
	}

	public setRestStatus(bool: boolean): void {
		this.btn_recall.enabled = bool;
	}

	public resetShow(): void {
		for (let i = 0; i < this.group_panel.numChildren; i++) {
			let btn: CommonButton = this.group_panel.getChildAt(i) as CommonButton;
			if (btn.btnType == GlobalData.paintVO.typeNum) {
				btn.setStatus("down");
			} else {
				btn.setStatus("normal");
			}
		}
	}
}