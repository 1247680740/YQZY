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
var GameCheckFLuView = (function (_super) {
    __extends(GameCheckFLuView, _super);
    function GameCheckFLuView() {
        var _this = _super.call(this) || this;
        _this.curType = 0;
        _this.sizeArr = [{ "type": 1, "size": 4 }, { "type": 1, "size": 10 }, { "type": 1, "size": 20 }];
        _this.colorArr = [{ "type": 2, "color": 0xFF443A, "source": "flu_red_png" },
            { "type": 2, "color": 0xFFA000, "source": "flu_oriange_png" },
            { "type": 2, "color": 0x1398FF, "source": "flu_blue_png" },
            { "type": 2, "color": 0x231F56, "source": "flu_black_png" },
            { "type": 2, "color": 0x08BA72, "source": "flu_green_png" },
            { "type": 2, "color": 0xFDF829, "source": "flu_yellow_png" }];
        _this._sizeCheck = 0;
        _this._colorCheck = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
        _this.skinName = "GameCheckFLuSkin";
        return _this;
    }
    GameCheckFLuView.prototype.createCompleteEvent = function (event) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
    };
    GameCheckFLuView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameCheckFLuView.prototype.initView = function () {
        this.right = -100;
        this.bottom = 200;
        this.group_content.scaleX = 0;
        this.group_content.scaleY = 0;
        this.curType = GlobalData.paintVO.typeNum;
        egret.Tween.get(this.group_content).to({ scaleX: 1, scaleY: 1 }, 400);
        if (this.curType == drawType.painting) {
            this._sizeCheck = GlobalData.paintVO.paintSize;
            this._colorCheck = GlobalData.paintVO.paintColor;
        }
        else {
            this._sizeCheck = GlobalData.paintVO.fluSize;
            this._colorCheck = GlobalData.paintVO.fluColor;
        }
        for (var i = 0; i < this.group_size.numChildren; i++) {
            var flu = this.group_size.getChildAt(i);
            var data = this.sizeArr[i];
            flu.initData(data, i);
            flu.setShow(this._sizeCheck);
        }
        for (var j = 0; j < this.group_color.numChildren; j++) {
            var flu1 = this.group_color.getChildAt(j);
            var data1 = this.colorArr[j];
            flu1.initData(data1, j);
            flu1.setShow(this._colorCheck);
        }
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    GameCheckFLuView.prototype.resetSize = function (index) {
        this._sizeCheck = index;
        for (var i = 0; i < this.group_size.numChildren; i++) {
            var flu = this.group_size.getChildAt(i);
            flu.setShow(this._sizeCheck);
        }
    };
    GameCheckFLuView.prototype.resetColor = function (index) {
        this._colorCheck = index;
        for (var j = 0; j < this.group_color.numChildren; j++) {
            var flu1 = this.group_color.getChildAt(j);
            flu1.setShow(this._colorCheck);
        }
    };
    GameCheckFLuView.prototype.removed = function (evt) {
        egret.Tween.removeTweens(this.group_content);
        var sizeData = this.sizeArr[this._sizeCheck];
        var colorData = this.colorArr[this._colorCheck];
        if (this.curType == drawType.painting) {
            GlobalData.paintVO.paintSize = this._sizeCheck;
            GlobalData.paintVO.paintColor = this._colorCheck;
        }
        else {
            GlobalData.paintVO.fluSize = this._sizeCheck;
            GlobalData.paintVO.fluColor = this._colorCheck;
        }
        GlobalData.paintVO.setStype([{ "weightNum": sizeData.size }, { "colorNum": colorData.color }]);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    GameCheckFLuView.prototype.getTypeNum = function () {
        return this.curType;
    };
    return GameCheckFLuView;
}(eui.Component));
__reflect(GameCheckFLuView.prototype, "GameCheckFLuView");
//# sourceMappingURL=GameCheckFLuView.js.map