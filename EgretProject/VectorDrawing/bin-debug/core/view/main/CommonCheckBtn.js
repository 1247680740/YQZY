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
var CommonCheckBtn = (function (_super) {
    __extends(CommonCheckBtn, _super);
    function CommonCheckBtn() {
        var _this = _super.call(this) || this;
        _this._typeNum = 0;
        _this._index = 0;
        _this._sizeNum = 0;
        _this._colorNum = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonCheckBtnSkin";
        return _this;
    }
    CommonCheckBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonCheckBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonCheckBtn.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonCheckBtn.prototype.initData = function (data, index) {
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
                }
                else if (index == 1) {
                    this.img_normal.height = this.img_normal.width = 16;
                    this.img_check.height = this.img_check.width = 34;
                }
                else if (index == 2) {
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
    };
    CommonCheckBtn.prototype.setShow = function (checkNum) {
        switch (this._typeNum) {
            case 1:
                if (this._index == checkNum) {
                    this.img_check.visible = true;
                }
                else {
                    this.img_check.visible = false;
                }
                break;
            case 2:
                if (this._index == checkNum) {
                    this.img_check.visible = true;
                    this.img_bg.visible = true;
                    // this.img_normal.scaleX = this.img_normal.scaleY = 0.9;
                }
                else {
                    this.img_check.visible = false;
                    this.img_bg.visible = false;
                    // this.img_normal.scaleX = this.img_normal.scaleY = 1;
                }
                break;
        }
    };
    CommonCheckBtn.prototype.startCheck = function (evt) {
        if (this && this.parent && this.parent.parent.parent) {
            if (this._typeNum == 1) {
                this.parent.parent.parent.resetSize(this._index);
            }
            else {
                this.parent.parent.parent.resetColor(this._index);
            }
        }
    };
    Object.defineProperty(CommonCheckBtn.prototype, "indexNum", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    CommonCheckBtn.prototype.removed = function (evt) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startCheck, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    return CommonCheckBtn;
}(eui.Component));
__reflect(CommonCheckBtn.prototype, "CommonCheckBtn", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CommonCheckBtn.js.map