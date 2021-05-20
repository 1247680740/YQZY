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
var CommonMoveTip = (function (_super) {
    __extends(CommonMoveTip, _super);
    function CommonMoveTip() {
        var _this = _super.call(this) || this;
        _this.personY = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonMoveTipSkin";
        return _this;
    }
    CommonMoveTip.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonMoveTip.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonMoveTip.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonMoveTip.prototype.initY = function (x1, y1, num) {
        this.personY = y1 - 10;
        this.x = x1 + this.width / 2;
        this.y = this.personY;
    };
    CommonMoveTip.prototype.changeView = function (x1, y1, num) {
        this.x = x1 + this.width / 3;
        this.y = this.personY;
        this.label_tip.text = "已拖动" + num + "格";
    };
    return CommonMoveTip;
}(eui.Component));
__reflect(CommonMoveTip.prototype, "CommonMoveTip", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CommonMoveTip.js.map