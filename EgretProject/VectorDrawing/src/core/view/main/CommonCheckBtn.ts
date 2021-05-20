class CommonCheckBtn extends eui.Component implements eui.UIComponent {
	public img_bg: eui.Image;
	public img_normal: eui.Image;
	public img_check: eui.Image;

	private _typeNum: number = 0;
	private _index: number = 0;
	private _sizeNum: number = 0;
	private _colorNum: number = 0;
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.skinName = "CommonCheckBtnSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(evt: eui.UIEvent): void {
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
	}

	public initData(data: any, index: number): void {
		this._typeNum = data.type;
		this._index = index;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startCheck, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
		switch (this._typeNum) {
			case 1:
				this._sizeNum = data.size;
				this.img_normal.source = RES.getRes("flu_point_png");
				this.img_check.source = RES.getRes("flu_circle_png");
				if (index == 0) {
					this.img_normal.height = this.img_normal.width = 12;
					this.img_check.height = this.img_check.width = 26;
				} else if (index == 1) {
					this.img_normal.height = this.img_normal.width = 16;
					this.img_check.height = this.img_check.width = 34;
				} else if (index == 2) {
					this.img_normal.height = this.img_normal.width = 28;
					this.img_check.height = this.img_check.width = 44;
				}
				break;
			case 2:
				this.width = 76;
				this.height = 76;
				this.img_bg.width = this.width;
				this.img_bg.height = this.height;
				this.img_normal.width = 56;
				this.img_normal.height = 56;
				this.img_check.width = 40;
				this.img_check.height = 40;
				this._colorNum = data.color;
				this.img_bg.source = RES.getRes("flu_colorBg_png");
				this.img_normal.source = RES.getRes(data.source);
				this.img_check.source = RES.getRes("flu_sure_png");
				break;
		}
	}

	public setShow(checkNum: number): void {
		switch (this._typeNum) {
			case 1:
				if (this._index == checkNum) {
					this.img_check.visible = true;
				} else {
					this.img_check.visible = false;
				}
				break;
			case 2:
				if (this._index == checkNum) {
					this.img_check.visible = true;
					this.img_bg.visible = true;
					// this.img_normal.scaleX = this.img_normal.scaleY = 0.9;
				} else {
					this.img_check.visible = false;
					this.img_bg.visible = false;
					// this.img_normal.scaleX = this.img_normal.scaleY = 1;
				}
				break;
		}
	}

	private startCheck(evt: egret.TouchEvent): void {
		if (this && this.parent && this.parent.parent.parent) {
			if (this._typeNum == 1) {
				(this.parent.parent.parent as GameCheckFLuView).resetSize(this._index);
			} else {
				(this.parent.parent.parent as GameCheckFLuView).resetColor(this._index);
			}
		}
	}

	public get indexNum(): number {
		return this._index;
	}

	private removed(evt: egret.Event): void {
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startCheck, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
	}

}