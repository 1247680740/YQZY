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
var CommonSubBtn = (function (_super) {
    __extends(CommonSubBtn, _super);
    function CommonSubBtn() {
        var _this = _super.call(this) || this;
        _this.dataArr = [];
        _this.selectIndex = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonSubBtnSkin";
        return _this;
    }
    CommonSubBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonSubBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonSubBtn.prototype.loadComplete = function (evt) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    CommonSubBtn.prototype.initData = function (pX, pY, pW, pH) {
        this.lable_tip1.fontFamily = "fzltch";
        this.label_tip2.fontFamily = "fzltch";
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        if (GlobalData.canvasHei - (pY + pH) < this.height) {
            this.top = pY - this.height;
            this.btn_sub.top = 180;
            this.btn_copy.top = 180;
            this.group_panel.top = 0;
        }
        else {
            this.top = pY + pH;
            this.btn_sub.top = 0;
            this.btn_copy.top = 0;
            this.group_panel.top = 100;
        }
        if (pX > 260 && pX < this.parent.width - 260) {
            this.right = this.parent.width - (pX + pW);
            this.group_panel.left = 0;
        }
        else {
            if (pX <= 260) {
                this.right = this.parent.width - pX - this.width + 290;
                this.group_panel.left = 290;
            }
            else {
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
    };
    CommonSubBtn.prototype.copy = function (evt) {
        evt.stopPropagation();
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        this.removeSelf();
        game.AppFacade.getInstance().sendNotification(NoficationConfig.COPY_BRUSH);
    };
    CommonSubBtn.prototype.sub = function (evt) {
        evt.stopPropagation();
        this.btn_sub.source = RES.getRes("btn_range_select_png");
        this.group_panel.visible = true;
        this.initList();
    };
    CommonSubBtn.prototype.cancle = function (evt) {
        this.btn_sub.source = RES.getRes("btn_range_normal_png");
        this.group_panel.visible = false;
    };
    CommonSubBtn.prototype.confirm = function (evt) {
        var data = this.dataArr[this.selectIndex];
        if (data < 2) {
            this.removeSelf();
            return;
        }
        game.GameScript.getInstance().subBrush(data);
        this.removeSelf();
    };
    CommonSubBtn.prototype.initList = function () {
        this.dataArr = [9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
        for (var i = 0; i < this.dataArr.length; i++) {
            var label_a = new eui.Label();
            this.group_content.addChild(label_a);
            label_a.fontFamily = "lan";
            label_a.size = 40;
            label_a.width = 118;
            label_a.height = 40;
            label_a.textAlign = "center";
            if (i == 2) {
                label_a.textColor = 0xffffff;
            }
            else {
                label_a.textColor = 0xeeeeee;
            }
            label_a.text = this.dataArr[i] + "";
        }
        this.selectIndex = 0;
        this.eui_scroller.viewport.scrollV = 60;
        this.eui_scroller.throwSpeed = 0;
        this.eui_scroller.addEventListener(eui.UIEvent.CHANGE, this.moveing, this);
        this.eui_scroller.addEventListener(eui.UIEvent.CHANGE_END, this.ending, this);
    };
    CommonSubBtn.prototype.moveing = function (e) {
        if (this.eui_scroller.viewport.scrollV > 422) {
            this.eui_scroller.viewport.scrollV = 19;
        }
        if (this.eui_scroller.viewport.scrollV < 19) {
            this.eui_scroller.viewport.scrollV = 422;
        }
    };
    CommonSubBtn.prototype.ending = function (e) {
        this.selectIndex = Math.round(this.eui_scroller.viewport.scrollV / 40);
        var num = this.selectIndex * 40 - 18;
        egret.Tween.get(this.eui_scroller.viewport).to({ "scrollV": num }, 200);
        for (var i = 0; i < this.group_content.numChildren; i++) {
            var lb = this.group_content.getChildAt(i);
            if (i == this.selectIndex) {
                lb.textColor = 0xFFFFFF;
            }
            else {
                lb.textColor = 0xEEEEEE;
            }
        }
    };
    CommonSubBtn.prototype.removed = function (evt) {
        egret.Tween.removeTweens(this.eui_scroller.viewport);
        this.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.copy, this);
        this.btn_sub.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sub, this);
        this.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
        this.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        this.eui_scroller.removeEventListener(eui.UIEvent.CHANGE_END, this.moveing, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removed, this);
    };
    CommonSubBtn.prototype.removeSelf = function () {
        // this.eui_list.dataProvider = null;
        this.group_content.removeChildren();
        this.dataArr = [];
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    return CommonSubBtn;
}(eui.Component));
__reflect(CommonSubBtn.prototype, "CommonSubBtn", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CommonSubBtn.js.map