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
var LowGradeComponent = (function (_super) {
    __extends(LowGradeComponent, _super);
    function LowGradeComponent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "LowGradeComponentSkin";
        return _this;
    }
    LowGradeComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LowGradeComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    LowGradeComponent.prototype.loadComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    LowGradeComponent.prototype.initShow = function () {
        this.segment.setBtnType(drawType.drawSegment, "btn_segment");
        this.subSection.setBtnType(drawType.subSection, "btn_subSection");
        this.bracket.setBtnType(drawType.bracket, "btn_bracket");
        this.painting.setBtnType(drawType.painting, "painting");
        this.flupaint.setBtnType(drawType.flupaint, "flupaint");
        this.btn_boxSelect.setBtnType(drawType.boxSelect, "btn_boxSelect");
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
        this.btn_recall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.recall, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
    };
    LowGradeComponent.prototype.recall = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.RECALL_BRUSH);
    };
    LowGradeComponent.prototype.reset = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESETVIEW);
    };
    LowGradeComponent.prototype.setRestStatus = function (bool) {
        this.btn_recall.enabled = bool;
    };
    LowGradeComponent.prototype.resetShow = function () {
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
    };
    return LowGradeComponent;
}(eui.Component));
__reflect(LowGradeComponent.prototype, "LowGradeComponent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=LowGradeComponent.js.map