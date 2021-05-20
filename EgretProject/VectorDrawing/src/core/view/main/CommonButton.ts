class CommonButton extends eui.Component implements eui.UIComponent {

	public _imgSource: string = "";
	private _btnType: number = 0;
	private _curenState: string = "";

	private bgGroup: eui.Group;
	private curMoveGroup: eui.Group;
	private storeX: number; //TOUCH_BEGIN时存储的拖拽对象位置X
	private storeY: number; //TOUCH_BEGIN时存储的拖拽对象位置Y
	private PointX: number = 100; //吸附点坐标X
	private PointY: number = 100; //吸附点坐标Y
	private XTouch: number;
	private YTouch: number;

	private isCanCreate: boolean = false;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.skinName = "CommonButtonSkin";
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

	private changeStatus(): void {
		for (let i = 0; i < this.parent.numChildren; i++) {
			let btn: CommonButton = this.parent.getChildAt(i) as CommonButton;
			if (btn) {
				if (btn.btnType == GlobalData.paintVO.typeNum) {
					btn.setStatus("down");
				} else {
					btn.setStatus("normal");
				}
			}
		}
	}

	public setStatus(status: string): void {
		this._curenState = status;
		let bgImg: eui.Image = this.bgGroup.getChildAt(0) as eui.Image;
		bgImg.source = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
	}

	public setBtnType(typeNum: number, sourceName: string): void {
		this._btnType = typeNum;
		this._imgSource = sourceName;
		this.createImg();
	}

	public get btnType(): number {
		return this._btnType;
	}

	private brginButton(evt: egret.TouchEvent) {
		let oriType: number = GlobalData.paintVO.typeNum;
		GlobalData.paintVO.setPaintType(this.btnType);
		//想办法记录鼠标移动的记录的坐标
		this.XTouch = evt.stageX;
		this.YTouch = evt.stageY;
		this.isCanCreate = true;
		this.changeStatus();
		if (this._btnType == drawType.flupaint || this._btnType == drawType.painting) {
			game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, true);
		} else {
			game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, false);
			// this.testCreate(evt);
		}
	}

	private testCreate(evt: egret.TouchEvent): void {
		if (this.isCanCreate == false) {
			return;
		}
		this.createImg();
		this.storeX = this.curMoveGroup.x;
		this.storeY = this.curMoveGroup.y;
		this.parent.setChildIndex(this, this.parent.numChildren - 1);
	}

	public moveButton(e: egret.TouchEvent): void {
		if (!this.curMoveGroup && Math.abs(e.stageX - this.XTouch) > 10) {
			this.testCreate(e);
		}
		let bool: boolean = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
		if (this.btnType != GlobalData.paintVO.typeNum || bool) {
			return;
		}
		if (this.curMoveGroup) {
			this.curMoveGroup.x = this.storeX + (e.stageX - this.XTouch);
			this.curMoveGroup.y = this.storeY + (e.stageY - this.YTouch);
			if (this._btnType == drawType.bracket) {
				let x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
				let y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
				game.GameScript.getInstance().checkHitBrack(x, y);
			}
		}
	}

	public endButton(e: egret.TouchEvent): void {
		game.GameScript.getInstance().removeAllMask();
		let endX: number = 0;
		let bool: boolean = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
		GlobalData.paintVO.moveBtn = null;
		if (this.btnType != GlobalData.paintVO.typeNum || bool) {
			return;
		}
		if (this.curMoveGroup) {
			endX = this.curMoveGroup.x;
			this.removeChild(this.curMoveGroup);
		}
		this.isCanCreate = false;
		this.curMoveGroup = null;
		if (Math.abs(endX) < this.bgGroup.width) {
			return;
		}
		let maxX: number = GlobalData.canvasWid + GlobalData.canvasLeft;
		let maxY: number = GlobalData.canvasHei + GlobalData.canvasTop;
		if (e.stageX < GlobalData.canvasLeft || e.stageX > maxX || e.stageY < GlobalData.canvasTop || e.stageY > maxY) {
			TipsUtils.showTipsFromCenter("tip1");
			return;
		}
		let point: egret.Point = new egret.Point();
		point.x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
		point.y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
		let sendVO: SenVO = new SenVO();
		sendVO.brushType = this._btnType;
		sendVO.brushPos = point;
		game.AppFacade.getInstance().sendNotification(NoficationConfig.CREAT_MOVEBRUSH, sendVO);
	}

	private createImg(): void {
		let bgGroup: eui.Group = new eui.Group();
		this.addChild(bgGroup);
		bgGroup.x = 0;
		bgGroup.y = 0;
		let showImg: eui.Image = new eui.Image();
		showImg.horizontalCenter = 0;
		showImg.verticalCenter = 0;
		bgGroup.addChild(showImg);
		this.bgGroup = (this.getChildAt(0)) ? this.getChildAt(0) as eui.Group : new eui.Group();
		if (this.bgGroup && this.bgGroup.getChildAt(0)) {
			let setBg: eui.Image = this.bgGroup.getChildAt(0) as eui.Image;
			setBg = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
		}
		this.curMoveGroup = null;
		if (this.numChildren > 1) {
			this.curMoveGroup = this.getChildAt(1) as eui.Group;
			GlobalData.paintVO.moveBtn = this;
		}
		if (this.curMoveGroup) {
			this.curMoveGroup.width = this.bgGroup.width;
			this.curMoveGroup.height = this.bgGroup.height;
			let setmove: eui.Image = this.curMoveGroup.getChildAt(0) as eui.Image;
			if (GlobalData.paintVO.gradeType != 1) {
				let sourceStr: string = this._imgSource.substring(4, this._imgSource.length);
				setmove.source = RES.getRes(sourceStr + "_move_png");
			} else {
				setmove.source = RES.getRes(this._imgSource + "_move_png");
			}
			setmove.verticalCenter = 0;
			setmove.horizontalCenter = 0;
			if (this._btnType == drawType.subSection) {
				setmove.scaleX = 2;
				setmove.scaleY = 2;
			}
		}
		bgGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.brginButton, this);
		if (this._btnType != drawType.painting && this._btnType != drawType.flupaint) {
			bgGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveButton, this);
			bgGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.endButton, this);
		}
	}
}