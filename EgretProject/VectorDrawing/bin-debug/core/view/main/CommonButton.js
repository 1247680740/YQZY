var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CommonButton = (function (_super) {
    __extends(CommonButton, _super);
    function CommonButton() {
        var _this = _super.call(this) || this;
        _this._imgSource = "";
        _this._btnType = 0;
        _this._curenState = "";
        _this.PointX = 100; //吸附点坐标X
        _this.PointY = 100; //吸附点坐标Y
        _this.isCanCreate = false;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonButtonSkin";
        return _this;
    }
    CommonButton.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonButton.prototype.changeStatus = function () {
        for (var i = 0; i < this.parent.numChildren; i++) {
            var btn = this.parent.getChildAt(i);
            if (btn) {
                if (btn.btnType == GlobalData.paintVO.typeNum) {
                    btn.setStatus("down");
                }
                else {
                    btn.setStatus("normal");
                }
            }
        }
    };
    CommonButton.prototype.setStatus = function (status) {
        this._curenState = status;
        var bgImg = this.bgGroup.getChildAt(0);
        bgImg.source = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
    };
    CommonButton.prototype.setBtnType = function (typeNum, sourceName) {
        this._btnType = typeNum;
        this._imgSource = sourceName;
        this.createImg();
    };
    Object.defineProperty(CommonButton.prototype, "btnType", {
        get: function () {
            return this._btnType;
        },
        enumerable: true,
        configurable: true
    });
    CommonButton.prototype.brginButton = function (evt) {
        var oriType = GlobalData.paintVO.typeNum;
        GlobalData.paintVO.setPaintType(this.btnType);
        //想办法记录鼠标移动的记录的坐标
        this.XTouch = evt.stageX;
        this.YTouch = evt.stageY;
        this.isCanCreate = true;
        this.changeStatus();
        if (this._btnType == drawType.flupaint || this._btnType == drawType.painting) {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, true);
        }
        else {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_FLUPAINT, false);
            // this.testCreate(evt);
        }
    };
    CommonButton.prototype.testCreate = function (evt) {
        if (this.isCanCreate == false) {
            return;
        }
        this.createImg();
        this.storeX = this.curMoveGroup.x;
        this.storeY = this.curMoveGroup.y;
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
    };
    CommonButton.prototype.moveButton = function (e) {
        if (!this.curMoveGroup && Math.abs(e.stageX - this.XTouch) > 10) {
            this.testCreate(e);
        }
        var bool = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
        if (this.btnType != GlobalData.paintVO.typeNum || bool) {
            return;
        }
        if (this.curMoveGroup) {
            this.curMoveGroup.x = this.storeX + (e.stageX - this.XTouch);
            this.curMoveGroup.y = this.storeY + (e.stageY - this.YTouch);
            if (this._btnType == drawType.bracket) {
                var x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
                var y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
                game.GameScript.getInstance().checkHitBrack(x, y);
            }
        }
    };
    CommonButton.prototype.endButton = function (e) {
        game.GameScript.getInstance().removeAllMask();
        var endX = 0;
        var bool = Global.checkArr([drawType.painting, drawType.flupaint], this._btnType);
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
        var maxX = GlobalData.canvasWid + GlobalData.canvasLeft;
        var maxY = GlobalData.canvasHei + GlobalData.canvasTop;
        if (e.stageX < GlobalData.canvasLeft || e.stageX > maxX || e.stageY < GlobalData.canvasTop || e.stageY > maxY) {
            TipsUtils.showTipsFromCenter("tip1");
            return;
        }
        var point = new egret.Point();
        point.x = (e.stageX - GlobalData.canvasLeft < 0) ? 0 : e.stageX - GlobalData.canvasLeft;
        point.y = (e.stageY - GlobalData.canvasTop < 0) ? 0 : e.stageY - GlobalData.canvasTop;
        var sendVO = new SenVO();
        sendVO.brushType = this._btnType;
        sendVO.brushPos = point;
        game.AppFacade.getInstance().sendNotification(NoficationConfig.CREAT_MOVEBRUSH, sendVO);
    };
    CommonButton.prototype.createImg = function () {
        var bgGroup = new eui.Group();
        this.addChild(bgGroup);
        bgGroup.x = 0;
        bgGroup.y = 0;
        var showImg = new eui.Image();
        showImg.horizontalCenter = 0;
        showImg.verticalCenter = 0;
        bgGroup.addChild(showImg);
        this.bgGroup = (this.getChildAt(0)) ? this.getChildAt(0) : new eui.Group();
        if (this.bgGroup && this.bgGroup.getChildAt(0)) {
            var setBg = this.bgGroup.getChildAt(0);
            setBg = RES.getRes(this._imgSource + "_" + this._curenState + "_png");
        }
        this.curMoveGroup = null;
        if (this.numChildren > 1) {
            this.curMoveGroup = this.getChildAt(1);
            GlobalData.paintVO.moveBtn = this;
        }
        if (this.curMoveGroup) {
            this.curMoveGroup.width = this.bgGroup.width;
            this.curMoveGroup.height = this.bgGroup.height;
            var setmove = this.curMoveGroup.getChildAt(0);
            if (GlobalData.paintVO.gradeType != 1) {
                var sourceStr = this._imgSource.substring(4, this._imgSource.length);
                setmove.source = RES.getRes(sourceStr + "_move_png");
            }
            else {
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
    };
    return CommonButton;
}(eui.Component));
__reflect(CommonButton.prototype, "CommonButton", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CommonButton.js.map