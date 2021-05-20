class CommonSubBtn extends eui.Component implements eui.UIComponent {
	public btn_sub: eui.Image;
	public btn_copy: eui.Image;
	public group_panel: eui.Group;
	public btn_cancle: eui.Button;
	public btn_confirm: eui.Button;
	public lable_tip1: eui.Label;
	public label_tip2: eui.Label;
	public eui_scroller: eui.Scroller;
	public group_content: eui.Group;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.skinName = "CommonSubBtnSkin";
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

	public initData(pX: number, pY: number, pW: number, pH: number): void {
		this.lable_tip1.fontFamily = "fzltch";
		this.label_tip2.fontFamily = "fzltch";
		this.btn_sub.source = RES.getRes("btn_range_normal_png");
		if (GlobalData.canvasHei - (pY + pH) < this.height) {//在顶部显示
			this.top = pY - this.height;
			this.btn_sub.top = 180;
			this.btn_copy.top = 180;
			this.group_panel.top = 0;
		} else {//在底部显示
			this.top = pY + pH;
			this.btn_sub.top = 0;
			this.btn_copy.top = 0;
			this.group_panel.top = 100;
		}
		if (pX > 260 && pX < this.parent.width - 260) {
			this.right = this.parent.width - (pX + pW);
			this.group_panel.left = 0;
		} else {
			if (pX <= 260) {
				this.right = this.parent.width - pX - this.width + 290;
				this.group_panel.left = 290;
			} else {
				this.right = this.parent.width - (pX + pW);
				this.group_panel.left = 0;
			}
		}
		this.group_panel.visible = false;
		this.btn_copy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.copy, this);
		this.btn_sub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sub, this);

		this.btn_cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
		this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
	}

	private copy(evt: egret.TouchEvent): void {
		evt.stopPropagation();
		this.btn_sub.source = RES.getRes("btn_range_normal_png");
		this.removeSelf();
		game.AppFacade.getInstance().sendNotification(NoficationConfig.COPY_BRUSH);
	}

	private sub(evt: egret.TouchEvent): void {
		evt.stopPropagation();
		this.btn_sub.source = RES.getRes("btn_range_select_png");
		this.group_panel.visible = true;
		this.initList();
	}

	private cancle(evt: egret.TouchEvent) {
		this.btn_sub.source = RES.getRes("btn_range_normal_png");
		this.group_panel.visible = false;
	}

	private confirm(evt: egret.TouchEvent) {
		let data: any = this.dataArr[this.selectIndex];
		if (data < 2) {
			this.removeSelf();
			return;
		}
		game.GameScript.getInstance().subBrush(data);
		this.removeSelf();
	}

	private dataArr: Array<Object> = [];
	private selectIndex: number = 0;
	private initList() {
		this.dataArr = [9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
		for (var i = 0; i < this.dataArr.length; i++) {
			let label_a: eui.Label = new eui.Label();
			this.group_content.addChild(label_a);
			label_a.fontFamily = "lan";
			label_a.size = 40;
			label_a.width = 118;
			label_a.height = 40;
			label_a.textAlign = "center";
			if (i == 2) {
				label_a.textColor = 0xffffff;
			} else {
				label_a.textColor = 0xeeeeee;
			}
			label_a.text = this.dataArr[i] + "";
		}
		this.selectIndex = 0;
		this.eui_scroller.viewport.scrollV = 60;
		this.eui_scroller.throwSpeed = 0;
		this.eui_scroller.addEventListener(eui.UIEvent.CHANGE, this.moveing, this);
		this.eui_scroller.addEventListener(eui.UIEvent.CHANGE_END, this.ending, this);
	}

	private moveing(e: egret.Event): void {
		if (this.eui_scroller.viewport.scrollV > 422) {
			this.eui_scroller.viewport.scrollV = 19;
		}
		if (this.eui_scroller.viewport.scrollV < 19) {
			this.eui_scroller.viewport.scrollV = 422;
		}
	}

	private ending(e: egret.Event): void {
		this.selectIndex = Math.round(this.eui_scroller.viewport.scrollV / 40);
		let num: number = this.selectIndex * 40 - 18;
		egret.Tween.get(this.eui_scroller.viewport).to({ "scrollV": num }, 200);
		for (let i = 0; i < this.group_content.numChildren; i++) {
			let lb: eui.Label = this.group_content.getChildAt(i) as eui.Label;
			if (i == this.selectIndex) {
				lb.textColor = 0xFFFFFF;
			} else {
				lb.textColor = 0xEEEEEE;
			}
		}
	}

	private removed(evt: egret.Event): void {
		egret.Tween.removeTweens(this.eui_scroller.viewport);
		this.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.copy, this);
		this.btn_sub.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sub, this);
		this.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
		this.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
		this.eui_scroller.removeEventListener(eui.UIEvent.CHANGE_END, this.moveing, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
	}

	private removeSelf(): void {
		// this.eui_list.dataProvider = null;
		this.group_content.removeChildren();
		this.dataArr = [];
		if (this && this.parent) {
			this.parent.removeChild(this);
		}
	}

}